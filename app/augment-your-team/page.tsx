import dynamic from 'next/dynamic';
import Header from '@/components/Header'
import BannerAugment from '@/components/augment/banner/BannerAugment';
const AugmentSectionOne = dynamic(() => import("@/components/augment/sectionOne/AugmentSectionOne"), {
    loading: () => <p>Loading...</p>,
});
const OfficeLocations = dynamic(() => import("@/components/OfficeLocations"), {
    ssr: false,
    loading: () => <p>Loading...</p>,
});
import Footer from '@/components/Footer'


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
            <Header />
            <BannerAugment />
            <AugmentSectionOne />
            <OfficeLocations />
            <Footer />
        </>
    )
}

export default AugmentYourTeamPage
