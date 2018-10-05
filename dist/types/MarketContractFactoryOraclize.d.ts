/// <reference types="node" />
import Contract, { CustomOptions, contractOptions } from "web3/eth/contract";
import { TransactionObject, BlockType } from "web3/eth/types";
import { Callback, EventLog } from "web3/types";
import { EventEmitter } from "events";
import { Provider } from "web3/providers";
export declare class MarketContractFactoryOraclize {
    constructor(jsonInterface: any[], address?: string, options?: CustomOptions);
    options: contractOptions;
    methods: {
        transferOwnership(newOwner: string): TransactionObject<void>;
        deployMarketContractOraclize(contractName: string, collateralTokenAddress: string, contractSpecs: (number | string)[], oracleDataSource: string, oracleQuery: string): TransactionObject<void>;
        setRegistryAddress(registryAddress: string): TransactionObject<void>;
        collateralPoolFactoryAddress(): TransactionObject<string>;
        MKT_TOKEN_ADDRESS(): TransactionObject<string>;
        owner(): TransactionObject<string>;
        marketContractRegistry(): TransactionObject<string>;
    };
    deploy(options: {
        data: string;
        arguments: any[];
    }): TransactionObject<Contract>;
    events: {
        MarketContractCreated(options?: {
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
