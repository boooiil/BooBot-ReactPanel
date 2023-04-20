import { Statistics } from "./Statistics";
export declare class StatisticsManager {
    cache: Statistics[];
    bot: any;
    init(): StatisticsManager;
    getAllAsArray(): Statistics[];
    getAllAsObject(): {
        [key: string]: {
            blackjack: Statistics["blackjack"];
            rps: Statistics["rps"];
        };
    };
    get(userID: string): Statistics;
    fetchByName(id: Statistics["id"]): Statistics | undefined;
    reload(): void;
    save(): void;
}
