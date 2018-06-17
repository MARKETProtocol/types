import { CollateralToken } from '../types/CollateralToken';
import { TestContract } from './TestContract';

import BigNumber from 'bignumber.js';

import { MARKET_CONTRACT_ADDRESS, USER_ADDRESS } from './constants';

describe('CollateralToken class', () => {
  let contractTester: TestContract<CollateralToken>;
  let contract: CollateralToken;

  beforeEach(async () => {
    contractTester = new TestContract<CollateralToken>('CollateralToken', MARKET_CONTRACT_ADDRESS);

    contract = await contractTester.createContract(CollateralToken.createAndValidate);
  });

  it('throws on invalid contract code', async () => {
    const testC = new TestContract<CollateralToken>('CollateralToken', MARKET_CONTRACT_ADDRESS, '0x0');

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

    it('has symbol', async () => {
      const expected = 'symbol';

      contractTester.setupGetterSpy('symbol', expected);
      await contractTester.assertMethod(contract.symbol, expected);
    });

    it('has decimals', async () => {
      const expected = new BigNumber(18);

      contractTester.setupGetterSpy('decimals', expected);
      await contractTester.assertMethod(contract.decimals, expected);
    });

    it('has INITIAL_SUPPLY', async () => {
      const expected = new BigNumber(1000000);

      contractTester.setupGetterSpy('INITIAL_SUPPLY', expected);
      await contractTester.assertMethod(contract.INITIAL_SUPPLY, expected);
    });

    it('has lockQtyToAllowTrading', async () => {
      const expected = new BigNumber(200);

      contractTester.setupGetterSpy('lockQtyToAllowTrading', expected);
      await contractTester.assertMethod(contract.lockQtyToAllowTrading, expected);
    });

    it('has minBalanceToAllowContractCreation', async () => {
      const expected = new BigNumber(430);

      contractTester.setupGetterSpy('minBalanceToAllowContractCreation', expected);
      await contractTester.assertMethod(contract.minBalanceToAllowContractCreation, expected);
    });

    it('has upgradeableTarget', async () => {
      const expected = '0x21274617';

      contractTester.setupGetterSpy('upgradeableTarget', expected);
      await contractTester.assertMethod(contract.upgradeableTarget, expected);
    });

    it('has totalUpgraded', async () => {
      const expected = new BigNumber(203);

      contractTester.setupGetterSpy('totalUpgraded', expected);
      await contractTester.assertMethod(contract.totalUpgraded, expected);
    });

    it('has owner', async () => {
      const expected = '0x126873242';

      contractTester.setupGetterSpy('owner', expected);
      await contractTester.assertMethod(contract.owner, expected);
    });

    it('has totalSupply', async () => {
      const expected = new BigNumber(28379832);

      contractTester.setupGetterSpy('totalSupply', expected);
      await contractTester.assertMethod(contract.totalSupply, expected);
    });
  });
});
