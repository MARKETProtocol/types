import { MarketToken } from '../types/MarketToken';
import { TestContract } from './test-contract';

/**
 * MarketToken
 */
describe('MarketToken class', () => {
  let testContract: TestContract<MarketToken>;

  beforeEach(async () => {
    testContract = new TestContract<MarketToken>(
      'MarketToken',
      '0x880663022da3f7937a0e3cbc7ab05eb23884e051'
    );
    await testContract.createContract(MarketToken);
  });

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
      qtyToLock,
      {}
    ]);
  });

  it('has unlockTokens', async () => {
    const marketContractAddress = '0xb49f84052f27b938e22e9172235c451a046822ca';
    const qtyToUnlock = '10';

    await testContract.testTxMethod('unlockTokens', [marketContractAddress, qtyToUnlock, {}]);
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

    await testContract.testTxMethod('setLockQtyToAllowTrading', [qtyToLock, {}]);
  });

  it('has setMinBalanceForContractCreation', async () => {
    const minBalance = '10';

    await testContract.testTxMethod('setMinBalanceForContractCreation', [minBalance, {}]);
  });
});
