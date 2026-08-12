import { reviewSData } from '@/app/data/data'
import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const ReviewsSlider = () => {
  return (
    <div className="relative">
      <div className="absolute -top-5 left-3 -translate-x-1/2">
          <FaQuoteLeft className=' text-5xl font-semibold text-gray-800 '/>
      </div>
        <div>
      <div className="w-[500px]  text-center items-center">
        {
        reviewSData.map((data)=> {
            return(
                <div  key={data.id}>
<p className='text-3xl font-semibold text-gray-800'>{data.review}</p>
<p className='text-sm text-gray-500'>{data.tourist}</p>


                </div>
            )
        })
      }
      </div>
    </div>
<div className="absolute -bottom-8 left-3 -translate-x-1/2">
          <FaQuoteRight className=' text-5xl font-semibold text-gray-800 '/>
      </div>
    
    </div>
  )
}

export default ReviewsSlider
