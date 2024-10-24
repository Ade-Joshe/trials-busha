import React from 'react';
import { twMerge } from 'tailwind-merge';
import { useLocation } from "react-router-dom"
import { TSidebarOption } from '../../../utils';
import { Button } from '..';

const SidebarOption = ({ path, Icon, name, hasDivider, isMobile, SuffixIcon }: TSidebarOption) => {

  const { pathname } = useLocation();
  const active = pathname === path;

  return (
    <>
      <li className='flex'>
        <Button
          href={path}
          className={
            twMerge('group w-full flex items-center gap-2 px-2 py-1 rounded-md cursor-pointer hover:bg-bushaGray',
              'justify-start text-gray-500 hover:text-black transition-color duration-200',
              active && 'bg-bushaGray text-black',
              isMobile && "lg:hidden"
            )}
          label={name}
          prefixIcon={Icon && <Icon className={twMerge("fill-gray-300 group-hover:fill-black transition-color duration-200", active && "fill-black")} />}
          suffixIcon={SuffixIcon && <SuffixIcon className={twMerge("ml-auto stroke-black fill-bushaGray group-hover:fill-black transition-color duration-200", active && "fill-black")} />}
        />
      </li>

      {hasDivider && <hr className='lg:hidden' />}
    </>
  )
}

export default SidebarOption;
