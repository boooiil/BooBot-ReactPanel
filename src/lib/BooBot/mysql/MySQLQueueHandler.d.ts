import { MySQLQueueChild } from "./MySQLQueueChild";
export declare class MySQLQueueHandler {
    /**
     * @type {MySQLQueueChild[]}
     */
    queue: MySQLQueueChild[];
    timer(): Promise<void>;
    /**
     *
     * @param {MySQLQueueChild} child
     */
    add(child: MySQLQueueChild): void;
    hasUnique(uniqueIdentifier: string): boolean;
    verify(): boolean;
    save(): void;
    load(): this;
}
