/// <reference types="node" />
import Contract, { CustomOptions, contractOptions } from "web3/eth/contract";
import { TransactionObject, BlockType } from "web3/eth/types";
import { Callback, EventLog } from "web3/types";
import { EventEmitter } from "events";
import { Provider } from "web3/providers";
export declare class MarketContractRegistry {
    constructor(jsonInterface: any[], address?: string, options?: CustomOptions);
    options: contractOptions;
    methods: {
        isAddressWhiteListed(contractAddress: string): TransactionObject<boolean>;
        transferOwnership(newOwner: string): TransactionObject<void>;
        removeContractFromWhiteList(contractAddress: string, whiteListIndex: number | string): TransactionObject<boolean>;
        addAddressToWhiteList(contractAddress: string): TransactionObject<void>;
        addFactoryAddress(factoryAddress: string): TransactionObject<void>;
        removeFactoryAddress(factoryAddress: string): TransactionObject<void>;
        owner(): TransactionObject<string>;
        getAddressWhiteList(): TransactionObject<(string)[]>;
    };
    deploy(options: {
        data: string;
        arguments: any[];
    }): TransactionObject<Contract>;
    events: {
        AddressAddedToWhitelist(options?: {
            filter?: object;
            fromBlock?: BlockType;
            topics?: string[];
        }, cb?: Callback<EventLog>): EventEmitter;
        AddressRemovedFromWhitelist(options?: {
            filter?: object;
            fromBlock?: BlockType;
            topics?: string[];
        }, cb?: Callback<EventLog>): EventEmitter;
        FactoryAddressAdded(options?: {
            filter?: object;
            fromBlock?: BlockType;
            topics?: string[];
        }, cb?: Callback<EventLog>): EventEmitter;
        FactoryAddressRemoved(options?: {
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
