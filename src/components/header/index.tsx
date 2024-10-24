import React from 'react'
import Button from '../common/button';
import { ChatBubbleIcon, NotificationIcon, RedirectIcon, HamburgerIcon } from '../../assets';
import { useAppStore } from '../../store';
import ToggleSwitch from '../common/toggle';

const Header = () => {

  const { toggleAppMode, mode, toggleSidebar } = useAppStore(state => state);

  return (
    <header className='flex items-center justify-between border-b px-2 lg:px-0'>
      <div>
        <Button
          href='/#'
          className='lg:hidden'
          onClick={toggleSidebar}
          label={<HamburgerIcon className={"stroke-black"} />}
        />
      </div>

      <div className='flex items-center gap-2 py-2 [&>*]:px-1'>
        <Button
          href='/#'
          label={"Test mode"}
          className='text-xs'
          onClick={() => toggleAppMode()}
          suffixIcon={
            <ToggleSwitch isOn={mode === "TEST"} onToggle={() => { }} />
          }
        />

        <Button
          href='/#'
          label={"Docs"}
          className='text-xs hidden lg:flex'
          suffixIcon={<RedirectIcon className={"stroke-black"} />}
        />

        <Button
          href='/#'
          label={"Help"}
          className='text-xs hidden lg:flex'
          suffixIcon={<ChatBubbleIcon className={"fill-black"} />}
        />

        <Button
          href='/#'
          label={<NotificationIcon className={"fill-black"} />}
        />
      </div>

    </header>
  )
}

export default Header;