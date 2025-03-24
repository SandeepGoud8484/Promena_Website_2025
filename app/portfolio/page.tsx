import Image from 'next/image';

export const metadata = {
  title: 'Portfolio',
  description: 'View our latest projects and work',
};

export default function Portfolio() {
  const projects = [
    {
      title: 'E-commerce Platform',
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc',
      category: 'Web Development',
    },
    {
      title: 'Mobile Banking App',
      image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f',
      category: 'Mobile App',
    },
    {
      title: 'Healthcare Dashboard',
      image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3',
      category: 'UI/UX Design',
    },
    {
      title: 'Social Media Platform',
      image: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1',
      category: 'Web Development',
    },
  ];

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Our Portfolio</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="relative group">
              <div className="relative h-64 w-full overflow-hidden rounded-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-gray-600">{project.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}