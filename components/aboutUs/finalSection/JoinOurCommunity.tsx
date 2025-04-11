import ButtonEmoji from '@/components/reusable/ButtonEmoji'
import Image from 'next/image'
import React from 'react'
import styles from './AboutFinalSection.module.css'

const JoinOurCommunity = () => {
    return (
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
    )
}

export default JoinOurCommunity
