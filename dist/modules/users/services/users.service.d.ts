import { IUserService } from '../interfaces/User';
import { Users } from 'src/modules/database/schemas/Users';
import { Repository } from 'typeorm';
import { UserDetails } from 'src/utils/types';
export declare class UsersService implements IUserService {
    private readonly userRepository;
    constructor(userRepository: Repository<Users>);
    create(details: UserDetails): Promise<Users>;
    find(id: string): Promise<Users>;
}
