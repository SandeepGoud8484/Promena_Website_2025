import React from 'react'
import styles from "./OurTeam.module.css"
import SectionLabel from '@/components/reusable/SectionLabel'
import { teamImages } from '@/data/staticData'
import Image from 'next/image'

const OurTeam = () => {
    return (
        <section className={`${styles.aboutTeam} flex justify-center`}>
            <div className='containerTypeOne py-[100px] flex flex-col items-center'>
                <div className='mb-[30px]'><SectionLabel label="Our Team" /></div>
                <div className='sectionHeading text-[#FFFFFF] mb-[50px]'>Brilliant team of experts</div>
                <div className='grid gap-[40px] grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                    {
                        teamImages.map((teamMem) => {
                            return (
                                <div
                                    key={teamMem.id}
                                    className={`eachTeamCard flex w-[clamp(150px,18vw,280px)] flex-col items-center bg-[#FFFFFF] p-5 rounded-[20px] relative`}
                                >
                                    <div className="relative rounded-full p-[2px] lg:p-[4px] bg-gradient-to-b from-[rgba(26,113,255,0.05)] to-[#1A71FF]">
                                        <div className="relative flex h-[clamp(90px,14vw,210px)] w-[clamp(90px,14vw,210px)] items-center justify-center rounded-full bg-white">
                                            <Image
                                                src={teamMem.src}
                                                alt={teamMem.name}
                                                width={155}
                                                height={155}
                                                className="rounded-full object-cover w-[clamp(70px,10vw,155px)] h-[clamp(70px,10vw,155px)]"
                                            />
                                        </div>
                                    </div>
                                    <div className="mt-4 text-[#101118] text-[clamp(16px,1.5vw,22px)] font-bold">{teamMem.name}</div>
                                    <p className="text-[clamp(12px,1.2vw,18px)] text-[#1A71FF] leading-[18px] text-center">{teamMem.role}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default OurTeam
