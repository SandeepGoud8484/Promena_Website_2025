import dynamic from 'next/dynamic';
import Header from '@/components/Header'
import BannerAugment from '@/components/augment/banner/BannerAugment';
const AugmentSectionOne = dynamic(() => import("@/components/augment/sectionOne/AugmentSectionOne"), {
    ssr: false,
    loading: () => <p>Loading...</p>,
});
const OfficeLocations = dynamic(() => import("@/components/OfficeLocations"), {
    ssr: false,
    loading: () => <p>Loading...</p>,
});
import Footer from '@/components/Footer'



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
