import React from 'react'
import dynamic from 'next/dynamic'
import Header from '@/components/Header'
import SectionOne from '@/components/service/ai-gen/ai-model/SectionOne'
const SectionTwo = dynamic(() => import("@/components/service/ai-gen/ai-model/SectionTwo"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
const SectionThree = dynamic(() => import("@/components/service/ai-gen/ai-model/SectionThree"), {
  loading: () => <p>Loading...</p>,
});
const SectionFour = dynamic(() => import("@/components/service/ai-gen/ai-model/SectionFour"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
const PartnerWithUs = dynamic(() => import("@/components/service/ai-gen/ai-model/PartnerWithUs"), {
  loading: () => <p>Loading...</p>,
});
const OfficeLocations = dynamic(() => import("@/components/OfficeLocations"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
import Footer from '@/components/Footer'


const AiModelLifeCyclePage = () => {
  return (
    <>
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <PartnerWithUs />
      <OfficeLocations />
      <Footer />
    </>
  )
}

export default AiModelLifeCyclePage
