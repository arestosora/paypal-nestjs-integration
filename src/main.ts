import * as session from 'express-session';
import * as passport from 'passport';
import { NestFactory, NestApplication } from '@nestjs/core';
import { AppModule } from './app.module';
import { TypeormStore } from 'connect-typeorm';
import { Session } from './modules/database/schemas/Session';
import { DataSource } from 'typeorm';
import config from './config';

async function configureSession(app: NestApplication): Promise<void> {
  const sessionRepository = app.get(DataSource).getRepository(Session);
  app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: config.app.cookieMaxAge,
      },
      store: new TypeormStore().connect(sessionRepository),
    }),
  );
}

async function configurePassport(app: NestApplication): Promise<void> {
  app.use(passport.initialize());
  app.use(passport.session());
}

async function configureApp(app: NestApplication): Promise<void> {
  app.setGlobalPrefix(config.app.globalPrefix);
  app.enableCors();
}

async function main(): Promise<void> {
  const app: NestApplication = await NestFactory.create(AppModule);
  await configureSession(app);
  await configurePassport(app);
  configureApp(app);
  await app.listen(process.env.PORT || 3000);
}

main();
