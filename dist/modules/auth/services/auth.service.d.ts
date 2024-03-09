import { IUserService } from 'src/modules/users/interfaces/User';
import { IAuthService } from '../interfaces/auth';
import { UserDetails } from 'src/utils/types';
export declare class AuthService implements IAuthService {
    private readonly userService;
    constructor(userService: IUserService);
    validate(details: UserDetails): Promise<{
        id: number;
        discordId: string;
        username: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
