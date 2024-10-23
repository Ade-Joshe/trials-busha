import React, { Fragment, useMemo, useState } from 'react';
import { twMerge } from "tailwind-merge"
import Button from '../common/button';
import { useAppStore } from '../../store';
import data, { accountHeaders } from './data';
import { Tab } from './interface';

const AccountsAssets = () => {

  const [activeTab, setActiveTab] = useState<Tab>("");

  const assetsToRender = useMemo(() => {
    if (activeTab) {
      return { [activeTab]: data[activeTab] };
    }
    else return data;
  }, [activeTab])

  const user = useAppStore(state => state.user);

  return (
    <section className='p-5'>
      <h1 className='text-xl font-medium'>Accounts & Assets</h1>

      <div className='mt-4'>
        <ul className='inline-flex items-center px-2 py-2 rounded-lg bg-bushaGray w-auto text-sm gap-2'>
          {accountHeaders.map(({ id, label, value }, _) => (
            <li key={id}>
              <Button
                label={label}
                onClick={() => setActiveTab(value)}
                className={twMerge('py-1 px-4 rounded font-normal', activeTab === value && "bg-white font-medium")}
              />
            </li>
          ))}
        </ul>
      </div>

      <div className='border rounded rounded-lg px-3 mt-4'>
        {
          Object.keys(assetsToRender).map((key, index) => {

            const { title, children } = assetsToRender[key as keyof typeof assetsToRender];
            const isLastItemInList = index === Object.keys(assetsToRender).length - 1;

            return (
              <Fragment key={title}>
                <p className='text-sm text-gray-600 py-3'>{title}</p>

                {
                  children.map((child, index) => (
                    <button key={index} className='border-t border-gray-200 px-2 py-3 flex items-start justify-between text-sm w-full hover:bg-bushaGray transition-color duration-200'>
                      <div className='flex gap-3 items-start'>
                        {child.Icon}

                        <div className='flex flex-col items-start justify-between'>
                          <p className='font-medium'>{child.title}</p>
                          <span className='text-gray-500 text-xs'>{child.currency}</span>
                        </div>
                      </div>

                      <div className='flex flex-col items-end justify-between'>
                        <p className='font-medium'>{`${child.amount} ${child.currency}`}</p>
                        <span className='text-gray-500 text-xs'>{child?.balance ? `${child.balance} ${user?.baseCurrency}` : "Balance"}</span>
                      </div>
                    </button>
                  ))
                }

                {!isLastItemInList && <hr />}
              </Fragment>
            )
          })
        }
      </div>

    </section>
  )
}

export default AccountsAssets