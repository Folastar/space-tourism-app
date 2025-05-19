import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <section className='flex justify-center   sm:justify-around gap-y-10  sm:flex-row flex-col w-full items-center '>
        <div className='sm:w-1/3 w-75'>
            <p className="uppercase text-xl">so, you want to travel to </p>
            <h2 className='sm:text-8xl text-5xl my-4'>SPACE</h2>
            <p className='break-words w-full leading-8'>Let’s face it; if you want to go to space, you might as well genuinely go to 
  outer space and not hover kind of on the  edge of it. Well sit back, and relax 
  because we’ll give you a truly out of this world experience!</p>
        </div>

        <button className='w-[10rem] h-[10rem]  items-end text-3xl rounded-full text-black bg-white'>
            <Link  to="/about">Explore</Link>

        </button>
    </section>
  )
}

export default Home
