import React from 'react'
import Hero from './Hero/Hero'
import Destination from './Destination/Destination'
import Hotel from './Hotel/Hotel'
import Offer from './Offer/Offer'

function Home() {
  return (
    <div className=' overflow-hidden '>
<Hero/>
<Destination/>
<Hotel/>
<Offer/>
</div>
  )
}

export default Home