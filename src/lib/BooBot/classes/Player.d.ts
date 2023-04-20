import { EmbedBuilder } from "discord.js";
export declare class Player {
    tag: string;
    id: string;
    check: boolean;
    fold: boolean;
    playing: boolean;
    winner: boolean;
    bet: number;
    money: number;
    leading: number;
    trailing: number;
    standing: {
        value: number;
        type: string;
    };
    hand: string[];
    /**
     *
     * @param {GuildMember} issuer
     */
    constructor(id: string, tag: string, baseAmount: number);
    /**
     *
     * @returns {EmbedBuilder}
     */
    printHand(): EmbedBuilder;
    /**
     * I dont fucking know, it does stuff.
     * @param {GameTable.cards[]} cards
     */
    calculateStanding(cards: string[]): void;
    /**
     * Clear player values.
     */
    clear(): void;
}
