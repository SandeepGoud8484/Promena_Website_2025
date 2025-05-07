import React from 'react'
import GetInTouch from './GetInTouch'
import { TestimonialSlider } from './TestimonialSlider'
import ExpertTeam from './ExpertTeam'


const HomeSectionThree = () => {
 

  
  return (
    <section className=' flex-col'>
      {/* ...........................OUR EXPERT TEAM........................... */}
      <ExpertTeam />

      <hr className="w-full max-w-[788px] border-t-1 border-[#F5F5F51A] mx-auto" />

      {/* ..........................TESTMONIALS SLIDER.......................... */}
      <TestimonialSlider />

      {/* ...........................CONTACT US FORM.......................... */}
      <GetInTouch />
    </section>
  )
}

export default HomeSectionThree
