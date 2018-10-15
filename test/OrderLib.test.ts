import BigNumber from 'bignumber.js';

import { MARKET_CONTRACT_ADDRESS } from './constants';
import { TestContract } from './TestContract';
import { OrderLib } from '../types';

describe('OrderLib', () => {
  let contractTester: TestContract<OrderLib>;
  let contract: OrderLib;

  beforeEach(async () => {
    contractTester = new TestContract<OrderLib>('OrderLib', MARKET_CONTRACT_ADDRESS);
    contract = await contractTester.createContract(OrderLib.createAndValidate);
  });

  it('throws on invalid contract code', async () => {
    const testContract = new TestContract<OrderLib>('OrderLib', MARKET_CONTRACT_ADDRESS, '0x0');

    try {
      await testContract.createContract(OrderLib.createAndValidate);

      fail();
    } catch (e) {
      expect(e.message).toContain('doesn\'t exist');
    }
  });

  describe('methods', () => {
    it('has createOrderHash', async () => {
      const contractAddress = '0xa5b9d60f32436310afebcfda832817a68921beb7';
      // makerAddress, takerAddress, feeRecipientAddress
      const orderAddresses = [contractAddress, '0x74892', '0x23f45', '0x768fa'];
      // makerFee, takerFree, price, expirationTimeStamp, salt
      const unsignedOrderValues = [
        new BigNumber(10000),
        new BigNumber(20000),
        new BigNumber(50000),
        new BigNumber(1528692122587),
        new BigNumber(2988764542)
      ];
      const orderQty = new BigNumber(1000);
      const expected = '0x0c58e89866dda96911a78dedf069a18486543185';

      contractTester.setupMethodSpy(
        'createOrderHash',
        expected,
        orderAddresses,
        unsignedOrderValues,
        orderQty
      );
      await contractTester.assertMethod(
        contract.createOrderHash(orderAddresses, unsignedOrderValues, orderQty),
        expected
      );
    });

    it('has isValidSignature', async () => {
      const signerAddress = '0x3a103cc9f98c512512b5a159218e2b388b13dee3';
      const hash = '0x0c58e89866dda96911a78dedf069a18486543185';
      const v = new BigNumber(120);
      const r = new BigNumber(130);
      const s = new BigNumber(897);
      const expected = true;

      contractTester.setupMethodSpy('isValidSignature', expected, signerAddress, hash, v, r, s);
      await contractTester.assertMethod(
        contract.isValidSignature(signerAddress, hash, v, r.toString(), s.toString()),
        expected
      );
    });
  });
});
