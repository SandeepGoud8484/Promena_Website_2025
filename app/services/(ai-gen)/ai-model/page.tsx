import dynamic from 'next/dynamic'
import BannerAiModelLifeCycle from '@/components/service/ai-gen/ai-model/BannerAiModelLifeCycle';
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

const bannerData = {
  mainHeading: "AI Model Lifecycle Management",
  subHeading: "AI That Grows and Adapts with You",
  mainDescription: "We help brands with a vision communicate better by leveraging strategy, design and technology.",
  imagePath: "/assets/bannerImg-ai-model.webp",
  subDescription: "At Promena, we don’t just build AI; we ensure it evolves with your business. Our AI Model Lifecycle Management services provide ongoing care and optimization, transforming your models into long-term assets that adapt, learn, and continue to drive value.",
  scrollTitle: "AI & Gen AI solutions",
}

const AiModelLifeCyclePage = () => {
  return (
    <>
      <BannerAiModelLifeCycle bannerData={bannerData} />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <PartnerWithUs />
    </>
  )
}

export default AiModelLifeCyclePage
