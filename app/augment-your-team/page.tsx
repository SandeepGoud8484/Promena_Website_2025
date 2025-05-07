import dynamic from 'next/dynamic';
import BannerAugment from '@/components/augment/banner/BannerAugment';
const AugmentSectionOne = dynamic(() => import("@/components/augment/sectionOne/AugmentSectionOne"), {
    loading: () => <p>Loading...</p>,
});


export const metadata = {
  title: 'Augment Your Team - Expert Software Developers & AI', 
  description: "Need extra support? Augment your team with Promena’s skilled software developers and AI experts for seamless project delivery.",
  openGraph: {
    title: 'Augment Your Team - Expert Software Developers & AI',
    description: "Need extra support? Augment your team with Promena’s skilled software developers and AI experts for seamless project delivery.",
    url: 'https://promena-website-2025.vercel.app/augment-your-team',
  },
};


const AugmentYourTeamPage = () => {
    return (
        <>
            <BannerAugment />
            <AugmentSectionOne />
        </>
    )
}

export default AugmentYourTeamPage
