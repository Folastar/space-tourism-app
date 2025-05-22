import React, { useState } from "react";
import { technology } from "../starter-code/data.json";
const Technology = () => {
  const [data] = useState(technology);
  const [currValue, setCurrValue] = useState(2);
  const { name, images, description } = data[currValue];
  const toggleMenu = (currValue) => {
    setCurrValue(currValue);
  };
  return (
    <>
      <section className="flex  sm:pl-[10rem] justify-between sm:pt-[10rem] pt-[30rem] px-20  sm:flex-row flex-col-reverse min-h-screen w-full bg-cover bg-[image:url(/assets/technology/background-technology-mobile.jpg)]  sm:bg-[image:url(/assets/technology/background-technology-desktop.jpg)]">
        <div className="sm:w-1/2 flex flex-col">
          <h1 className="mb-[3rem] pb-5 uppercase text-3xl">
            <span className=" text-white/20 px-3 py-2">03</span>SPACE LAUNCH 101
          </h1>

          <div className="flex justify-between sm:flex-row flex-col items-center ">
            <div className="mr-10 gap-x-3">
              <button
                onClick={() => {
                  toggleMenu(0);
                }}
                className={`w-15 my-2 mx-2 h-15 rounded-full border ${
                  currValue === 0 ? "bg-white text-black" : "bg-transparent"
                }`}
              >
                1
              </button>
              <button
                onClick={() => {
                  toggleMenu(1);
                }}
                className={` w-15 my-2 mx-2 h-15 rounded-full border ${
                  currValue === 1 ? "bg-white text-black" : "bg-transparent"
                }`}
              >
                2
              </button>
              <button
                onClick={() => {
                  toggleMenu(2);
                }}
                className={`w-15 my-2 mx-2 h-15 rounded-full border ${
                  currValue === 2 ? "bg-white text-black" : "bg-transparent"
                }`}
              >
                3
              </button>
            </div>
            <div className="flex flex-col min-h-58 mx-auto justify-between">
              <p className={`uppercase text-4xl`}>
                <span className="text-sm uppercase text-white/30">
                  the terminology...
                </span>
                <br></br>
                {name}
              </p>
              <p className="tracking-wider">{description}</p>
            </div>
          </div>
        </div>

        <div>
          <figure>
            <img
              className="object-center w-[30rem] h-[25rem] "
              src={images.portrait}
              alt={name}
            />
          </figure>
        </div>
      </section>
    </>
  );
};

export default Technology;
