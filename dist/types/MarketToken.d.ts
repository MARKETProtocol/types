/// <reference types="node" />
import Contract, { CustomOptions, contractOptions } from "web3/eth/contract";
import { TransactionObject, BlockType } from "web3/eth/types";
import { Callback, EventLog } from "web3/types";
import { EventEmitter } from "events";
import { Provider } from "web3/providers";
export declare class MarketToken {
    constructor(jsonInterface: any[], address?: string, options?: CustomOptions);
    _address: string;
    options: contractOptions;
    methods: {
        balanceOf(_owner: string): TransactionObject<string>;
        allowance(_owner: string, _spender: string): TransactionObject<string>;
        isUserEnabledForContract(marketContractAddress: string, userAddress: string): TransactionObject<boolean>;
        isBalanceSufficientForContractCreation(userAddress: string): TransactionObject<boolean>;
        getLockedBalanceForUser(marketContractAddress: string, userAddress: string): TransactionObject<string>;
        approve(_spender: string, _value: number | string): TransactionObject<boolean>;
        transferFrom(_from: string, _to: string, _value: number | string): TransactionObject<boolean>;
        burn(_value: number | string): TransactionObject<void>;
        upgrade(value: number | string): TransactionObject<void>;
        decreaseApproval(_spender: string, _subtractedValue: number | string): TransactionObject<boolean>;
        setUpgradeableTarget(upgradeAddress: string): TransactionObject<void>;
        transfer(_to: string, _value: number | string): TransactionObject<boolean>;
        increaseApproval(_spender: string, _addedValue: number | string): TransactionObject<boolean>;
        transferOwnership(newOwner: string): TransactionObject<void>;
        lockTokensForTradingMarketContract(marketContractAddress: string, qtyToLock: number | string): TransactionObject<void>;
        unlockTokens(marketContractAddress: string, qtyToUnlock: number | string): TransactionObject<void>;
        setLockQtyToAllowTrading(qtyToLock: number | string): TransactionObject<void>;
        setMinBalanceForContractCreation(minBalance: number | string): TransactionObject<void>;
        name(): TransactionObject<string>;
        totalSupply(): TransactionObject<string>;
        INITIAL_SUPPLY(): TransactionObject<string>;
        decimals(): TransactionObject<string>;
        upgradeableTarget(): TransactionObject<string>;
        minBalanceToAllowContractCreation(): TransactionObject<string>;
        lockQtyToAllowTrading(): TransactionObject<string>;
        owner(): TransactionObject<string>;
        symbol(): TransactionObject<string>;
        totalUpgraded(): TransactionObject<string>;
    };
    deploy(options: {
        data: string;
        arguments: any[];
    }): TransactionObject<Contract>;
    events: {
        UpdatedUserLockedBalance(options?: {
            filter?: object;
            fromBlock?: BlockType;
            topics?: string[];
        }, cb?: Callback<EventLog>): EventEmitter;
        Upgraded(options?: {
            filter?: object;
            fromBlock?: BlockType;
            topics?: string[];
        }, cb?: Callback<EventLog>): EventEmitter;
        Burn(options?: {
            filter?: object;
            fromBlock?: BlockType;
            topics?: string[];
        }, cb?: Callback<EventLog>): EventEmitter;
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
