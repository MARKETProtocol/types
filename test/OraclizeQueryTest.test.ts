import { OraclizeQueryTest } from '../types/OraclizeQueryTest';
import { TestContract } from './TestContract';
import { MARKET_CONTRACT_ADDRESS } from './constants';
import BigNumber from 'bignumber.js';

describe('OraclizeQueryTest', () => {
  let contractTester: TestContract<OraclizeQueryTest>;
  let contract: OraclizeQueryTest;

  beforeEach(async () => {
    contractTester = new TestContract<OraclizeQueryTest>(
      'OraclizeQueryTest',
      MARKET_CONTRACT_ADDRESS
    );
    contract = await contractTester.createContract(OraclizeQueryTest.createAndValidate);
  });

  it('throws on invalid contract code', async () => {
    const testContract = new TestContract<OraclizeQueryTest>(
      'OraclizeQueryTest',
      MARKET_CONTRACT_ADDRESS,
      '0x0'
    );

    try {
      await testContract.createContract(OraclizeQueryTest.createAndValidate);

      fail();
    } catch (e) {
      expect(e.message).toContain('doesn\'t exist');
    }
  });

  describe('variables', () => {
    it('has QUERY_CALLBACK_GAS', async () => {
      const expected = new BigNumber(150000);

      contractTester.setupGetterSpy('QUERY_CALLBACK_GAS', expected);
      await contractTester.assertMethod(contract.QUERY_CALLBACK_GAS, expected);
    });
  });

  describe('methods', () => {
    it('has getQueryResults', async () => {
      const expected = '60200';
      const queryId = '14215';

      contractTester.setupMethodSpy('getQueryResults', expected, queryId);
      await contractTester.assertMethod(contract.getQueryResults(queryId), expected);
    });

    it('has testOracleQuery', async () => {
      const oracleDataSource = 'URL';
      const oracleQuery = 'json(https://api.gdax.com/products/BTC-USD/ticker).price';

      contractTester.setupTxMethodSpy('testOracleQueryTx', {}, oracleDataSource, oracleQuery);
      await contractTester.assertTxMethod(
        contract.testOracleQueryTx(oracleDataSource, oracleQuery),
        {}
      );
    });

    it('has getQueryCost', async () => {
      const oracleDataSource = 'URL';

      contractTester.setupTxMethodSpy('getQueryCostTx', {}, oracleDataSource);
      await contractTester.assertTxMethod(contract.getQueryCostTx(oracleDataSource), {});
    });

    it('has __callback', async () => {
      const id = '12345';
      const result = 'result';

      contractTester.setupTxMethodSpy('__callbackTx', {}, id, result);
      await contractTester.assertTxMethod(contract.__callbackTx(id, result), {});
    });
  });
});
