'use client'
import React from "react";
import { motion, AnimatePresence } from "motion/react"
import Image from "next/image";
import { useEffect, useState } from "react";
import Counter from "./ui/counter";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import ButtonEmoji from "./reusable/ButtonEmoji";

// const MotionImage = motion(Image);
type ClientsType = {
    image: string;
    alt: string;
};

const clientsData: ClientsType[] = [
    {
        image: "/assets/client-shridevi.png",
        alt: "Kifa",
    },
    {
        image: "/assets/client-john-tarpley.png",
        alt: "Amusement",
    },
    {
        image: "/assets/client-rakesh-pandey.png",
        alt: "CREED",
    },
    {
        image: "/assets/client-jeet-wagh.png",
        alt: "IdeaBaaz",
    },
]
const banners = [
    {
        heading: "AI and Digital Expertise for Modern Enterprises",
        description: "Empowering your business through advanced AI technology",
        image: "/assets/banner-ai.png",
    },
    {
        heading: "Revolutionizing Enterprises With Machine Learning.",
        description: "Transform your enterprise with cutting-edge AI solutions",
        image: "/assets/banner-ml.png",
    },
    {
        heading: "Driving Growth With Data Science Insights",
        description: "Stay ahead with our advanced digital transformation services",
        image: "/assets/banner-ds.png",
    },
];

const renderTitle = (title: string) => {
    const parts = title.split("\n");
    return parts.map((part, lineIndex) => {
        if (lineIndex === parts.length - 1) {
            const words = part.split(" ");
            const lastWord = words[words.length - 1];
            const restOfWords = words.slice(0, -1).join(" ");
            return (
                <React.Fragment key={lineIndex}>
                    {lineIndex > 0 && <br />}
                    {restOfWords}{" "}
                    <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-purple-600 bg-clip-text text-transparent">
                        {lastWord}
                    </span>
                </React.Fragment>
            );
        }
        return (
            <React.Fragment key={lineIndex}>
                {lineIndex > 0 && <br />}
                {part}
            </React.Fragment>
        );
    });
};

const BannerHome = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % banners.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);


    return (
        <section className='bg-custom-radial h-screen pb-[20px] md:pb-[50px] items-end overflow-hidden bannerHomepage'>
            <div className="containerTypeOne flex flex-col-reverse md:flex-row justify-between items-end">
                {/* ....................Left Section............................... */}
                <div className="w-[100%] md:w-[60%] relative flex flex-col self-center">
                    <AnimatePresence mode="wait">
                        <motion.div key={index} className="w-full relative h-[150px] xl:h-[200px]">
                            <motion.h1
                                className="absolute text-center md:text-start"
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -30, opacity: 0 }}
                                transition={{ duration: 1, ease: "easeInOut" }}
                            >
                                {renderTitle(banners[index].heading)}
                            </motion.h1>
                            <motion.p
                                className="absolute w-full text-center md:text-start"
                                initial={{ y: "var(--motion-y)", opacity: 0 }}
                                animate={{ y: "calc(var(--motion-y) - 30px)", opacity: 1 }}
                                exit={{ y: "calc(var(--motion-y) - 60px)", opacity: 0 }}
                                transition={{ duration: 1, ease: "easeInOut" }}
                            >
                                {banners[index].description}
                            </motion.p>
                        </motion.div>
                    </AnimatePresence>
                    {/* Client Section */}
                    <div className="relative bottom-0 mt-[20px] hidden md:block">
                        <div className="flex justify-center md:justify-start items-center gap-[20px]">
                            <div className="flex -space-x-2">
                                <AnimatedTooltip
                                    items={clientsData.map((item, index) => ({
                                        id: index,
                                        name: item.alt,
                                        designation: "",
                                        image: item.image as string,
                                        width: 40,
                                        height: 40,
                                    }))}
                                />

                            </div>
                            <p className="leading-[26px] tracking-wider ">
                                <span className="font-bold mr-[5px] text-[#FFFFFF]">
                                    <Counter
                                        className="counter-number"
                                        delay={2}
                                        direction="up"
                                        targetValue={1000}
                                    />
                                    <span
                                        className={`counter-symbol}`}
                                    >
                                        +
                                    </span>
                                </span>
                                <span>Satisfied clients</span>
                            </p>
                        </div>
                    </div>
                    <div className="relative bottom-0 mt-[10px] md:mt-[40px] flex justify-center md:justify-start gap-[20px]">
                        {/* <Link href="/contact"> */}
                        {/* <button className="px-[20px] py-[5px] xs:px-[30px] xs:py-[10px] 3xl:px-[40px] 3xl:py-[20px] bg-white rounded-[6px] hover:bg-gray-100 transition-colors flex items-center gap-2">
                            <span className="font-semibold text-black text-[14px] 3xl:text-[30px]">Let&apos;s Talk </span>
                            <span className="hand text-[18px]">👋</span>
                        </button> */}
                        {/* </Link> */}
                        <ButtonEmoji label="Lets's Talk" icon='/assets/emoji-wavinghand.png' />
                        <a href="#getInTouch">
                            <button className=" px-[20px] py-[5px] xs:px-[30px] xs:py-[10px] 3xl:px-[40px] 3xl:py-[20px] text-[14px] 3xl:text-[30px] text-white rounded-[6px] border border-[#FFFFFF] font-medium">
                                Get in Touch
                            </button>
                        </a>
                    </div>
                </div>
                {/* ....................Right Section.............................. */}
                <div className="w-[280px] h-[250px] md:w-[350px] md:h-[320px] lg:w-[400px] lg:h-[370px] xl:w-[480px] xl:h-[450px] relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            className="absolute w-full h-full"
                            initial={{ x: "50%", y: "-50%", opacity: 0 }}
                            animate={{ x: "0%", y: "0%", opacity: 1 }}
                            exit={{ x: "-50%", y: "50%", opacity: 0 }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                        >
                            <Image
                                src={banners[index].image}
                                alt="Banner Image"
                                fill
                                style={{ objectFit: "contain" }}
                                priority
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    )
}

export default BannerHome
