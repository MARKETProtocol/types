import BigNumber from 'bignumber.js';

import { MARKET_CONTRACT_ADDRESS } from './constants';
import { TestContract } from './TestContract';
import { MathLib } from '../types';

describe('MathLib', () => {
  let contractTester: TestContract<MathLib>;
  let contract: MathLib;

  beforeEach(async () => {
    contractTester = new TestContract<MathLib>('MathLib', MARKET_CONTRACT_ADDRESS);
    contract = await contractTester.createContract(MathLib.createAndValidate);
  });

  it('throws on invalid contract code', async () => {
    const testContract = new TestContract<MathLib>('MathLib', MARKET_CONTRACT_ADDRESS, '0x0');

    try {
      await testContract.createContract(MathLib.createAndValidate);

      fail();
    } catch (e) {
      expect(e.message).toContain('doesn\'t exist');
    }
  });

  describe('methods', () => {
    it('has calculateNeededCollateral', async () => {
      const priceFloor = new BigNumber(1500);
      const priceCap = new BigNumber(2000);
      const qtyMultiplier = new BigNumber(10);
      const qty = new BigNumber(10);
      const price = new BigNumber(15);
      const expected = new BigNumber(900);

      contractTester.setupMethodSpy(
        'calculateNeededCollateral',
        expected,
        priceFloor,
        priceCap,
        qtyMultiplier,
        qty,
        price
      );
      await contractTester.assertMethod(
        contract.calculateNeededCollateral(priceFloor, priceCap, qtyMultiplier, qty, price),
        expected
      );
    });
  });
});
