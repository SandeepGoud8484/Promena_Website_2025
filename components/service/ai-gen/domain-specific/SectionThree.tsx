import React from 'react'
import styles from './DomainSpefic.module.css'
import Image from 'next/image'

const SectionThree = () => {
  return (
    <section className={`${styles.domainSecTwoBg}`}>
      <div className={`containerTypeOne py-[100px]`}>
        <div className='sectionHeading text-center text-[#FFFFFF] mb-[50px]'>Our Process</div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'>

          <div className={`relative pt-[30px] px-[20px] border-b-2 sm:border-r-2 border-[#40464E] flex flex-col justify-between`}>
            <div className='flex flex-col items-center'>
              <Image src='/assets/domainspecific-5.png' alt='icon' width={60} height={60} />
              <div className='text-[20px] font-medium text-[#FFFFFF] text-center mt-[25px] mb-[20px]'>Data Collection & Analysis</div>
              <p className='text-[18px] leading-[30px] font-medium text-[#ADADAD] text-center'>Gather and analyze domain- specific data to create a strong foundation.</p>
            </div>
            <div className='relative flex justify-center'>
              <Image src='/assets/domainspecific-num1.png' alt='Number' width={120} height={60} />
            </div>
            <span className='absolute hidden sm:block w-[10px] h-[10px] bg-[#007AFF] rounded-full -bottom-[5px] -right-[5px]'></span>
          </div>

          <div className={`relative pt-[30px] px-[20px] border-b-2 lg:border-r-2 border-[#40464E] flex flex-col justify-between`}>
            <div className='flex flex-col items-center'>
              <Image src='/assets/domainspecific-6.png' alt='icon' width={60} height={60} />
              <div className='text-[20px] font-medium text-[#FFFFFF] text-center mt-[25px] mb-[20px]'>Model Customization</div>
              <p className='text-[18px] leading-[30px] font-medium text-[#ADADAD] text-center'>Fine-tune algorithms to align with your industry requirements.</p>
            </div>
            <div className='relative flex justify-center'>
              <Image src='/assets/domainspecific-num2.png' alt='Number' width={120} height={60} />
            </div>
            <span className='absolute hidden lg:block w-[10px] h-[10px] bg-[#007AFF] rounded-full -bottom-[5px] -right-[5px]'></span>
          </div>

          <div className={`relative pt-[30px] px-[20px] border-b-2 sm:border-r-2 border-[#40464E] flex flex-col justify-between`}>
            <div className='flex flex-col items-center'>
              <Image src='/assets/domainspecific-7.png' alt='icon' width={60} height={60} />
              <div className='text-[20px] font-medium text-[#FFFFFF] text-center mt-[25px] mb-[20px]'>Training & Testing</div>
              <p className='text-[18px] leading-[30px] font-medium text-[#ADADAD] text-center'>Train models on real-world scenarios and validate their performance.</p>
            </div>
            <div className='relative flex justify-center'>
              <Image src='/assets/domainspecific-num3.png' alt='Number' width={120} height={60} />
            </div>
            <span className='absolute hidden sm:block w-[10px] h-[10px] bg-[#007AFF] rounded-full -bottom-[5px] -right-[5px]'></span>
          </div>

          <div className={`relative pt-[30px] px-[20px] border-b-2 border-[#40464E] flex flex-col justify-between`}>
            <div className='flex flex-col items-center'>
              <Image src='/assets/domainspecific-8.png' alt='icon' width={60} height={60} />
              <div className='text-[20px] font-medium text-[#FFFFFF] text-center mt-[25px] mb-[20px]'>Deployment & Optimization</div>
              <p className='text-[18px] leading-[30px] font-medium text-[#ADADAD] text-center'>Implement the trained model and continuously monitor its effectiveness.</p>
            </div>
            <div className='relative flex justify-center'>
              <Image src='/assets/domainspecific-num4.png' alt='Number' width={120} height={60} />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default SectionThree
