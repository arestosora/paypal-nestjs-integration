import { Users } from "@prisma/client";
import { UserDetails } from "src/utils/types";
export interface IAuthService {
    validate(details: UserDetails): Promise<Users>;
}
