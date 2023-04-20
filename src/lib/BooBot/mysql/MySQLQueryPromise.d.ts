export declare class MySQLQueryPromise {
    query: string;
    state: string;
    constructor(query: string);
    execute(uniqueID: string, overwrite: boolean): Promise<void>;
    executeResult(attempt: number): Promise<any>;
}
