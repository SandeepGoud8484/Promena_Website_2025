import React from 'react'
import styles from './DomainSpefic.module.css'

const FixedBackground = () => {
  return (
    <section className={`${styles.bgFixed}`}>
        <div className='containerTypeOne pb-[100px] pt-[150px] relative flex flex-col items-center'>
            <div className='sectionHeading text-[#FFFFFF] mb-[30px] text-center'>Elevate Your Industry with Tailored AI</div>
            <p className='text-[#ADADAD] max-w-[792px] text-center'>Get started with Promena’s domain-specific AI training today. Contact us to discuss your unique needs and discover how we can transform your business with expertly trained models.</p>
        </div>
    </section>
  )
}

export default FixedBackground
