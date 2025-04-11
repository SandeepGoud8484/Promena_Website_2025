'use client'
import Image from 'next/image'
import React, { useState } from 'react'


const lifecycleData = [
    {
        id: "build",
        title: "Build",
        icon: '/assets/aimodel-4.png',
        description:
            "We craft customized AI models tailored to your unique needs, ensuring seamless alignment with your goals. From detailed analysis to deployment and optimization, our solutions are designed for efficiency and growth.",
    },
    {
        id: "deploy",
        title: "Deploy",
        icon: '/assets/aimodel-4.png',
        description:
            "Seamlessly deploy your AI solutions with our robust infrastructure. We ensure smooth integration and minimal disruption to your existing systems.",
    },
    {
        id: "monitor",
        title: "Monitor",
        icon: '/assets/aimodel-4.png',
        description:
            "Keep track of your AI models performance with comprehensive monitoring tools. Get real-time insights and analytics to make informed decisions.",
    },
    {
        id: "optimize",
        title: "Optimize",
        icon: '/assets/aimodel-4.png',
        description:
            "Continuously improve your AI solutions with data-driven optimization. We fine-tune models for maximum efficiency and effectiveness.",
    },
    {
        id: "refine",
        title: "Refine",
        icon: '/assets/aimodel-4.png',
        description:
            "Evolve your AI capabilities through iterative refinement. We incorporate feedback and new requirements to keep your solutions cutting-edge.",
    },
];

const SectionTwo = () => {
    const [activeStep, setActiveStep] = useState(0);

    return (
        <section className='bg-[#09090F]'>
            <div className='containerTypeOne py-[100px]'>
                <div className='sectionHeading text-[#FFFFFF] mb-[50px] text-center md:text-left'>Our Comprehensive Lifecycle Approach</div>
                <div
                    className="flex flex-col md:flex-row justify-between rounded-[20px] overflow-hidden"
                    style={{
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    }}
                >
                    <div
                        className="md:w-1/2 p-8 md:p-12"
                        style={{
                            background:
                                "linear-gradient(180deg, rgba(36, 194, 248, 1), rgba(0, 132, 255, 1), rgba(0, 92, 255, 1), rgba(11, 13, 244, 1))",
                        }}
                    >
                        {lifecycleData.map((step, index) => (
                            <div
                                key={step.id}
                                className={`flex flex-col gap-2 p-4 cursor-pointer transition-all duration-300 ${activeStep === index
                                        ? "opacity-100"
                                        : "opacity-70 hover:opacity-90"
                                    }`}
                                onClick={() => setActiveStep(index)}
                            >
                                <div className={`flex items-center  gap-4 ${activeStep === index ? "text-[#FFFFFF]" : "text-[#8DC1FB]"} `}>
                                    <span className="text-[22px] font-medium">
                                        {String(index + 1).padStart(2, "0")}.
                                    </span>
                                    <span className="text-[22px] font-medium">{step.title}</span>
                                </div>
                                <div
                                    style={{
                                        backgroundColor: "rgba(137, 181, 253, 1)",
                                        transition: "all 0.3s ease",
                                    }}
                                    className={`${activeStep === index ? "w-full" : "w-0"
                                        } h-[2px]`}
                                ></div>
                            </div>
                        ))}
                    </div>
                    <div className="md:w-1/2 ">
                        <div
                            className="bg-[#111] p-8 md:p-16 h-full border-[0.5px] flex flex-col justify-center"
                            style={{
                                borderColor: "rgba(21, 73, 126, 1)",
                                borderTopRightRadius: "20px",
                                borderBottomRightRadius: "20px",
                            }}
                        >
                            <div className="mb-[30px] flex justify-center md:justify-start">
                                <Image
                                    src={lifecycleData[activeStep].icon}
                                    alt={lifecycleData[activeStep].title}
                                    width={60}
                                    height={60}
                                    className="rounded-[20px]"
                                />
                            </div>
                            <div className="text-[26px] text-[white] leading-[30px] font-normal mb-[20px] text-center md:text-left">
                                {lifecycleData[activeStep].title}
                            </div>
                            <p className="text-[#FFFFFF] text-[16px] leading-[22px] font-light md:text-base text-center md:text-left">
                                {lifecycleData[activeStep].description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionTwo
