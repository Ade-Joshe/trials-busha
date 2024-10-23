import React from 'react'
import Button from '../common/button';
import { ChatBubbleIcon, NotificationIcon, RedirectIcon } from '../../assets';
import { useAppStore } from '../../store';
import ToggleSwitch from '../common/toggle';

type Props = {}

const Header = (props: Props) => {

  const { updateAppMode, mode } = useAppStore(state => state);

  return (
    <header className='flex items-center justify-end gap-2 p-2 border-b'>
      <Button
        href='/#'
        label={"Test mode"}
        className='text-xs'
        onClick={() => updateAppMode(mode === "TEST" ? "LIVE" : "TEST")}
        suffixIcon={
          <ToggleSwitch isOn={mode === "TEST"} onToggle={() => { }} />
        }
      />

      <Button
        href='/#'
        label={"Docs"}
        className='text-xs'
        suffixIcon={<RedirectIcon className={"stroke-black"} />}
      />

      <Button
        href='/#'
        label={"Help"}
        className='text-xs'
        suffixIcon={<ChatBubbleIcon className={"fill-black"} />}
      />

      <NotificationIcon className={"fill-black"} />
    </header>
  )
}

export default Header;