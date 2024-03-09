"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Config = void 0;
const dotenv = require("dotenv");
dotenv.config();
class Config {
}
exports.Config = Config;
Config.Discord = {
    DISCORD_CLIENT_ID: process.env.DISCORD_CLIENT_ID,
    DISCORD_CLIENT_SECRET: process.env.DISCORD_CLIENT_SECRET,
    DISCORD_REDIRECT_URI: '/v1/api/auth/redirect'
};
Config.Database = {
    HOST: process.env.DB_HOST,
    PORT: 3306,
    USERNAME: process.env.DB_USERNAME,
    PASSWORD: process.env.DB_PASSWORD,
    DATABASE: process.env.DB_DATABASE
};
Config.Session = {
    SECRET: process.env.SESSION_SECRET
};
Config.Client = {
    ORIGIN: process.env.CLIENT_ORIGIN
};
//# sourceMappingURL=config.js.map