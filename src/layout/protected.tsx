import React from 'react';
import { Navigate } from "react-router-dom";
import { Header, Sidebar } from '../components'
import { useAppStore } from '../store'
import { isValidUserRole } from '../utils/user';
import { TestModeBanner } from '../components/bannerComponent';

type Props = {
  children: React.ReactNode,
  roles?: string[]
}

const ProtectedLayout = ({ roles = [], children }: Props) => {

  const { mode, user, updateUser } = useAppStore(state => state);

  if (!user) {
    return <Navigate to={"/"} />
  }

  if (!isValidUserRole(roles, user?.role || "")) {
    console.log({ roles, user });

    alert("You are unauthorized, sorry!");
    updateUser(null);
    return <Navigate to={"/"} />
  }

  return (
    <div className='max-w-[1200px] h-screen mx-auto flex transition-all duration-200'>
      <Sidebar />

      <main className='w-full'>
        {mode === "TEST" && <TestModeBanner />}
        <Header />

        {children}
      </main>
    </div>
  )
}

export default ProtectedLayout