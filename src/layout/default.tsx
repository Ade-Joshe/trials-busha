import React from 'react';
import { Navigate } from "react-router-dom";
import { useAppStore } from '../store'

type Props = {
  children: React.ReactNode,
}

const DefaultUserLayout = ({ children }: Props) => {

  const { user } = useAppStore(state => state);
  console.log({ user });

  if (user)
    return <Navigate to={"/dashboard"} />

  return (
    <div className='container bg-red-900 mx-auto h-screen flex transition-all duration-200'>
      {children}
    </div>
  )
}

export default DefaultUserLayout