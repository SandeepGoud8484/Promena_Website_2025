import React from 'react'
import styles from "./BannerService.module.css"
import Link from 'next/link';
import { allservices } from '@/data/staticData';
import { RenderTitle } from '@/components/ui/renderTitle';

const BannerService = () => {

    return (
        <section className={`${styles.bannerService}`}>
            <div className='containerTypeOne flex flex-col items-center gap-[50px]'>
                <div className='flex flex-col items-center gap-[20px]'>
                    <h1 className={`${styles.sectionHeading} text-center`}>{RenderTitle("All Services")}</h1>
                    <p className='max-w-[748px] text-center'>Comprehensive Solutions to Drive Innovation and Business Success, Transforming Ideas into Reality with Expert Services.</p>
                </div>
                <div className='max-w-[1055px] flex gap-[10px] flex-wrap justify-center'>
                    {allservices.map((service, index) => (
                        <Link
                            href="/services"
                            key={index}
                            className={`p-[10px] text-[12px] font-medium leading-[20px] hover:text-[#101118] ${styles.serviceItem}`}
                        >
                            {service}
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default BannerService
