export declare class MySQLQueueChild {
    /**
     * @type {String}
     */
    content: string;
    /**
     * @type {String}
     */
    uniqueIdentifier: string;
    /**
     * @type {Boolean}
     */
    keepUpdated: boolean;
    /**
     *
     * @param {String} content
     * @param {String} uniqueIdentifier
     * @param {Boolean} keepUpdated
     */
    constructor(content: string, uniqueIdentifier: string, keepUpdated: boolean);
    getContent(): string;
    getUniqueIdentifier(): string;
    willKeepUpdated(): boolean;
    setContent(content: string): void;
}
