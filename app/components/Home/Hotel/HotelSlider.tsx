// import Image from 'next/image'
// import React from 'react'
// import { FaHeart } from 'react-icons/fa'


// type Props = {
//   hotel: {
//     id: number;
//     location: string;
//     image: string;
//    rating: string;
//    name:string;
// };
// }

// const HotelSlider = ({hotel}:Props) => {
//   return (
//     <div>
//        <div className="relative h-[300px] w-full rounded-lg cursor-pointer group overflow-hidden">
       
        
//         <div className="absolute top-4 right-4 z-20 w-8 h-8 bg-white rounded-full text-black flex items-center justify-center flex-col">
//             <FaHeart className='w-3 h-3'/>
//         </div>
//         <div className="absolute inset-0 bg-black opacity-20 z-20 "></div>
// {/* Imgae */}
//  <Image src={hotel.image}  alt={hotel.name} width={500} height={500} className='overflow-hidden h-full w-full transition-all duration-300 object-cover group-hover:scale-110' />

//         <div className="absolute bottom-4 left-4 text-white   w-full   ">
//          <div className="flex  items-center  gap-x-40 ">
//            <div className="flex gap-x-3 ">
//             <p>{hotel.location}</p>
//           <p>{hotel.name}</p>
//           </div>
//          <div className="">
//            <p>{hotel.rating}</p>
//          </div>
//          </div>
//         </div>
//         </div> 
        
//         </div>
//   )
// }

// export default HotelSlider







import Image from 'next/image';
import { FaHeart, FaStar, FaMapMarkerAlt } from 'react-icons/fa';

type Props = {
  hotel: {
     id: number;
     location: string;
    image: string;
    rating: number;
    name:string;
 };
}

export default function HotelCard({hotel}:Props) {
  return (
    <div className="relative h-[320px] w-full rounded-2xl overflow-hidden cursor-pointer group shadow-md hover:shadow-xl transition-all duration-300">
      
      {/* Heart Icon Button */}
      <button 
        aria-label="Add to wishlist"
        className="absolute top-3 right-3 z-30 w-9 h-9 bg-white/90 hover:bg-white rounded-full text-slate-700 hover:text-rose-500 flex items-center justify-center transition-all duration-200 shadow-sm hover:scale-110"
      >
        <FaHeart className="w-4 h-4" />
      </button>

      {/* Overlay */}
      <div className="absolute inset-0 opacity-20 bg-black z-10" />

      {/* Hotel Image */}
      <Image
        src={hotel.image}
        alt={hotel.name}
        fill
        sizes="w-full"
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Bottom Information Container */}
      <div className="absolute bottom-0 inset-x-0 p-4 z-20 text-white flex flex-col justify-end gap-y-1.5">
        
        {/* Name and Rating */}
        <div className="flex items-center justify-between gap-x-2">
          <h3 className="font-semibold text-lg leading-snug truncate drop-shadow-sm">
            {hotel.name}
          </h3>

          {/* Rating Badge */}
          <div className="flex items-center gap-1 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full text-amber-400 text-xs font-semibold shrink-0 border border-white/10">
            <FaStar className="w-3 h-3" />
            <span>{hotel.rating}</span>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center gap-1.5 text-gray-300 text-xs font-normal">
          <FaMapMarkerAlt className="w-3 h-3 text-rose-400 shrink-0" />
          <span className="truncate">{hotel.location}</span>
        </div>

      </div>
    </div>
  );
}