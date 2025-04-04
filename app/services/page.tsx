import Header from '@/components/Header';
import Footer from '@/components/Footer';
import dynamic from 'next/dynamic';
import BannerService from '@/components/service/banner/BannerService';
import SectionOne from '@/components/service/sectionOne/SectionOne';
const OfficeLocations = dynamic(() => import("@/components/OfficeLocations"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export const metadata = {
  title: 'Our Services',
  description: 'Explore our range of professional web development services',
  // keywords: "about us, company, team",
};

export default function Services() {

  return (
    <>
      <Header />
      <BannerService />
      <SectionOne />
      <OfficeLocations />
      <Footer />
    </>
  );
}