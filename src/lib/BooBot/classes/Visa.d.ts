export declare class Visa {
    id: number;
    guildID: string;
    issuerID: string;
    issueeID: string;
    channelID: string;
    time: number;
    constructor(options: {
        id: number;
        guildID: string;
        issuerID: string;
        issueeID: string;
        channelID: string;
        time: number;
    } | void);
    save(): void;
    delete(): void;
    update(): void;
    /**
     *
     * @param {Number} id
     * @returns {Promise<Visa>}
     */
    fetch(id: number): Promise<Visa>;
}
