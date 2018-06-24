import { MarketContractOraclize } from '../types/MarketContractOraclize';
import { TestContract } from './TestContract';
import { MARKET_CONTRACT_ADDRESS } from './constants';
import BigNumber from 'bignumber.js';

describe('MarketContractOraclize', () => {
  let contractTester: TestContract<MarketContractOraclize>;
  let contract: MarketContractOraclize;

  beforeEach(async () => {
    contractTester = new TestContract<MarketContractOraclize>(
      'MarketContractOraclize',
      MARKET_CONTRACT_ADDRESS
    );
    contract = await contractTester.createContract(MarketContractOraclize.createAndValidate);
  });

  it('throws on invalid contract code', async () => {
    const testContract = new TestContract<MarketContractOraclize>(
      'MarketContractOraclize',
      MARKET_CONTRACT_ADDRESS,
      '0x0'
    );

    try {
      await testContract.createContract(MarketContractOraclize.createAndValidate);

      fail();
    } catch (e) {
      expect(e.message).toContain('doesn\'t exist');
    }
  });

  describe('variables', () => {
    it('has creator', async () => {
      const expected = 'creator';

      contractTester.setupGetterSpy('creator', expected);
      await contractTester.assertMethod(contract.creator, expected);
    });

    it('has lastPrice', async () => {
      const expected = new BigNumber(50000);

      contractTester.setupGetterSpy('lastPrice', expected);
      await contractTester.assertMethod(contract.lastPrice, expected);
    });

    it('has lastPriceQueryResult', async () => {
      const expected = '60200';

      contractTester.setupGetterSpy('lastPriceQueryResult', expected);
      await contractTester.assertMethod(contract.lastPriceQueryResult, expected);
    });

    it('has PRICE_DECIMAL_PLACES', async () => {
      const expected = new BigNumber(2);

      contractTester.setupGetterSpy('PRICE_DECIMAL_PLACES', expected);
      await contractTester.assertMethod(contract.PRICE_DECIMAL_PLACES, expected);
    });

    it('has isSettled', async () => {
      const expected = false;

      contractTester.setupGetterSpy('isSettled', expected);
      await contractTester.assertMethod(contract.isSettled, expected);
    });

    it('has isCollateralPoolContractLinked', async () => {
      const expected = true;

      contractTester.setupGetterSpy('isCollateralPoolContractLinked', expected);
      await contractTester.assertMethod(contract.isCollateralPoolContractLinked, expected);
    });

    it('has QUERY_CALLBACK_GAS', async () => {
      const expected = new BigNumber(150000);

      contractTester.setupGetterSpy('QUERY_CALLBACK_GAS', expected);
      await contractTester.assertMethod(contract.QUERY_CALLBACK_GAS, expected);
    });

    it('has ORACLE_DATA_SOURCE', async () => {
      const expected = 'URL';

      contractTester.setupGetterSpy('ORACLE_DATA_SOURCE', expected);
      await contractTester.assertMethod(contract.ORACLE_DATA_SOURCE, expected);
    });

    it('has ORACLE_QUERY', async () => {
      const expected = 'json(https://api.gdax.com/products/BTC-USD/ticker).price';

      contractTester.setupGetterSpy('ORACLE_QUERY', expected);
      await contractTester.assertMethod(contract.ORACLE_QUERY, expected);
    });

    it('has CONTRACT_NAME', async () => {
      const expected = 'ETHUSD_2018-06-07';

      contractTester.setupGetterSpy('CONTRACT_NAME', expected);
      await contractTester.assertMethod(contract.CONTRACT_NAME, expected);
    });

    it('has MKT_TOKEN_ADDRESS', async () => {
      const expected = '0x11f68c2a0df5b85781bb0f617d502c3a7d354d31';

      contractTester.setupGetterSpy('MKT_TOKEN_ADDRESS', expected);
      await contractTester.assertMethod(contract.MKT_TOKEN_ADDRESS, expected);
    });

    it('has MARKET_COLLATERAL_POOL_ADDRESS', async () => {
      const expected = '0x0c58e89866dda96911a78dedf069a1848618c185';

      contractTester.setupGetterSpy('MARKET_COLLATERAL_POOL_ADDRESS', expected);
      await contractTester.assertMethod(contract.MARKET_COLLATERAL_POOL_ADDRESS, expected);
    });

    it('has PRICE_CAP', async () => {
      const expected = new BigNumber(150000);

      contractTester.setupGetterSpy('PRICE_CAP', expected);
      await contractTester.assertMethod(contract.PRICE_CAP, expected);
    });

    it('has EXPIRATION', async () => {
      const expected = new BigNumber(1527215534);

      contractTester.setupGetterSpy('EXPIRATION', expected);
      await contractTester.assertMethod(contract.EXPIRATION, expected);
    });

    it('has PRICE_FLOOR', async () => {
      const expected = new BigNumber(50000);

      contractTester.setupGetterSpy('PRICE_FLOOR', expected);
      await contractTester.assertMethod(contract.PRICE_FLOOR, expected);
    });

    it('has QTY_MULTIPLIER', async () => {
      const expected = new BigNumber(1000000000000000000);

      contractTester.setupGetterSpy('QTY_MULTIPLIER', expected);
      await contractTester.assertMethod(contract.QTY_MULTIPLIER, expected);
    });

    it('has settlementPrice', async () => {
      const expected = new BigNumber(50000);

      contractTester.setupGetterSpy('settlementPrice', expected);
      await contractTester.assertMethod(contract.settlementPrice, expected);
    });
  });

  describe('methods', () => {
    it('has getQtyFilledOrCancelledFromOrder', async () => {
      const orderHash = '0x0c58e89866dda96911a78dedf069a18486543185';
      const expected = new BigNumber(1000);

      contractTester.setupMethodSpy('getQtyFilledOrCancelledFromOrder', expected, orderHash);
      await contractTester.assertMethod(
        contract.getQtyFilledOrCancelledFromOrder(orderHash),
        expected
      );
    });

    it('has tradeOrder', async () => {
      // makerAddress, takerAddress, feeRecipientAddress
      const orderAddresses = ['0x74892', '0x23f45', '0x768fa'];
      // makerFee, takerFree, price, expirationTimeStamp, salt
      const unsignedOrderValues = [
        new BigNumber(10000),
        new BigNumber(20000),
        new BigNumber(50000),
        new BigNumber(1528692122587),
        new BigNumber(2988764542)
      ];
      const orderQty = new BigNumber(1000);
      const qtyToFill = new BigNumber(500);
      const v = new BigNumber(120);
      const r = new BigNumber(130);
      const s = new BigNumber(897);

      contractTester.setupTxMethodSpy(
        'tradeOrderTx',
        {},
        orderAddresses,
        unsignedOrderValues,
        orderQty,
        qtyToFill,
        v,
        r,
        s
      );

      await contractTester.assertTxMethod(
        contract.tradeOrderTx(orderAddresses, unsignedOrderValues, orderQty, qtyToFill, v, r, s),
        {}
      );
    });

    it('has setCollateralPoolContractAddress', async () => {
      const poolAddress = '0x87672';
      contractTester.setupTxMethodSpy('setCollateralPoolContractAddressTx', {}, poolAddress);

      await contractTester.assertTxMethod(
        contract.setCollateralPoolContractAddressTx(poolAddress),
        {}
      );
    });

    it('has transferCreator', async () => {
      const creatorAddress = '0xd43530377Db4560de29fBc5334f567feEd3649aC';
      contractTester.setupTxMethodSpy('transferCreatorTx', {}, creatorAddress);
      await contractTester.assertTxMethod(contract.transferCreatorTx(creatorAddress), {});
    });

    it('has cancelOrder', async () => {
      const orderAddresses = ['0x74892', '0x23f45', '0x768fa'];
      const unsignedOrderValues = [
        new BigNumber(10000),
        new BigNumber(20000),
        new BigNumber(50000),
        new BigNumber(1528692122587),
        new BigNumber(2988764542)
      ];
      const orderQty = new BigNumber(1000);
      const qtyToCancel = new BigNumber(100);

      contractTester.setupTxMethodSpy(
        'cancelOrderTx',
        {},
        orderAddresses,
        unsignedOrderValues,
        orderQty,
        qtyToCancel
      );

      await contractTester.assertTxMethod(
        contract.cancelOrderTx(orderAddresses, unsignedOrderValues, orderQty, qtyToCancel),
        {}
      );
    });

    it('has requestEarlySettlement', async () => {
      contractTester.setupTxMethodSpy('requestEarlySettlementTx', {});
      await contractTester.assertTxMethod(contract.requestEarlySettlementTx(), {});
    });

    it('has __callback', async () => {
      const myId = new BigNumber(33333333333333333333);
      const result = 'result';
      contractTester.setupTxMethodSpy('__callbackTx', {}, myId, result);
      await contractTester.assertTxMethod(contract.__callbackTx(myId, result), {});
    });
  });
});
