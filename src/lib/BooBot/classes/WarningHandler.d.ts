import { Warning } from "./Warning";
export declare class WarningHandler {
    warnings: Warning[];
    constructor();
    getwarnings(): Warning[];
    /**
     * @returns {Warning[]}
     */
    fetchAll(): Promise<Warning[]>;
    /**
     *
     *
     * @param {string} userID
     * @returns {Promise<Warning[]>} - List of warnings
     */
    fetchByUser(userID: string): Promise<Warning[]>;
    /**
     *
     * @param {string} guildID
     * @returns {Promise<Warning[]>} - List of warnings
     */
    fetchByGuild(guildID: string): Promise<Warning[]>;
    /**
     *
     * @param {string} userID
     * @returns {Warning[]}
     */
    getByUser(userID: string): Warning[];
    /**
     * @param {string} guildID
     * @returns {Warning[]}
     */
    getByGuild(guildID: string): Warning[];
}
