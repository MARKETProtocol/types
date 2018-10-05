/// <reference types="node" />
import Contract, { CustomOptions, contractOptions } from "web3/eth/contract";
import { TransactionObject, BlockType } from "web3/eth/types";
import { Callback, EventLog } from "web3/types";
import { EventEmitter } from "events";
import { Provider } from "web3/providers";
export declare class MarketCollateralPool {
    constructor(jsonInterface: any[], address?: string, options?: CustomOptions);
    options: contractOptions;
    methods: {
        userAddressToAccountBalance(arg0: string): TransactionObject<string>;
        getUserNetPosition(userAddress: string): TransactionObject<string>;
        getUserPositionCount(userAddress: string): TransactionObject<string>;
        getUserPosition(userAddress: string, index: number | string): TransactionObject<{
            0: string;
            1: string;
        }>;
        getUserAccountBalance(userAddress: string): TransactionObject<string>;
        depositTokensForTrading(depositAmount: number | string): TransactionObject<void>;
        settleAndClose(): TransactionObject<void>;
        updatePositions(maker: string, taker: string, qty: number | string, price: number | string): TransactionObject<void>;
        withdrawTokens(withdrawAmount: number | string): TransactionObject<void>;
        MKT_TOKEN_ADDRESS(): TransactionObject<string>;
        linkedAddress(): TransactionObject<string>;
        collateralPoolBalance(): TransactionObject<string>;
    };
    deploy(options: {
        data: string;
        arguments: any[];
    }): TransactionObject<Contract>;
    events: {
        UpdatedUserBalance(options?: {
            filter?: object;
            fromBlock?: BlockType;
            topics?: string[];
        }, cb?: Callback<EventLog>): EventEmitter;
        UpdatedPoolBalance(options?: {
            filter?: object;
            fromBlock?: BlockType;
            topics?: string[];
        }, cb?: Callback<EventLog>): EventEmitter;
        allEvents: (options?: {
            filter?: object;
            fromBlock?: BlockType;
            topics?: string[];
        }, cb?: Callback<EventLog>) => EventEmitter;
    };
    getPastEvents(event: string, options?: {
        filter?: object;
        fromBlock?: BlockType;
        toBlock?: BlockType;
        topics?: string[];
    }, cb?: Callback<EventLog[]>): Promise<EventLog[]>;
    setProvider(provider: Provider): void;
}
