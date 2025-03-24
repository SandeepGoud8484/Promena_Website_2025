import Image from 'next/image';

export const metadata = {
  title: 'Our Services',
  description: 'Explore our range of professional web development services',
};

export default function Services() {
  const services = [
    {
      title: 'Web Development',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
      description: 'Custom web applications built with modern technologies',
    },
    {
      title: 'UI/UX Design',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5',
      description: 'Beautiful and intuitive user interfaces that engage users',
    },
    {
      title: 'Mobile Development',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c',
      description: 'Native and cross-platform mobile applications',
    },
  ];

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}