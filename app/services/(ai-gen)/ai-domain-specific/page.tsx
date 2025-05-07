import dynamic from 'next/dynamic'
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

const page = () => {
  return (
    <>
      <SectionOne />
      <FourPointerComponent data={fourpointerData} title='Our Domain-Specific AI Capabilities'/>
      <SectionThree />
      <FixedBackground />
      <PartnerWithUs />
    </>
  )
}

export default page
