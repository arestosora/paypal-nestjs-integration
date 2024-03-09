import { Users } from "./Users";
import { Product } from "./Product";
export declare class Order {
    id: number;
    userId: string;
    productId: number;
    quantity: number;
    totalPrice: number;
    createdAt: Date;
    updatedAt: Date;
    user: Users;
    product: Product;
}
