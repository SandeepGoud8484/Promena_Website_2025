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
        <div className="w-full flex justify-center">
            <div className='containerTypeOne flex flex-col items-center py-[100px]'>
                <div className='flex flex-col items-center'>
                    <div className='mb-[25px]'><SectionLabel label="Our Expert Team" /></div>
                    <div className='sectionHeading text-[#FFFFFF] text-center'>Team Perfection At It’s Finest</div>
                </div>
                <div className="relative w-full overflow-hidden py-[50px]">
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
                                    className={`eachTeamCard flex w-[clamp(150px,18vw,280px)] flex-col items-center bg-[#1B2231] p-5 xl:py-[35px] rounded-[20px] relative ${
                                        dev.id % 2 === 0 ? "mt-[40px] lg:mt-[60px]" : "mb-[40px] lg:mb-[60px]"
                                    }`}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    {/* Gradient Border Ring */}
                                    <div className="relative rounded-full p-[2px] lg:p-[4px] bg-gradient-to-b from-[rgba(26,113,255,0.05)] to-[#1A71FF]">
                                        {/* Opaque Inner Circle */}
                                        <div className="relative flex h-[clamp(90px,14vw,170px)] w-[clamp(90px,14vw,170px)] items-center justify-center rounded-full bg-[#1B2231]">
                                            <Image
                                                src={dev.src}
                                                alt={dev.name}
                                                width={155}
                                                height={155}
                                                className="rounded-full object-cover w-[clamp(70px,10vw,155px)] h-[clamp(70px,10vw,155px)] border-[5px] lg:border-[7px] border-white/30"
                                            />
                                        </div>
                                    </div>
                                
                                    {/* Name */}
                                    <div className="mt-4 text-white text-[clamp(16px,1.5vw,22px)] font-semibold text-center">
                                        {dev.name}
                                    </div>
                                
                                    {/* Role */}
                                    <p className="text-[clamp(12px,1.2vw,18px)] text-[#A0AEC0] leading-[18px] text-center">
                                        {dev.role}
                                    </p>
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
