import Image from 'next/image'
import React from 'react'

const SectionThree = () => {
  return (
    <section className='bg-[#FFFFFF]'>
        <div className='containerTypeOne py-[100px]'>
            <div className='sectionHeading mb-[10px] text-[#101118]'>The Benefits of Lifecycle Management</div>
            <p className='text-[#54565A] mb-[50px]'>An AI model isn’t a one-time solution. Here’s why ongoing management is crucial:</p>
            <div className='flex flex-col md:flex-row md:justify-between gap-[30px] lg:gap-[100px]'>
                <div className='relative w-[100%] h-[400px] sm:h-[500px] sm:w-[554px]'>
                    <Image src="/assets/aimodel-img1.webp" alt='image' fill className='object-cover'/>
                </div>
                <div className=''>
                    <div className=''>
                        <div className='text-[#101118] text-[18px] leading-[21px] font-bold mb-[20px]'>Maximized Performance</div>
                        <div className='relative mb-[10px]'>
                            <Image src='/assets/aimodel-5.png' alt='icon' width={50} height={50} />
                        </div>
                        <ul className='list-disc pl-5'><li className='text-[#54565A] text-[14px] font-normal leading-[23px]'>Models that continually evolve to meet your business needs.</li></ul>
                    </div>
                    <hr className='w-full h-[2px] my-[30px]'></hr>
                    <div className=''>
                    <div className='text-[#101118] text-[18px] leading-[21px] font-bold mb-[20px]'>Reduced Risk</div>
                        <div className='relative mb-[10px]'>
                            <Image src='/assets/aimodel-5.png' alt='icon' width={50} height={50} />
                        </div>
                        <ul className='list-disc pl-5'><li className='text-[#54565A] text-[14px] font-normal leading-[23px]'>We catch potential issues early, avoiding costly downtimes or inaccuracies.</li></ul>
                    </div>
                    <hr className='w-full h-[2px] my-[30px]'></hr>
                    <div className=''>
                    <div className='text-[#101118] text-[18px] leading-[21px] font-bold mb-[20px]'>Increased ROI</div>
                        <div className='relative mb-[10px]'>
                            <Image src='/assets/aimodel-5.png' alt='icon' width={50} height={50} />
                        </div>
                        <ul className='list-disc pl-5'><li className='text-[#54565A] text-[14px] font-normal leading-[23px]'>AI that delivers measurable value throughout its lifecycle, rather than becoming obsolete.</li></ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default SectionThree
