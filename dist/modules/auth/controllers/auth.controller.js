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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const constants_1 = require("../../../utils/constants");
const auth_guard_1 = require("../guards/auth.guard");
const authenticated_guard_1 = require("../guards/authenticated.guard");
const auth_decorator_1 = require("../../../utils/decorators/auth.decorator");
const Users_1 = require("../../database/schemas/Users");
let AuthController = class AuthController {
    login() { }
    status(user) {
        return user;
    }
    redirect() { }
    logout() { }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Get)('login'),
    (0, common_1.UseGuards)(auth_guard_1.DiscordAuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Get)('status'),
    (0, common_1.UseGuards)(authenticated_guard_1.AuthenticatedGuard),
    __param(0, (0, auth_decorator_1.AuthUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Users_1.Users]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "status", null);
__decorate([
    (0, common_1.Get)('redirect'),
    (0, common_1.UseGuards)(auth_guard_1.DiscordAuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "redirect", null);
__decorate([
    (0, common_1.Get)('logout'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "logout", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)(constants_1.Routes.AUTH)
], AuthController);
//# sourceMappingURL=auth.controller.js.map