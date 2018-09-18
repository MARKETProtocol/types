export interface Artifact {
  contractName: string;
  abi: object;
  networks: {
    [networkId: number]: {
      address: string;
    };
  };
}
