"use client";
import React, { useState } from "react";
// import "./styles.css";
// import ExpandableList from "./ExpandableList";

// import {
//   IconBrandGithub,
//   IconBrandX,
//   IconBrandInstagram,
//   IconBrandFacebook,
//   IconBrandLinkedin,
//   IconBrandYoutube,
// } from "@tabler/icons-react";
import Image from "next/image";
import { technologies, portfolio, industries, aboutUs } from "@/data/staticData";
import { FacebookIcon, InstagramIcon, LinkedInIcon, ScrollToTopIcon } from "@/public/icons";
import { FloatingDock } from "./ui/floating-dock";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";


const sections = [
    { title: "About", items: aboutUs },
    { title: "Technologies", items: technologies },
    { title: "Industries", items: industries },
    { title: "Portfolio", items: portfolio },
];

export default function Footer() {
    const [expanded, setExpanded] = useState<any>({});

    const toggleExpand = (section: string) => {
        setExpanded((prev: any) => ({ ...prev, [section]: !prev[section] }));
    };


    const socialLinks = [
        {
            title: "LinkedIn",
            icon: (
                // <LinkedInIcon className="h-full w-full text-neutral-500 dark:text-neutral-300" />
                <LinkedInIcon />
            ),
            href: "https://www.linkedin.com/company/promena-in/",
        },
        {
            title: "Facebook",
            icon: (
                <FacebookIcon />
            ),
            href: "https://www.facebook.com/PromenaLLP/",
        },
        {
            title: "Instagram",
            icon: (
                <InstagramIcon />
            ),
            href: "https://www.instagram.com/promena.in/",
        },

        // {
        //   title: "Twitter",
        //   icon: (
        //     <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        //   ),
        //   href: "#",
        // },
        // {
        //   title: "GitHub",
        //   icon: (
        //     <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        //   ),
        //   href: "#",
        // },
    ];


    const handleScrollToTop = () => {
        if (typeof window !== "undefined") {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    };

    return (
        <>
            <div className="bg-[#1D1D25] w-full py-[50px] flex justify-center">
                <div className="containerTypeOne hidden lg:flex justify-between ">
                    <div className="max-md:w-[42%]">
                        <div className="font-bold text-[26px] text-[#FFFFFF] leading-[30px] mb-[30px]">
                            About
                        </div>
                        <ul className="footer-list flex flex-col gap-[10px]">
                            {aboutUs.map((item, index) => (
                                <li key={index}>
                                    <a href="#" className="text-[#FFFFFF] text-[16px] leading-[25px] font-normal">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="max-md:w-[42%]">
                        {/* <ExpandableList title="Technologies" items={technologies} /> */}
                        <div className="font-bold text-[26px] text-[#FFFFFF] leading-[30px] mb-[30px]">Technologies</div>
                        <ul className="footer-list flex flex-col gap-[10px]">
                            {technologies.map((item, index) => (
                                <li key={index}>
                                    <a href="#" className="text-[#FFFFFF] text-[16px] leading-[25px] font-normal">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="max-md:w-[42%]">
                        {/* <ExpandableList title="Industries" items={industries} /> */}
                        <div className="font-bold text-[26px] text-[#FFFFFF] leading-[30px] mb-[30px]">Industries</div>
                        <ul className="footer-list flex flex-col gap-[10px]">
                            {industries.map((item, index) => (
                                <li key={index}>
                                    <a href="#" className="text-[#FFFFFF] text-[16px] leading-[25px] font-normal">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="max-md:w-[42%]">
                        {/* <ExpandableList title="Portfolio" items={portfolio} /> */}
                        <div className="font-bold text-[26px] text-[#FFFFFF] leading-[30px] mb-[30px]">Portfolio</div>
                        <div className="flex gap-[65px]">
                            <ul className="footer-list flex flex-col gap-[10px]">
                                {portfolio.slice(0, 9).map((item, index) => (
                                    <li key={index}>
                                        <a href="#" className="text-[#FFFFFF] text-[16px] leading-[25px] font-normal">{item}</a>
                                    </li>
                                ))}
                            </ul>
                            <ul className="footer-list flex flex-col gap-[10px]">
                                {portfolio.slice(9, 13).map((item, index) => (
                                    <li key={index}>
                                        <a href="#" className="text-[#FFFFFF] text-[16px] leading-[25px] font-normal">{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="containerTypeOne lg:hidden w-full">
                    {sections.map(({ title, items }, idx) => (
                        <div key={idx} className="mb-[20px]">
                            <div
                                className="flex justify-between items-center font-bold text-[20px] text-[#FFFFFF] py-2 cursor-pointer sm:border-b sm:border-gray-500"
                                onClick={() => toggleExpand(title)}
                            >
                                {title}
                                {expanded[title] ? <ChevronUp className="text-white" /> : <ChevronDown className="text-white" />}
                            </div>
                            <motion.ul
                                className="footer-list flex flex-col gap-[10px] overflow-hidden"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: expanded[title] ? "auto" : 0, opacity: expanded[title] ? 1 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                {items.map((item, index) => (
                                    <li key={index}>
                                        <a href="#" className="text-[#FFFFFF] text-[14px] leading-[25px] font-normal">{item}</a>
                                    </li>
                                ))}
                            </motion.ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* .........Copyright Section........... */}
            <div className="industriesWeServe bg-[#1D1D25] w-full flex justify-center">
                <div className="containerTypeOne py-[20px] flex flex-col justify-center">


                    <div className="flex flex-col items-center md:flex-row-reverse  md:justify-between w-[100%]">
                        <p className="my-[30px] md:my-0 order-2 md:order-1 text-center text-[#FFFFFF] text-[16px] font-normal leading-[26px]">
                            Copyright © 2025 - PROMENA
                            <span className="hidden md:inline">.&nbsp;</span>
                            <br className="block md:hidden" />
                            All Rights Reserved
                        </p>


                        {/* 
            <div className="flex gap-[10px] order-1 md:order-2">
              <a
                href="https://www.facebook.com/PromenaLLP/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://www.instagram.com/promena.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon />
              </a>
            </div> */}

                        <div className="flex items-center justify-center">
                            <FloatingDock
                                mobileClassName="translate-y-2" // only for demo, remove for production
                                items={socialLinks}
                            />
                        </div>

                    </div>
                    <div className="relative flex justify-center items-center">
                        <hr className="absolute w-full border-t-1" />
                        <a
                            href="#"
                            className="relative z-20 smooth"
                            onClick={(e) => {
                                e.preventDefault();
                                handleScrollToTop();
                            }}
                        >
                            <ScrollToTopIcon />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
