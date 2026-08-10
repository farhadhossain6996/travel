import React from 'react'
import { ImAirplane } from "react-icons/im";

const gradientGreen = {
  gradient: "linear-gradient(135deg, #0f4c23 0%, #1a7a3c 50%, #22c55e 100%)",
};
const gradientBlue ={
    gradient: "linear-gradient(135deg, #1a1a6e 0%, #2563eb 60%, #06b6d4 100%)",
}
const gradientYellow ={
     gradient:
      "linear-gradient(135deg, #78350f 0%, #d97706 40%, #fbbf24 65%, #db2777 100%)",
}


const OfferCard = () => {
  return (
    <div className=' lg:flex items-center justify-between    mt-16 gap-x-8'>
      <div className="bg-white rounded-lg lg:w-[33%] w-full">
        <div className=" flex items-center justify-between rounded-lg  p-4  text-white " style={{ background: gradientGreen.gradient }} >
            <div className="flex flex-col space-y-2">
                <p className='text-3xl font-semibold '>Upto 50% Off</p>
            <p className=' font-normal opacity-60 '>Lorem ipsum  consectetur.</p>
            </div>
            <div className="">
                <p>logo Part</p>
            </div>
        </div>

       <div className="my-2 p-4">
         <div className=" flex gap-x-4 items-center ">
            <ImAirplane className=' text-yellow-500 w-4 h-4'/>
            <p className='font-semibold text-base'>Up to 50% Discount for Flights</p>
        </div>
       </div>
       <div className="px-4 pb-1">
         <div className=" flex gap-x-4  items-center ">
            <div className="border-2  border-gray-400 bg-white w-full rounded-lg p-2.5 ">
                <p className='font-normal opacity-60'>Use This Code</p>
                <p className='font-semibold text-base'>GET50</p>
            </div>
            <button className='bg-amber-500 p-4 rounded-lg hover:bg-green-700 duration-300 transition-all hover:scale-105'>
                <p className='font-bold text-base text-white  '> Copy</p>
                 </button>
        </div>
          <div className="my-3 ">
         <div className=" flex gap-x-4 items-center ">
        
<p className='font-semibold md:text-base text-[12px]'>
    Valid Until 31 September
    </p>
<p className='font-normal opacity-60 md:text-base text-[13px]'>
View Details</p>
        </div>
       </div>
       </div>
      </div>
      <div className="bg-white rounded-lg  lg:w-[33%] w-full lg:my-0 my-10 ">
        <div className=" flex items-center justify-between rounded-lg  p-4  text-white " style={{background:gradientBlue.gradient}} >
            <div className="flex flex-col space-y-2">
                <p className='text-3xl font-semibold '>Upto 50% Off</p>
            <p className=' font-normal opacity-60 '>Lorem ipsum  consectetur.</p>
            </div>
            <div className="">
                <p>logo Part</p>
            </div>
        </div>

       <div className="my-2 p-4">
         <div className=" flex gap-x-4 items-center ">
            <ImAirplane className=' text-yellow-500 w-4 h-4'/>
            <p className='font-semibold text-base'>Up to 50% Discount for Flights</p>
        </div>
       </div>
       <div className="px-4 pb-1">
         <div className=" flex gap-x-4 items-center ">
            <div className="border-2  border-gray-400 bg-white w-full rounded-lg p-2.5 ">
                <p className='font-normal opacity-60'>Use This Code</p>
                <p className='font-semibold text-base'>GET50</p>
            </div>
            <button className='bg-amber-500 p-4 rounded-lg hover:bg-green-700 duration-300 transition-all hover:scale-105'>
                <p className='font-bold text-base text-white  '> Copy</p>
                 </button>
        </div>
          <div className="my-3 ">
         <div className=" flex gap-x-4 items-center ">
        
<p className='font-semibold md:text-base text-[12px]'>
    Valid Until 31 September
    </p>
<p className='font-normal opacity-60 md:text-base text-[13px]'>
View Details</p>
        </div>
       </div>
       </div>
      </div>
      <div className="bg-white rounded-lg  lg:w-[33%] w-full ">
        <div className=" flex items-center justify-between rounded-lg  p-4  text-white " style={{ background: gradientYellow.gradient }} >
            <div className="flex flex-col space-y-2">
                <p className='text-3xl font-semibold '>Upto 50% Off</p>
            <p className=' font-normal opacity-60 '>Lorem ipsum  consectetur.</p>
            </div>
            <div className="">
                <p>logo Part</p>
            </div>
        </div>

       <div className="my-2 p-4">
         <div className=" flex gap-x-4 items-center ">
            <ImAirplane className=' text-yellow-500 w-4 h-4'/>
            <p className='font-semibold text-base'>Up to 50% Discount for Flights</p>
        </div>
       </div>
       <div className="px-4 pb-1">
         <div className=" flex gap-x-4 items-center ">
            <div className="border-2  border-gray-400 bg-white w-full rounded-lg p-2.5 ">
                <p className='font-normal opacity-60'>Use This Code</p>
                <p className='font-semibold text-base'>GET50</p>
            </div>
            <button className='bg-amber-500 p-4 rounded-lg hover:bg-green-700 duration-300 transition-all hover:scale-105'>
                <p className='font-bold text-base text-white  '> Copy</p>
                 </button>
        </div>
          <div className="my-3 ">
         <div className=" flex gap-x-4 items-center ">
        
<p className='font-semibold md:text-base text-[12px] '>
    Valid Until 31 September
    </p>
<p className='font-normal opacity-60 md:text-base text-[13px]'>
View Details</p>
        </div>
       </div>
       </div>
      </div>
    </div>
  )
}

export default OfferCard
