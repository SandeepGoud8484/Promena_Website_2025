import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import BannerAboutUs from '@/components/aboutUs/banner/BannerAboutUs';
const AboutUsSectionOne = dynamic(() => import("@/components/aboutUs/sectionOne/AboutUsSectionOne"), {
    ssr: false,
    loading: () => <p>Loading...</p>,
});
const AboutUsSectionTwo = dynamic(() => import("@/components/aboutUs/sectionTwo/AboutUsSectionTwo"), {
    ssr: false,
    loading: () => <p>Loading...</p>,
});
const OurTeam = dynamic(() => import("@/components/aboutUs/ourTeam/OurTeam"), {
    ssr: false,
    loading: () => <p>Loading...</p>,
});
const AboutFinalSection = dynamic(() => import("@/components/aboutUs/finalSection/AboutFinalSection"), {
    ssr: false,
    loading: () => <p>Loading...</p>,
});
const OfficeLocations = dynamic(() => import("@/components/OfficeLocations"), {
    ssr: false,
    loading: () => <p>Loading...</p>,
});
import Footer from '@/components/Footer';



export const metadata = {
  title: 'About Us',
  description: 'Learn more about our company and our mission',
};

export default function About() {
  return (
    <>
      <Header />
      <BannerAboutUs />
      <AboutUsSectionOne />
      <AboutUsSectionTwo />
      <OurTeam />
      <AboutFinalSection />
      <OfficeLocations />
      <Footer />
    </>
  );
}