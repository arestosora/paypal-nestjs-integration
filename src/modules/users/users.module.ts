import { Module } from '@nestjs/common';
import { UsersService } from './services/users.service';
import { Services } from 'src/common/constants';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from '../database/schemas/Users';

@Module({
  imports: [TypeOrmModule.forFeature([Users])],
  providers: [{
    provide: Services.USER,
    useClass: UsersService
  }],
  exports: [{
    provide: Services.USER,
    useClass: UsersService
  }]
})
export class UsersModule { }
