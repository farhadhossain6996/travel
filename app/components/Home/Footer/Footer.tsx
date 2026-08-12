import React from 'react'

const Footer = () => {
  return (
    <div className='pt-16 pb-16'>
        <div className="w-[80%] mx-auto items-start grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
<div className="space-y-5">
  <h1 className='text-lg font-bold'>Company</h1>
  <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-amber-500'>About Us </p>
  <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-amber-500'>Careers </p>
  <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-amber-500'>Blogs </p>
  <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-amber-500'>Magazine </p>
</div>
{/* 2nd part */}
<div className="space-y-5">
  <h1 className='text-lg font-bold'>Support</h1>
  <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-amber-500'>Contact </p>
  <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-amber-500'>Legal Notice  </p>
  <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-amber-500'>Privacy Policy </p>
  <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-amber-500'>Terms & Conditions </p>
  <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-amber-500'>SiteMap </p>
</div>
{/* 3rd part */}
<div className="space-y-5">
  <h1 className='text-lg font-bold'>Other Services</h1>
  <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-amber-500'>Activity Finder </p>
  <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-amber-500'> Tour List</p>
  <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-amber-500'> Flight finder </p>
  <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-amber-500'>Travel Agents </p>
  <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-amber-500'>Car Hair</p>
</div>
{/* 4th part */}
<div className="space-y-5">
  <h1 className='text-lg font-bold'>Contact Us</h1>
  <div className="mt-6">
    <p className='text-gray-800 text-sm '>Our Mobile Number</p>
    <p className=' text-base font-bold '>012222222222</p>
  </div>
  <div className="mt-6">
    <p className='text-gray-800 text-sm '>Our Email</p>
    <p className=' text-base font-bold '>herr@ gmail</p>
  </div>

</div>




        </div>
        <div className="w-[80%] mx-auto border-t pt-8  text-gray-600 text-sm mt-3">
          <p>Copyright © 2026. All rights reserved</p>
        </div>
    </div>
  )
}

export default Footer   

