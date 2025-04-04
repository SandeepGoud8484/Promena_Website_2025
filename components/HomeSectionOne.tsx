'use client';
import React from 'react'
import { aboutUsDetails, products, servicesDetails } from '@/data/staticData';
// import Counter from './ui/counter';
import Image from 'next/image';
import SectionLabel from './reusable/SectionLabel';
import { ChevronRight } from "lucide-react";
// import { HeroParallax } from './TopProjects';
import dynamic from 'next/dynamic';

const Counter = dynamic(() => import("./ui/counter"), {
    ssr: false,
    loading: () => <p>Loading...</p>,
  });
  const HeroParallax = dynamic(() =>
    import("./TopProjects").then((mod) => mod.HeroParallax)
  );



const technologies = [
    {
        icon: (
            <Image
                src="/assets/features-gen.png"
                alt="AI & Gen AI Solutions"
                width={32}
                height={32}
            />
        ),
        title: "Artificial Intelligence",
        description:
            "We leverage AI to craft intelligent solutions that streamline operations and enhance decision-making capabilities.",
    },
    {
        icon: (
            <Image src="/assets/features-software.png" alt="Software Development" width={32} height={32} />
        ),
        title: "Generative AI",
        description:
            "We utilize Generative AI technology to create solutions that produce new content, automate creative processes and enhance user experiences.",
    },
    {
        icon: <Image src="/assets/features-data.png" alt="Data Engineering" width={32} height={32} />,
        title: "Machine Learning",
        description:
            "We use ML to build intelligent systems that analyze data patterns and predict outcomes while continuously improving operations.",
    },
    {
        icon: (
            <Image src="/assets/features-software.png" alt="Software Development" width={32} height={32} />
        ),
        title: "Cloud Computing",
        description:
            "Scalable cloud solutions that enable businesses to operate efficiently and securely in the digital space.",
    },
    {
        icon: <Image src="/assets/features-data.png" alt="Data Engineering" width={32} height={32} />,
        title: "Cybersecurity",
        description:
            "Advanced security measures to protect your digital assets and maintain data integrity.",
    },
    {
        icon: (
            <Image
                src="/assets/features-bigdata.png"
                alt="AI & Gen AI Solutions"
                width={32}
                height={32}
            />
        ),
        title: "Big Data Analytics",
        description:
            "Transform raw data into actionable insights using advanced analytics and visualization techniques.",
    },
    {
        icon: (
            <Image
                src="/assets/features-iot.png"
                alt="AI & Gen AI Solutions"
                width={32}
                height={32}
            />
        ),
        title: "IoT Solutions",
        description:
            "Connect and control devices seamlessly with our innovative IoT infrastructure.",
    },
    {
        icon: (
            <Image
                src="/assets/features-edgecomputing.png"
                alt="AI & Gen AI Solutions"
                width={32}
                height={32}
            />
        ),
        title: "Edge Computing",
        description:
            "Optimize performance with distributed computing architecture at the edge of the network.",
    },
    {
        icon: (
            <Image
                src="/assets/features-mobiledevelopment.png"
                alt="AI & Gen AI Solutions"
                width={32}
                height={32}
            />
        ),
        title: "Mobile Development",
        description:
            "Create engaging mobile experiences with cutting-edge development techniques.",
    },
    {
        icon: (
            <Image
                src="/assets/features-devops.png"
                alt="AI & Gen AI Solutions"
                width={32}
                height={32}
            />
        ),
        title: "DevOps",
        description:
            "Streamline development and operations with automated workflows and continuous integration.",
    },
    // {
    //   icon: (
    //     <Image
    //       src={BrainIcon}
    //       alt="AI & Gen AI Solutions"
    //       width={32}
    //       height={32}
    //     />
    //   ),
    //   title: "System Integration",
    //   description:
    //     "Seamlessly connect different systems and applications for optimal business performance.",
    // },
];


