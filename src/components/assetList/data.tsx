import React from 'react';
import { NairaIcon, KenyanShillingIcom, BitcoinIcon, UsdCoinIcon } from '../../assets';
import { TAccount } from './interface';

const data = {
  'bank': {
    title: 'Bank accounts',
    children: [
      {
        Icon: <NairaIcon />,
        currency: "NGN",
        title: 'Naira',
        subtitle: 'Bank ****6789',
        amount: '5993993.86'
      },
      {
        Icon: <KenyanShillingIcom />,
        currency: "KES",
        title: 'Kenyan Shillings',
        amount: '20',
        balance: '12.56'
      }
    ]
  },
  'crypto': {
    title: "Crypto",
    children: [
      {
        id: "bitcoin",
        Icon: <BitcoinIcon />,
        currency: "BTC",
        title: 'Bitcoin',
        amount: '12.0205',
        balance: '12.56'
      },
      {
        id: "shillings",
        Icon: <UsdCoinIcon />,
        currency: "USDC",
        title: 'USD Coin',
        amount: '20',
        balance: '12.56'
      },
      {
        id: "tether",
        Icon: <KenyanShillingIcom />,
        currency: "USDT",
        title: 'Tether',
        amount: '102',
        balance: '12.56'
      },
    ]
  }
};

export const accountHeaders: TAccount[] = [{
  id: 0,
  label: "All",
  value: ""
}, {
  id: 1,
  label: "Fiat",
  value: "bank"
}, {
  id: 2,
  label: "Crypto",
  value: "crypto"
}
];

export default data;