/* GENERATED BY TYPECHAIN VER. 0.1.5 */
/* tslint:disable */

import { BigNumber } from 'bignumber.js';
import {
  TypeChainContract,
  promisify,
  ITxParams,
  IPayableTxParams,
  DeferredTransactionWrapper
} from './typechain-runtime';

export class MarketContractOraclize extends TypeChainContract {
  public readonly rawWeb3Contract: any;

  public constructor(web3: any, address: string | BigNumber) {
    const abi = [
      {
        constant: true,
        inputs: [],
        name: 'creator',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'lastPrice',
        outputs: [{ name: '', type: 'uint256' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'lastPriceQueryResult',
        outputs: [{ name: '', type: 'string' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'PRICE_DECIMAL_PLACES',
        outputs: [{ name: '', type: 'uint256' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'isSettled',
        outputs: [{ name: '', type: 'bool' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'isCollateralPoolContractLinked',
        outputs: [{ name: '', type: 'bool' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'QUERY_CALLBACK_GAS',
        outputs: [{ name: '', type: 'uint256' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [{ name: 'orderHash', type: 'bytes32' }],
        name: 'getQtyFilledOrCancelledFromOrder',
        outputs: [{ name: '', type: 'int256' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'ORACLE_DATA_SOURCE',
        outputs: [{ name: '', type: 'string' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'ORACLE_QUERY',
        outputs: [{ name: '', type: 'string' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'CONTRACT_NAME',
        outputs: [{ name: '', type: 'string' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'BASE_TOKEN_ADDRESS',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'MKT_TOKEN_ADDRESS',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'marketCollateralPoolAddress',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: false,
        inputs: [
          { name: 'orderAddresses', type: 'address[3]' },
          { name: 'unsignedOrderValues', type: 'uint256[5]' },
          { name: 'orderQty', type: 'int256' },
          { name: 'qtyToFill', type: 'int256' },
          { name: 'v', type: 'uint8' },
          { name: 'r', type: 'bytes32' },
          { name: 's', type: 'bytes32' }
        ],
        name: 'tradeOrder',
        outputs: [{ name: 'filledQty', type: 'int256' }],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'PRICE_CAP',
        outputs: [{ name: '', type: 'uint256' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'EXPIRATION',
        outputs: [{ name: '', type: 'uint256' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: false,
        inputs: [{ name: 'poolAddress', type: 'address' }],
        name: 'setCollateralPoolContractAddress',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'PRICE_FLOOR',
        outputs: [{ name: '', type: 'uint256' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'QTY_MULTIPLIER',
        outputs: [{ name: '', type: 'uint256' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'settlementPrice',
        outputs: [{ name: '', type: 'uint256' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: false,
        inputs: [{ name: 'newCreator', type: 'address' }],
        name: 'transferCreator',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        constant: false,
        inputs: [
          { name: 'orderAddresses', type: 'address[3]' },
          { name: 'unsignedOrderValues', type: 'uint256[5]' },
          { name: 'orderQty', type: 'int256' },
          { name: 'qtyToCancel', type: 'int256' }
        ],
        name: 'cancelOrder',
        outputs: [{ name: 'qtyCancelled', type: 'int256' }],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        inputs: [
          { name: 'contractName', type: 'string' },
          { name: 'creatorAddress', type: 'address' },
          { name: 'marketTokenAddress', type: 'address' },
          { name: 'baseTokenAddress', type: 'address' },
          { name: 'contractSpecs', type: 'uint256[5]' },
          { name: 'oracleDataSource', type: 'string' },
          { name: 'oracleQuery', type: 'string' }
        ],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'constructor'
      },
      {
        anonymous: false,
        inputs: [{ indexed: false, name: 'price', type: 'string' }],
        name: 'UpdatedLastPrice',
        type: 'event'
      },
      {
        anonymous: false,
        inputs: [{ indexed: false, name: 'settlePrice', type: 'uint256' }],
        name: 'ContractSettled',
        type: 'event'
      },
      {
        anonymous: false,
        inputs: [
          { indexed: true, name: 'user', type: 'address' },
          { indexed: false, name: 'balance', type: 'uint256' }
        ],
        name: 'UpdatedUserBalance',
        type: 'event'
      },
      {
        anonymous: false,
        inputs: [{ indexed: false, name: 'balance', type: 'uint256' }],
        name: 'UpdatedPoolBalance',
        type: 'event'
      },
      {
        anonymous: false,
        inputs: [
          { indexed: true, name: 'errorCode', type: 'uint8' },
          { indexed: true, name: 'orderHash', type: 'bytes32' }
        ],
        name: 'Error',
        type: 'event'
      },
      {
        anonymous: false,
        inputs: [
          { indexed: true, name: 'maker', type: 'address' },
          { indexed: true, name: 'taker', type: 'address' },
          { indexed: true, name: 'feeRecipient', type: 'address' },
          { indexed: false, name: 'filledQty', type: 'int256' },
          { indexed: false, name: 'paidMakerFee', type: 'uint256' },
          { indexed: false, name: 'paidTakerFee', type: 'uint256' },
          { indexed: false, name: 'orderHash', type: 'bytes32' }
        ],
        name: 'OrderFilled',
        type: 'event'
      },
      {
        anonymous: false,
        inputs: [
          { indexed: true, name: 'maker', type: 'address' },
          { indexed: true, name: 'feeRecipient', type: 'address' },
          { indexed: false, name: 'cancelledQty', type: 'int256' },
          { indexed: true, name: 'orderHash', type: 'bytes32' }
        ],
        name: 'OrderCancelled',
        type: 'event'
      },
      {
        anonymous: false,
        inputs: [
          { indexed: true, name: 'currentCreator', type: 'address' },
          { indexed: true, name: 'newCreator', type: 'address' }
        ],
        name: 'CreatorTransferred',
        type: 'event'
      },
      {
        constant: false,
        inputs: [],
        name: 'requestEarlySettlement',
        outputs: [],
        payable: true,
        stateMutability: 'payable',
        type: 'function'
      },
      {
        constant: false,
        inputs: [{ name: 'myid', type: 'bytes32' }, { name: 'result', type: 'string' }],
        name: '__callback',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        constant: false,
        inputs: [
          { name: 'queryID', type: 'bytes32' },
          { name: 'result', type: 'string' },
          { name: 'proof', type: 'bytes' }
        ],
        name: '__callback',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
      }
    ];
    super(web3, address, abi);
  }

  static async createAndValidate(
    web3: any,
    address: string | BigNumber
  ): Promise<MarketContractOraclize> {
    const contract = new MarketContractOraclize(web3, address);
    const code = await promisify(web3.eth.getCode, [address]);
    if (code === '0x0') {
      throw new Error(`Contract at ${address} doesn't exist!`);
    }
    return contract;
  }

  public get creator(): Promise<string> {
    return promisify(this.rawWeb3Contract.creator, []);
  }
  public get lastPrice(): Promise<BigNumber> {
    return promisify(this.rawWeb3Contract.lastPrice, []);
  }
  public get lastPriceQueryResult(): Promise<string> {
    return promisify(this.rawWeb3Contract.lastPriceQueryResult, []);
  }
  public get PRICE_DECIMAL_PLACES(): Promise<BigNumber> {
    return promisify(this.rawWeb3Contract.PRICE_DECIMAL_PLACES, []);
  }
  public get isSettled(): Promise<boolean> {
    return promisify(this.rawWeb3Contract.isSettled, []);
  }
  public get isCollateralPoolContractLinked(): Promise<boolean> {
    return promisify(this.rawWeb3Contract.isCollateralPoolContractLinked, []);
  }
  public get QUERY_CALLBACK_GAS(): Promise<BigNumber> {
    return promisify(this.rawWeb3Contract.QUERY_CALLBACK_GAS, []);
  }
  public get ORACLE_DATA_SOURCE(): Promise<string> {
    return promisify(this.rawWeb3Contract.ORACLE_DATA_SOURCE, []);
  }
  public get ORACLE_QUERY(): Promise<string> {
    return promisify(this.rawWeb3Contract.ORACLE_QUERY, []);
  }
  public get CONTRACT_NAME(): Promise<string> {
    return promisify(this.rawWeb3Contract.CONTRACT_NAME, []);
  }
  public get BASE_TOKEN_ADDRESS(): Promise<string> {
    return promisify(this.rawWeb3Contract.BASE_TOKEN_ADDRESS, []);
  }
  public get MKT_TOKEN_ADDRESS(): Promise<string> {
    return promisify(this.rawWeb3Contract.MKT_TOKEN_ADDRESS, []);
  }
  public get marketCollateralPoolAddress(): Promise<string> {
    return promisify(this.rawWeb3Contract.marketCollateralPoolAddress, []);
  }
  public get PRICE_CAP(): Promise<BigNumber> {
    return promisify(this.rawWeb3Contract.PRICE_CAP, []);
  }
  public get EXPIRATION(): Promise<BigNumber> {
    return promisify(this.rawWeb3Contract.EXPIRATION, []);
  }
  public get PRICE_FLOOR(): Promise<BigNumber> {
    return promisify(this.rawWeb3Contract.PRICE_FLOOR, []);
  }
  public get QTY_MULTIPLIER(): Promise<BigNumber> {
    return promisify(this.rawWeb3Contract.QTY_MULTIPLIER, []);
  }
  public get settlementPrice(): Promise<BigNumber> {
    return promisify(this.rawWeb3Contract.settlementPrice, []);
  }
  public getQtyFilledOrCancelledFromOrder(orderHash: BigNumber): Promise<BigNumber> {
    return promisify(this.rawWeb3Contract.getQtyFilledOrCancelledFromOrder, [orderHash.toString()]);
  }

  public tradeOrderTx(
    orderAddresses: string[],
    unsignedOrderValues: BigNumber[],
    orderQty: BigNumber | number,
    qtyToFill: BigNumber | number,
    v: BigNumber | number,
    r: BigNumber,
    s: BigNumber
  ): DeferredTransactionWrapper<ITxParams> {
    return new DeferredTransactionWrapper<ITxParams>(this, 'tradeOrder', [
      orderAddresses.map(val => val.toString()),
      unsignedOrderValues.map(val => val.toString()),
      orderQty.toString(),
      qtyToFill.toString(),
      v.toString(),
      r.toString(),
      s.toString()
    ]);
  }
  public setCollateralPoolContractAddressTx(
    poolAddress: BigNumber | string
  ): DeferredTransactionWrapper<ITxParams> {
    return new DeferredTransactionWrapper<ITxParams>(this, 'setCollateralPoolContractAddress', [
      poolAddress.toString()
    ]);
  }
  public transferCreatorTx(newCreator: BigNumber | string): DeferredTransactionWrapper<ITxParams> {
    return new DeferredTransactionWrapper<ITxParams>(this, 'transferCreator', [
      newCreator.toString()
    ]);
  }
  public cancelOrderTx(
    orderAddresses: string[],
    unsignedOrderValues: BigNumber[],
    orderQty: BigNumber | number,
    qtyToCancel: BigNumber | number
  ): DeferredTransactionWrapper<ITxParams> {
    return new DeferredTransactionWrapper<ITxParams>(this, 'cancelOrder', [
      orderAddresses.map(val => val.toString()),
      unsignedOrderValues.map(val => val.toString()),
      orderQty.toString(),
      qtyToCancel.toString()
    ]);
  }
  public requestEarlySettlementTx(): DeferredTransactionWrapper<IPayableTxParams> {
    return new DeferredTransactionWrapper<IPayableTxParams>(this, 'requestEarlySettlement', []);
  }
  public __callbackTx(myid: BigNumber, result: string): DeferredTransactionWrapper<ITxParams> {
    return new DeferredTransactionWrapper<ITxParams>(this, '__callback', [
      myid.toString(),
      result.toString()
    ]);
  }
}
