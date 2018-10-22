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
        tokenAddressToAccountBalance(arg0: string, arg1: string): TransactionObject<string>;
        tokenAddressToBalanceLockTime(arg0: string, arg1: string): TransactionObject<string>;
        contractAddressToCollateralPoolBalance(arg0: string): TransactionObject<string>;
        getUserNetPosition(marketContractAddress: string, userAddress: string): TransactionObject<string>;
        getUserPositionCount(marketContractAddress: string, userAddress: string): TransactionObject<string>;
        getUserPosition(marketContractAddress: string, userAddress: string, index: number | string): TransactionObject<{
            0: string;
            1: string;
        }>;
        getUserUnallocatedBalance(collateralTokenAddress: string, userAddress: string): TransactionObject<string>;
        transferOwnership(newOwner: string): TransactionObject<void>;
        depositTokensForTrading(collateralTokenAddress: string, depositAmount: number | string): TransactionObject<void>;
        settleAndClose(marketContractAddress: string): TransactionObject<void>;
        updatePositions(marketContractAddress: string, maker: string, taker: string, qty: number | string, price: number | string): TransactionObject<void>;
        setMarketTradingHubAddress(marketTradingHubAddress: string): TransactionObject<void>;
        withdrawTokens(collateralTokenAddress: string, withdrawAmount: number | string): TransactionObject<void>;
        marketTradingHub(): TransactionObject<string>;
        owner(): TransactionObject<string>;
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
        OwnershipTransferred(options?: {
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
