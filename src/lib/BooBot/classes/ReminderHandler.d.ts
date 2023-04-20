import { Reminder } from "./Reminder";
export declare class ReminderHandler {
    reminders: Reminder[];
    constructor();
    getReminders(): Reminder[];
    /**
     * @returns {Promise<Reminder[]>}
     */
    fetchAll(): Promise<Reminder[]>;
    /**
     *
     *
     * @param {string} userID
     * @returns {Promise<Reminder[]>} - List of reminders
     */
    fetchByUser(userID: string): Promise<Reminder[]>;
    /**
     *
     * @param {string} guildID
     * @returns {Promise<Reminder[]>} - List of reminders
     */
    fetchByGuild(guildID: string): Promise<Reminder[]>;
    /**
     *
     * @param {string} userID
     * @returns {Reminder[]}
     */
    getByUser(userID: string): Reminder[];
    getByGuild(guildID: string): Reminder[];
}
