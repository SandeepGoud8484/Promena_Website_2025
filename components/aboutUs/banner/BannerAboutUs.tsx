import React from 'react'
import styles from './BannerAboutUs.module.css'
import ButtonEmoji from '@/components/reusable/ButtonEmoji'

const BannerAboutUs = () => {
    return (
        <section className={`${styles.aboutUsBanner}`}>
            <div className={`${styles.overlayAboutBanner} absolute w-full h-full z-1 top-0`}></div>
            <div className={`containerTypeOne flex flex-col items-center gap-[50px] relative z-2`}>
                <div className='flex flex-col items-center gap-[20px]'>
                    <h1 className={`${styles.sectionHeading} text-center`}>Creating smart solutions with<span className={`${styles.gradientText}`}> AI, IoT, and data </span>to help your business thrive.</h1>
                    <p className='max-w-[748px] text-center'>Empowering your business with cutting-edge technology and actionable insights,Innovative tools to streamline operations and maximize business potential.</p>
                </div>
                <div className='flex justify-center'>
                    <ButtonEmoji label='Want to join us' icon='/assets/emoji-starStruck.png' />
                </div>
            </div>
        </section>
    )
}

export default BannerAboutUs
