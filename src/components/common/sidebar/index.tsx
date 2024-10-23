import React from 'react';
import data from "./data";
import SidebarOptions from './Options';
import Dropdown from '../dropdown';

type Props = {};

const Sidebar = (props: Props) => {

  return (
    <aside className='border-r min-w-[50px] max-w-[237px] w-full px-6 py-5'>

      <Dropdown
        options={['Profile', 'Settings', 'Logout']}
        onSelect={() => { alert("New user login") }}
      />

      <ul className='mt-10 space-y-2'>
        {data.map((option, index) => (
          <SidebarOptions key={index} {...option} />
        ))}
      </ul>

    </aside>
  )
}

export default Sidebar