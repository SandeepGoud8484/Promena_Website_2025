"use client";
import React from "react";
import Image from "next/image";
import { locationDetails } from "@/data/staticData";

export default function OfficeLocations() {
    const handleScrollToTop = () => {
        if (typeof window !== "undefined") {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    };
    return (
        <section className="officeLocations bg-[#09090F]">
            <div className="containerTypeOne  flex flex-col gap-[50px] items-center w-full py-[50px]">
                <div className="logoInLocation flex flex-col items-center cursor-pointer">
                    <Image
                        src="/assets/loc-promenaLogoWhite.png"
                        width={166}
                        height={29}
                        alt="Company Logo"
                        onClick={(e) => {
                            e.preventDefault();
                            handleScrollToTop();
                        }}
                    ></Image>
                    <p className="text-[18px] text-[#94979E] font-normal leading-[30px] mt-[15px]">
                        Our office locations in India
                    </p>
                </div>
                <div className="locations grid lg:grid-cols-3 gap-[50px] lg:gap-[100px] md:px-[0px]">
                    {locationDetails.map((item, index) => (
                        <div key={index} className="flex flex-col items-center w-[280px] lg:w-[200px] xl:w-[280px]">
                            <div className="relative">
                                <a
                                    href={item.mapLink}
                                    target="_blank"
                                    rel="noopener noreferrer"

                                >
                                    <div className="relative h-[100px] w-[280px] lg:w-[200px] xl:w-[280px]">
                                        <Image
                                            src={item.image}
                                            alt={item.alt}
                                            className="object-fill"
                                            fill
                                        />
                                    </div>
                                </a>
                            </div>
                            <p className="font-bold text-[20px] leading-[18px] text-center text-[#FFFFFF] mt-[20px] mb-[10px]">
                                {" "}
                                <a
                                    href={item.mapLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className=" hover:underline "
                                >
                                    {item.city}
                                </a>
                            </p>
                            <p className="font-normal text-[18px] text-[#B8B8B8] leading-[28px] text-center">
                                <a
                                    href={item.mapLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {item.address}
                                </a>
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
