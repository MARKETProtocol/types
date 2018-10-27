/// <reference types="node" />
import Contract, { CustomOptions, contractOptions } from "web3/eth/contract";
import { TransactionObject, BlockType } from "web3/eth/types";
import { Callback, EventLog } from "web3/types";
import { EventEmitter } from "events";
import { Provider } from "web3/providers";
export declare class CollateralToken {
    constructor(jsonInterface: any[], address?: string, options?: CustomOptions);
    _address: string;
    options: contractOptions;
    methods: {
        balanceOf(_owner: string): TransactionObject<string>;
        allowance(_owner: string, _spender: string): TransactionObject<string>;
        approve(_spender: string, _value: number | string): TransactionObject<boolean>;
        transferFrom(_from: string, _to: string, _value: number | string): TransactionObject<boolean>;
        decreaseApproval(_spender: string, _subtractedValue: number | string): TransactionObject<boolean>;
        transfer(_to: string, _value: number | string): TransactionObject<boolean>;
        increaseApproval(_spender: string, _addedValue: number | string): TransactionObject<boolean>;
        name(): TransactionObject<string>;
        totalSupply(): TransactionObject<string>;
        INITIAL_SUPPLY(): TransactionObject<string>;
        decimals(): TransactionObject<string>;
        symbol(): TransactionObject<string>;
    };
    deploy(options: {
        data: string;
        arguments: any[];
    }): TransactionObject<Contract>;
    events: {
        Approval(options?: {
            filter?: object;
            fromBlock?: BlockType;
            topics?: string[];
        }, cb?: Callback<EventLog>): EventEmitter;
        Transfer(options?: {
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
