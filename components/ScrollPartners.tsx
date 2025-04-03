'use client'
import React, { useEffect } from 'react'
import { motion, useAnimation } from "motion/react"
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { brands } from '@/data/staticData';



const ScrollPartners = () => {
    const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("animate"); // Resume animation when in view
    } else {
      controls.stop(); // Pause animation when out of view
    }
  }, [inView, controls]);
    return (
        <section className='bg-[white] py-[50px]'>
            <div ref={ref} className="containerTypeOne overflow-hidden">
                <motion.div
                    className="flex w-[200%] space-x-[20px] items-center"
                    variants={{
                        animate: { x: ["0%", "-100%"] },
                      }}
                      animate={controls}
                    transition={{
                        ease: "linear",
                        duration: 20,
                        repeat: Infinity,
                    }}
                >
                    {/* Duplicating brand list for infinite scrolling effect */}
                    {[...brands, ...brands].map((src, index) => (
                        <img key={index} src={src} alt={`Brand ${index}`} className="" />
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default ScrollPartners
