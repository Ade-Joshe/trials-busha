import React, { Fragment } from 'react'
import { AccountsAssets, BalanceCard } from '../../components'

export default function DashboardPage() {

  return (
    <Fragment>
      <BalanceCard />

      <AccountsAssets />
    </Fragment>
  )
}
