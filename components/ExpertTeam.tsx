'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import SectionLabel from './reusable/SectionLabel'
import { motion } from "framer-motion"
import { teamImages } from '@/data/staticData'

const ExpertTeam = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerSlide, setItemsPerSlide] = useState(4); // Default: 4 items per slide

    useEffect(() => {
        const getItemsPerSlide = () => (window.innerWidth < 768 ? (window.innerWidth < 570 ? 2 : 3) : 4);

        setItemsPerSlide(getItemsPerSlide()); // Update on client

        const handleResize = () => {
            setItemsPerSlide(getItemsPerSlide());
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % Math.ceil(teamImages.length / itemsPerSlide));
        }, 5000); // 5 seconds

        return () => clearInterval(interval);
    }, [itemsPerSlide]); // Recalculate when `itemsPerSlide` changes

    return (
        <div className="w-full flex justify-center bg-white">
            <div className='containerTypeOne flex flex-col items-center py-[100px]'>
                <div className='flex flex-col items-center'>
                    <div className='mb-[25px]'><SectionLabel label="Our Expert Team" /></div>
                    <div className='sectionHeading mb-[50px] text-[#101118] text-center'>Team Perfection At It’s Finest</div>
                </div>
                <div className="relative w-full overflow-hidden">
                    <motion.div
                        className="flex"
                        animate={{ x: `-${currentIndex * 100}%` }}
                        transition={{ ease: "easeInOut", duration: 1 }}
                    >
                        {Array.from({ length: Math.ceil(teamImages.length / itemsPerSlide) }).map((_, sectionIndex) => (
                            <div key={sectionIndex} className="teamCardsContainer flex min-w-full justify-center px-5">
                                {teamImages.slice(sectionIndex * itemsPerSlide, sectionIndex * itemsPerSlide + itemsPerSlide).map((dev) => (
                                    <motion.div
                                        key={dev.id}
                                        className={`eachTeamCard flex w-[clamp(150px,18vw,280px)] flex-col items-center bg-[#FFFFFF] p-5 rounded-[20px] relative ${dev.id % 2 === 0 ? "mt-[40px] lg:mt-[60px]" : "mb-[40px] lg:mb-[60px]"}`}
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <div className="relative rounded-full p-[2px] lg:p-[4px] bg-gradient-to-b from-[rgba(26,113,255,0.05)] to-[#1A71FF]">
                                            <div className="relative flex h-[clamp(90px,14vw,210px)] w-[clamp(90px,14vw,210px)] items-center justify-center rounded-full bg-white">
                                                <Image
                                                    src={dev.src}
                                                    alt={dev.name}
                                                    width={155}
                                                    height={155}
                                                    className="rounded-full object-cover w-[clamp(70px,10vw,155px)] h-[clamp(70px,10vw,155px)]"
                                                />
                                            </div>
                                        </div>
                                        <div className="mt-4 text-[#101118] text-[clamp(16px,1.5vw,22px)] font-bold">{dev.name}</div>
                                        <p className="text-[clamp(12px,1.2vw,18px)] text-[#1A71FF] leading-[18px] text-center">{dev.role}</p>
                                    </motion.div>
                                ))}
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default ExpertTeam;
