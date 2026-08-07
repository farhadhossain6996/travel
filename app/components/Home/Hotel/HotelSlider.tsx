import Image from 'next/image'
import React from 'react'
import { FaHeart } from 'react-icons/fa'


type Props = {
    hotel:{

  id: number; 
  name: string;
  image: string;
  price: string;

    };

};


type Props={
    price:"string"
}

const HotelSlider = ({hotel}:Props) => {
  return (
    <div>
       <div className="relative h-[300px] w-full rounded-lg cursor-pointer group overflow-hidden">
       
        
        <div className="absolute tp-4 right-4 z-20 w-8 h-8 bg-white rounded-full text-black flex items-center justify-center flex-col">
            <FaHeart className='w-3 h-3'/>
        </div>
        <div className="absolute inset-0 bg-black opacity-20 z-20 "></div>
        </div> 
        
{/* Imgae */}
 <Image src={hotel.image}  alt={hotel.name} width={500} height={500} className='overflow-hidden h-full w-full transition-all duration-300 object-cover group-hover:scale-110' />       
        </div>
  )
}

export default HotelSlider