/// <reference types="node" />
import Contract, { CustomOptions, contractOptions } from "web3/eth/contract";
import { TransactionObject, BlockType } from "web3/eth/types";
import { Callback, EventLog } from "web3/types";
import { EventEmitter } from "events";
import { Provider } from "web3/providers";
export declare class MarketTradingHub {
    constructor(jsonInterface: any[], address?: string, options?: CustomOptions);
    options: contractOptions;
    methods: {
        getQtyFilledOrCancelledFromOrder(orderHash: string | number[]): TransactionObject<string>;
        tradeOrder(orderAddresses: (string)[], unsignedOrderValues: (number | string)[], orderQty: number | string, qtyToFill: number | string, v: number | string, r: string | number[], s: string | number[]): TransactionObject<string>;
        cancelOrder(orderAddresses: (string)[], unsignedOrderValues: (number | string)[], orderQty: number | string, qtyToCancel: number | string): TransactionObject<string>;
        MKT_TOKEN_ADDRESS(): TransactionObject<string>;
        MARKET_COLLATERAL_POOL_ADDRESS(): TransactionObject<string>;
    };
    deploy(options: {
        data: string;
        arguments: any[];
    }): TransactionObject<Contract>;
    events: {
        Error(options?: {
            filter?: object;
            fromBlock?: BlockType;
            topics?: string[];
        }, cb?: Callback<EventLog>): EventEmitter;
        OrderFilled(options?: {
            filter?: object;
            fromBlock?: BlockType;
            topics?: string[];
        }, cb?: Callback<EventLog>): EventEmitter;
        OrderCancelled(options?: {
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
