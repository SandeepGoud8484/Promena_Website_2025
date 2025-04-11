import React from 'react'
import SectionLabel from '@/components/reusable/SectionLabel'
import Image from 'next/image'
import Cards from '../Cards'

const AboutUsSectionTwo = () => {
    return (
        <section className='bg-[#09090F]'>
            <div className={`containerTypeOne flex flex-col items-center py-[100px]`}>
                <div className='mb-[25px]'>
                    <SectionLabel label='How it works' />
                </div>
                <h2 className={`sectionHeading mb-[50px] text-[#FFFFFF] text-center`}>
                    Empowering Your Business with {" "}
                    <span
                        style={{
                            color: "#9A9A9A",
                            backgroundColor: "#191A23",
                            borderRadius: "4px",
                            padding: "4px 8px",
                        }}
                    >
                        Speed, Agility, & Scalability
                    </span>
                </h2>
                <div className='w-full flex flex-col gap-[80px] md:flex-row md:justify-between md:items-center'>
                    <div className=''>
                        <h2 className={`sectionHeading mb-[50px] text-[#FFFFFF]`}>Guide to Our Marketing Process</h2>
                        <hr
                            style={{
                                border: "0.001px solid rgba(91, 91, 91, 1)",
                                marginTop: "8px",
                            }}
                        />
                        <p className='pt-[15px] pb-[25px]'>
                            "Streamlined Steps to Achieve Marketing Excellence, From
                            Strategy to Success: Your Roadmap to Growth."
                        </p>
                        <div className="flex items-center gap-[10px]">
                            <div className='text-[clamp(16px,3vw,20px)] leading-[clamp(20px,3.5vw,25px)] font-medium text-[#FFFFFF]'>Make a call</div>
                            <Image src="/assets/about-arrowImg.svg" alt="img" width={25} height={10} />
                        </div>
                    </div>
                    <div className='w-[100%] md:w-[55%]'>
                        <Cards />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUsSectionTwo
