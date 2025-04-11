'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"
import styles from './SectionFour.module.css'


const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};
const performanceItems = [
    "Comprehensive AI Management",
    "Tailored Optimization",
    "Proactive Performance Monitoring",
    "Scalable Solutions",
];
const SectionFour = () => {
    return (
        <section className={`${styles.sectionFourAiModel}`}>
            <div className="containerTypeOne flex flex-col-reverse lg:flex-row justify-between gap-[50px] py-[100px]">
                <div className='flex flex-col-reverse lg:flex-col gap-[30px]'>
                    <div className='relative'>
                        <Image
                            src='/assets/aimodel-img2.webp'
                            alt="Team Collaboration"
                            width={340}
                            height={180}
                            className="rounded-lg shadow-xl"
                        />
                    </div>
                    <div className="">
                        <motion.h2
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.5 }}
                            variants={scaleIn}
                            className="text-[#FFFFFF] text-[20px] leading-[26px] font-bold mb-4">
                            Smart AI Performance Management
                        </motion.h2>
                        <motion.p
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.5 }}
                            variants={scaleIn}
                            className="w-full lg:max-w-[340px] text-[#ADADAD] text-[18px] font-normal leading-[26px]">
                            Promena’s AI Model Lifecycle Management ensures your solutions
                            are always optimized for peak performance. We take a hands-on
                            approach, providing end-to-end support so your AI can work
                            smarter, not harder.
                        </motion.p>
                    </div>
                </div>
                <div className='flex gap-[30px] flex-col justify-between'>
                    <div className="">
                        <motion.h1
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.5 }}
                            variants={scaleIn}
                            className="sectionHeading text-[#FFFFFF] sm:text-left"
                        >
                            Choose Promena for Smarter AI <br></br>
                            Achieve Peak Performance with Full Support
                        </motion.h1>
                    </div>
                    <div className='flex flex-col sm:flex-row gap-[30px] sm:justify-between'>
                        {/* Middle Gradient Block */}
                        <div
                            className="rounded-xl p-[20px] flex flex-col justify-between w-fit"
                            style={{
                                background:
                                    "linear-gradient(180deg, rgba(36, 194, 248, 1), rgba(0, 132, 255, 1), rgba(0, 92, 255, 1), rgba(11, 13, 244, 1))",
                            }}
                        >
                            {performanceItems.map((item, index) => (
                                <div key={index} className="flex items-center space-x-4 mb-2">
                                    <div className="w-2 h-2 bg-[#FFFFFF] rounded-full"></div>
                                    <motion.p
                                        initial={{ opacity: 0.1, y: 100 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{
                                            delay: 0.3,
                                            duration: 0.8,
                                            ease: "easeInOut",
                                        }}
                                        className="text-[18px] text-[#FFFFFF] leading-[26px] font-semibold">
                                        {item}
                                    </motion.p>
                                </div>
                            ))}
                        </div>

                        {/* Right Image Block */}
                        <div className="rounded-lg">
                            <Image
                                src='/assets/aimodel-img3.webp'
                                alt="Team Collaboration"
                                className="rounded-lg shadow-xl"
                                width={350}
                                height={220}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionFour
