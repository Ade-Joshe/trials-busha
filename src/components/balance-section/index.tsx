import React, { useState } from 'react'
import Button from '../common/button'
import { ChartContent, ChartFrame, DummyChart, InfoIcon, PlusIcon, RedirectIcon } from '../../assets'
import { Dropdown } from '..'
import Tab from '../common/tabs'

const BalanceCard = () => {

  const dateOptions = [
    { label: "Today", value: "1" },
    { label: "Last 7 days", value: "7" },
    { label: "Last 30 days", value: "30" },
    { label: "Month to date", value: 'x' },
    { label: "Year to date", value: 'y' },
    { label: "Last 12 months", value: 'z', hasDivider: true },
    { label: "All time", value: 'a' },
    { label: "Custom range", value: 'b', hasDivider: false }
  ];

  const [transactionFilter, setTransactionFilter] = useState(dateOptions[2]);

  return (
    <section className='py-5 px-4'>
      <div className='flex justify-between items-center mb-5'>
        <h1 className='text-xl font-medium'>Balance</h1>

        <div className='items-center gap-3 hidden lg:flex'>
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

        <Button
          href='/#'
          label={"Move money"}
          className='text-xs bg-black text-white lg:hidden rounded-lg'
          prefixIcon={<RedirectIcon className={"stroke-white"} />}
        />
      </div>

      <div className='border rounded rounded-lg p-2'>
        <div className='flex items-start justify-between'>
          <div className='flex flex-col'>
            <p className='text-gray-500 text-xs flex items-center gap-1'>
              <span>Total balance </span><InfoIcon />
            </p>
            <span className='text-xl font-medium'>₦0.00</span>

            <Tab
              className={"mt-5 lg:hidden"}
              // @ts-expect-error
              options={[{ label: "30 days", value: "30" }, { label: "All time", value: 'a' }]}
              activeTab={'30'}
              setActiveTab={setTransactionFilter}
            />
          </div>

          <Dropdown
            trigger={
              <span className='px-2 text-sm'>{transactionFilter.label}</span>
            }
            className={"hidden lg:flex"}
            triggerClassName={"bg-bushaGray px-2 py-2"}
            options={dateOptions}
            position='right'
            selectedOption={String(transactionFilter.value)}
            onSelect={(value) => setTransactionFilter(value)}
          />
        </div>

        <div className='relative'>
          <DummyChart className={"w-full absolute"} />
          <ChartContent className={"w-full"} />
          <ChartFrame className={"w-full"} />
        </div>
      </div>
    </section>
  )
}

export default BalanceCard