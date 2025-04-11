import React from 'react'
import styles from './SectionFour.module.css'
import Image from 'next/image'
import ButtonEmoji from '@/components/reusable/ButtonEmoji'

const PartnerWithUs = () => {
    return (
        <section className='bg-[#FFFFFF]'>
            <div className='containerTypeOne py-[100px]'>
                <div className={`${styles.partnerWithUs} flex flex-col lg:flex-row p-[15px] md:p-[30px]`}>
                    <div className="relative w-full max-w-[590px] aspect-[590/410] self-start">
                        <Image
                            src="/assets/partnerWithUs-img1.webp"
                            alt="image"
                            fill
                            className="object-cover rounded-lg"
                        />
                    </div>
                    <div className='self-center'>
                        <div className='sectionHeading text-[#FFFFFF] mb-[20px]'>Let’s Build for the Future</div>
                        <p className='text-[18px] leading-[26px] font-normal text-[#F2F2F2] mb-[50px]'>
                            AI should never be static. With Promena’s lifecycle management, your AI models are built for the long haul—constantly evolving to meet the demands of your business.
                        </p>
                        <p className='text-[18px] leading-[26px] font-semibold text-[#FFFFFF] mb-[20px]'>To make your AI solutions work harder, longer, and smarter.</p>
                        <ButtonEmoji label='Partner With Us Today' icon='/assets/emoji-backHand.png' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PartnerWithUs
