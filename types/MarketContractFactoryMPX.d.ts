/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import Contract, { CustomOptions, contractOptions } from "web3/eth/contract";
import { TransactionObject, BlockType } from "web3/eth/types";
import { Callback, EventLog } from "web3/types";
import { EventEmitter } from "events";
import { Provider } from "web3/providers";

export class MarketContractFactoryMPX {
  constructor(jsonInterface: any[], address?: string, options?: CustomOptions);
  _address: string;
  options: contractOptions;
  methods: {
    renounceOwnership(): TransactionObject<void>;

    transferOwnership(newOwner: string): TransactionObject<void>;

    deployMarketContractMPX(
      contractNames: (string | number[])[],
      collateralTokenAddress: string,
      contractSpecs: (number | string)[],
      oracleURL: string,
      oracleStatistic: string
    ): TransactionObject<void>;

    setRegistryAddress(registryAddress: string): TransactionObject<void>;

    setOracleHubAddress(oracleHubAddress: string): TransactionObject<void>;

    oracleHub(): TransactionObject<string>;
    owner(): TransactionObject<string>;
    isOwner(): TransactionObject<boolean>;
    MARKET_COLLATERAL_POOL(): TransactionObject<string>;
    marketContractRegistry(): TransactionObject<string>;
  };
  deploy(options: {
    data: string;
    arguments: any[];
  }): TransactionObject<Contract>;
  events: {
    MarketContractCreated(
      options?: {
        filter?: object;
        fromBlock?: BlockType;
        topics?: (null | string)[];
      },
      cb?: Callback<EventLog>
    ): EventEmitter;

    OwnershipTransferred(
      options?: {
        filter?: object;
        fromBlock?: BlockType;
        topics?: (null | string)[];
      },
      cb?: Callback<EventLog>
    ): EventEmitter;

    allEvents: (
      options?: {
        filter?: object;
        fromBlock?: BlockType;
        topics?: (null | string)[];
      },
      cb?: Callback<EventLog>
    ) => EventEmitter;
  };
  getPastEvents(
    event: string,
    options?: {
      filter?: object;
      fromBlock?: BlockType;
      toBlock?: BlockType;
      topics?: (null | string)[];
    },
    cb?: Callback<EventLog[]>
  ): Promise<EventLog[]>;
  setProvider(provider: Provider): void;
}
