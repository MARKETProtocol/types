import { MarketContractRegistry } from '../types/MarketContractRegistry';
import { TestContract } from './TestContract';
import { MARKET_CONTRACT_ADDRESS } from './constants';
import BigNumber from 'bignumber.js';

describe('MarketContractRegistry', () => {
  let contractTester: TestContract<MarketContractRegistry>;
  let contract: MarketContractRegistry;

  beforeEach(async () => {
    contractTester = new TestContract<MarketContractRegistry>(
      'MarketContractRegistry',
      MARKET_CONTRACT_ADDRESS
    );
    contract = await contractTester.createContract(MarketContractRegistry.createAndValidate);
  });

  it('throws on invalid contract code', async () => {
    const testContract = new TestContract<MarketContractRegistry>(
      'MarketContractRegistry',
      MARKET_CONTRACT_ADDRESS,
      '0x0'
    );

    try {
      await testContract.createContract(MarketContractRegistry.createAndValidate);

      fail();
    } catch (e) {
      expect(e.message).toContain('doesn\'t exist');
    }
  });

  describe('variables', () => {
    it('has owner', async () => {
      const expected = '0x634f8022741c88c7fc113d69a6e31304103e7f11';

      contractTester.setupGetterSpy('owner', expected);
      await contractTester.assertMethod(contract.owner, expected);
    });

    it('has getAddressWhiteList', async () => {
      const expected = ['0x08dbb32ab058f097ca47b7b90e3ae773844a5fac'];

      contractTester.setupGetterSpy('getAddressWhiteList', expected);
      await contractTester.assertMethod(contract.getAddressWhiteList, expected);
    });
  });

  describe('methods', () => {
    it('has isAddressWhiteListed', async () => {
      const contractAddress = '0x46077e4f19f39ae142b09d1c08262a4151703b47';
      const expected = true;

      contractTester.setupMethodSpy('isAddressWhiteListed', expected, contractAddress);
      await contractTester.assertMethod(contract.isAddressWhiteListed(contractAddress), expected);
    });

    it('has transferOwnership', async () => {
      const newOwnerAddress = '0x427ffac8cd8a92dc65fc6b1dc6f48c10df950b9f';

      contractTester.setupTxMethodSpy('transferOwnershipTx', {}, newOwnerAddress);
      await contractTester.assertTxMethod(contract.transferOwnershipTx(newOwnerAddress), {});
    });

    it('has removeContractFromWhiteList', async () => {
      const contractAddress = '0x427ffac8cd8a92dc65fc6b1dc6f48c10df950b9f';
      const whiteListIndex = new BigNumber(1);

      contractTester.setupTxMethodSpy(
        'removeContractFromWhiteListTx',
        {},
        contractAddress,
        whiteListIndex
      );
      await contractTester.assertTxMethod(
        contract.removeContractFromWhiteListTx(contractAddress, whiteListIndex),
        {}
      );
    });

    it('has addAddressToWhiteList', async () => {
      const contractAddress = '0x427ffac8cd8a92dc65fc6b1dc6f48c10df950b9f';
      contractTester.setupTxMethodSpy('addAddressToWhiteListTx', {}, contractAddress);

      await contractTester.assertTxMethod(contract.addAddressToWhiteListTx(contractAddress), {});
    });

    it('has addFactoryAddress', async () => {
      const factoryAddress = '0x693d6906049fbcf8b69826822cf00911ae7ee82e';
      contractTester.setupTxMethodSpy('addFactoryAddressTx', {}, factoryAddress);

      await contractTester.assertTxMethod(contract.addFactoryAddressTx(factoryAddress), {});
    });

    it('has removeFactoryAddressTx', async () => {
      const factoryAddress = '0x693d6906049fbcf8b69826822cf00911ae7ee82e';
      contractTester.setupTxMethodSpy('removeFactoryAddressTx', {}, factoryAddress);

      await contractTester.assertTxMethod(contract.removeFactoryAddressTx(factoryAddress), {});
    });
  });
});
