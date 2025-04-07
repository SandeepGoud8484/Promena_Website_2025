import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import BannerHome from '@/components/BannerHome';
const ScrollPartners = dynamic(() => import("@/components/ScrollPartners"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
import HomeSectionOne from '@/components/HomeSectionOne';
import HomeSectionTwo from '@/components/HomeSectionTwo';
import HomeSectionThree from '@/components/HomeSectionThree';
const OfficeLocations = dynamic(() => import("@/components/OfficeLocations"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
import Footer from '@/components/Footer';


export default function Home() {
  return (
    <main className="">
      <Header />
      <BannerHome />
      <ScrollPartners />
      <HomeSectionOne />
      <HomeSectionTwo />
      <HomeSectionThree />
      <OfficeLocations />
      <Footer />
      {/* <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold">My Website</div>
            <div className="flex gap-6">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              <Link href="/about" className="hover:text-blue-600">About</Link>
              <Link href="/services" className="hover:text-blue-600">Services</Link>
              <Link href="/portfolio" className="hover:text-blue-600">Portfolio</Link>
              <Link href="/contact" className="hover:text-blue-600">Contact</Link>
            </div>
          </div>
        </div>
      </nav> */}

      {/* <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
              Welcome to My Website
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Building the future with modern web solutions
            </p>
          </div>
          <div className="mt-16">
            <Image
              src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d"
              alt="Hero image"
              width={1200}
              height={600}
              className="rounded-lg shadow-xl"
              priority
            />
          </div>
        </div>
      </section> */}
    </main>
  );
}