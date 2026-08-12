"use client"
import React, { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa';


const ScrollToTop = () => {

    const[isVisible,setIsvisible]=useState(false)

    useEffect(()=> {
        const toggleVisibility = ()=>{
            if(window.scrollY >300){
                setIsvisible(true)
            }else(
                setIsvisible(false)
            )
        };
        window.addEventListener("scroll", toggleVisibility );
        return() => 
    window.removeEventListener("scroll" ,toggleVisibility);
    },[]);

const ScrollToTop =()=>{
    window.scroll({
        top:0,
        behavior:"smooth",
    })
}


  return (
    <div className='fixed bottom-4 animate-pulse right-4'>
      {isVisible && <button onClick={ScrollToTop} className='bg-amber-500 text-white rounded-full w-12 h-12 flex items-center justify-center focus:outline-none'>
        <FaArrowUp/>
        
        </button>}
    </div>
  )
}

export default ScrollToTop

