import React, { Fragment } from 'react';
import { twMerge } from 'tailwind-merge';
import data from "./data";
import SidebarOption from './Options';
import Dropdown from '../dropdown';
import { CheckIcon, CloseIcon, LogoutIcon, PlusIcon } from '../../../assets';
import { useAppStore, userData } from '../../../store';
import { Button } from '..';
import { IUser } from '../../../utils';

const Sidebar = () => {

  const { user: currentUser, updateUser, hideSidebar, toggleSidebar } = useAppStore(state => state);

  const selectUser = (user: IUser, defaultSelectAction: () => void) => {
    updateUser(user);
    defaultSelectAction();
  };

  const userActions = [
    {
      Icon: PlusIcon,
      label: "Create new account",
      href: "/#"
    },
    {
      Icon: LogoutIcon,
      label: "Log out",
      actions: () => updateUser(null)
    }
  ];

  return (
    <Fragment>
      <div
        className={twMerge('absolute inset-0 bg-black z-[1] opacity-75 lg:z-[0] lg:hidden',
          hideSidebar && "hidden"
        )}
        onClick={toggleSidebar}
      />

      <aside className={
        twMerge('border-r min-w-[50px] max-w-[85%] lg:max-w-[237px] w-full px-6 py-5 bg-white transition-all duration-300',
          'absolute z-[9] inset-0 shadow-lg lg:shadow-none lg:relative lg:z-0 bg-white',
          hideSidebar && "-left-[85%] lg:left-0"
        )}>

        <Button
          className={"stroke-black mb-5 lg:hidden"}
          label={<CloseIcon />}
          onClick={toggleSidebar}
        />

        <Dropdown
          trigger={
            <Fragment>
              <span className='px-2 py-1 bg-gray-200 text-sm rounded uppercase'>{currentUser?.name.charAt(0)}</span>
              <span className='ml-2 font-mediu  text-base'>{currentUser?.name}</span>
            </Fragment>
          }
        >
          {
            (handleSelect: any) => (
              <>
                <ul className='p-[6px]'>
                  {userData?.map(user => (
                    <li key={user.name} className='w-full'>
                      <Button
                        className={"text-start justify-start hover:bg-bushaGray rounded w-full p-1"}
                        prefixIcon={<p className='px-2 py-1 bg-gray-200 text-xl rounded uppercase w-[32px] h-[32px]'>{user?.name.charAt(0)}</p>}
                        label={
                          <span className='text-base'>{user?.name}</span>
                        }
                        onClick={() => selectUser(user, handleSelect)}
                        suffixIcon={currentUser?.name === user.name && <CheckIcon className={"ml-auto stroke-black"} />}
                      />
                    </li>
                  ))
                  }

                </ul>
                <hr />

                <ul className='p-[6px] gap-1'>
                  {userActions.map((action, index) => (
                    <li key={index} className='w-full'>
                      <Button
                        href={action?.href}
                        className={"text-start justify-start hover:bg-bushaGray rounded w-full p-1"}
                        prefixIcon={<action.Icon className={"stroke-black"} />}
                        label={
                          <span className='text-normal ml-2'>{action.label}</span>
                        }
                        onClick={action.actions}
                      />
                    </li>
                  ))}

                </ul>
              </>
            )
          }
        </Dropdown>

        <ul className='mt-10 space-y-2'>
          {data.map((option, index) => (
            <SidebarOption key={index} {...option} />
          ))}
        </ul>

      </aside >
    </Fragment>
  )
}

export default Sidebar