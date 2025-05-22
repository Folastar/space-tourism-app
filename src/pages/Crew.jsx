import React, { useState } from 'react'
import {crew} from '../starter-code/data.json'
import { FaRegCircle } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
const Crew = () => {
    const [data]=useState(crew)
    const [currValue,setCurrValue]=useState(1)
    const {name,images,bio,role}=data[currValue]


    const toggleBar =(index)=>{
            setCurrValue(index)
        
    }
  return (
    <section className='  w-full bg-cover bg-center min-h-screen  bg-[image:url(/assets/crew/background-crew-mobile.jpg)] sm:bg-[image:url(/assets/crew/background-crew-desktop.jpg)] '>
                <h1 className='uppercase sm:mt-[10rem] mt-[25rem] sm:mb-5 sm:pl-30 pl-40  text-xl '><span>02</span> MEET YOUR CREW</h1>

           <article className='flex justify-center pt-[3rem]   sm:flex-row flex-col-reverse'>
            
                <div className='sm:w-1/2 text-left h-full w-2/3 flex sm:justify-start flex-col-reverse sm:flex-col mx-auto leading '>

                    <div className='mt-[10rem]'>
                        <h2 className='uppercase text-2xl text-white/50'>{role}</h2>
                        <p className='text-3xl py-2 uppercase'>{name}</p>
                        <p className='tracking-wide py-2'>{bio}</p>
                    </div>

                    <ul className='flex gap-x-1 z-40 py-4 justify-center sm:justify-start'>
                        {data.map((item,index)=>(

                            <button className=' ' onClick={()=>toggleBar(index)} key={index}>
                                {index === currValue ? (
                                    <FaCircle className='text-white text-xl' />
                                ) : (
                                    <FaRegCircle className='text-white/50 text-xl' />
                                )}
                            </button>
                        ))}

                    </ul>
                </div>

                <figure className=' mx-auto w-full sm:w-fit px-10'>
                    <img className=' w-fit sm:h-[30rem]  h-[20rem] mx-auto' src={images.webp} alt="" />
                    <div className="w-full bg-white/30 h-0.5"></div>
                </figure>
            </article>     

           
    </section>
  )
}

export default Crew
