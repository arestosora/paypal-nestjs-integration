import { PassportSerializer } from "@nestjs/passport";
import { Users } from "src/modules/database/schemas/Users";
import { IUserService } from "src/modules/users/interfaces/User";
import { Done } from "src/utils/types";
export declare class SessionSerializer extends PassportSerializer {
    private readonly userService;
    constructor(userService: IUserService);
    serializeUser(user: Users, done: Done): void;
    deserializeUser(user: Users, done: Done): Promise<void>;
}
