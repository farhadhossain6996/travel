import Image from 'next/image'
import React from 'react'

type Props={
  image:string;
  title:string;
  date:string,
}

const NewsCard = ({date,image,title}:Props) => {
  return (
    <div >
     {/* // Image */}
     <div className='h-75'>
      <Image 
      src={image}
      alt={title}
      width={300}
      height={300}
      className='w-full h-full object-cover rounded-lg'
      
      />
    </div>
    <p className='mt-6 text-lg text-gray-950 font-semibold hover:text-yellow-500 transition-all duration-300 cursor-pointer'>{title}</p>
    <p className='text-sm text-gray-600 mt-3'>{date}</p>
   </div>
  )
}

export default NewsCard
