import React from 'react';
import { twMerge } from 'tailwind-merge';
import { useLocation } from "react-router-dom"
import { TSidebarOption } from '../../../utils';

const SidebarOptions = ({ path, Icon, name }: TSidebarOption) => {

  const { pathname } = useLocation();
  const active = pathname === path;

  return (
    <li className='flex'>
      <a href={path}
        className={
          twMerge('group w-full flex items-center gap-2 px-2 py-1 rounded-md cursor-pointer hover:bg-gray-200',
            'text-gray-500 hover:text-black transition-color duration-200',
            active && 'bg-bushaGray text-black',
          )}
      >
        <Icon className={twMerge("fill-gray-300 group-hover:fill-black transition-color duration-200", active && "fill-black")} />
        <span>{name}</span>
      </a>
    </li>
  )
}

export default SidebarOptions;
