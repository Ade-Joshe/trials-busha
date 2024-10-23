import React, { Fragment } from 'react';
import data from "./data";
import SidebarOptions from './Options';
import Dropdown from '../dropdown';
import { DropdownIcon } from '../../../assets';
import { useAppStore } from '../../../store';
import userData from '../../../store/data';

type Props = {};

const Sidebar = (props: Props) => {

  const { user, updateUser } = useAppStore(state => state)

  return (
    <aside className='border-r min-w-[50px] max-w-[237px] w-full px-6 py-5'>

      <Dropdown
        target={
          <>
            <span className='px-2 py-1 bg-gray-200 text-sm rounded uppercase'>{user?.name.charAt(0)}</span>
            <span className='ml-2 font-mediu  text-base'>{user?.name}</span>
            <DropdownIcon />
          </>
        }
        onSelect={(user) => updateUser(user)}
      >
        <ul>
          {
            userData?.map(item => (
              <li key={item.name} className='p-1 gap-2 w-full'>
                <span className='px-2 py-1 bg-gray-200 text-xl rounded uppercase'>{item?.name.charAt(0)}</span>
                <span className='ml-2 font-bold text-base'>{item?.name}</span>
              </li>
            ))
          }
        </ul>
      </Dropdown>

      <ul className='mt-10 space-y-2'>
        {data.map((option, index) => (
          <SidebarOptions key={index} {...option} />
        ))}
      </ul>

    </aside >
  )
}

export default Sidebar