import Image from 'next/image'
import React from 'react'
import styles from './AiStrategy.module.css'

const SectionFour = () => {
  return (
    <section className={`bg-[#FFFFFF] ${styles.sectionFiveBg}`}>
      <div className={`containerTypeOne  flex flex-col items-center gap-[50px] py-[100px]`}>
            <div className='relative w-full aspect-[1240/550]'>
                <Image src='/assets/aistrategy-img4.webp' alt='image' fill className='' /> 
            </div>
            <div className=''>
                <div className='sectionHeading text-[#FFFFFF] mb-[20px] text-center'>Take the First Step Today</div>
                <p className='text-[18px] leading-[30px] font-normal text-[#ADADAD] text-center'>Let’s create a future where AI drives your success. Reach out to Promena, and let’s start crafting your AI strategy.</p>
            </div>
      </div>
    </section>
  )
}

export default SectionFour
