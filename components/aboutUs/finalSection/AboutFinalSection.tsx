import Image from 'next/image';
import React from 'react'
import styles from "./AboutFinalSection.module.css"
import { employeeThoughts } from '@/data/staticData';
import JoinOurCommunity from './JoinOurCommunity';


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
                <JoinOurCommunity />
            </div>
        </section>
    )
}

export default AboutFinalSection
