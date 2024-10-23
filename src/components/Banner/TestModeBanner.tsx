import React from 'react'
import Button from '../common/button'
import { ArrowRightIcon, RedirectIcon } from '../../assets'

const TestModeBanner = () => {
  return (
    <div className='flex justify-between items-center bg-[#F04438] h-[36px] w-full text-white p-2 text-xs gap-2'>
      Test mode

      <div className='flex items-center text-xs'>
        You’re using test data. No real transactions will be processed.

        <Button
          href='/#'
          label={"Learn more about test mode"}
          className='text-xs underline'
          suffixIcon={<RedirectIcon className={"stroke-white"} />}
        />
      </div>

      <Button
        href='/#'
        label={"Complete verification"}
        className='text-xs'
        suffixIcon={<ArrowRightIcon className={"fill-white"} />}
      />
    </div>
  )
}

export default TestModeBanner