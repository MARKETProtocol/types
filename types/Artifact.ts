export interface Artifact {
  contract_name: string;
  abi: object;
  networks: {
    [networkId: number]: {
      address: string;
    };
  };
}
