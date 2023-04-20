export declare class MySQLQuery {
    query: string;
    state: string;
    constructor(query: string);
    execute(uniqueID: string, overwrite: boolean): Promise<void>;
    executeResult(attempt: number | null): Promise<void>;
}
