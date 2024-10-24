import React, { Fragment } from 'react';
import { BalanceCard, AccountsAssets } from '../../components';

export default function BalancePage() {

  return (
    <Fragment>
      <BalanceCard />

      <AccountsAssets />
    </Fragment>
  )
}
