'use client'
import { useRef } from "react"
import styles from "./SectionFour.module.css"
import { motion, useScroll, useTransform } from "motion/react"
import Image from "next/image"
import { BannerData } from "@/types"


const BannerAiModelLifeCycle:React.FC<BannerData> = ({bannerData}) => {
    const sectionRef = useRef(null)

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"]
    })

    // Only start moving content when scroll is past 30%
    const y = useTransform(scrollYProgress, [0, 0.3, 0.9], ["0%", "10%", "-100%"])
    // const yImage = useTransform(scrollYProgress, [0, 0.3, 0.9], ["0%", "10%", "-100%"])

    return (
        <section className={`${styles.aiModelLifeCycleBanner} flex flex-col items-center bg-[#060F18]`}>
            <div ref={sectionRef} className="containerTypeOne flex flex-col items-center pb-[50px]">
                <motion.div style={{ y }} className="w-full h-[80vh] sticky top-0 z-10  flex items-end">
                    <div className="w-full flex flex-col justify-center">
                        <h1 className={`${styles.sectionHeading} text-center mb-[50px] text-[#FFFFFF]`}>{bannerData.mainHeading}</h1>
                        <h2 className="font-bold text-[clamp(1.75rem,4vw,2.5rem)] leading-[clamp(2.5rem,5vw,3.5rem)] text-center text-[#FFFFFF] mb-[10px]">{bannerData.subHeading}</h2>
                        <p className='text-center text-[#FFFFFF]'>{bannerData.mainDescription}</p>
                    </div>
                </motion.div>

                {/* Image behind content */}
                <motion.div className='containerTypeOne flex flex-col items-center relative'>
                    <div className="relative w-[100%] min-h-[300px] md:h-[500px] rounded-xl overflow-hidden mt-[100px]">
                        <Image
                            src={bannerData.imagePath}
                            alt='Group Pic'
                            fill
                            style={{ objectFit: "cover" }}
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 z-9"></div>
                    </div>
                    <p className={`sectionDescription mt-[30px] max-w-[950px] text-center ${styles.contentBelowImg}`}>
                        {bannerData.subDescription}
                    </p>
                </motion.div>
            </div>
            {/* <div className={`${styles.titleScroller} pb-[100px] text-[#FFFFFF] w-full`}>AI & Gen AI solution</div> */}
            <div className={`${styles.titleScroller} pb-[100px] text-[#FFFFFF] overflow-hidden w-full`}>
                <motion.div
                    className={`flex whitespace-nowrap`}
                    animate={{ x: ["0%", "-100%"] }}
                    transition={{
                        repeat: Infinity,
                        duration: 10,
                        ease: "linear",
                    }}
                >
                    <div className="mr-10">{bannerData.scrollTitle}</div>
                    <div className="mr-10">{bannerData.scrollTitle}</div>
                    <div className="mr-10">{bannerData.scrollTitle}</div>
                    <div className="mr-10">{bannerData.scrollTitle}</div>
                </motion.div>
            </div>
        </section>
    )
}

export default BannerAiModelLifeCycle
