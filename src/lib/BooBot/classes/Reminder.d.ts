export declare class Reminder {
    id: number | null;
    guildID: string;
    issuerID: string;
    channelID: string;
    reminder: string;
    repeat: boolean;
    time: number;
    timeAdjusted: number;
    constructor(options: {
        id: number | null;
        guildID: string;
        issuerID: string;
        channelID: string;
        reminder: string;
        repeat: boolean;
        time: number;
        timeAdjusted: number;
    } | void);
    save(): void;
    delete(): void;
    update(): void;
    /**
     *
     * @param {Number} id
     * @returns {Promise<Reminder>}
     */
    fetch(id: number): Promise<Reminder>;
}
