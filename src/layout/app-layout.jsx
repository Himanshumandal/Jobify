
import React from 'react'
import { Outlet } from 'react-router-dom';
import Headers from '@/components/Headers';

const AppLayout = () => {
  return (
    <div className='grid-background'> 
        <main className='min-h-screen'>
        <Headers/>      
        <Outlet/>
        </main>
        <div className='p-10 text-center bg-gray-800 mt-10'>
            Made with by Himanshu
        </div>
    </div>
  )
}

export default AppLayout;