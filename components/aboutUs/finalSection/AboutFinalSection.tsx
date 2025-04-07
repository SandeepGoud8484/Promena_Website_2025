import Image from 'next/image';
import React from 'react'
import styles from "./AboutFinalSection.module.css"
import ButtonEmoji from '@/components/reusable/ButtonEmoji'; 
import { employeeThoughts } from '@/data/staticData';


const AboutFinalSection = () => {
    return (
        <section className='flex justify-center bg-[#FFFFFF]'>
            <div className='containerTypeOne py-[100px] flex flex-col items-center gap-[100px]'>
                <div className='flex flex-col items-center'>
                    <div className='sectionHeading text-[#101118] mb-[50px] text-center'>Here are a few thoughts shared by our Employees</div>
                    <div className='grid gap-[30px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                        {employeeThoughts.map((thought, index) => (
                            <div
                                className={`${styles.thoughtCard}`}
                                key={index}
                            >
                                <span className={`${styles.emoji}`}>{thought.emoji}</span>
                                <p
                                    className={`${styles.quote} text-[black]`}
                                >
                                    {thought.quote ? `"${thought.quote}"` : "No quote available"}
                                </p>
                                <div className={`${styles.authorInfo}`}>
                                    <Image
                                        src={thought.avatar}
                                        alt={thought.author || "Avatar"}
                                        className={`${styles.avatar}`}
                                        width={25}
                                        height={25}
                                    />
                                    <div>
                                        <div
                                            className={`${styles.author}`}
                                        >
                                            {thought.author || "Anonymous"}
                                        </div>
                                        <p
                                            className={`${styles.designation}`}
                                        >
                                            {thought.designation}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={`${styles.communityBg} w-full rounded-xl flex gap-[30px] flex-col-reverse md:flex-row items-center md:justify-around py-[50px] px-[20px]`}>
                    <div className='flex flex-col items-start gap-[20px]'>
                        <div className='sectionHeading'>Join our community!!!</div>
                        <p className='max-w-[300px]'>subscribe to our newsletter to get the latest Tecko news</p>
                        <ButtonEmoji label='Join our community' icon='' />
                    </div>
                    <div className='grid grid-cols-4'>
                        <div className='col-start-2 row-start-1'>
                            <Image
                                src="/assets/community-ai.png"
                                alt="AI"
                                width={70}
                                height={70}
                            />
                        </div>
                        <div className='col-start-4 row-start-2'>
                            <Image
                                src="/assets/community-ai.png"
                                alt="AI"
                                width={70}
                                height={70}
                            />
                        </div>
                        <div className='col-start-1 row-start-3'>
                            <Image
                                src="/assets/community-ai.png"
                                alt="AI"
                                width={70}
                                height={70}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutFinalSection
