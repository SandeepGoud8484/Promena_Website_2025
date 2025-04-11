import React from "react";
import Image from "next/image";
import { CardProps, CircleProps, InterfaceFPC } from "@/types";


const Card: React.FC<CardProps> = ({ header, para }) => {
    return (
        <div className="bg-[#f1f2fd] w-full p-5 rounded-xl flex">
            <div>
                <h3 className="text-lg text-[black] mb-2">{header}</h3>
                <p className="text-sm text-slate-500">{para}</p>
            </div>
        </div>
    );
};


const Circle: React.FC<CircleProps> = ({ className, imgSrc }) => {
    return (
        <div className={`flex items-center justify-center ${className}`}>
            <div className="w-14 h-14 rounded-full bg-gradient-to-b from-blue-400 to-blue-700 border-8 border-white shadow-xl flex justify-center items-center">
                <Image src={imgSrc} alt="Circle" width={20} height={20} />
            </div>
        </div>
    );
};




const FourPointerComponent: React.FC<InterfaceFPC> = ({ data, title }) => {
    return (
        <section className="w-full flex justify-center bg-[#FFFFFF]">
            <div className="containerTypeOne py-[100px]">
                <div className="sectionHeading text-[#101118] text-center mb-[50px]">
                    {title}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Left Column */}
                    <div className="flex flex-col items-center justify-start lg:justify-center lg:items-start space-y-6">
                        {data
                            .filter((item) => item.position === "left")
                            .map((item, index) => (
                                <div key={index} className="relative flex w-full">
                                    <Card header={item.header} para={item.para} />
                                    <Circle
                                        className="absolute z-10 left-[100%] top-[50%] -translate-x-[30%] -translate-y-[50%] hidden lg:block"
                                        imgSrc={item.imgSrc}
                                    />
                                </div>
                            ))}
                    </div>

                    {/* Center Image */}
                    <div className="relative flex justify-center aspect-[400/470]">
                        <Image src='/assets/domainspecific-img1.webp' alt="fourPointerImg" fill />
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col items-center lg:items-end justify-center lg:pb-10 space-y-6">
                        {data
                            .filter((item) => item.position === "right")
                            .map((item, index) => (
                                <div key={index} className="relative flex w-full">
                                    <Card header={item.header} para={item.para} />
                                    <Circle
                                        className="absolute right-[100%] top-[50%] translate-x-[20%] -translate-y-[50%] hidden lg:block"
                                        imgSrc={item.imgSrc}
                                    />
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FourPointerComponent;
