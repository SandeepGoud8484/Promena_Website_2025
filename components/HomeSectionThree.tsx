import React from 'react'
import GetInTouch from './GetInTouch'
import { TestimonialSlider } from './TestimonialSlider'
import ExpertTeam from './ExpertTeam'


const HomeSectionThree = () => {
 

  
  return (
    <section className='bg-[white] flex-col'>
      {/* ...........................OUR EXPERT TEAM........................... */}
      <ExpertTeam />

      {/* ..........................TESTMONIALS SLIDER.......................... */}
      <TestimonialSlider />

      {/* ...........................CONTACT US FORM.......................... */}
      <GetInTouch />
    </section>
  )
}

export default HomeSectionThree
