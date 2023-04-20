import { Birthday } from "./Birthday";
export declare class BirthdayHandler {
    birthdays: Birthday[];
    constructor();
    getBirthdays(): Birthday[];
    /**
     * @returns {Promise<Birthday[]>}
     */
    fetchAll(): Promise<Birthday[]>;
    fetchByUser(userID: string): Promise<Birthday[]>;
    /**
     *
     * @param {string} guildID
     * @returns {Promise<Birthday[]>} - List of birthdays
     */
    fetchByGuild(guildID: string): Promise<Birthday[]>;
    /**
     *
     * @param {string} userID
     * @returns {Birthday[]}
     */
    getByUser(userID: string): Birthday[];
    getByGuild(guildID: string): Birthday[];
}
