import React, { useState } from 'react'
import {NavLink, Link } from 'react-router-dom'
import { NavLinks } from '../constants'
import { useLocation } from 'react-router-dom'
const Header = () => {

    const [isOPen,setIsOpen]=useState(false);

    const toggleMenu =()=>{
        setIsOpen((isOPen)=> !isOPen)
    }
  return (
    <>
    
        <header className='absolute  py-3  min-w-screen'>
            <nav className='flex   justify-between px-6 items-center  py-2'>
                <div>
                    <img src="\assets\shared\logo.svg" alt="" />
                </div>
                <div className='w-[30rem]  hidden sm:block bg-white/10 left-[1rem] relative z-20 top-[.2rem] h-1'></div>
                <ul className='sm:flex  hidden py-4 w-full justify-center bg-white/10 backdrop-blur-6xl pr-[10rem] rounded-sm'>
                    {
                        NavLinks.map(({id, index,name, pathname})=>(
                            <li className='mx-5' key={id}>
                                {/* <Link to={pathname}>{name}</Link> */}
                                <NavLink  className={` text-red`} to={pathname}>{name}</NavLink>
                            </li>
                        ))
                    }

                </ul>
                    {!isOPen?

                        (<img onClick={toggleMenu} className='sm:hidden' src="/assets/shared/icon-hamburger.svg" alt="" />):
                        (<img onClick={toggleMenu} className='sm:hidden' src='/assets/shared/icon-close.svg'/>)
                    }
            </nav>

            <div className={`${isOPen?"max-h-screen transition-all  absolute gap-y-16 right-0 w-3/4 scroll-smooth bg-amber-500 h-screen":" translate-x-3/3"} `}>
                {
                      NavLinks.map(({id,name, pathname})=>(
                        <li className="list-none my-5 px-5" key={id}>
                            <Link to={pathname} className={``}  onClick={toggleMenu}>{name}</Link>
                        </li>
                    ))
                }
            </div>
        </header>
    
    </>
  )
}

export default Header
