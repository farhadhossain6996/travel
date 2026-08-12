'use client'
import { destinationData, reviewSData } from '@/app/data/data'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
 
  desktop: {
    breakpoint: { max: 3000, min: 1324, },
    items:1,
    slidesToSlide: 1
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 1,
    slidesToSlide: 1
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};

const ReviewsSlider = () => {
  return (

      <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={5000} keyBoardControl={true} >

   
{reviewSData.map((data)=>{
    return(
        <div key={data.id} className='py-4 px-2'>
            <div className="max-w-2xl mx-auto text-center space-y-4">
                <div className="text-4xl text-gray-300 font-serif leading-none">“</div>
      
<p className="text-xl md:text-2xl font-medium text-gray-800 leading-relaxed tracking-wide italic">
          {data.review}
        </p>
 <p className="text-sm md:text-base font-semibold text-yellow-500 tracking-wider uppercase pt-2">
          {data.tourist}
        </p>
  </div>
     </div>
    )
})}
 </Carousel>
 
  )
}

export default ReviewsSlider
