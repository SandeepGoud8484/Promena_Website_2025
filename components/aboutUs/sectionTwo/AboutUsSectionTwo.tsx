'use client'
import Image from 'next/image'
import Cards from '../Cards'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const AboutUsSectionTwo = () => {
    const sectionRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"]
    })

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"])

    return (
            <section ref={sectionRef} className="relative h-[600vh] 1xs:h-[500vh] 2xs:h-[400vh] md:h-[300vh] 2xl:h-[200vh] bg-[#09090F]">
                <div className="containerTypeOne sticky top-[20px] h-screen overflow-hidden">
                    <motion.div
                        style={{ x }}
                        className="flex h-full w-[500vw] 1xs:w-[400vw] 2xs:w-[300vw] md:w-[200vw] px-[5vw] items-center gap-[10vw]"
                    >
                        {/* Left Text Section */}
                        <div className="w-[280px] md:w-[35vw] flex-shrink-0 text-white">
                            <h2 className="sectionHeading mb-[10px]">
                                Guide to Our Marketing Process
                            </h2>
                            <hr className="border border-[#5B5B5B]" />
                            <p className="pt-[15px] pb-[25px]">
                                "Streamlined Steps to Achieve Marketing Excellence, From Strategy to
                                Success: Your Roadmap to Growth."
                            </p>
                            <div className="flex items-center gap-[10px]">
                                <div className="text-[clamp(16px,3vw,20px)] leading-[clamp(20px,3.5vw,25px)] font-medium text-[#FFFFFF]">
                                    Make a call
                                </div>
                                <Image src="/assets/about-arrowImg.svg" alt="img" width={25} height={10} />
                            </div>
                        </div>

                        {/* Cards Section */}
                        <div className="w-[100vw] flex-shrink-0 ">
                            <Cards />
                        </div>
                    </motion.div>
                </div>
            </section>
    )
}

export default AboutUsSectionTwo
