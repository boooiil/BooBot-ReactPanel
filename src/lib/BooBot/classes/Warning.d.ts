export declare class Warning {
    id: number;
    guildID: string;
    issuerID: string;
    issueeID: string;
    warning: string;
    time: number;
    constructor(options: {
        id: number;
        guildID: string;
        issuerID: string;
        issueeID: string;
        warning: string;
        time: number;
    } | void);
    save(): void;
    delete(): void;
    update(): void;
    /**
     *
     * @param {Number} id
     * @returns {Promise<Warning>}
     */
    fetch(id: number): Promise<Warning>;
}
