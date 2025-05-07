import dynamic from 'next/dynamic'
import SectionOne from '@/components/service/ai-gen/ai-strategy/SectionOne'
import BannerAiModelLifeCycle from '@/components/service/ai-gen/ai-model/BannerAiModelLifeCycle';
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

const bannerData = {
  mainHeading: "AI Strategy Consultation",
  subHeading: "Unlock the Power of AI for Your Business Growth",
  mainDescription: "We help brands with a vision communicate better by leveraging strategy, design and technology.",
  imagePath: "/assets/bannerImg-ai-strategy.webp",
  subDescription: "At Promena, we believe that AI is not just about technology; it’s about redefining your business’s future. Our AI Strategy Consultation is designed to empower your business to leverage AI in the most strategic, impactful way—driving growth, innovation, and transformation.",
  scrollTitle: "AI & Gen AI solutions",
}


const AiStrategyPage = () => {
  return (
    <>
      <BannerAiModelLifeCycle bannerData={bannerData} />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
    </>
  )
}

export default AiStrategyPage
