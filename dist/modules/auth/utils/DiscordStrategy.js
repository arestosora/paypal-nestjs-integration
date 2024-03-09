"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscordStrategy = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const passport_discord_1 = require("passport-discord");
const constants_1 = require("../../../utils/constants");
const config_1 = require("../../../config");
let DiscordStrategy = class DiscordStrategy extends (0, passport_1.PassportStrategy)(passport_discord_1.Strategy) {
    constructor(authService) {
        super({
            clientID: config_1.Config.Discord.DISCORD_CLIENT_ID,
            clientSecret: config_1.Config.Discord.DISCORD_CLIENT_SECRET,
            callbackURL: config_1.Config.Discord.DISCORD_REDIRECT_URI,
            scope: ['identify'],
        });
        this.authService = authService;
    }
    async validate(accessToken, refreshToken, profile) {
        return this.authService.validate({ discordId: profile.id, username: profile.username });
    }
};
exports.DiscordStrategy = DiscordStrategy;
exports.DiscordStrategy = DiscordStrategy = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constants_1.Services.AUTH)),
    __metadata("design:paramtypes", [Object])
], DiscordStrategy);
//# sourceMappingURL=DiscordStrategy.js.map