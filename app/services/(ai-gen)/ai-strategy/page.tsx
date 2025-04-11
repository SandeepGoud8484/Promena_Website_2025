import React from 'react'
import dynamic from 'next/dynamic'
import Header from '@/components/Header'
import SectionOne from '@/components/service/ai-gen/ai-strategy/SectionOne'
const SectionTwo = dynamic(() => import("@/components/service/ai-gen/ai-model/SectionTwo"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
const SectionThree = dynamic(() => import("@/components/service/ai-gen/ai-strategy/SectionThree"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
const SectionFour = dynamic(() => import("@/components/service/ai-gen/ai-strategy/SectionFour"), {
  loading: () => <p>Loading...</p>,
});
const SectionFive = dynamic(() => import("@/components/service/ai-gen/ai-strategy/SectionFive"), {
  loading: () => <p>Loading...</p>,
});
const SectionSix = dynamic(() => import("@/components/service/ai-gen/ai-strategy/SectionSix"), {
  loading: () => <p>Loading...</p>,
});
const OfficeLocations = dynamic(() => import("@/components/OfficeLocations"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
import Footer from '@/components/Footer'


const AiStrategyPage = () => {
  return (
    <>
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <OfficeLocations />
      <Footer />
    </>
  )
}

export default AiStrategyPage
