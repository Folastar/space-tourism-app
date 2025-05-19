import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
   <>
   
        <Header/>

        <main className=' h-screen flex items-center justify-center'>
            <Outlet/>

        </main>

   

   </>
  )
}

export default RootLayout
