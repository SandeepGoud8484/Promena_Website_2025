import dynamic from 'next/dynamic';
import BannerService from '@/components/service/banner/BannerService';
const SectionOne = dynamic(() => import("@/components/service/sectionOne/SectionOne"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});


export const metadata = {
  title: "AI Solutions, Software Development & More", 
  description: "Promena offers a wide range of services including AI solutions, software development, and digital transformation. Explore our offerings today.",
  openGraph: {
    title: "AI Solutions, Software Development & More",
    description: "Promena offers a wide range of services including AI solutions, software development, and digital transformation. Explore our offerings today.",
    url: 'https://promena-website-2025.vercel.app/services',
  },
};

export default function Services() {

  return (
    <>
      <BannerService />
      <SectionOne />
    </>
  );
}