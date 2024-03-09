import { Order } from "./Order";
export declare class Users {
    id: number;
    discordId: string;
    username: string;
    createdAt: Date;
    updatedAt: Date;
    orders: Order[];
}
