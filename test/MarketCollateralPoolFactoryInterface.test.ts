import { MARKET_CONTRACT_ADDRESS } from './constants';
import { TestContract } from './TestContract';
import { MarketCollateralPoolFactoryInterface } from '../types';

describe('MarketCollateralPoolFactoryInterface', () => {
  let contractTester: TestContract<MarketCollateralPoolFactoryInterface>;
  let contract: MarketCollateralPoolFactoryInterface;

  beforeEach(async () => {
    contractTester = new TestContract<MarketCollateralPoolFactoryInterface>(
      'MarketCollateralPoolFactoryInterface',
      MARKET_CONTRACT_ADDRESS
    );
    contract = await contractTester.createContract(
      MarketCollateralPoolFactoryInterface.createAndValidate
    );
  });

  it('throws on invalid contract code', async () => {
    const testContract = new TestContract<MarketCollateralPoolFactoryInterface>(
      'MarketCollateralPoolFactoryInterface',
      MARKET_CONTRACT_ADDRESS,
      '0x0'
    );

    try {
      await testContract.createContract(MarketCollateralPoolFactoryInterface.createAndValidate);

      fail();
    } catch (e) {
      expect(e.message).toContain('doesn\'t exist');
    }
  });

  describe('methods', () => {
    it('has deployMarketCollateralPool', async () => {
      const marketContractAddress = '0x0989e89866dda96911234dedf069a18486543185';

      contractTester.setupTxMethodSpy('deployMarketCollateralPoolTx', {}, marketContractAddress);
      await contractTester.assertTxMethod(
        contract.deployMarketCollateralPoolTx(marketContractAddress),
        {}
      );
    });
  });
});
