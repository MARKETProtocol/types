import BigNumber from 'bignumber.js';

import { MARKET_CONTRACT_ADDRESS } from './constants';
import { TestContract } from './TestContract';
import { ERC20 } from '../types';

describe('ERC20 class', () => {
  let contractTester: TestContract<ERC20>;
  let contract: ERC20;

  beforeEach(async () => {
    contractTester = new TestContract<ERC20>('ERC20', MARKET_CONTRACT_ADDRESS);

    contract = await contractTester.createContract(ERC20.createAndValidate);
  });

  it('throws on invalid contract code', async () => {
    const testC = new TestContract<ERC20>('ERC20', MARKET_CONTRACT_ADDRESS, '0x0');

    try {
      await testC.createContract(ERC20.createAndValidate);

      fail();
    } catch (e) {
      expect(e.message).toContain('doesn\'t exist');
    }
  });

  describe('variables', () => {
    it('has totalSupply', async () => {
      const expected = new BigNumber(28379832);

      contractTester.setupGetterSpy('totalSupply', expected);
      await contractTester.assertMethod(contract.totalSupply, expected);
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

    it('has transfer', async () => {
      const to = '0x3847293';
      const value = 12890;

      contractTester.setupTxMethodSpy('transferTx', {}, to, value);

      await contractTester.assertTxMethod(contract.transferTx(to, value), {});
    });

    it('has transferFrom', async () => {
      const from = '0x74892';
      const to = '0x3847293';
      const value = 12829;

      contractTester.setupTxMethodSpy('transferFromTx', {}, from, to, value);

      await contractTester.assertTxMethod(contract.transferFromTx(from, to, value), {});
    });

    it('has approve', async () => {
      const spender = '0x3847293';
      const value = 121;

      contractTester.setupTxMethodSpy('approveTx', {}, spender, value);

      await contractTester.assertTxMethod(contract.approveTx(spender, value), {});
    });
  });

  describe('events', () => {
    const watchFilter = {
      fromBlock: '0',
      toBlock: 'mockBlockForTesting'
    };

    it('should wait for Approval event', async () => {
      const spender = '0x3847293';
      const eventFilter = { spender };
      const eventLog = { event: 'Approval' };

      contractTester.setupEventSpy('Approval', [eventFilter, watchFilter], eventLog);

      await contractTester.assertEvent(
        contract.ApprovalEvent(eventFilter).watchFirst(watchFilter),
        eventLog
      );
    });

    it('should wait for Transfer event', async () => {
      const spender = '0x3847293';
      const eventFilter = { from: spender };
      const eventLog = { event: 'Transfer' };

      contractTester.setupEventSpy('Transfer', [eventFilter, watchFilter], eventLog);

      await contractTester.assertEvent(
        contract.TransferEvent(eventFilter).watchFirst(watchFilter),
        eventLog
      );
    });
  });
});
