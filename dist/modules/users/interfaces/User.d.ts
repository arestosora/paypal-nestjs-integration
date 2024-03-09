import { Users } from "@prisma/client";
import { UserDetails } from "src/utils/types";
export interface IUserService {
    create(id: UserDetails): Promise<Users>;
    find(id: string): Promise<Users | undefined>;
}
