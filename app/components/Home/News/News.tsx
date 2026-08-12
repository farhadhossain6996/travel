import React from 'react'
import SectionHeading from '../../Helper/SectionHeading'
import NewsCard from './NewsCard'

const News = () => {
  return (
    <div className='pt-16 pb-16'>
      {/* SectionHeading */}
<SectionHeading heading='Exciting Travel News'/>

<div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 items-center mt-20">

<NewsCard image="/image/News1.jpg" 
title='Top 5 place to visit in Denmark'
date="30 July 2025"

/>
<NewsCard image="/image/News2.jpg" 
title='Top 5 place to visit in Canada'
date="12 December 2025"

/>
<NewsCard image="/image/News3.jpg" 
title='Top 5 place to visit in USA'
date="20 NobemBer 2025"

/>
<NewsCard image="/image/News4.jpg" 
title='Top 5 place to visit in UK'
date="12 December 2024"

/>



</div>


</div>
  )
}

export default News