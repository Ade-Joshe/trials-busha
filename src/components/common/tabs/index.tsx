import React, { Dispatch, SetStateAction } from 'react';
import { twMerge } from 'tailwind-merge'
import { Button } from '..'
import { TAccount } from '../../assetList/interface';

type TabProps = {
  options: Omit<TAccount, "id">[]
  activeTab: string;
  className?: string;
  setActiveTab: Dispatch<SetStateAction<any>>
}

const Tab = ({ options, activeTab, setActiveTab, className }: TabProps) => {
  return (
    <ul className={twMerge('inline-flex items-center p-1 rounded-lg bg-bushaGray w-auto text-sm gap-2', className)} >
      {
        options.map(({ label, value }, _) => (
          <li key={value} >
            <Button
              label={label}
              onClick={() => setActiveTab(value)}
              className={twMerge('py-1 px-4 rounded-lg font-normal', activeTab === value && "bg-white font-medium")}
            />
          </li>
        ))}
    </ul>
  )
}

export default Tab