import Image from 'next/image'
import React from 'react'

const SectionOne = () => {
    return (
        <section className='bg-[#FFFFFF]'>
            <div className='containerTypeOne py-[100px] flex flex-col lg:flex-row gap-[30px] items-center'>
                <div className="relative w-full md:w-1/2 max-w-[590px] aspect-[600/440] self-start">
                    <Image
                        src="/assets/aistrategy-img1.webp"
                        alt="image"
                        fill
                        className="object-cover rounded-lg"
                    />
                </div>
                <div className='lg:w-1/2'>
                    <div className='sectionHeading text-[#101118] mb-[20px]'>Your AI Blueprint for Success</div>
                    <p className='text-[#54565A] text-[18px] font-normal leading-[30px] mb-[50px]'>Strategic AI adoption is not a one-size-fits-all approach. We start by understanding your business inside out—your goals, challenges, and vision—so we can craft a bespoke AI strategy that’s a perfect fit for your needs. With a focus on measurable results, our consultations provide</p>
                    <div className='flex flex-col xl:flex-row gap-[35px]'>
                        <div className=''>
                            <Image
                                src='/assets/aistrategy-1.png'
                                alt='icon'
                                width={26}
                                height={26}
                            />
                            <div className='text-[#101118] text-[20px] leading-[30px] font-extrabold mt-[5px] mb-[10px]'>Clarity</div>
                            <div className='text-[14px] leading-[20px] font-normal'>Gain a clear understanding of how AI can solve specific problems and create opportunities in your business.</div>
                        </div>
                        <div className=''>
                            <Image
                                src='/assets/aistrategy-1.png'
                                alt='icon'
                                width={26}
                                height={26}
                            />
                            <div className='text-[#101118] text-[20px] leading-[30px] font-extrabold mt-[5px] mb-[10px]'>Focus</div>
                            <div className='text-[14px] leading-[20px] font-normal'>Prioritize AI initiatives that will have the most significant impact on your business.</div>
                        </div>
                        <div className=''>
                            <Image
                                src='/assets/aistrategy-1.png'
                                alt='icon'
                                width={26}
                                height={26}
                            />
                            <div className='text-[#101118] text-[20px] leading-[30px] font-extrabold mt-[5px] mb-[10px]'>Sustainability</div>
                            <div className='text-[14px] leading-[20px] font-normal'>Develop strategies that align with both short-term goals and long-term growth.</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionOne
