import BigNumber from 'bignumber.js';

export interface Order {
  contractAddress: string;
  expirationTimestamp: BigNumber;
  feeRecipient: string;
  maker: string;
  makerFee: BigNumber;
  orderQty: BigNumber;
  price: BigNumber;
  remainingQty: BigNumber;
  salt: BigNumber;
  taker: string;
  takerFee: BigNumber;
}

export interface SignedOrder extends Order {
  ecSignature: ECSignature;
}

/**
 * Elliptic Curve signature
 */
export interface ECSignature {
  v: number;
  r: string;
  s: string;
}
