

import React from 'react'
import SectionHeading from '../../Helper/SectionHeading'
import DestinationSlider from './DestinationSlider'

const Destination = () => {
  return (
    <div className='pt-20 pb-20' >
      <SectionHeading heading='Touring Top Destinations'/>

{/* SectionContent */}

<div className="mt-14 w-[80%] mx-auto">
    <DestinationSlider/>
</div>

    </div>
  )
}

export default Destination
