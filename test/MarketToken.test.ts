import { MarketToken } from '../types/MarketToken';
import { TestContract } from './test-contract';

describe('MarketToken class', () => {
  let testContract: TestContract<MarketToken>;

  beforeEach(async () => {
    testContract = new TestContract<MarketToken>(
      'MarketToken',
      '0x880663022da3f7937a0e3cbc7ab05eb23884e051'
    );

    await testContract.createContract(MarketToken);
  });

  it('throws on invalid contract code', async () => {
    const testC = new TestContract<MarketToken>(
      'MarketToken',
      '0x880663022da3f7937a0e3cbc7ab05eb23884e051',
      '0x0'
    );

    try {
      await testC.createContract(MarketToken);

      fail();
    } catch (e) {
      expect(e.message).toContain('doesn\'t exist');
    }
  });

  describe('variables', () => {
    it('has name', async () => {
      const expected = 'myName';

      await testContract.testGetterMethod('name', expected);
    });

    it('has symbol', async () => {
      const expected = 'symbol';

      await testContract.testGetterMethod('symbol', expected);
    });

    it('has decimals', async () => {
      const expected = 18;

      await testContract.testGetterMethod('decimals', expected);
    });

    it('has INITIAL_SUPPLY', async () => {
      const expected = 1000000;

      await testContract.testGetterMethod('INITIAL_SUPPLY', expected);
    });

    it('has lockQtyToAllowTrading', async () => {
      const expected = 200;

      await testContract.testGetterMethod('lockQtyToAllowTrading', expected);
    });

    it('has minBalanceToAllowContractCreation', async () => {
      const expected = 430;

      await testContract.testGetterMethod('minBalanceToAllowContractCreation', expected);
    });

    it('has upgradeableTarget', async () => {
      const expected = '0x21274617';

      await testContract.testGetterMethod('upgradeableTarget', expected);
    });

    it('has totalUpgraded', async () => {
      const expected = 203;

      await testContract.testGetterMethod('totalUpgraded', expected);
    });

    it('has owner', async () => {
      const expected = '0x126873242';

      await testContract.testGetterMethod('owner', expected);
    });

    it('has totalSupply', async () => {
      const expected = 28379832;

      await testContract.testGetterMethod('totalSupply', expected);
    });
  });

  describe('methods', () => {
    it('has isUserEnabledForContract', async () => {
      const marketContractAddress = '0xb49f84052f27b938e22e9172235c451a046822ca';
      const userAddress = '0xfe89ff6c794c0e3dad5aa438fe93bcb666e49917';
      const expected = true;

      await testContract.testMethod(
        'isUserEnabledForContract',
        [marketContractAddress, userAddress],
        expected
      );
    });

    it('has isBalanceSufficientForContractCreation', async () => {
      const userAddress = '0xfe89ff6c794c0e3dad5aa438fe93bcb666e49917';
      const expected = true;

      await testContract.testMethod(
        'isBalanceSufficientForContractCreation',
        [userAddress],
        expected
      );
    });

    it('has lockTokensForTradingMarketContract', async () => {
      const marketContractAddress = '0xb49f84052f27b938e22e9172235c451a046822ca';
      const qtyToLock = '10';

      await testContract.testTxMethod('lockTokensForTradingMarketContract', [
        marketContractAddress,
        qtyToLock
      ]);
    });

    it('has unlockTokens', async () => {
      const marketContractAddress = '0xb49f84052f27b938e22e9172235c451a046822ca';
      const qtyToUnlock = '10';

      await testContract.testTxMethod('unlockTokens', [marketContractAddress, qtyToUnlock]);
    });

    it('has getLockedBalanceForUser', async () => {
      const marketContractAddress = '0xb49f84052f27b938e22e9172235c451a046822ca';
      const userAddress = '0xfe89ff6c794c0e3dad5aa438fe93bcb666e49917';
      const expected = 20;

      await testContract.testMethod(
        'getLockedBalanceForUser',
        [marketContractAddress, userAddress],
        expected
      );
    });

    it('has setLockQtyToAllowTrading', async () => {
      const qtyToLock = '10';

      await testContract.testTxMethod('setLockQtyToAllowTrading', [qtyToLock]);
    });

    it('has setMinBalanceForContractCreation', async () => {
      const minBalance = '10';

      await testContract.testTxMethod('setMinBalanceForContractCreation', [minBalance]);
    });

    it('has upgrade', async () => {
      const value = '12890';

      await testContract.testTxMethod('upgrade', [value]);
    });

    it('has unlockTokens', async () => {
      const address = '0xb49f84052f27b938e22e9172235c451a046822ca';

      await testContract.testTxMethod('setUpgradeableTarget', [address]);
    });

    it('has transfer', async () => {
      const to = '0x3847293';
      const value = '12890';

      await testContract.testTxMethod('transfer', [to, value]);
    });

    it('has approve', async () => {
      const spender = '0x3847293';
      const value = '121';

      await testContract.testTxMethod('approve', [spender, value]);
    });

    it('has transferFrom', async () => {
      const from = '0x74892';
      const to = '0x3847293';
      const value = '12829';

      await testContract.testTxMethod('transferFrom', [from, to, value]);
    });

    it('has burn', async () => {
      const value = '1284578';

      await testContract.testTxMethod('burn', [value]);
    });

    it('has decreaseApproval', async () => {
      const spender = '0x3847293';
      const subtractedValue = '12890';

      await testContract.testTxMethod('decreaseApproval', [spender, subtractedValue]);
    });

    it('has increaseApproval', async () => {
      const spender = '0x3847293';
      const addedValue = '12890';

      await testContract.testTxMethod('increaseApproval', [spender, addedValue]);
    });

    it('has transferOwnership', async () => {
      const newOwner = '0x3847293';

      await testContract.testTxMethod('transferOwnership', [newOwner]);
    });

    it('has balanceOf', async () => {
      const owner = '0x7368732648';
      const expected = 203;

      await testContract.testMethod('balanceOf', [owner], expected);
    });

    it('has allowance', async () => {
      const owner = '0x7368732648';
      const spender = '0x84789372';
      const expected = 102;

      await testContract.testMethod('allowance', [owner, spender], expected);
    });
  });
});
