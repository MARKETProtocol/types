import { MarketContractFactoryOraclize } from '../types/MarketContractFactoryOraclize';
import { TestContract } from './TestContract';
import { MARKET_CONTRACT_ADDRESS } from './constants';
import BigNumber from 'bignumber.js';

describe('MarketContractOraclize', () => {
  let contractTester: TestContract<MarketContractFactoryOraclize>;
  let contract: MarketContractFactoryOraclize;

  beforeEach(async () => {
    contractTester = new TestContract<MarketContractFactoryOraclize>(
      'MarketContractOraclize',
      MARKET_CONTRACT_ADDRESS
    );
    contract = await contractTester.createContract(MarketContractFactoryOraclize.createAndValidate);
  });

  it('throws on invalid contract code', async () => {
    const testContract = new TestContract<MarketContractFactoryOraclize>(
      'MarketContractOraclize',
      MARKET_CONTRACT_ADDRESS,
      '0x0'
    );

    try {
      await testContract.createContract(MarketContractFactoryOraclize.createAndValidate);

      fail();
    } catch (e) {
      expect(e.message).toContain('doesn\'t exist');
    }
  });

  describe('variables', () => {
    it('has collateralPoolFactoryAddress', async () => {
      const expected = '0x11f68c2a0df5b85781bb0f617d502c3a7d354d31';

      contractTester.setupGetterSpy('collateralPoolFactoryAddress', expected);
      await contractTester.assertMethod(contract.collateralPoolFactoryAddress, expected);
    });

    it('has MKT_TOKEN_ADDRESS', async () => {
      const expected = '0x11f68c2a0df5b81241bb0f617d502c3a7d354d31';

      contractTester.setupGetterSpy('MKT_TOKEN_ADDRESS', expected);
      await contractTester.assertMethod(contract.MKT_TOKEN_ADDRESS, expected);
    });

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

    it('has deployMarketContractOraclize', async () => {
      const contractName = 'ETHUSD_2018-06-07';
      const collateralTokenAddress = '0x0989e89866dda96911234dedf069a18486543185';
      const contractSpecs = [new BigNumber(2000), new BigNumber(1000)];
      const oracleDataSource = 'URL';
      const oracleQuery = 'json(https://api.gdax.com/products/BTC-USD/ticker).price';

      contractTester.setupTxMethodSpy(
        'deployMarketContractOraclizeTx',
        {},
        contractName,
        collateralTokenAddress,
        contractSpecs,
        oracleDataSource,
        oracleQuery
      );
      await contractTester.assertTxMethod(
        contract.deployMarketContractOraclizeTx(
          contractName,
          collateralTokenAddress,
          contractSpecs,
          oracleDataSource,
          oracleQuery
        ),
        {}
      );
    });

    it('has setRegistryAddress', async () => {
      const registryAddress = '0x0c58e89866dda96911234dedf054318486543185';

      contractTester.setupTxMethodSpy('setRegistryAddressTx', {}, registryAddress);
      await contractTester.assertTxMethod(contract.setRegistryAddressTx(registryAddress), {});
    });
  });
});
