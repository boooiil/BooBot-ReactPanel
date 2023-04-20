import { Visa } from "./Visa";
export declare class VisaHandler {
    visas: Visa[];
    constructor();
    getvisas(): Visa[];
    /**
     * @returns {Promise<Visa[]>}
     */
    fetchAll(): Promise<Visa[]>;
    /**
     *
     *
     * @param {Snowflake} userID
     * @returns {Promise<Visa[]>} - List of visas
     */
    fetchByUser(userID: string): Promise<Visa[]>;
    /**
     *
     * @param {Snowflake} guildID
     * @returns {Promise<Visa[]>} - List of visas
     */
    fetchByGuild(guildID: string): Promise<Visa[]>;
    /**
     *
     * @param {Snowflake} userID
     * @returns {Visa[]}
     */
    getByUser(userID: string): Visa[];
    getByGuild(guildID: string): Visa[];
}
