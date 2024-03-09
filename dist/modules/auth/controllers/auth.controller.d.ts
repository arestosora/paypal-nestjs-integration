import { Users } from 'src/modules/database/schemas/Users';
export declare class AuthController {
    login(): void;
    status(user: Users): Users;
    redirect(): void;
    logout(): void;
}
