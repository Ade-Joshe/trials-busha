import React, { Dispatch, SetStateAction } from 'react';
import { twMerge } from 'tailwind-merge'
import { Button } from '..'
import { TAccount, TTab } from '../../assetList/interface';

type TabProps = {
  options: Omit<TAccount, "id">[]
  activeTab: string
  setActiveTab: Dispatch<SetStateAction<TTab>>
}

const Tab = ({ options, activeTab, setActiveTab }: TabProps) => {
  return (
    <ul className='inline-flex items-center px-2 py-2 rounded-lg bg-bushaGray w-auto text-sm gap-2' >
      {
        options.map(({ label, value }, _) => (
          <li key={value} >
            <Button
              label={label}
              onClick={() => setActiveTab(value)}
              className={twMerge('py-1 px-4 rounded font-normal', activeTab === value && "bg-white font-medium")}
            />
          </li>
        ))}
    </ul>
  )
}

export default Tab