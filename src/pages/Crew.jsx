import React, { useState } from 'react'
import {crew} from '../starter-code/data.json'
const Crew = () => {
    const [data]=useState(crew)
    const [currValue,setCurrValue]=useState(1)
    const {name,images,bio,role}=data[currValue]
  return (
    <section className='flex min-h-screen justify-center items-top w-full bg-cover pt-[13rem] bg-[image:url(/assets/crew/background-crew-tablet.jpg)] sm:bg-[image:url(/assets/crew/background-crew-desktop.jpg)]  bg-[image:url(/assets/crew/background-crew-mobile.jpg)]'>
            <div className='w-1/2 h-full leading '>
                <h1 className='uppercase mb-10 text-xl'><span>02</span> MEET YOUR CREW</h1>

                <div className='mt-[10rem]'>
                    <h2 className='uppercase text-2xl text-white/50'>{role}</h2>
                    <p className='text-3xl py-2 uppercase'>{name}</p>
                    <p className='tracking-wide py-2'>{bio}</p>
                </div>
                <button>o</button>
            </div>

            <figure className=''>
                <img className='object-contain w-fit h-[30rem]' src={images.webp} alt="" />
            </figure>

           
    </section>
  )
}

export default Crew
