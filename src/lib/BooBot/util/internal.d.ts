/// <reference types="node" />
import { GuildHandler } from "../classes/GuildHandler";
import { MySQLQueueHandler } from "../mysql/MySQLQueueHandler";
import { HelpManager } from "../classes/HelpManager";
import { StatisticsManager } from "../classes/StatisticsManager";
import { CheckpointHandler } from "../classes/CheckpointHandler";
import { Hand } from "../interactions/bl";
import { GameTable } from "../classes/GameTable";
import { Webserver } from "../web/express/app";
export declare const internal: {
    help: HelpManager;
    statistics: StatisticsManager;
    guilds: GuildHandler;
    checkpoint: CheckpointHandler;
    queue: MySQLQueueHandler;
    games: {
        blackjack: {
            [userID: string]: {
                user: string;
                id: string;
                user_hand: Hand;
                bot_hand: Hand;
            };
        };
        holdem: {
            [key: string]: GameTable;
        };
        rps: {};
    };
    mutes: {};
    music: {};
    runnable: {};
    userCache: {
        [key: string]: number;
    };
    web: {
        express: Webserver;
        users: {
            [key: string]: {
                expires: number;
            };
        };
    };
};
export declare function init(): void;
export declare function reload(): NodeJS.Timeout;
