import React from 'react'
import dynamic from 'next/dynamic'
import Header from '@/components/Header'
import SectionOne from '@/components/service/ai-gen/domain-specific/SectionOne'
import { fourpointerData } from '@/data/staticData'
const FourPointerComponent = dynamic(() => import("@/components/service/ai-gen/domain-specific/FourPointerComponent"), {
  loading: () => <p>Loading...</p>,
});
const SectionThree = dynamic(() => import("@/components/service/ai-gen/domain-specific/SectionThree"), {
  loading: () => <p>Loading...</p>,
});
const FixedBackground = dynamic(() => import("@/components/service/ai-gen/domain-specific/FixedBackground"), {
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

const page = () => {
  return (
    <>
      <Header />
      <SectionOne />
      <FourPointerComponent data={fourpointerData} title='Our Domain-Specific AI Capabilities'/>
      <SectionThree />
      <FixedBackground />
      <PartnerWithUs />
      <OfficeLocations />
      <Footer />
    </>
  )
}

export default page
