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

    it('has approve', async () => {
      const spender = '0x3847293';
      const value = 121;

      contractTester.setupTxMethodSpy('approveTx', {}, spender, value);

      await contractTester.assertTxMethod(contract.approveTx(spender, value), {});
    });

    it('has totalSupply', async () => {
      const expected = new BigNumber(1000000);

      contractTester.setupGetterSpy('totalSupply', expected);
      await contractTester.assertMethod(contract.totalSupply, expected);
    });

    it('has transferFrom', async () => {
      const from = '0x74892';
      const to = '0x3847293';
      const value = 12829;

      contractTester.setupTxMethodSpy('transferFromTx', {}, from, to, value);

      await contractTester.assertTxMethod(contract.transferFromTx(from, to, value), {});
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


    it('has decreaseApproval', async () => {
      const spender = '0x3847293';
      const subtractedValue = 12890;

      contractTester.setupTxMethodSpy('decreaseApprovalTx', {}, spender, subtractedValue);

      await contractTester.assertTxMethod(
        contract.decreaseApprovalTx(spender, subtractedValue),
        {}
      );
    });

    it('has balanceOf', async () => {
      const owner = '0x7368732648';
      const expected = new BigNumber(203);

      contractTester.setupMethodSpy('balanceOf', expected, owner);

      await contractTester.assertMethod(contract.balanceOf(owner), expected);
    });

    it('has symbol', async () => {
      const expected = 'symbol';

      contractTester.setupGetterSpy('symbol', expected);
      await contractTester.assertMethod(contract.symbol, expected);
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

    it('has allowance', async () => {
      const owner = '0x7368732648';
      const spender = '0x84789372';
      const expected = new BigNumber(102);

      contractTester.setupMethodSpy('allowance', expected, owner, spender);

      await contractTester.assertMethod(contract.allowance(owner, spender), expected);
    });
  });

  describe('methods', () => {
    it('has isUserEnabledForContract', async () => {
      const expected = true;

      contractTester.setupMethodSpy(
        'isUserEnabledForContract',
        expected,
        MARKET_CONTRACT_ADDRESS,
        USER_ADDRESS
      );

      await contractTester.assertMethod(
        contract.isUserEnabledForContract(MARKET_CONTRACT_ADDRESS, USER_ADDRESS),
        expected
      );
    });

    it('has isBalanceSufficientForContractCreation', async () => {
      const expected = true;

      contractTester.setupMethodSpy(
        'isBalanceSufficientForContractCreation',
        expected,
        USER_ADDRESS
      );

      await contractTester.assertMethod(
        contract.isBalanceSufficientForContractCreation(USER_ADDRESS),
        expected
      );
    });

    it('has lockTokensForTradingMarketContract', async () => {
      const qtyToLock = 10;

      contractTester.setupTxMethodSpy(
        'lockTokensForTradingMarketContractTx',
        {},
        MARKET_CONTRACT_ADDRESS,
        qtyToLock
      );

      await contractTester.assertTxMethod(
        contract.lockTokensForTradingMarketContractTx(MARKET_CONTRACT_ADDRESS, qtyToLock),
        {}
      );
    });

    it('has unlockTokens', async () => {
      const qtyToUnlock = 15;

      contractTester.setupTxMethodSpy(
        'unlockTokensTx',
        {
          from: '0x73483'
        },
        MARKET_CONTRACT_ADDRESS,
        qtyToUnlock
      );

      await contractTester.assertTxMethod(
        contract.unlockTokensTx(MARKET_CONTRACT_ADDRESS, qtyToUnlock),
        {
          from: '0x73483'
        }
      );
    });

    it('has getLockedBalanceForUser', async () => {
      const expected = new BigNumber(12);

      contractTester.setupMethodSpy(
        'getLockedBalanceForUser',
        expected,
        MARKET_CONTRACT_ADDRESS,
        USER_ADDRESS
      );

      await contractTester.assertMethod(
        contract.getLockedBalanceForUser(MARKET_CONTRACT_ADDRESS, USER_ADDRESS),
        expected
      );
    });

    it('has setLockQtyToAllowTrading', async () => {
      const qtyToLock = 10;

      contractTester.setupTxMethodSpy('setLockQtyToAllowTradingTx', {}, qtyToLock);

      await contractTester.assertTxMethod(contract.setLockQtyToAllowTradingTx(qtyToLock), {});
    });

    it('has setMinBalanceForContractCreation', async () => {
      const minBalance = 10;

      contractTester.setupTxMethodSpy('setMinBalanceForContractCreationTx', {}, minBalance);

      await contractTester.assertTxMethod(
        contract.setMinBalanceForContractCreationTx(minBalance),
        {}
      );
    });

    it('has upgrade', async () => {
      const value = 12890;

      contractTester.setupTxMethodSpy('upgradeTx', {}, value);

      await contractTester.assertTxMethod(contract.upgradeTx(value), {});
    });

    it('has unlockTokens', async () => {
      contractTester.setupTxMethodSpy('setUpgradeableTargetTx', {}, MARKET_CONTRACT_ADDRESS);

      await contractTester.assertTxMethod(
        contract.setUpgradeableTargetTx(MARKET_CONTRACT_ADDRESS),
        {}
      );
    });

    it('has transfer', async () => {
      const to = '0x3847293';
      const value = 12890;

      contractTester.setupTxMethodSpy('transferTx', {}, to, value);

      await contractTester.assertTxMethod(contract.transferTx(to, value), {});
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

    it('has burn', async () => {
      const value = 1284578;

      contractTester.setupTxMethodSpy('burnTx', {}, value);

      await contractTester.assertTxMethod(contract.burnTx(value), {});
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

    it('has increaseApproval', async () => {
      const spender = '0x3847293';
      const addedValue = 12890;

      contractTester.setupTxMethodSpy('increaseApprovalTx', {}, spender, addedValue);

      await contractTester.assertTxMethod(contract.increaseApprovalTx(spender, addedValue), {});
    });

    it('has transferOwnership', async () => {
      const newOwner = '0x3847293';

      contractTester.setupTxMethodSpy('transferOwnershipTx', {}, newOwner);

      await contractTester.assertTxMethod(contract.transferOwnershipTx(newOwner), {});
    });

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
  });

});
