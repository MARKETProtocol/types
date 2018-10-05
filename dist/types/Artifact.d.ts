export interface Artifact {
    contractName: string;
    abi: any[];
    networks: {
        [networkId: number]: {
            address: string;
        };
    };
}
