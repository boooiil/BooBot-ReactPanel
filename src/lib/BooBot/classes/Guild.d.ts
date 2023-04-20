export declare class Guild {
    id: string;
    name: string;
    prefix: string;
    spamChannel: string;
    filterWords: string[];
    musicConfirm: boolean;
    muted: {};
    notify: {
        channels: {
            id: string;
            name: string;
        }[];
        notifyRoles: {
            id: string;
            name: string;
        }[];
        pingRoles: {
            id: string;
            name: string;
        }[];
        pingUsers: {
            id: string;
            name: string;
        }[];
        whitelistUsers: {
            id: string;
            name: string;
        }[];
        blacklistUsers: {
            id: string;
            name: string;
        }[];
        users: {
            id: string;
            name: string;
        }[];
        opt_out_mode: boolean;
    };
    function: {
        [key: string]: {
            value: boolean;
            name: string;
        };
    };
    birthday: {
        toggle: boolean;
        role: string | null;
        hoisted: boolean;
        position: number | null;
        users: {
            username: string;
            id: string;
            birthday: string;
        }[];
    };
    checkpoint: {
        messageID: string | null;
        channelID: string | null;
        generatedLink: string | null;
        emoji: string | null;
        roleID: string | null;
        kick: boolean | null;
    };
    generatedPath: string;
    generatedCheck: string;
    constructor(guildName: string, guildID: string);
    getNotifyChannelsAsIDArray(): string[];
    getNotifyRolesAsIDArray(): string[];
    getNotifyUsersAsIDArray(): string[];
    getNotifyWhitelistAsIDArray(): string[];
    getNotifyBlacklistAsIDArray(): string[];
    getPingRolesAsIDArray(): string[];
    getPingUsersAsIDArray(): string[];
    fetch(guildID: string): Guild | null;
    save(): void;
}
