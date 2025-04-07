import React from 'react'
import styles from "./BannerAugment.module.css"
import { RenderTitle } from '@/components/ui/renderTitle'
import ButtonEmoji from '@/components/reusable/ButtonEmoji'

const BannerAugment = () => {
    return (
        <section className={`${styles.bannerAugment}`}>
            <div className='containerTypeOne flex flex-col items-center gap-[50px]'>
                <div className='flex flex-col items-center gap-[20px]'>
                    <h1 className={`${styles.sectionHeading} text-center`}>{RenderTitle("Enhance Your Team's Potential")}</h1>
                    <p className='max-w-[748px] text-center'>Transform your development workflow with cutting-edge tools and expertise.</p>
                </div>
                <div className='flex justify-center'>
                    <ButtonEmoji label='Join with our Team' icon='/assets/emoji-partyFace.png'/>
                </div>
            </div>
        </section>
    )
}

export default BannerAugment
