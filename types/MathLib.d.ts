/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import Contract, { CustomOptions, contractOptions } from "web3/eth/contract";
import { TransactionObject, BlockType } from "web3/eth/types";
import { Callback, EventLog } from "web3/types";
import { EventEmitter } from "events";
import { Provider } from "web3/providers";

export class MathLib {
  constructor(jsonInterface: any[], address?: string, options?: CustomOptions);
  _address: string;
  options: contractOptions;
  methods: {
    calculateNeededCollateral(
      priceFloor: number | string,
      priceCap: number | string,
      qtyMultiplier: number | string,
      qty: number | string,
      price: number | string
    ): TransactionObject<string>;

    calculateTotalCollateral(
      priceFloor: number | string,
      priceCap: number | string,
      qtyMultiplier: number | string
    ): TransactionObject<string>;

    calculateFeePerUnit(
      priceFloor: number | string,
      priceCap: number | string,
      qtyMultiplier: number | string,
      feeInBasisPoints: number | string
    ): TransactionObject<string>;
  };
  deploy(options: {
    data: string;
    arguments: any[];
  }): TransactionObject<Contract>;
  events: {
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
