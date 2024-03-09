"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseConfig = void 0;
const config_1 = require("../../../config");
const schemas_1 = require("../schemas");
exports.DatabaseConfig = {
    type: 'mysql',
    host: config_1.Config.Database.HOST,
    username: config_1.Config.Database.USERNAME,
    password: config_1.Config.Database.PASSWORD,
    port: 3306,
    database: config_1.Config.Database.DATABASE,
    synchronize: true,
    entities: schemas_1.Entities
};
//# sourceMappingURL=database.config.js.map