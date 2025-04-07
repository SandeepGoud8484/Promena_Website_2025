"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import logo from "../public/assets/loc-promenaLogoWhite.png";
// import ContactUs from "@/components/ContactUs/ContactUs";

import { servicesContent, aiSolutions, augmentContent } from "@/data/staticData";
import { useContactUs } from "@/hooks/ContactUsContext";
import { ArrowdownNavIcon, RightArrowIcon } from "@/public/icons";
import { useSelectedNav } from "@/hooks/useSelectedNav";
import { motion } from "framer-motion";


const mobileNavItems = [
    {
        id: 1,
        title: "Home",
        path: "/",
    },
    {
        id: 2,
        title: "About Us",
        path: "/about",
    },
    {
        id: 3,
        title: "Services",
        path: "/services",
        content: servicesContent,
    },
    {
        id: 4,
        title: "AI Solutions",
        path: "/industries",
        content: aiSolutions,
    },
    {
        id: 5,
        title: "Augment Your Team",
        path: "/augment-your-team",
        content: augmentContent,
    },
];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
    const [selectedNav, setSelectedNav] = useSelectedNav("selectedNav", "Home");
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [hoverTimeout, setHoverTimeout] = useState<ReturnType<typeof setTimeout> | null>(null);




    const [activeAccordionIndex, setActiveAccordionIndex] = useState<number | null>(null);
    const [activeSubAccordionIndex, setActiveSubAccordionIndex] = useState<number | null>(null);

    const [isScrolled, setIsScrolled] = useState(false);
    //   const { toggleContactUs } = useContactUs();


    const handleMouseEnter = (value: string | null) => {
        if (hoverTimeout) {
            clearTimeout(hoverTimeout);
        }
        setActiveDropdown(value);
    };

    const handleMouseLeave = () => {
        const timeout = setTimeout(() => {
            setActiveDropdown(null) 
            setActiveIndex(0);
        }, 300);
        setHoverTimeout(timeout);
    };

    useEffect(() => {
        return () => {
            if (hoverTimeout) {
                clearTimeout(hoverTimeout);
            }
        };
    }, [hoverTimeout]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const toggleAccordion = (index: number) => {
        setActiveAccordionIndex((prevIndex) =>
            prevIndex === index ? null : index
        );
        setActiveSubAccordionIndex(null);
    };

    const toggleSubAccordion = (index: number) => {
        setActiveSubAccordionIndex((prevIndex) =>
            prevIndex === index ? null : index
        );
    };

    // Disable body scrolling when menu is open
    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    }, [isMenuOpen]);

    return (
        <>
            <header
                className={`text-white fixed w-full z-50 pt-[20px] pb-[10px] flex justify-center transition-colors duration-500
        ${isScrolled ? "bg-[#020817b5] backdrop-blur-lg shadow-md" : ""}
      `}
            >
                <div className="containerTypeOne flex items-center justify-between">
                    <Link href="/" className="text-2xl font-bold flex items-center">
                        <Image src={logo} alt="Logo" width={166} height={29} priority/>
                    </Link>

                    <button
                        onClick={() => setIsMenuOpen(true)}
                        className="lg:hidden block text-white focus:outline-none"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </button>

                    {/* Desktop Navigation */}
                    <nav
                        className={` hidden lg:block w-full lg:w-auto 
            bg-primary lg:bg-transparent lg:flex lg:items-center lg:space-x-[24px] xl:space-x-[30px] text-center transition-all`}
                    >
                        {mobileNavItems.map((item, index) => (
                            <div
                                key={index}
                                className="relative group flex items-center gap-[10px]"
                                onMouseEnter={() => {
                                    handleMouseEnter(item?.id < 3 ? null : item?.title)
                                }}
                                onMouseLeave={() => {
                                    handleMouseLeave()
                                }}
                            >
                                {/* <span className="px-4 py-2 cursor-pointer">{item.title}</span> */}
                                <Link
                                    href={item.path}
                                    className={`block lg:inline-block py-2 lg:py-0  flex items-center xl:text-[16px] lg:text-[14px] 3xl:text-lg-4k 4xl:text-xl-4k 4k:text-2xl-4k font-medium leading-[24px] hover:text-white transition-colors duration-200 ${activeDropdown === item.title ? "text-white" : "text-[#ADADAD]"
                                        }`}
                                >
                                    {item.title}
                                </Link>
                                {item?.id >= 3 && <div className="transform group-hover:rotate-180 transition-transform duration-300 ">
                                    <ArrowdownNavIcon />
                                </div>}
                                {/* {item.content !== undefined && isOpen && (
                                    <div className="absolute  left-1/2 transform -translate-x-1/2 translate-y-[20px]  w-[15px] h-[15px] bg-white rotate-45"></div>
                                )} */}
                            </div>
                        ))}

                    </nav>

                    <div className="hidden lg:block">
                        <button
                            className="bannerHandwave px-[10px] xl:px-[20px] py-[5px] bg-white rounded-[6px] hover:bg-gray-100 transition-colors flex items-center gap-2
              "
                        //   onClick={toggleContactUs}
                        >
                            <span className=" font-semibold text-black text-[14px] 3xl:text-lg-4k 4k:text-2xl-4k">
                                Let&apos;s Talk{" "}
                            </span>
                            <span className="hand text-[18px]">👋</span>
                        </button>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: activeDropdown ? 1 : 0, y: activeDropdown ? 0 : -10 }}
                    transition={{ duration: 0.3 }}
                    className={`absolute top-full containerTypeOne h-[80vh] p-2 overflow-hidden bg-[#FFFFFF] shadow-lg rounded-[10px] transition-all ${activeDropdown ? "visible" : "invisible"
                        }`}
                    onMouseEnter={() => handleMouseEnter(activeDropdown)}
                    onMouseLeave={() => handleMouseLeave()}
                >
                    {/* <div className="p-2 overflow-hidden"> */}
                    {mobileNavItems.map(
                        (item) =>
                            activeDropdown === item.title && (
                                <div className="relative flex gap-[15px] px-[20px] py-[15px] h-[70vh] ">
                                    {/* Left Side Titles */}
                                    {item?.content && item?.content[0].title && (
                                        <div className="bg-[#F7F8F9] px-[20px] py-[15px] flex flex-col rounded-[15px] h-[70vh] text-start">
                                            {item?.content?.map((item, index) => (
                                                <div
                                                    key={index}
                                                    className={`p-[10px] flex gap-[10px] items-center justify-between rounded-[10px] cursor-pointer ${activeIndex === index
                                                        ? "bg-[#FFFFFF]"
                                                        : "hover:bg-[#FFFFFF]"
                                                        }`}
                                                    onMouseEnter={() => setActiveIndex(index)}
                                                >
                    
                                                    <div className="flex gap-[10px] items-center">
                                                        <div
                                                            className={`w-[45px] h-[45px] rounded-[5px] flex items-center justify-center transition-colors duration-300 ${activeIndex === index
                                                                ? "bg-[#FAFBFC]"
                                                                : "bg-[#FFFFFF]"
                                                                }`}
                                                        >
                                                            <Image
                                                                src={item?.icon}
                                                                alt="icon"
                                                                width="30"
                                                                height="20"
                                                            />
                                                        </div>
                                                        <h1 className="w-[200px] font-semibold text-[14px] leading-[21px] text-[#3D3D3D]">
                                                            {item.title}
                                                        </h1>
                                                    </div>

                                                    {activeIndex === index && (
                                                        <div className="animate-move-right">
                                                            <RightArrowIcon />
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {/* Right Side Subcontent */}
                                    {(item?.content && item?.content[activeIndex]?.subContent || item?.content && !item?.content[0].title) && (
                                        <div className="relative p-[25px] bg-[#F7F8F9] rounded-[15px] cursor-pointer h-[70vh] w-full ">
                                            {item?.content[0].title && (
                                                <h1 className="text-[#3D3D3D] font-semibold text-start text-[14px] leading-[21px] h-[8%]">
                                                    {item?.content[activeIndex].title}
                                                </h1>
                                            )}
                                            {item?.content[0].title && (
                                                <hr className=" mt-[15px] mb-[25px] w-full border-t-[5px] rounded-[10px] border-[#FFFFFF]" />
                                            )}
                                            <div className="relative pb-[25px] grid grid-cols-2 gap-x-[50px] gap-y-[35px] overflow-y-auto h-[78%]">
                                                {item?.content[activeIndex]?.subContent
                                                    ? item?.content[activeIndex]?.subContent?.map(
                                                        (subItem, subIndex) => (
                                                            <div
                                                                key={subIndex}
                                                                className="flex items-center gap-x-[15px]"
                                                            >
                                                                <Link
                                                                    href={subItem?.link || "#"}
                                                                    className={`block lg:inline-block py-2 lg:py-0 xl:text-[16px] lg:text-[14px] 3xl:text-lg-4k 4xl:text-xl-4k 4k:text-2xl-4k font-medium leading-[24px] hover:text-white transition-colors duration-200 ${activeDropdown === item.title
                                                                        ? "text-white"
                                                                        : "text-[#ADADAD]"
                                                                        }`}
                                                                >
                                                                    <div className="flex flex-col">
                                                                        <div className="flex items-center">
                                                                            <div
                                                                                className={`w-[45px] h-[45px] rounded-[10px] flex items-center justify-center transition-colors duration-300 bg-[#ffff] mr-2`}
                                                                            >
                                                                                <Image
                                                                                    src={subItem?.subIcon}
                                                                                    alt="icon"
                                                                                    width="30"
                                                                                    height="20"
                                                                                />
                                                                            </div>
                                                                            <div className="flex flex-col text-center">
                                                                                <h1 className={`text-[#3D3D3D] text-start font-semibold text-[14px] leading-[21px] cursor-pointer ${subItem?.link ? "" : "text-[#3D3D3D]"}`}>
                                                                                    {subItem.subTitle}
                                                                                </h1>
                                                                            </div>
                                                                        </div>
                                                                        <p className={`text-[#3D3D3D] font-normal text-[14px] text-start p-[10px] leading-[21px] cursor-pointer  ${subItem?.link ? "" : "text-[#3D3D3D]"}`}>
                                                                            {subItem.description}
                                                                        </p>
                                                                    </div>
                                                                </Link>
                                                            </div>
                                                        )
                                                    )
                                                    : item?.content[activeIndex]?.subContent?.map((subItem, subIndex) => (
                                                        <Link
                                                            href={subItem?.link || "#"}
                                                            key={subIndex}
                                                            className="flex items-center gap-x-[15px]"
                                                        >
                                                            <div
                                                                className={`w-[45px] h-[45px] rounded-[5px] flex items-center justify-center transition-colors duration-300 bg-[#FAFBFC] cursor-pointer 
                                                  }`}
                                                            >
                                                                {subItem?.subIcon}
                                                            </div>
                                                            <div className="text-justify">
                                                                <h1 className="text-[#3D3D3D] font-semibold text-[14px] leading-[21px]">
                                                                    {subItem?.subTitle}
                                                                </h1>
                                                                <p className="text-[#3D3D3D] font-normal text-[14px] leading-[21px] text-justify">
                                                                    {subItem?.description}
                                                                </p>
                                                            </div>
                                                        </Link>
                                                    ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )
                    )}
                    {/* </div> */}
                </motion.div>
            </header>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="fixed top-0 inset-0 bg-[#020817] z-50 flex flex-col  items-center ">
                    {/* ......Logo and Close button */}
                    <div className="w-[90%] flex justify-between my-[20px]">
                        <Link href="/" className="text-2xl font-bold flex items-center">
                            <Image src={logo} alt="Logo" width={166} height={29} />
                        </Link>
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="text-white text-xl focus:outline-none"
                        >
                            ✕
                        </button>
                    </div>

                    <div className="w-[100%] px-[5%] max-h-screen  text-white flex flex-col overflow-y-auto">
                        {/* Accordion or Navigation Items */}
                        <div className="flex-1">
                            {mobileNavItems.map((item, index) => (
                                <div
                                    key={index}
                                    className="mb-3  p-2 rounded-md transition-all  border-b border-[#94979E]"
                                >
                                    <div className="flex justify-between items-center">
                                        <Link href={item.path}>
                                            <p className="navTitle cursor-pointer text-[white]">{item.title}</p>
                                        </Link>
                                        {item.content && (
                                            <button
                                                onClick={() => toggleAccordion(index)}
                                                className={`navTitle text-white focus:outline-none transition-transform duration-300 transform ${activeAccordionIndex === index
                                                    ? "rotate-45"
                                                    : "rotate-0"
                                                    }`}
                                            >
                                                +
                                            </button>
                                        )}
                                    </div>
                                    {activeAccordionIndex === index && item.content && (
                                        <ul className="mt-2 list-disc text-sm list-none ">
                                            {item.content?.map(({ title, subContent}, subIndex) => (
                                                <li key={subIndex} className="mb-3  p-2 rounded-md transition-all ">
                                                    {/* <span className="font-medium ">{title}</span>{" "} */}
                                                    {/* {subItem.description} */}
                                                    {
                                                        title &&
                                                        <div>
                                                            <div className="flex justify-between items-center" onClick={() => toggleSubAccordion(subIndex)}>
                                                                <p className="subNavLink text-[12px] cursor-pointer">{title}</p>
                                                                {/* {subContent && (
                                                                    <button
                                                                        className={`text-white text-xl focus:outline-none transition-transform duration-300 transform ${activeSubAccordionIndex === subIndex
                                                                            ? "rotate-45"
                                                                            : "rotate-0"
                                                                            }`}
                                                                    >
                                                                        +
                                                                    </button>
                                                                )} */}
                                                            </div>
                                                            {/* {
                                                                activeSubAccordionIndex === subIndex && subContent && */}
                                                                <ul className="mt-2 list-disc  list-none ">
                                                                    {
                                                                        subContent?.map((subPage, subPageIndex) => (
                                                                            <Link href={subPage.link || "#"} key={subPageIndex}><li className="sublinks text-[12px] mt-[20px]">{subPage.subTitle}</li></Link>
                                                                        ))
                                                                    }
                                                                </ul>
                                                            {/* } */}
                                                        </div>
                                                    }
                                                    {/* {
                                                        subTitle &&
                                                        <div className="flex justify-between items-center">
                                                            <Link href={link || "#"}>
                                                                <p className="font-normal text-[12px] cursor-pointer">{subTitle}</p>
                                                            </Link>
                                                        </div>
                                                    } */}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Footer Button */}
                        <div className="py-4 flex justify-center">
                            {/* <Link href="/contact"> */}
                            <button className="px-[10px] xl:px-[20px] py-[5px] bg-white rounded-[6px] hover:bg-gray-100 transition-colors flex items-center gap-2"
                            //   onClick={toggleContactUs}
                            >
                                <span className="font-semibold text-black text-[14px]">
                                    Let&apos;s Talk
                                </span>
                                <span className="hand text-[18px]">👋</span>
                            </button>
                            {/* </Link> */}
                        </div>
                    </div>
                </div>
            )}
            {/* <ContactUs /> */}
        </>
    );
}
