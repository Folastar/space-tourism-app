import React, { useState } from 'react'
import {technology} from '../starter-code/data.json'
const Technology = () => {

    
    const [data]= useState(technology)
    const [currValue,setCurrValue]=useState(2)
    const {name,images,description} =data[currValue]
    const toggleMenu=(currValue)=>{
            setCurrValue(currValue)
    }
    return (
   <>
   <section className='flex  pl-[10rem] justify-between pt-[10rem] min-h-screen w-full bg-cover bg-[image:url(/assets/technology/background-technology-mobile.jpg)]  sm:bg-[image:url(/assets/technology/background-technology-desktop.jpg)]'>
        <div className='w-1/2'>
            <h1 className='mb-[3em] pb-5 uppercase text-3xl'><span className=''>03</span>SPACE LAUNCH 101</h1>

            
            <div className='flex justify-between items-center  gap-y-3.5'>
                <div className='mr-10'>
                    <button onClick={()=>{toggleMenu(0)}} className={`w-15 my-2 h-15 rounded-full border ${currValue===0? "bg-white text-black":"bg-transparent"}`}>1</button>
                    <button onClick={()=>{toggleMenu(1)}} className={` w-15 my-2 h-15 rounded-full border ${currValue===1? "bg-white text-black":"bg-transparent"}`}>2</button>
                    <button onClick={()=>{toggleMenu(2)}} className={`w-15 my-2 h-15 rounded-full border ${currValue===2? "bg-white text-black":"bg-transparent"}`}>3</button>

                </div>
                <div className='flex flex-col min-h-58  justify-between items-top'>
                    <p className={`uppercase text-4xl`}><span className='text-sm uppercase text-white/30'>the terminology...</span><br></br>{name}</p>
                    <p className='tracking-wider'>{description}</p>
                </div>

            </div>

        </div>



        <div>
            
            <figure>
                <img className='object-center w-[30rem] h-[25rem]' src={images.portrait} alt={name}/>
            </figure>
        </div>
   </section>
   </> 
  )
}

export default Technology
