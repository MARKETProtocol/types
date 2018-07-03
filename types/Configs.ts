/**
 * networkId: The id of the underlying ethereum network your provider is connected to.
 * (1-mainnet, 3-ropsten, 4-rinkeby, 42-kovan, 50-testrpc)
 * gasPrice: Gas price to use with every transaction
 * marketContractRegistryAddress: The address of the MARKET Protocol registry to use
 * marketContractFactoryAddress: The address of the MARKET Protocol factory to use
 * marketCollateralPoolFactoryAddress: The address of a
 * MARKET Protocol collateral pool factory to use.
 * mktTokenAddress: The address of the MARKET Protocol token (MKT) to use
 * orderWatcherConfig: All the configs related to the orderWatcher
 */
export interface MARKETProtocolConfig {
  networkId: number;
  marketContractRegistryAddress?: string;
  marketContractFactoryAddress?: string;
  marketCollateralPoolFactoryAddress?: string;
  marketTokenAddress?: string;
  orderWatcherConfig?: OrderStateWatcherConfig;
}

/**
 * orderExpirationCheckingIntervalMs: How often to check for expired orders. Default: 50
 * eventPollingIntervalMs: How often to poll the Ethereum node for new events. Default: 200
 * expirationMarginMs: Amount of time before order expiry that you'd like to be notified
 * of an orders expiration. Default: 0
 * cleanupJobIntervalMs: How often to run a cleanup job which re-validates all the orders. Defaults: 1h
 * stateLayer: Optional blockchain state layer OrderWatcher will monitor for new events. Default: latest
 */
export interface OrderStateWatcherConfig {
  orderExpirationCheckingIntervalMs?: number;
  eventPollingIntervalMs?: number;
  expirationMarginMs?: number;
  cleanupJobIntervalMs?: number;
  stateLayer: BlockParamLiteral;
}

/**
 * Earliest is omitted by design. It is simply an alias for the `0` constant and
 * is thus not very helpful. Moreover, this type is used in places that only accept
 * `latest` or `pending`.
 */
export enum BlockParamLiteral {
  Latest = 'latest',
  Pending = 'pending'
}

export type BlockParam = BlockParamLiteral | number;
