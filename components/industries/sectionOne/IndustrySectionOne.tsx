import React from 'react'
import styles from "./IndustrySectionOne.module.css"
import dynamic from 'next/dynamic'
import SectionLabel from '@/components/reusable/SectionLabel'
import { industryCardOneData, industryCardTwoData } from '@/data/staticData'
import Image from 'next/image'
const IndustryCardOne = dynamic(() => import("@/components/reusable/industryCardOne/IndustryCardOne"), {
    ssr: false,
    loading: () => <p>Loading...</p>,
});
const ButtonEmoji = dynamic(() => import("@/components/reusable/ButtonEmoji"), {
    ssr: false,
    loading: () => <p>Loading...</p>,
});



const IndustrySectionOne = () => {
    return (
        <section className=' flex flex-col items-center'>
            <div className='containerTypeOne mb-[50px] flex flex-col gap-[50px] items-center py-[100px]'>
                <div className='w-full flex flex-col items-center gap-[20px]'>
                    <div className='mb-[5px]'>
                        <SectionLabel label='Industries' />
                    </div>
                    <div className='sectionHeading text-[#101118]'>Industries we serve</div>
                    <p className='text-[#929598] text-center max-w-[1030px]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here.</p>
                </div>
                <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-[75px]'>
                    {industryCardOneData.map((item, index) => (
                        <IndustryCardOne key={index} {...item} />
                    ))}
                </div>
            </div>
            <div className={`${styles.industryCardTwo} w-full flex justify-center py-[100px]`}>
                <div className='containerTypeOne grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] xl:gap-[50px]'>
                    {industryCardTwoData.map((card) => (
                        <div key={card.id} className="relative w-[100%] h-[300px] md:max-w-[400px] md:h-[555px] rounded-[20px] overflow-hidden">
                            <Image
                                src={card.image}
                                alt={card.title}
                                fill
                                className='object-cover object-left-top'
                            />
                            <div className='absolute bottom-0 left-0 w-full p-[25px]'>
                                <div className='mb-[10px] md:mb-[20px]'>
                                    <Image
                                        src={card.icon}
                                        alt={card.title}
                                        width="54"
                                        height="54"
                                    />
                                </div>
                                <div className={`${styles.cardTitle} mb-[15px] md:mb-[25px] text-[#FFFFFF]`}>{card.title}</div>
                                <p className={`${styles.cardDescription} text-[#FFFFFF]`}>{card.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='w-full flex justify-center bg-[#FFFFFF] rounded-[30px] py-[100px]'>
                <div className={`containerTypeOne rounded-[#F7F7FA] rounded-[30px] shadow-[0px_14px_64px_-4px_#18274B1F] p-[15px]`}>
                    <div className={`${styles.talkWithExperts} py-[100px] px-[50px] flex justify-center rounded-[30px]`}>
                        <div className='max-w-[785px] flex flex-col items-center'>
                            <Image
                                src="/assets/loc-promenaLogoWhite.png"
                                width={166}
                                height={29}
                                alt="Company Logo"
                            />
                            <div className={`${styles.tweHeading} mt-[30px] mb-[50px] text-[#FFFFFF]`}>You’re one step away from transforming your
                                business growth trajectory
                            </div>
                            <ButtonEmoji label='Talk to Our Experts' icon="/assets/emoji-smile.png" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default IndustrySectionOne

