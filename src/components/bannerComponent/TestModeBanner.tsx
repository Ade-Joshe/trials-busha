import React from 'react'
import Button from '../common/button'
import { ArrowRightIcon, RedirectIcon } from '../../assets'

const TestModeBanner = () => {
  return (
    <div className='flex justify-between lg:items-center bg-[#F04438] w-full text-white p-3 lg:py-2 lg:px-5 text-xs gap-2 flex-wrap flex-col lg:flex-row'>
      <span >
        Test mode
      </span>

      <div className='inline-flex flex-wrap items-center text-xs'>
        You’re using test data. No real transactions will be processed.

        <Button
          href='/#'
          label={"Learn more about test mode"}
          className='text-xs underline pl-1 inline-flex p-0'
          suffixIcon={<RedirectIcon className={"stroke-white"} />}
        />
      </div>

      <Button
        href='/#'
        label={"Complete verification"}
        className='text-xs justify-start lg:justify-center p-0 w-auto'
        suffixIcon={<ArrowRightIcon className={"fill-white"} />}
      />
    </div>
  )
}

export default TestModeBanner