import React from 'react'
import SectionHeading from '../../Helper/SectionHeading'
import OfferCard from './OfferCard'

const Offer = () => {
  return (
    <div className='pt-20 pb-20 bg-gray-200'>

<SectionHeading heading='Offer' />

{/* offerCard */}
<div className="w-[80%] mx-auto">

<div data-aos="fade-right" data-aos-anchor-placement="top-center"
ata-aos-duration="200">

<OfferCard />
</div>

</div>

    </div>
  )
}

export default Offer