import dynamic from 'next/dynamic';
import BannerAboutUs from '@/components/aboutUs/banner/BannerAboutUs';
const AboutUsSectionOne = dynamic(() => import("@/components/aboutUs/sectionOne/AboutUsSectionOne"), {
  loading: () => <p>Loading...</p>,
});
const AboutUsSectionTwo = dynamic(() => import("@/components/aboutUs/sectionTwo/AboutUsSectionTwo"), {
  loading: () => <p>Loading...</p>,
});
import OurJourney from '@/components/aboutUs/ourJourney/OurJourney';
import SectionLabel from '@/components/reusable/SectionLabel';
const OurTeam = dynamic(() => import("@/components/aboutUs/ourTeam/OurTeam"), {
  loading: () => <p>Loading...</p>,
});
const AboutFinalSection = dynamic(() => import("@/components/aboutUs/finalSection/AboutFinalSection"), {
  loading: () => <p>Loading...</p>,
});



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
      <BannerAboutUs />
      <AboutUsSectionOne />
      <section className='pt-[100px] bg-[#09090F]'>
        <div className='containerTypeOne flex flex-col items-center'>
          <div className="mb-[25px]">
            <SectionLabel label="How it works" />
          </div>
          <h2 className="sectionHeading mb-[30px] text-center">
            Empowering Your Business with{" "}
            <span className="bg-[#191A23] rounded px-2 py-1 text-[#9A9A9A]">
              Speed, Agility, & Scalability
            </span>
          </h2>
        </div>
      </section>
      <AboutUsSectionTwo />
      {/* <OurJourney /> */}
      <OurTeam />
      <AboutFinalSection />
    </>
  );
}