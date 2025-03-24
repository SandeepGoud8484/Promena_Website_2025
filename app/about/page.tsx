import Image from 'next/image';

export const metadata = {
  title: 'About Us',
  description: 'Learn more about our company and our mission',
};

export default function About() {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">About Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              alt="Team"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              We are passionate about creating exceptional digital experiences that make a difference.
              Our team combines creativity with technical expertise to deliver outstanding results.
            </p>
            <p className="text-gray-600">
              Founded in 2025, we've helped numerous clients achieve their digital goals through
              innovative solutions and cutting-edge technology.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}