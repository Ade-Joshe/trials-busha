import React from 'react'
import Sidebar from '../../components/common/sidebar'

export default function DashboardPage() {

  return (
    <div className='container mx-auto h-screen flex transition-all duration-200'>
      <Sidebar />

      <main className='px-10'>
        <h1 className='text-2xl'>Dashboard</h1>
      </main>

    </div>
  )
}
