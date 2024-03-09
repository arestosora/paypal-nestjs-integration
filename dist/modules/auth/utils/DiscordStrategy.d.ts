import { Strategy, Profile } from "passport-discord";
import { IAuthService } from "../interfaces/auth";
declare const DiscordStrategy_base: new (...args: any[]) => Strategy;
export declare class DiscordStrategy extends DiscordStrategy_base {
    private readonly authService;
    constructor(authService: IAuthService);
    validate(accessToken: string, refreshToken: string, profile: Profile): Promise<{
        id: number;
        discordId: string;
        username: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
export {};
