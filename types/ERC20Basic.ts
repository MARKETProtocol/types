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

export class ERC20Basic extends TypeChainContract {
  public readonly rawWeb3Contract: any;

  public constructor(web3: any, address: string | BigNumber) {
    const abi = [
      {
        anonymous: false,
        inputs: [
          { indexed: true, name: 'from', type: 'address' },
          { indexed: true, name: 'to', type: 'address' },
          { indexed: false, name: 'value', type: 'uint256' }
        ],
        name: 'Transfer',
        type: 'event'
      },
      {
        constant: true,
        inputs: [],
        name: 'totalSupply',
        outputs: [{ name: '', type: 'uint256' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [{ name: 'who', type: 'address' }],
        name: 'balanceOf',
        outputs: [{ name: '', type: 'uint256' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: false,
        inputs: [{ name: 'to', type: 'address' }, { name: 'value', type: 'uint256' }],
        name: 'transfer',
        outputs: [{ name: '', type: 'bool' }],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
      }
    ];
    super(web3, address, abi);
  }

  static async createAndValidate(web3: any, address: string | BigNumber): Promise<ERC20Basic> {
    const contract = new ERC20Basic(web3, address);
    const code = await promisify(web3.eth.getCode, [address]);
    if (code === '0x0') {
      throw new Error(`Contract at ${address} doesn't exist!`);
    }
    return contract;
  }

  public get totalSupply(): Promise<BigNumber> {
    return promisify(this.rawWeb3Contract.totalSupply, []);
  }
  public balanceOf(who: BigNumber | string): Promise<BigNumber> {
    return promisify(this.rawWeb3Contract.balanceOf, [who.toString()]);
  }

  public transferTx(
    to: BigNumber | string,
    value: BigNumber | number
  ): DeferredTransactionWrapper<ITxParams> {
    return new DeferredTransactionWrapper<ITxParams>(this, 'transfer', [
      to.toString(),
      value.toString()
    ]);
  }
}