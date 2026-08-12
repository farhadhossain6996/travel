import React from 'react'
import Hero from './Hero/Hero'
import Destination from './Destination/Destination'
import Hotel from './Hotel/Hotel'
import Offer from './Offer/Offer'
import News from './News/News'
import Reviews from './Reviews/Reviews'

function Home() {
  return (
    <div className=' overflow-hidden '>
<Hero/>
<Destination/>
<Hotel/>
<Offer/>
<Reviews/>
<News/>
</div>
  )
}

export default Home