import React from 'react'
import SectionLabel from '@/components/reusable/SectionLabel'
import styles from "./SectionOne.module.css"
import { serviceCardData } from '@/data/staticData'
import ServiceCard from '@/components/reusable/serviceCard/ServiceCard'

const SectionOne = () => {
  return (
    <section className={``}>
        <div className='containerTypeOne py-[100px] flex flex-col items-center'>
            <div className='mb-[60px]'>
                <div className='mb-[25px]'>
                    <SectionLabel label='Services'/>
                </div>
                <div className='w-full flex gap-[40px] justify-between'>
                    <div className='sectionHeading text-[black] w-1/2 max-w-[604px]'>
                        See what <span className={`${styles.gradientText}`}>AI and Digital Expertise </span> services we offer
                    </div>
                    <div className='w-1/2 max-w-[550px] text-[#929598] text-[16px] leading-[30px] font-medium'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here.</div>
                </div>
            </div>
            <div className='flex flex-wrap gap-[40px] justify-between'>
                {
                    serviceCardData.map((card, index) => <ServiceCard key={index} card={card}/>)
                }
            </div>
        </div>
    </section>
  )
}

export default SectionOne
