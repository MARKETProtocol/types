import { MarketToken } from '../types/MarketToken';
import { TestContract } from './constants';

import BigNumber from 'bignumber.js';

describe('MarketToken class', () => {
  let contractTester: TestContract<MarketToken>;
  let contract: MarketToken;

  beforeEach(async () => {
    contractTester = new TestContract<MarketToken>(
      'MarketToken',
      '0x880663022da3f7937a0e3cbc7ab05eb23884e051'
    );

    contract = await contractTester.createContract(MarketToken.createAndValidate);
  });

  it('throws on invalid contract code', async () => {
    const testC = new TestContract<MarketToken>(
      'MarketToken',
      '0x880663022da3f7937a0e3cbc7ab05eb23884e051',
      '0x0'
    );

    try {
      await testC.createContract(MarketToken.createAndValidate);

      fail();
    } catch (e) {
      expect(e.message).toContain('doesn\'t exist');
    }
  });

  describe('variables', () => {
    it('has name', async () => {
      const expected = 'myName';

      await contractTester.testGetterMethod('name', expected);
    });

    it('has symbol', async () => {
      const expected = 'symbol';

      await contractTester.testGetterMethod('symbol', expected);
    });

    it('has decimals', async () => {
      const expected = 18;

      await contractTester.testGetterMethod('decimals', expected);
    });

    it('has INITIAL_SUPPLY', async () => {
      const expected = 1000000;

      await contractTester.testGetterMethod('INITIAL_SUPPLY', expected);
    });

    it('has lockQtyToAllowTrading', async () => {
      const expected = 200;

      await contractTester.testGetterMethod('lockQtyToAllowTrading', expected);
    });

    it('has minBalanceToAllowContractCreation', async () => {
      const expected = 430;

      await contractTester.testGetterMethod('minBalanceToAllowContractCreation', expected);
    });

    it('has upgradeableTarget', async () => {
      const expected = '0x21274617';

      await contractTester.testGetterMethod('upgradeableTarget', expected);
    });

    it('has totalUpgraded', async () => {
      const expected = 203;

      await contractTester.testGetterMethod('totalUpgraded', expected);
    });

    it('has owner', async () => {
      const expected = '0x126873242';

      await contractTester.testGetterMethod('owner', expected);
    });

    it('has totalSupply', async () => {
      const expected = 28379832;

      await contractTester.testGetterMethod('totalSupply', expected);
    });
  });

  describe('methods', () => {
    it('has isUserEnabledForContract', async () => {
      const marketContractAddress = '0xb49f84052f27b938e22e9172235c451a046822ca';
      const userAddress = '0xfe89ff6c794c0e3dad5aa438fe93bcb666e49917';
      const expected = true;

      contractTester.setupWeb3Mock(
        'isUserEnabledForContract',
        expected,
        marketContractAddress,
        userAddress
      );

      await contractTester.assertMethod(
        contract.isUserEnabledForContract(marketContractAddress, userAddress),
        expected
      );
    });

    it('has isBalanceSufficientForContractCreation', async () => {
      const userAddress = '0xfe89ff6c794c0e3dad5aa438fe93bcb666e49917';
      const expected = true;

      contractTester.setupWeb3Mock('isBalanceSufficientForContractCreation', expected, userAddress);

      await contractTester.assertMethod(
        contract.isBalanceSufficientForContractCreation(userAddress),
        expected
      );
    });

    it('has lockTokensForTradingMarketContract', async () => {
      const marketContractAddress = '0xb49f84052f27b938e22e9172235c451a046822ca';
      const qtyToLock = 10;

      contractTester.setupWeb3TxMock(
        'lockTokensForTradingMarketContractTx',
        {},
        marketContractAddress,
        qtyToLock
      );

      await contractTester.assertTxMethod(
        contract.lockTokensForTradingMarketContractTx(marketContractAddress, qtyToLock),
        {}
      );
    });

    it('has unlockTokens', async () => {
      const marketContractAddress = '0xb49f84052f27b938e22e9172235c451a046822ca';
      const qtyToUnlock = 15;

      contractTester.setupWeb3TxMock(
        'unlockTokensTx',
        {
          from: '0x73483'
        },
        marketContractAddress,
        qtyToUnlock
      );

      await contractTester.assertTxMethod(
        contract.unlockTokensTx(marketContractAddress, qtyToUnlock),
        {
          from: '0x73483'
        }
      );
    });

    it('has getLockedBalanceForUser', async () => {
      const marketContractAddress = '0xb49f84052f27b938e22e9172235c451a046822ca';
      const userAddress = '0xfe89ff6c794c0e3dad5aa438fe93bcb666e49917';
      const expected = new BigNumber(12);

      contractTester.setupWeb3Mock(
        'getLockedBalanceForUser',
        expected,
        marketContractAddress,
        userAddress
      );

      await contractTester.assertMethod(
        contract.getLockedBalanceForUser(marketContractAddress, userAddress),
        expected
      );
    });

    it('has setLockQtyToAllowTrading', async () => {
      const qtyToLock = 10;

      contractTester.setupWeb3TxMock('setLockQtyToAllowTradingTx', {}, qtyToLock);

      await contractTester.assertTxMethod(contract.setLockQtyToAllowTradingTx(qtyToLock), {});
    });

    it('has setMinBalanceForContractCreation', async () => {
      const minBalance = 10;

      contractTester.setupWeb3TxMock('setMinBalanceForContractCreationTx', {}, minBalance);

      await contractTester.assertTxMethod(
        contract.setMinBalanceForContractCreationTx(minBalance),
        {}
      );
    });

    it('has upgrade', async () => {
      const value = 12890;

      contractTester.setupWeb3TxMock('upgradeTx', {}, value);

      await contractTester.assertTxMethod(contract.upgradeTx(value), {});
    });

    it('has unlockTokens', async () => {
      const address = '0xb49f84052f27b938e22e9172235c451a046822ca';

      contractTester.setupWeb3TxMock('setUpgradeableTargetTx', {}, address);

      await contractTester.assertTxMethod(contract.setUpgradeableTargetTx(address), {});
    });

    it('has transfer', async () => {
      const to = '0x3847293';
      const value = 12890;

      contractTester.setupWeb3TxMock('transferTx', {}, to, value);

      await contractTester.assertTxMethod(contract.transferTx(to, value), {});
    });

    it('has approve', async () => {
      const spender = '0x3847293';
      const value = 121;

      contractTester.setupWeb3TxMock('approveTx', {}, spender, value);

      await contractTester.assertTxMethod(contract.approveTx(spender, value), {});
    });

    it('has transferFrom', async () => {
      const from = '0x74892';
      const to = '0x3847293';
      const value = 12829;

      contractTester.setupWeb3TxMock('transferFromTx', {}, from, to, value);

      await contractTester.assertTxMethod(contract.transferFromTx(from, to, value), {});
    });

    it('has burn', async () => {
      const value = 1284578;

      contractTester.setupWeb3TxMock('burnTx', {}, value);

      await contractTester.assertTxMethod(contract.burnTx(value), {});
    });

    it('has decreaseApproval', async () => {
      const spender = '0x3847293';
      const subtractedValue = 12890;

      contractTester.setupWeb3TxMock('decreaseApprovalTx', {}, spender, subtractedValue);

      await contractTester.assertTxMethod(
        contract.decreaseApprovalTx(spender, subtractedValue),
        {}
      );
    });

    it('has increaseApproval', async () => {
      const spender = '0x3847293';
      const addedValue = 12890;

      contractTester.setupWeb3TxMock('increaseApprovalTx', {}, spender, addedValue);

      await contractTester.assertTxMethod(contract.increaseApprovalTx(spender, addedValue), {});
    });

    it('has transferOwnership', async () => {
      const newOwner = '0x3847293';

      contractTester.setupWeb3TxMock('transferOwnershipTx', {}, newOwner);

      await contractTester.assertTxMethod(contract.transferOwnershipTx(newOwner), {});
    });

    it('has balanceOf', async () => {
      const owner = '0x7368732648';
      const expected = new BigNumber(203);

      contractTester.setupWeb3Mock('balanceOf', expected, owner);

      await contractTester.assertMethod(contract.balanceOf(owner), expected);
    });

    it('has allowance', async () => {
      const owner = '0x7368732648';
      const spender = '0x84789372';
      const expected = new BigNumber(102);

      contractTester.setupWeb3Mock('allowance', expected, owner, spender);

      await contractTester.assertMethod(contract.allowance(owner, spender), expected);
    });
  });
});
