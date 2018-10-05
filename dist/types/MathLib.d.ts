/// <reference types="node" />
import Contract, { CustomOptions, contractOptions } from "web3/eth/contract";
import { TransactionObject, BlockType } from "web3/eth/types";
import { Callback, EventLog } from "web3/types";
import { EventEmitter } from "events";
import { Provider } from "web3/providers";
export declare class MathLib {
    constructor(jsonInterface: any[], address?: string, options?: CustomOptions);
    options: contractOptions;
    methods: {
        calculateNeededCollateral(priceFloor: number | string, priceCap: number | string, qtyMultiplier: number | string, qty: number | string, price: number | string): TransactionObject<string>;
    };
    deploy(options: {
        data: string;
        arguments: any[];
    }): TransactionObject<Contract>;
    events: {
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
