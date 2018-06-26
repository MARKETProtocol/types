import { MarketContractRegistryInterface } from '../types/MarketContractRegistryInterface';
import { TestContract } from './TestContract';
import { MARKET_CONTRACT_ADDRESS } from './constants';

describe('MarketContractRegistryInterface', () => {
  let contractTester: TestContract<MarketContractRegistryInterface>;
  let contract: MarketContractRegistryInterface;

  beforeEach(async () => {
    contractTester = new TestContract<MarketContractRegistryInterface>(
      'MarketContractRegistryInterface',
      MARKET_CONTRACT_ADDRESS
    );
    contract = await contractTester.createContract(
      MarketContractRegistryInterface.createAndValidate
    );
  });

  it('throws on invalid contract code', async () => {
    const testContract = new TestContract<MarketContractRegistryInterface>(
      'MarketContractRegistryInterface',
      MARKET_CONTRACT_ADDRESS,
      '0x0'
    );

    try {
      await testContract.createContract(MarketContractRegistryInterface.createAndValidate);

      fail();
    } catch (e) {
      expect(e.message).toContain('doesn\'t exist');
    }
  });

  describe('methods', () => {
    it('has isAddressWhiteListed', async () => {
      const contractAddress = '0x46077e4f19f39ae142b09d1c08262a4151703b47';
      const expected = true;

      contractTester.setupMethodSpy('isAddressWhiteListed', expected, contractAddress);
      await contractTester.assertMethod(contract.isAddressWhiteListed(contractAddress), expected);
    });

    it('has addAddressToWhiteList', async () => {
      const contractAddress = '0x427ffac8cd8a92dc65fc6b1dc6f48c10df950b9f';
      contractTester.setupTxMethodSpy('addAddressToWhiteListTx', {}, contractAddress);

      await contractTester.assertTxMethod(contract.addAddressToWhiteListTx(contractAddress), {});
    });
  });
});
