export declare class Birthday {
    userID: string;
    guildID: string;
    day: number;
    month: number;
    year: number;
    constructor(options: {
        userID: string;
        guildID: string;
        day: number;
        month: number;
        year: number;
    } | void);
    save(): void;
    delete(): void;
    update(): void;
    fetch(userID: number): Promise<Birthday>;
}
