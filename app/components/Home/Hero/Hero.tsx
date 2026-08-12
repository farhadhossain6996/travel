import React from 'react'
import SearchBox from '../../Helper/SearchBox'
import Link from 'next/link'

const Hero  = ()=> {
  return (
    <div className='relative w-full h-[120vh] sm:h-screen'>
        {/* OverLay */}
<div className="absolute top-0 left-0 w-full h-full bg-blue-900 opacity-50 "></div>
<video src="/image/travell.mp4" autoPlay muted loop preload='metadata' className=' w-full h-full object-cover'/>     

{/* text-coontent */}

<div className="absolute z-50 w-full h-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">

  <div className="flex items-center justify-center flex-col w-full h-full">
    <div data-aos="fade-up">
        <h1 className='text-[25px] mb-4 md:mb-0 text-center md:text-[35px] lg:text-[45px] tracking-[0.5rem] text-white font-bold uppercase'>Let's escape into nature</h1>
        <p className='text-white md:text-base text-center text-lg font-normal [word-spacing:5px]'>Get the best prices on 3,000,000+ properties, worldwide</p>
    </div>
    <SearchBox/>
    
    <Link href="#" className='relative  rounded px-14 md:px-28 -mt-4 py-2.5 overflow-hidden group bg-amber-500 hover:bg-linear-to-r  hover:from-amber-400 text-white  hover:ring-2 hover:ring-offset-2 hover:ring-amber-300 transition-all ease-out duration-300'>
    <span className='absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease'>

    </span>
    <span className='relative font-bold'>Search</span>
    </Link>


    </div>  
</div>









         </div>
  )
}

export default Hero