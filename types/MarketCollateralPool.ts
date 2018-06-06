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

export class MarketCollateralPool extends TypeChainContract {
  public readonly rawWeb3Contract: any;

  public constructor(web3: any, address: string | BigNumber) {
    const abi = [
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
        name: 'linkedAddress',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'collateralPoolBalance',
        outputs: [{ name: '', type: 'uint256' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [{ name: '', type: 'address' }],
        name: 'userAddressToAccountBalance',
        outputs: [{ name: '', type: 'uint256' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [{ name: 'marketContractAddress', type: 'address' }],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'constructor'
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
        constant: true,
        inputs: [{ name: 'userAddress', type: 'address' }],
        name: 'getUserPosition',
        outputs: [{ name: '', type: 'int256' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [{ name: 'userAddress', type: 'address' }],
        name: 'getUserAccountBalance',
        outputs: [{ name: '', type: 'uint256' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: false,
        inputs: [{ name: 'depositAmount', type: 'uint256' }],
        name: 'depositTokensForTrading',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        constant: false,
        inputs: [],
        name: 'settleAndClose',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        constant: false,
        inputs: [
          { name: 'maker', type: 'address' },
          { name: 'taker', type: 'address' },
          { name: 'qty', type: 'int256' },
          { name: 'price', type: 'uint256' }
        ],
        name: 'updatePositions',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        constant: false,
        inputs: [{ name: 'withdrawAmount', type: 'uint256' }],
        name: 'withdrawTokens',
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
  ): Promise<MarketCollateralPool> {
    const contract = new MarketCollateralPool(web3, address);
    const code = await promisify(web3.eth.getCode, [address]);
    if (code === '0x0') {
      throw new Error(`Contract at ${address} doesn't exist!`);
    }
    return contract;
  }

  public get MKT_TOKEN_ADDRESS(): Promise<string> {
    return promisify(this.rawWeb3Contract.MKT_TOKEN_ADDRESS, []);
  }
  public get linkedAddress(): Promise<string> {
    return promisify(this.rawWeb3Contract.linkedAddress, []);
  }
  public get collateralPoolBalance(): Promise<BigNumber> {
    return promisify(this.rawWeb3Contract.collateralPoolBalance, []);
  }
  public userAddressToAccountBalance(arg0: BigNumber | string): Promise<BigNumber> {
    return promisify(this.rawWeb3Contract.userAddressToAccountBalance, [arg0.toString()]);
  }
  public getUserPosition(userAddress: BigNumber | string): Promise<BigNumber> {
    return promisify(this.rawWeb3Contract.getUserPosition, [userAddress.toString()]);
  }
  public getUserAccountBalance(userAddress: BigNumber | string): Promise<BigNumber> {
    return promisify(this.rawWeb3Contract.getUserAccountBalance, [userAddress.toString()]);
  }

  public depositTokensForTradingTx(
    depositAmount: BigNumber | number
  ): DeferredTransactionWrapper<ITxParams> {
    return new DeferredTransactionWrapper<ITxParams>(this, 'depositTokensForTrading', [
      depositAmount.toString()
    ]);
  }
  public settleAndCloseTx(): DeferredTransactionWrapper<ITxParams> {
    return new DeferredTransactionWrapper<ITxParams>(this, 'settleAndClose', []);
  }
  public updatePositionsTx(
    maker: BigNumber | string,
    taker: BigNumber | string,
    qty: BigNumber | number,
    price: BigNumber | number
  ): DeferredTransactionWrapper<ITxParams> {
    return new DeferredTransactionWrapper<ITxParams>(this, 'updatePositions', [
      maker.toString(),
      taker.toString(),
      qty.toString(),
      price.toString()
    ]);
  }
  public withdrawTokensTx(
    withdrawAmount: BigNumber | number
  ): DeferredTransactionWrapper<ITxParams> {
    return new DeferredTransactionWrapper<ITxParams>(this, 'withdrawTokens', [
      withdrawAmount.toString()
    ]);
  }
}
