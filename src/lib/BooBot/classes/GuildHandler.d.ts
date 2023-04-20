import { Guild } from "./Guild";
export declare class GuildHandler {
    /**
     * @type {Object.<string, Guild>}
     */
    cache: {
        [key: string]: Guild;
    };
    fetchAll(): this;
    /**
     *
     * @param {Guild} guild
     */
    add(guild: Guild): void;
    /**
     * Removes a guild from the stored list.
     * @param {Snowflake} guildID
     */
    delete(guildID: string): void;
    /**
     * Removes a guild from the stored list and moves the JSON to old config storage.
     * @param {Snowflake} guildID
     */
    retire(guildID: string): void;
    /**
     *
     * @param {Snowflake} guildID
     * @returns {Guild?} stored guild object or null, if none exists
     */
    get(guildID: string, autosave: boolean): Guild;
    getAll(): {
        [key: string]: Guild;
    };
    /**
     *
     * @returns {Guild[]}
     */
    getAllAsArray(): Guild[];
}
