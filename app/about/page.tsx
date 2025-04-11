import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import BannerAboutUs from '@/components/aboutUs/banner/BannerAboutUs';
const AboutUsSectionOne = dynamic(() => import("@/components/aboutUs/sectionOne/AboutUsSectionOne"), {
    loading: () => <p>Loading...</p>,
});
const AboutUsSectionTwo = dynamic(() => import("@/components/aboutUs/sectionTwo/AboutUsSectionTwo"), {
    loading: () => <p>Loading...</p>,
});
const OurTeam = dynamic(() => import("@/components/aboutUs/ourTeam/OurTeam"), {
    loading: () => <p>Loading...</p>,
});
const AboutFinalSection = dynamic(() => import("@/components/aboutUs/finalSection/AboutFinalSection"), {
    loading: () => <p>Loading...</p>,
});
const OfficeLocations = dynamic(() => import("@/components/OfficeLocations"), {
    ssr: false,
    loading: () => <p>Loading...</p>,
});
import Footer from '@/components/Footer';
import OurJourney from '@/components/aboutUs/ourJourney/OurJourney';



export const metadata = {
  title: 'About Promena - Leading AI & Software Development Company', 
  description: "Learn more about Promena, a leader in AI solutions and software development. Our mission is to drive business growth with AI-powered innovation.",
  openGraph: {
    title: 'About Promena - Leading AI & Software Development Company',
    description: "Learn more about Promena, a leader in AI solutions and software development. Our mission is to drive business growth with AI-powered innovation.",
    url: 'https://promena-website-2025.vercel.app/about',
  },
};


export default function About() {
  return (
    <>
      <Header />
      <BannerAboutUs />
      <AboutUsSectionOne />
      <AboutUsSectionTwo />
      <OurJourney />
      <OurTeam />
      <AboutFinalSection />
      <OfficeLocations />
      <Footer />
    </>
  );
}