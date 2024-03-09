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
exports.SessionSerializer = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const constants_1 = require("../utils/constants");
let SessionSerializer = class SessionSerializer extends passport_1.PassportSerializer {
    constructor(userService) {
        super();
        this.userService = userService;
    }
    serializeUser(user, done) {
        done(null, user);
    }
    async deserializeUser(user, done) {
        try {
            const userInstance = await this.userService.find(user.discordId);
            const userDb = { username: userInstance.username, orders: [], id: userInstance.id, discordId: userInstance.discordId, createdAt: userInstance.createdAt, updatedAt: userInstance.updatedAt };
            return userInstance ? done(null, userDb) : done(null, null);
        }
        catch (error) {
        }
    }
};
exports.SessionSerializer = SessionSerializer;
exports.SessionSerializer = SessionSerializer = __decorate([
    __param(0, (0, common_1.Inject)(constants_1.Services.USER)),
    __metadata("design:paramtypes", [Object])
], SessionSerializer);
//# sourceMappingURL=SessionSerializer.js.map