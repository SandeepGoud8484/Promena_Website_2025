'use client';
import React, { useState } from 'react'
import SectionLabel from './reusable/SectionLabel'
import {
    HealthCareMedTechIcon,
    EcommerceRetailIcon,
    EductaionElearningIcon,
    RealEstateIcon,
    EntertainmentMediaIcon,
    AgricultureAgriTechIcon,
    InternetOfThingsIcon,
    BlockChainNdNFTIcon,
    PetCareServicesIcon,
    BusinessNdFinanceIcon,
    GamesNdSportsIcon,
    TravelNdBookingIcon,
    FoodNdRestaurantIcon,
    AviationNdManagementIcon,
    GovernmentNdServicesIcon,
} from "../public/icons";
import Image from 'next/image';
import { achievementData } from '@/data/staticData';
import './Technologies.css';


type IndustryData = {
    industryIcon: React.ReactNode;
    industry: string;
};

const industriesData: IndustryData[] = [
    {
        industryIcon: <HealthCareMedTechIcon />,
        industry: "Healthcare and Medical Technology",
    },
    {
        industryIcon: <EcommerceRetailIcon />,
        industry: "E-commerce and Retail",
    },
    {
        industryIcon: <EductaionElearningIcon />,
        industry: "Education and e-Learning",
    },
    {
        industryIcon: <RealEstateIcon />,
        industry: "Real Estate and Property Management",
    },
    {
        industryIcon: <EntertainmentMediaIcon />,
        industry: "Entertainment and Media",
    },
    {
        industryIcon: <AgricultureAgriTechIcon />,
        industry: "Agriculture and AgriTech",
    },
    {
        industryIcon: <InternetOfThingsIcon />,
        industry: "Internet of Things (IoT)",
    },
    {
        industryIcon: <BlockChainNdNFTIcon />,
        industry: "Blockchain and NFT",
    },
    {
        industryIcon: <PetCareServicesIcon />,
        industry: "Pet Care and Services",
    },
    {
        industryIcon: <BusinessNdFinanceIcon />,
        industry: "Business and Finance",
    },
    {
        industryIcon: <GamesNdSportsIcon />,
        industry: "Games and Sports",
    },
    {
        industryIcon: <TravelNdBookingIcon />,
        industry: "Travel and Booking",
    },
    {
        industryIcon: <FoodNdRestaurantIcon />,
        industry: "Food and Restaurant",
    },
    {
        industryIcon: <AviationNdManagementIcon />,
        industry: "Aviation and Management",
    },
    {
        industryIcon: <GovernmentNdServicesIcon />,
        industry: "Government and Services",
    },
];

const HomeSectionTwo = () => {
    const [selectedAchievement, setSelectedAchievement] = useState(
        achievementData[0]
    );

    return (
        <section className=' flex flex-col'>
            {/* ...............................OUR INDUSTRIES............................. */}
            <div className='industriesWeServe flex justify-center'>
                <div className="containerTypeOne flex flex-col items-center py-[100px]">
                    {/* <BackgroundBeamsWithCollision className="pb-[70px] flex flex-col items-center pt-[70px]"> */}
                    <div className="mb-[25px]">
                        <SectionLabel label='Our Industries' />
                    </div>
                    <div
                        className="sectionHeading mb-[20px] 3xl:mb-[40px] text-center text-[#E0E0ED]"
                    >Industries We Serve</div>
                    <p className="sectionDescription mb-[40px] lg:w-[788px] 3xl:w-auto text-center text-[#94979E]">
                        Promena brings AI-driven innovation to a diverse range of
                        industries, each requiring unique, technology-led solutions to
                        enhance efficiency, engagement, and growth.
                    </p>
                    <div className="w-[100%] grid xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[30px]">
                        {industriesData.map((data, index) => (
                            <div
                                key={index}
                                className="eachIndustry relative bg-[#101118] box-border  xs:h-[100px] md:h-[160px] 3xl:h-auto rounded-[10px] px-[15px] pt-[20px] pb-[20px] md:pb-[30px] flex flex-row items-center md:flex-col md:items-start overflow-hidden group"
                            >
                                {/* <div className="bg absolute top-[5px] left-[5px] w-[180px] h-[140px] md:h-[150px] b rounded-[10px] z-0"></div> */}

                                <div className="absolute  rounded-full opacity-0 blur-[74px] group-hover:opacity-100 transition-all duration-300"></div>
                                <div className="iconWrapper z-10 mr-[10px] md:mr-0 md:mb-[10px]">
                                    {data.industryIcon}
                                </div>
                                <p className="text-[16px] text-[#C9CDD2] mt-[0px] md:mt-[15px] md:text-left z-10">
                                    {data.industry}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <hr className="w-full max-w-[788px] border-t-1 border-[#F5F5F51A] mx-auto" />

            {/*.................................TECHNOLOGIES.............................  */}
            <div className="w-full flex justify-center">
                <div className="containerTypeOne py-[100px] flex flex-col items-center">
                    <div className="mb-[40px]">
                        <SectionLabel label='Our expertise spans' />
                    </div>
                    <div className="content1">
                        <div className="menu-section">
                            {achievementData.map((achievement) => (
                                <h2
                                    key={achievement.id}
                                    className={`technologySubHeading menu-item ${selectedAchievement.id === achievement.id ? "active" : ""
                                        }`}
                                    onClick={() => setSelectedAchievement(achievement)}
                                >
                                    {achievement.title}
                                    {selectedAchievement.id === achievement.id && (
                                    <span className="arrow">→</span>
                                    )}
                                </h2>
                            ))}
                        </div>

                        <div className="detail-section">
                            <div className="detail-content">
                            <div
                            className="sectionHeading mb-[20px] lg:mb-[40px] text-center text-[#101118]"
                        >
                            Technologies
                        </div>
                                <div className="detail-content-sec">
                                    {selectedAchievement.images.map((image, index) => (
                                        <div className="image-container" key={index}>
                                            <Image
                                                src={image.src}
                                                alt={image.name}
                                                className="content-image"
                                                width={100}
                                                height={80}
                                            />
                                            <div className="content2"><p>{image.name}</p></div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <hr className="w-full max-w-[788px] border-t-1 border-[#F5F5F51A] mx-auto" />


        </section>
    )
}

export default HomeSectionTwo
