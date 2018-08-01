import { MARKET_CONTRACT_ADDRESS } from './constants';
import { TestContract } from './TestContract';
import { MarketCollateralPoolFactory } from '../types';

describe('MarketCollateralPoolFactory', () => {
  let contractTester: TestContract<MarketCollateralPoolFactory>;
  let contract: MarketCollateralPoolFactory;

  beforeEach(async () => {
    contractTester = new TestContract<MarketCollateralPoolFactory>(
      'MarketCollateralPoolFactory',
      MARKET_CONTRACT_ADDRESS
    );
    contract = await contractTester.createContract(MarketCollateralPoolFactory.createAndValidate);
  });

  it('throws on invalid contract code', async () => {
    const testContract = new TestContract<MarketCollateralPoolFactory>(
      'MarketCollateralPoolFactory',
      MARKET_CONTRACT_ADDRESS,
      '0x0'
    );

    try {
      await testContract.createContract(MarketCollateralPoolFactory.createAndValidate);

      fail();
    } catch (e) {
      expect(e.message).toContain('doesn\'t exist');
    }
  });

  describe('variables', () => {
    it('has owner', async () => {
      const expected = '0x11f68c2a0df5b85781bb0f617d502c3a7d178d31';

      contractTester.setupGetterSpy('owner', expected);
      await contractTester.assertMethod(contract.owner, expected);
    });

    it('has marketContractRegistry', async () => {
      const expected = '0x11f1232a0df5b85781bb0f617d502c3a7d354d31';

      contractTester.setupGetterSpy('marketContractRegistry', expected);
      await contractTester.assertMethod(contract.marketContractRegistry, expected);
    });
  });

  describe('methods', () => {
    it('has transferOwnership', async () => {
      const newOwner = '0x0c58e89866dda96911234dedf069a18486543185';

      contractTester.setupTxMethodSpy('transferOwnershipTx', {}, newOwner);
      await contractTester.assertTxMethod(contract.transferOwnershipTx(newOwner), {});
    });

    it('has deployMarketCollateralPool', async () => {
      const marketContractAddress = '0x0989e89866dda96911234dedf069a18486543185';

      contractTester.setupTxMethodSpy('deployMarketCollateralPoolTx', {}, marketContractAddress);
      await contractTester.assertTxMethod(
        contract.deployMarketCollateralPoolTx(marketContractAddress),
        {}
      );
    });

    it('has setRegistryAddress', async () => {
      const registryAddress = '0x0c58e89866dda96911234dedf054318486543185';

      contractTester.setupTxMethodSpy('setRegistryAddressTx', {}, registryAddress);
      await contractTester.assertTxMethod(contract.setRegistryAddressTx(registryAddress), {});
    });
  });

  describe('events', () => {
    const watchFilter = {
      fromBlock: '0',
      toBlock: 'mockBlockForTesting'
    };

    it('should wait for OwnershipTransferred event', async () => {
      const previousOwner = '0x3847293';
      const eventFilter = { previousOwner };
      const eventLog = { event: 'OwnershipTransferred' };

      contractTester.setupEventSpy('OwnershipTransferred', [eventFilter, watchFilter], eventLog);

      await contractTester.assertEvent(
        contract.OwnershipTransferredEvent(eventFilter).watchFirst(watchFilter),
        eventLog
      );
    });
  });
});