const HomeSectionOne = () => {
    return (
        <section className='bg-[#0E0E15] flex flex-col items-center'>
            {/* ...........................Success In Numbers.........................  */}
            <div className="w-[100%] flex justify-center">
                <div className="containerTypeOne py-[100px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-[1fr_1fr_1fr] justify-between gap-[50px] 3xl:gap-[80px]">
                    {aboutUsDetails.map((item, index) => (
                        <div
                            key={index}
                            className={`cursor-default 2xl:w-[380px] 3xl:w-auto flex flex-col gap-[15px] 3xl:gap-[30px] pt-[10px] pl-[30px] border-l border-[#606060]`}
                        >
                            <div
                                className={`achievementsInNumber`}
                            >
                                <Counter
                                    className=""
                                    delay={10}
                                    direction="up"
                                    targetValue={parseInt(item.digit.replace(/\D/g, ""), 10)}
                                />
                                {item.title === "Unique Users Reached" && <span>
                                    Million +
                                </span>
                                }
                                {item.title === "Daily Active Users" && <span>
                                    +
                                </span>
                                }
                                {(item.title !== "Daily Active Users" && item.title !== "Unique Users Reached") && <span>
                                    +
                                </span>
                                }
                            </div>
                            <p
                                className={`paraHeading`}
                            >
                                {item.title}
                            </p>
                            <p
                                className={`paraDescription`}
                            >
                                {item.content}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <hr className="w-full max-w-[788px] border-t-1 border-[#F5F5F51A] mx-auto" />

            {/* ..............................OUR SERVICES.................................. */}
            <div className="containerTypeOne py-[100px] flex flex-col items-center">
                <div className="mb-[25px]">
                    <SectionLabel label="Our Services" />
                </div>
                <div
                    className="sectionHeading text-[#E0E0ED] mb-[20px] 3xl:mb-[30px] text-center"
                >
                    Drive the Digital Revolution with Superior Engineering.
                </div>

                <p className="sectionDescription md:w-[692px] 3xl:w-auto text-center text-[#94979E] mb-[57px]">
                    Transforming ideas into reality with advanced engineering
                    solutions. Your partner in navigating the digital era with
                    innovation and precision.
                </p>
                <div className="w-[100%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-[32px] gap-x-[24px]">
                    {servicesDetails.map((item, index) => (
                        <div
                            key={index}
                            className="eachService font-circularStd px-[20px] py-[20px] flex flex-row items-center gap-[10px] md:flex-col md:items-center md:gap-[15px] 3xl:gap-[30px] rounded-[10px] shadow-lg overflow-hidden group"
                        >
                            <div className="relative shrink-0 w-[80px] h-[80px] group-hover:filter group-hover:brightness-0 group-hover:invert">
                                <Image
                                    src={item.image}
                                    alt="Service Icon"
                                    fill
                                    className="object-cover transition-all duration-300"
                                />
                            </div>
                            <h2 className="serviceTitle text-start md:text-center">
                                {item.title}
                            </h2>
                        </div>
                    ))}
                    <div className="moreCaseStudies box-border min-h-[158px] rounded-[10px] flex items-center justify-center px-[32px] py-[51px]">
                        <div className="eachIndustry bg-eachIndustry px-[50px] lg:px-[30px] 2xl:px-[50px] py-[14px] rounded-[10px] text-[14px] 3xl:text-[24px] 3xl:leading-[40px] leading-[28px] text-[#1A71FF] font-medium">
                            Our Services
                        </div>
                    </div>
                </div>
            </div>

            <hr className="w-full max-w-[788px] border-t-1 border-[#F5F5F51A] mx-auto" />

            {/* ..............................TOP FEATURES SECTION.................................. */}
            <div className="bg-black w-full flex justify-center">
                <div className="containerTypeOne py-[100px] flex justify-center min-h-screen text-white">
                    <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-cols-[40%_50%] gap-[90px] w-full">
                        <div className="lg:sticky lg:top-0 lg:h-screen flex items-center">
                            <div className="relative overflow-hidden ">
                                <div className="">
                                    <div className="mb-6 mt-6 ">
                                        <SectionLabel label="Top Features" />
                                    </div>
                                    <div
                                        className="sectionHeading text-white mb-6"
                                    >
                                        Innovating with Intelligence Driven Solutions
                                    </div>
                                    <p className="sectionDescription text-[#94979E] max-w-xl mb-6">
                                        From Advanced AI to Scalable Software Development, Optimized
                                        for Business Growth.
                                    </p>
                                    <ul className="space-y-3">
                                        <li className="contentList bg-[#09090F] text-[#94979E] px-4 py-2 rounded-full border border-[#606060] inline-block">
                                            Driving transformation with advanced technology
                                        </li>
                                        <li className="contentList bg-[#09090F] text-[#94979E] px-4 py-2 rounded-full border border-[#606060] inline-block">
                                            Seamless solutions that align technology with business
                                            objectives
                                        </li>
                                        <li className="contentList bg-[#09090F] text-[#94979E] px-4 py-2 rounded-full border border-[#606060] inline-block">
                                            Tailored strategies and systems to meet your unique goals
                                        </li>
                                        <li className="contentList bg-[#09090F] text-[#94979E] px-4 py-2 rounded-full border border-[#606060] inline-block">
                                            Support and expertise to fuel sustained growth and success
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-1 lg:pt-28">
                            <div className="space-y-1 mb-24">
                                {technologies.map((tech, index) => (
                                    <div
                                        key={index}
                                        className="group p-6 border-t border-gray-800 hover:bg-slate-900 transition-all duration-300 cursor-pointer"
                                    >
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 flex items-center justify-center transform group-hover:translate-x-2 transition-transform duration-300">
                                                    {tech.icon}
                                                </div>
                                                <h2 className="featuresTitle">
                                                    {tech.title}
                                                </h2>
                                            </div>
                                            <ChevronRight className="w-5 h-5 text-[#FFFFFF] transform group-hover:translate-x-2 transition-transform duration-300 " />
                                        </div>
                                        <p className="paraDescription text-[#FFFFFF]">
                                            {tech.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ..............................TOP PROJECTS SECTION.................................. */}
            <HeroParallax products={products}/>

            {/* ....................................................................................... */}
            {/* <div className='w-full h-[80vh] bg-[#FFFFFF] rounded-2xl'></div> */}

        </section>
    )
}

export default HomeSectionOne
