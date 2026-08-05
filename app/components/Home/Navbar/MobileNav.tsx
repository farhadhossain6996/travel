import { navLinks } from '@/constant/constant'
import Link from 'next/link'
import React from 'react'
import { CgClose } from 'react-icons/cg'

type Props ={
  showNav:boolean;
  closeNav:()=>void;
}
const MobileNav = ({closeNav,showNav}:Props) =>{

  const navOpen = showNav?"translate-x-0":"translate-x-[-100%]"
  return (
   <div className="">
    {/* OverLay */}
   <div className={`fixed ${navOpen} inset-0 transition-all duration-500 z-[1002] bg-black opacity-70 w-full h-screen`}></div>
<div className={`text-white ${navOpen}  fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-yellow-600 space-y-6 z-[1050]`}>
  {
    navLinks.map((link)=>{
      return(
        <Link href={link.url} key={link.id}>
          <p className='text-white w-fit text-5 ml-12 border-b-[2.5px] border-white sm:text-7.5 '>{link.label}</p>
        </Link>
      )
    })
  }
  {/* Close Button */}

<CgClose onClick={closeNav} className='absolute top-2.5 right-2.5 sm:w-9 sm:h-9 w-6 h-6 '/>
</div>


   </div>
  )
}

export default MobileNav