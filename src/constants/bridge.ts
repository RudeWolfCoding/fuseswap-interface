import { ChainId } from '@fuseio/fuse-swap-sdk'

export const DEFAULT_CONFIRMATIONS_LIMIT = 2

export const BASIC_BRIDGE_TOKENS = {
  [ChainId.MAINNET]: [
    {
      HOME_BRIDGE_MEDIATOR: '0xD39021DB018E2CAEadb4B2e6717D31550e7918D0',
      HOME_TOKEN_ADDRESS: '0x495d133b938596c9984d462f007b676bdc57ecec',
      FOREIGN_BRIDGE_MEDIATOR: '0xD5D11eE582c8931F336fbcd135e98CEE4DB8CCB0',
      FOREIGN_TOKEN_ADDRESS: '0x67c5870b4a41d4ebef24d2456547a03f1f3e094b',
      SYMBOL: 'G$',
      DAILY_LIMIT: 30000000000,
      MAX_AMOUNT_PER_TX: 1500000000,
      MIN_AMOUNT_PER_TX: 100
    }
  ],
  [ChainId.ROPSTEN]: [
    {
      HOME_BRIDGE_MEDIATOR: '0x6aF8ac12f9a285fBeb30D2a7eEcf15B8D4B59253',
      HOME_TOKEN_ADDRESS: '0x100b8fd10ff8DC43fda45E636B4BB1eE6088270a',
      FOREIGN_BRIDGE_MEDIATOR: '0xEDA39475415f1A2944a467Aa6359CB4C1c3ed50f',
      FOREIGN_TOKEN_ADDRESS: '0x4738c5e91c4f809da21dd0df4b5ad5f699878c1c',
      SYMBOL: 'G$',
      DAILY_LIMIT: 30000000000,
      MAX_AMOUNT_PER_TX: 1500000000,
      MIN_AMOUNT_PER_TX: 100
    }
  ]
}
