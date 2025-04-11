import React from 'react'
import dynamic from 'next/dynamic';
import Header from '@/components/Header'
import BannerIndustry from '@/components/industries/banner/BannerIndustry';
const IndustrySectionOne = dynamic(() => import("@/components/industries/sectionOne/IndustrySectionOne"), {
    loading: () => <p>Loading...</p>,
});
const OfficeLocations = dynamic(() => import("@/components/OfficeLocations"), {
    ssr: false,
    loading: () => <p>Loading...</p>,
});
import Footer from '@/components/Footer';


export const metadata = {
  title: "Industries We Serve - AI & Software Solutions for All", 
  description: "Promena provides innovative AI solutions and software development for diverse industries like healthcare, retail, and finance. Explore our expertise.",
  openGraph: {
    title: "Industries We Serve - AI & Software Solutions for All",
    description: "Promena provides innovative AI solutions and software development for diverse industries like healthcare, retail, and finance. Explore our expertise.",
    url: 'https://promena-website-2025.vercel.app/industries',
  },
};



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
