export enum MarketError {
  UnhandledError = 'UNHANDLED_ERROR',
  UserHasNoAssociatedAddress = 'USER_HAS_NO_ASSOCIATED_ADDRESSES',
  UserNotEnabledForContract = 'USER_NOT_ENABLED_FOR_CONTRACT',
  InvalidSignature = 'INVALID_SIGNATURE',
  ContractNotDeployedOnNetwork = 'CONTRACT_NOT_DEPLOYED_ON_NETWORK',
  InsufficientAllowanceForTransfer = 'INSUFFICIENT_ALLOWANCE_FOR_TRANSFER',
  InsufficientBalanceForTransfer = 'INSUFFICIENT_BALANCE_FOR_TRANSFER',
  InsufficientCollateralBalance = 'INSUFFICIENT_COLLATERAL_BALANCE',
  OutOfGas = 'OUT_OF_GAS',
  NoNetworkId = 'NO_NETWORK_ID',
  SubscriptionNotFound = 'SUBSCRIPTION_NOT_FOUND',
  SubscriptionAlreadyPresent = 'SUBSCRIPTION_ALREADY_PRESENT',
  InvalidTaker = 'INVALID_TAKER',
  OrderExpired = 'ORDER_EXPIRED',
  OrderFilledOrCancelled = 'ORDER_FILLED_OR_CANCELLED',
  BuySellMismatch = 'BUY/SELL MISMATCH'
}
