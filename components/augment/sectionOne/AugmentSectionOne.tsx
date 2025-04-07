import React from 'react'
import styles from "./AugmentSectionOne.module.css"
import Image from 'next/image'
import SectionLabel from '@/components/reusable/SectionLabel'
import { augmentTeamsData } from '@/data/staticData'



const AugmentSectionOne = () => {
    return (
        <>
            {
                augmentTeamsData.map((data) => {
                    return (
                        <section key={data.id} className={`flex flex-col items-center gap-[50px] bg-[${data.bgColor}]`}>
                            <div className='containerTypeOne flex flex-col gap-[50px] py-[100px]'>
                                <div className=''>
                                    <div className='mb-[25px]'>
                                        <div className=''><SectionLabel label={data.labelName} /></div>
                                    </div>
                                    <h2 className={`sectionHeading ${data.bgColor === "#09090F" ? 'text-[#FFFFFF]' : 'text-[#101118]'} max-w-[1034px]`}>{data.mainHeading}
                                    </h2>
                                </div>
                                <div className='flex flex-col md:flex-row gap-[50px]'>
                                    <div className='relative md:sticky md:top-[100px] md:h-screen'>
                                        <Image
                                            src={data.mainImage}
                                            alt="image"
                                            width={650}
                                            height={590}
                                        />
                                    </div>
                                    <div className='flex flex-col gap-[15px] overflow-hidden'>
                                        {
                                            data.content.map((subContent, index) => {
                                                return (
                                                    <div key={index} className={`p-[30px] rounded-[20px] ${data.bgColor === "#09090F" ? styles.contentTypeOne : styles.contentTypeTwo}`}>
                                                        <h3 className={`${styles.headingThree} mb-[15px] ${data.bgColor === "#09090F" ? 'text-[#FFFFFF]' : 'text-[#101118]'} `}>{subContent.subHeading}</h3>
                                                        <p className={`${data.bgColor === "#09090F" ? 'text-[#ADADAD]' : 'text-[#929598]'}`}>{subContent.description}</p>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </section>
                    )
                })
            }
        </>
    )
}

export default AugmentSectionOne
