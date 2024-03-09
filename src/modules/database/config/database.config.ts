import { Config } from "src/config";
import { Entities } from "../schemas";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const DatabaseConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: Config.Database.HOST,
    username: Config.Database.USERNAME,
    password: Config.Database.PASSWORD,
    port: 3306,
    database: Config.Database.DATABASE,
    synchronize: true,
    entities: Entities
}