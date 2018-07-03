import BigNumber from 'bignumber.js';

import { MARKET_CONTRACT_ADDRESS } from './constants';
import { TestContract } from './TestContract';
import { MarketCollateralPool } from '../types';

describe('MarketCollateralPool', () => {
  let contractTester: TestContract<MarketCollateralPool>;
  let contract: MarketCollateralPool;

  beforeEach(async () => {
    contractTester = new TestContract<MarketCollateralPool>(
      'MarketCollateralPool',
      MARKET_CONTRACT_ADDRESS
    );
    contract = await contractTester.createContract(MarketCollateralPool.createAndValidate);
  });

  it('throws on invalid contract code', async () => {
    const testContract = new TestContract<MarketCollateralPool>(
      'MarketCollateralPool',
      MARKET_CONTRACT_ADDRESS,
      '0x0'
    );

    try {
      await testContract.createContract(MarketCollateralPool.createAndValidate);

      fail();
    } catch (e) {
      expect(e.message).toContain('doesn\'t exist');
    }
  });

  describe('variables', () => {
    it('has MKT_TOKEN_ADDRESS', async () => {
      const expected = '0x11f68c2a0df5b85781bb0f617d502c3a7d354d31';

      contractTester.setupGetterSpy('MKT_TOKEN_ADDRESS', expected);
      await contractTester.assertMethod(contract.MKT_TOKEN_ADDRESS, expected);
    });

    it('has linkedAddress', async () => {
      const expected = '0x11f68c2a0df5b85781bb0f617d502c3a7d354d31';

      contractTester.setupGetterSpy('linkedAddress', expected);
      await contractTester.assertMethod(contract.linkedAddress, expected);
    });

    it('has collateralPoolBalance', async () => {
      const expected = new BigNumber(28379832);

      contractTester.setupGetterSpy('collateralPoolBalance', expected);
      await contractTester.assertMethod(contract.collateralPoolBalance, expected);
    });
  });

  describe('methods', () => {
    it('has userAddressToAccountBalance', async () => {
      const address = '0x11f68c2a0df5b85781bb0f617d502c3a7d354d31';
      const expected = new BigNumber(1000);

      contractTester.setupMethodSpy('userAddressToAccountBalance', expected, address);
      await contractTester.assertMethod(contract.userAddressToAccountBalance(address), expected);
    });

    it('has getUserPosition', async () => {
      const address = '0x11f68c2a0df5b85781bb0f617d502c3a7d354d31';
      const expected = new BigNumber(1000);

      contractTester.setupMethodSpy('getUserPosition', expected, address);
      await contractTester.assertMethod(contract.getUserPosition(address), expected);
    });

    it('has getUserAccountBalance', async () => {
      const address = '0x11f68c2a0df5b85781bb0f617d502c3a7d354d31';
      const expected = new BigNumber(1000);

      contractTester.setupMethodSpy('getUserAccountBalance', expected, address);
      await contractTester.assertMethod(contract.getUserAccountBalance(address), expected);
    });

    it('has depositTokensForTrading', async () => {
      const depositAmount = new BigNumber(1000);
      contractTester.setupTxMethodSpy('depositTokensForTradingTx', {}, depositAmount);
      await contractTester.assertTxMethod(contract.depositTokensForTradingTx(depositAmount), {});
    });

    it('has settleAndClose', async () => {
      contractTester.setupTxMethodSpy('settleAndCloseTx', {});
      await contractTester.assertTxMethod(contract.settleAndCloseTx(), {});
    });

    it('has updatePositions', async () => {
      const maker = '0x74892';
      const taker = '0x3847293';
      const qty = 12829;
      const price = 13373;

      contractTester.setupTxMethodSpy('updatePositionsTx', {}, maker, taker, qty, price);

      await contractTester.assertTxMethod(contract.updatePositionsTx(maker, taker, qty, price), {});
    });

    it('has withdrawTokens', async () => {
      const withdrawAmount = new BigNumber(1000);
      contractTester.setupTxMethodSpy('withdrawTokensTx', {}, withdrawAmount);
      await contractTester.assertTxMethod(contract.withdrawTokensTx(withdrawAmount), {});
    });
  });
});
