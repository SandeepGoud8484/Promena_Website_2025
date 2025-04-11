import Image from 'next/image'
import React from 'react'
import styles from './AiStrategy.module.css'

const SectionFour = () => {
  return (
    <section className={`bg-[#FFFFFF] ${styles.sectionFourBg}`}>
      <div className={`containerTypeOne  flex flex-col md:flex-row md:items-center justify-between gap-[50px] py-[100px]`}>
            <div className='md:w-1/2 max-w-[534px] '>
                <div className='sectionHeading text-[#101118] mb-[35px]'>The Road<br></br> Ahead with AI</div>
                <p className='text-[18px] leading-[30px] font-normal text-[#54565A]'>AI can transform your business, but only with the right strategy in place. With Promena’s AI Strategy Consultation, you’ll not only navigate the AI landscape but thrive in it—unlocking efficiencies, creating new business models, and securing a competitive edge.</p>
            </div>
            <div className='relative md:w-1/2 aspect-[605/400]'>
                <Image src='/assets/aistrategy-img3.webp' alt='image' fill className='' /> 
            </div>
      </div>
    </section>
  )
}

export default SectionFour
