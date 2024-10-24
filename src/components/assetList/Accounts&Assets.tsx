import React, { Fragment, useMemo, useState } from 'react';
import { useAppStore } from '../../store';
import data, { accountHeaders } from './data';
import { TTab } from './interface';
import { formatCurrency } from '../../utils';
import Tab from '../common/tabs';

const AccountsAssets = () => {

  const [activeTab, setActiveTab] = useState<TTab>("");

  const assetsToRender = useMemo(() => {
    if (activeTab) {
      return { [activeTab]: data[activeTab] };
    }
    else return data;
  }, [activeTab])

  const user = useAppStore(state => state.user);

  return (
    <section className='py-5 px-4'>
      <h1 className='text-xl font-medium'>Accounts & Assets</h1>

      <div className='mt-4'>
        <Tab
          options={accountHeaders.map(({ label, value }) => ({ label, value }))}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>

      <div className='border rounded rounded-lg px-3 mt-4 pb-4'>
        {
          Object.keys(assetsToRender).map((key, index) => {

            const { title, children } = assetsToRender[key as keyof typeof assetsToRender];
            const isLastItemInList = index === Object.keys(assetsToRender).length - 1;

            return (
              <Fragment key={key}>
                <p className='text-sm text-gray-600 py-3'>{title}</p>

                {
                  children.map((child, index) => (
                    <div className='border-t my-1' key={child.title}>
                      <button key={index} className='mt-1 p-2 flex items-start justify-between text-sm w-full hover:bg-bushaGray transition-color duration-200 rounded-lg'>
                        <div className='flex gap-3 items-start'>
                          {child.Icon}

                          <div className='flex flex-col items-start justify-between'>
                            <p className='font-medium'>{child.title}</p>
                            <span className='text-gray-500 text-xs'>{child.currency}</span>
                          </div>
                        </div>

                        <div className='flex flex-col items-end justify-between'>
                          <p className='font-medium'>{`${formatCurrency(child.amount)} ${child.currency}`}</p>
                          <span className='text-gray-500 text-xs'>{child?.balance ? `${child.balance} ${user?.baseCurrency}` : "Balance"}</span>
                        </div>
                      </button>
                    </div>
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