'use client'
import React, { useRef } from 'react'
import styles from './BannerAboutUs.module.css'
import ButtonEmoji from '@/components/reusable/ButtonEmoji'
import { motion, useScroll, useTransform } from "motion/react"
import Image from 'next/image'

const BannerAboutUs = () => {
    const sectionRef = useRef(null)

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"]
    })

    // Only start moving content when scroll is past 30%
    const y = useTransform(scrollYProgress, [0, 0.3, 0.9], ["0%", "10%", "-100%"])
    // const yImage = useTransform(scrollYProgress, [0, 0.3, 0.9], ["0%", "10%", "-100%"])


    return (
        <section ref={sectionRef} className={`${styles.aboutUsBanner} relative flex flex-col items-center pb-[100px] bg-[#060F18]`}>
            {/* Sticky content */}
            <motion.div
                style={{ y }}
                className={`containerTypeOne h-[80vh] flex flex-col items-center justify-end gap-[50px] sticky top-0 z-10`}
            >
                <div className='flex flex-col items-center gap-[20px]'>
                    <h1 className={`${styles.sectionHeading} text-center`}>
                        Creating smart solutions with
                        <span className={`${styles.gradientText}`}> AI, IoT, and data </span>
                        to help your business thrive.
                    </h1>
                    <p className='max-w-[748px] text-center'>
                        Empowering your business with cutting-edge technology and actionable insights,
                        Innovative tools to streamline operations and maximize business potential.
                    </p>
                </div>
                <div className='flex justify-center'>
                    <ButtonEmoji label='Want to join us' icon='/assets/emoji-starStruck.png' />
                </div>
            </motion.div>

            {/* Image behind content */}
            <motion.div  className='containerTypeOne flex flex-col items-center relative'>
                <div className="relative w-[100%] min-h-[300px] md:h-[500px] rounded-xl overflow-hidden mt-[100px]">
                    <Image
                        src='/assets/about-groupPic.webp'
                        alt='Group Pic'
                        fill
                        style={{ objectFit: "cover" }}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 z-9"></div>
                </div>
                <p className={`sectionDescription mt-[30px] max-w-[950px] text-center ${styles.contentBelowImg}`}>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here.
                </p>
            </motion.div>
        </section>
    )
}

export default BannerAboutUs
