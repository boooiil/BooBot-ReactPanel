export declare class User {
    userID: string;
    currentName: string;
    guildName: string;
    guildID: string;
    presence: string;
    game: string;
    activity: string;
    device: string;
    lastSeen: number;
    invisible: boolean;
    profile: string;
    pastNames: {
        names: string[];
    };
    currency: number;
    constructor(options: {
        userID: string;
        currentName: string;
        guildName: string;
        guildID: string;
        presence: string;
        game: string;
        activity: string;
        device: string;
        lastSeen: number;
        invisible: boolean;
        profile: string;
        pastNames: {
            names: string[];
        };
        currency: number;
    } | void);
    save(): void;
    delete(): void;
    update(): void;
    fetch(userID: string): Promise<User>;
}
