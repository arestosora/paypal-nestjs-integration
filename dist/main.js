"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const session = require("express-session");
const connect_typeorm_1 = require("connect-typeorm");
const Session_1 = require("./modules/database/schemas/Session");
const typeorm_1 = require("typeorm");
const config_1 = require("./config");
const passport = require("passport");
async function main() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const sessionRepository = app.get(typeorm_1.DataSource).getRepository(Session_1.Session);
    app.setGlobalPrefix('v1/api');
    app.use(session({
        secret: config_1.Config.Session.SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 1000 * 60 * 24 * 7
        },
        store: new connect_typeorm_1.TypeormStore().connect(sessionRepository)
    }));
    app.use(passport.initialize());
    app.use(passport.session());
    app.enableCors({
        origin: [config_1.Config.Client.ORIGIN], credentials: true
    });
    await app.listen(3000);
}
main();
//# sourceMappingURL=main.js.map