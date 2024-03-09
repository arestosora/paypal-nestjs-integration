import { Order } from "./Order";
export declare class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    createdAt: Date;
    updatedAt: Date;
    orders: Order[];
}
