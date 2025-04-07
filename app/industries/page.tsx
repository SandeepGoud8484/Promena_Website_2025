import React from 'react'
import dynamic from 'next/dynamic';
import Header from '@/components/Header'
import BannerIndustry from '@/components/industries/banner/BannerIndustry';
const IndustrySectionOne = dynamic(() => import("@/components/industries/sectionOne/IndustrySectionOne"), {
    ssr: false,
    loading: () => <p>Loading...</p>,
});
const OfficeLocations = dynamic(() => import("@/components/OfficeLocations"), {
    ssr: false,
    loading: () => <p>Loading...</p>,
});
import Footer from '@/components/Footer';


const IndustriesPage = () => {
    return (
        <>
            <Header />
            <BannerIndustry />
            <IndustrySectionOne />
            <OfficeLocations />
            <Footer />
        </>
    )
}

export default IndustriesPage
