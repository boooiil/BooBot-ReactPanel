import { Guild } from "./Guild";
export declare class CheckpointHandler {
    /**
     * @typedef {Object.<string, string>} FunctionDef
     */
    /**
     * @type {FunctionDef}
     */
    messageEmojiMap: {
        [key: string]: string;
    };
    /**
     *
     * @param {Guild} guild
     */
    register(guild: Guild): void;
    /**
     *
     * @param {Guild} guild
     */
    deregister(guild: Guild): void;
    listener(): Promise<void>;
}
