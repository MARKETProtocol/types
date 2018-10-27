/// <reference types="node" />
import Contract, { CustomOptions, contractOptions } from "web3/eth/contract";
import { TransactionObject, BlockType } from "web3/eth/types";
import { Callback, EventLog } from "web3/types";
import { EventEmitter } from "events";
import { Provider } from "web3/providers";
export declare class MarketContractFactoryChainLink {
    constructor(jsonInterface: any[], address?: string, options?: CustomOptions);
    _address: string;
    options: contractOptions;
    methods: {
        transferOwnership(newOwner: string): TransactionObject<void>;
        deployMarketContractChainLink(contractName: string, collateralTokenAddress: string, contractSpecs: (number | string)[], oracleQueryURL: string, oracleQueryPath: string, sleepJobId: string | number[], onDemandJobId: string | number[]): TransactionObject<void>;
        setRegistryAddress(registryAddress: string): TransactionObject<void>;
        setOracleHubAddress(hubAddress: string): TransactionObject<void>;
        MKT_TOKEN_ADDRESS(): TransactionObject<string>;
        owner(): TransactionObject<string>;
        oracleHubAddress(): TransactionObject<string>;
        marketContractRegistry(): TransactionObject<string>;
        MKT_TOKEN(): TransactionObject<string>;
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
