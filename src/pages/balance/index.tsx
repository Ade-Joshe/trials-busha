import React from 'react'
import Sidebar from '../../components/common/sidebar'
import Button from '../../components/common/button'
import { RedirectIcon, PlusIcon } from '../../assets'
import { AccountsAssets } from '../../components/assetList'
import Header from '../../components/header'
import { useAppStore } from '../../store'
import TestModeBanner from '../../components/Banner/TestModeBanner'

export default function BalancePage() {

  const mode = useAppStore(state => state.mode)

  return (
    <div className='container mx-auto h-screen flex transition-all duration-200'>
      <Sidebar />

      <main className='w-full'>

        {mode === "TEST" && <TestModeBanner />}

        <Header />

        <section className='p-5'>
          <div className='flex justify-between items-center mb-5'>
            <h1 className='text-xl font-medium'>Balance</h1>

            <div className='flex items-center gap-3'>
              <Button
                href='/#'
                label={"Deposit"}
                className='text-xs bg-bushaGreen text-white'
                prefixIcon={<PlusIcon className={"stroke-white"} />}
              />
              <Button
                href='/#'
                label={"Transfer"}
                className='text-xs bg-bushaGray'
                prefixIcon={<RedirectIcon className={"stroke-black"} />}
              />
            </div>
          </div>

          <div className='border rounded rounded-lg p-2'>
            <div className='flex items-start justify-between'>
              <div className='flex flex-col'>
                <p className='text-gray-500 text-xs'>Total balance</p>
                <span className='text-xl font-medium'>#0.00</span>
              </div>

              <Button
                href='/#'
                label={"Last 30 days"}
                className='text-xs bg-bushaGray'
              />
            </div>
          </div>
        </section>

        <AccountsAssets />

      </main>

    </div>
  )
}
