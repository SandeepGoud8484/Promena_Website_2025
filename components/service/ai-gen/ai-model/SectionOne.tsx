import Image from 'next/image'
import React from 'react'

const SectionOne = () => {
    return (
        <section className='bg-[#FFFFFF]'>
            <div className='containerTypeOne py-[100px] flex flex-col items-center text-[black]'>
                <div className='sectionHeading text-center mb-[20px]'>AI Built to Evolve</div>
                <p className='text-center mb-[50px] max-w-[1064px]'>The world of business is ever-changing, and so should your AI. From deployment to retirement, we provide a holistic approach to managing your AI models that keeps them relevant, efficient, and performing at their best.</p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]'>
                    <div className='bg-[#FFFFFF] hover:bg-[#F1F2FD] rounded-[10px] shadow-[0px_0px_4px_0px_#9494941A] p-[30px]'>
                        <div className='bg-[#514F57] rounded-[6px] p-[12px] w-fit'>
                            <Image
                                src='/assets/aimodel-1.png'
                                alt='icon'
                                width={26}
                                height={26}
                            />
                        </div>
                        <p className='paraHeading text-[#101118] mt-[30px] mb-[5px]'>Continuous Improvement</p>
                        <p className='sectionDescription text-[#54565A]'>We ensure your models evolve by learning from new data and changing business needs.</p>
                    </div>
                    
                    <div className='bg-[#FFFFFF] hover:bg-[#F1F2FD] rounded-[10px] shadow-[0px_0px_4px_0px_#9494941A] p-[30px]'>
                        <div className='bg-[#514F57] rounded-[6px] p-[12px] w-fit'>
                            <Image
                                src='/assets/aimodel-2.png'
                                alt='icon'
                                width={26}
                                height={26}
                            />
                        </div>
                        <p className='text-[#101118] paraHeading mt-[30px] mb-[5px]'>Continuous Improvement</p>
                        <p className='text-[#54565A] sectionDescription'>We ensure your models evolve by learning from new data and changing business needs.</p>
                    </div>

                    <div className='bg-[#FFFFFF] hover:bg-[#F1F2FD] rounded-[10px] shadow-[0px_0px_4px_0px_#9494941A] p-[30px]'>
                        <div className='bg-[#514F57] rounded-[6px] p-[12px] w-fit'>
                            <Image
                                src='/assets/aimodel-3.png'
                                alt='icon'
                                width={26}
                                height={26}
                            />
                        </div>
                        <p className='text-[#101118] paraHeading mt-[30px] mb-[5px]'>Continuous Improvement</p>
                        <p className='text-[#54565A] sectionDescription'>We ensure your models evolve by learning from new data and changing business needs.</p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default SectionOne
