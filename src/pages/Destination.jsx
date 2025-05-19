import React, { useEffect, useState } from 'react'
import {destinations} from '../starter-code/data.json'
import { Link } from 'react-router-dom'
// import data from '/data.json'
const Destination = () => {
        const [data]= useState(destinations)
        const [currValue,setCurrValue]=useState(0)

        const {name,description,images, distance,travel}= data[currValue]
    // useEffect(()=>{
    //     fetch('http://localhost:4040/destinations')
    //     .then(res=>{
    //         return res.json()
    //     })
    //     .then((data)=>{setData(data)})
    // },[])
  return (
   <section className=' grid grid-cols-1 sm:grid-cols-2 sm:pt-[8rem] pt-[11rem] mx-auto bg-cover min-h-screen px-[5rem]  sm:bg-[image:url(/assets/destination/background-destination-desktop.jpg)] bg-[image:url(/assets/destination/background-destination-mobile.jpg)]'>

        <div>
            <h1 className='text-2xl mb-5'>01  PICK YOUR DESTINATION</h1>
            <img src={images.webp} className='object-fit h-fit w-fit' alt="" />



        </div>

        <div>
            <div>
            {data.map((item,index)=>(
                        <button className={`uppercase sm:text-2xl px-3 pb-2 cursor-pointer mt-4 ${index===currValue&& "underline underline-offset-8"}`} key={index} onClick={()=>{setCurrValue(index)}}>
                            {item.name}
                        </button>
                    ))}
                
            </div>

            <div>
               <h1 className="sm:text-7xl text-3xl tracking-widest">{name}</h1>

               <p className='py-8 text-center'>{description}</p>
               <hr />
                    
                   <article className='mt-8 flex  justify-between items-center'>
                        <div>
                            <span>AVG. DISTANCE</span>
                            <p>{distance}</p>
                        </div>

                        <div>
                            <span>EST. TRAVEL TIME</span>
                            <p>{travel}</p>
                        </div>
                   </article>

            </div>
        </div>
   </section>
  )
}

export default Destination
