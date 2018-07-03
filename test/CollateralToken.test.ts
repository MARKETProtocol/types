import BigNumber from 'bignumber.js';

import { MARKET_CONTRACT_ADDRESS } from './constants';
import { TestContract } from './TestContract';
import { CollateralToken } from '../types';

describe('CollateralToken class', () => {
  let contractTester: TestContract<CollateralToken>;
  let contract: CollateralToken;

  beforeEach(async () => {
    contractTester = new TestContract<CollateralToken>('CollateralToken', MARKET_CONTRACT_ADDRESS);

    contract = await contractTester.createContract(CollateralToken.createAndValidate);
  });

  it('throws on invalid contract code', async () => {
    const testC = new TestContract<CollateralToken>(
      'CollateralToken',
      MARKET_CONTRACT_ADDRESS,
      '0x0'
    );

    try {
      await testC.createContract(CollateralToken.createAndValidate);

      fail();
    } catch (e) {
      expect(e.message).toContain('doesn\'t exist');
    }
  });

  describe('variables', () => {
    it('has name', async () => {
      const expected = 'myName';

      contractTester.setupGetterSpy('name', expected);
      await contractTester.assertMethod(contract.name, expected);
    });

    it('has totalSupply', async () => {
      const expected = new BigNumber(1000000);

      contractTester.setupGetterSpy('totalSupply', expected);
      await contractTester.assertMethod(contract.totalSupply, expected);
    });

    it('has INITIAL_SUPPLY', async () => {
      const expected = new BigNumber(1000000);

      contractTester.setupGetterSpy('INITIAL_SUPPLY', expected);
      await contractTester.assertMethod(contract.INITIAL_SUPPLY, expected);
    });

    it('has decimals', async () => {
      const expected = new BigNumber(18);

      contractTester.setupGetterSpy('decimals', expected);
      await contractTester.assertMethod(contract.decimals, expected);
    });

    it('has symbol', async () => {
      const expected = 'symbol';

      contractTester.setupGetterSpy('symbol', expected);
      await contractTester.assertMethod(contract.symbol, expected);
    });
  });

  describe('methods', () => {
    it('has balanceOf', async () => {
      const owner = '0x7368732648';
      const expected = new BigNumber(203);

      contractTester.setupMethodSpy('balanceOf', expected, owner);

      await contractTester.assertMethod(contract.balanceOf(owner), expected);
    });

    it('has allowance', async () => {
      const owner = '0x7368732648';
      const spender = '0x84789372';
      const expected = new BigNumber(102);

      contractTester.setupMethodSpy('allowance', expected, owner, spender);

      await contractTester.assertMethod(contract.allowance(owner, spender), expected);
    });

    it('has approve', async () => {
      const spender = '0x3847293';
      const value = 121;

      contractTester.setupTxMethodSpy('approveTx', {}, spender, value);

      await contractTester.assertTxMethod(contract.approveTx(spender, value), {});
    });

    it('has transferFrom', async () => {
      const from = '0x74892';
      const to = '0x3847293';
      const value = 12829;

      contractTester.setupTxMethodSpy('transferFromTx', {}, from, to, value);

      await contractTester.assertTxMethod(contract.transferFromTx(from, to, value), {});
    });

    it('has decreaseApproval', async () => {
      const spender = '0x3847293';
      const subtractedValue = 12890;

      contractTester.setupTxMethodSpy('decreaseApprovalTx', {}, spender, subtractedValue);

      await contractTester.assertTxMethod(
        contract.decreaseApprovalTx(spender, subtractedValue),
        {}
      );
    });

    it('has transfer', async () => {
      const to = '0x3847293';
      const value = 12890;

      contractTester.setupTxMethodSpy('transferTx', {}, to, value);

      await contractTester.assertTxMethod(contract.transferTx(to, value), {});
    });

    it('has increaseApproval', async () => {
      const spender = '0x3847293';
      const addedValue = 12890;

      contractTester.setupTxMethodSpy('increaseApprovalTx', {}, spender, addedValue);

      await contractTester.assertTxMethod(contract.increaseApprovalTx(spender, addedValue), {});
    });
  });
});
