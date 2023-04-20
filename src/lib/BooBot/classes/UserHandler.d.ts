import { User } from "./User";
export declare class UserHandler {
    users: User[];
    constructor();
    getusers(): User[];
    fetchAll(): Promise<User[]>;
    fetchByUser(userID: string): Promise<User[]>;
    getUser(userID: string): User[];
}
