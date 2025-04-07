import React from 'react'
import styles from "./BannerIndustry.module.css"
import { RenderTitle } from '../../ui/renderTitle';
import ButtonEmoji from '@/components/reusable/ButtonEmoji';

const BannerIndustry = () => {

    return (
        <section className={`${styles.bannerService}`}>
            <div className='containerTypeOne flex flex-col items-center gap-[50px]'>
                <div className='flex flex-col items-center gap-[20px]'>
                    <h1 className={`${styles.sectionHeading} text-center`}>{RenderTitle("Preferred Transformation Partner of Global Leaders in Healthcare")}</h1>
                    <p className='max-w-[748px] text-center'>Delivering Excellence in Healthcare Transformation,Driving Global Healthcare Forward with Customized Solutions.</p>
                </div>
                <div className='flex justify-center'>
                    <ButtonEmoji label='Consult Our Experts' icon='/assets/emoji-partyPopper.png'/>
                </div>
            </div>
        </section>
    )
}

export default BannerIndustry
