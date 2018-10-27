/// <reference types="node" />
import Contract, { CustomOptions, contractOptions } from "web3/eth/contract";
import { TransactionObject, BlockType } from "web3/eth/types";
import { Callback, EventLog } from "web3/types";
import { EventEmitter } from "events";
import { Provider } from "web3/providers";
export declare class MarketContractChainLink {
    constructor(jsonInterface: any[], address?: string, options?: CustomOptions);
    _address: string;
    options: contractOptions;
    methods: {
        transferCreator(newCreator: string): TransactionObject<void>;
        oracleCallBack(price: number | string): TransactionObject<void>;
        creator(): TransactionObject<string>;
        lastPrice(): TransactionObject<string>;
        PRICE_DECIMAL_PLACES(): TransactionObject<string>;
        COLLATERAL_TOKEN_ADDRESS(): TransactionObject<string>;
        isSettled(): TransactionObject<boolean>;
        ORACLE_QUERY_URL(): TransactionObject<string>;
        CONTRACT_NAME(): TransactionObject<string>;
        ORACLE_HUB_ADDRESS(): TransactionObject<string>;
        PRICE_CAP(): TransactionObject<string>;
        EXPIRATION(): TransactionObject<string>;
        PRICE_FLOOR(): TransactionObject<string>;
        QTY_MULTIPLIER(): TransactionObject<string>;
        ORACLE_QUERY_PATH(): TransactionObject<string>;
        settlementPrice(): TransactionObject<string>;
    };
    deploy(options: {
        data: string;
        arguments: any[];
    }): TransactionObject<Contract>;
    events: {
        UpdatedLastPrice(options?: {
            filter?: object;
            fromBlock?: BlockType;
            topics?: string[];
        }, cb?: Callback<EventLog>): EventEmitter;
        ContractSettled(options?: {
            filter?: object;
            fromBlock?: BlockType;
            topics?: string[];
        }, cb?: Callback<EventLog>): EventEmitter;
        CreatorTransferred(options?: {
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
