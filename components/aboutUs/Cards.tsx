'use client'
import React, { useRef } from "react";
import Card from "./Card";

const cards = [
  {
    number: "01",
    title: "Communication",
    heading: "CONNECT",
    description:
      "Tell us about your project, and we'll match you with the right AI, data, or tech expert tailored to your specific needs.",
    imageUrl:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
  },
  {
    number: "02",
    title: "Development",
    heading: "WORK",
    description:
      "We believe execution drives success. Our skilled resources onsite or offsite, ensuring timely delivery.",
    imageUrl:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
  },
  {
    number: "03",
    title: "Innovation",
    heading: "Pay",
    description:
      "Stay ahead with cutting-edge solutions. Our team implements to drive your business forward.",
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  },
  {
    number: "04",
    title: "Results",
    heading: "CONNECT",
    description:
      "We measure success through tangible outcomes. Experience real growth and transformation with our solutions.",
    imageUrl:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80",
  },
];

function Cards() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // const scroll = (direction: 'left' | 'right') => {
  //   if (scrollContainerRef.current) {
  //     const scrollAmount = 420;
  //     const newScrollPosition = scrollContainerRef.current.scrollLeft +
  //       (direction === 'left' ? -scrollAmount : scrollAmount);

  //     scrollContainerRef.current.scrollTo({
  //       left: newScrollPosition,
  //       behavior: 'smooth'
  //     });
  //   }
  // };

  return (
    <div className="bg-black">
      <div className="max-w-4xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl ">
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 overflow-x-auto scrollbar-hide scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {cards.map((card, index) => (
              <div
                key={index}
                className="w-full sm:w-auto flex-shrink-0 flex justify-center" 
              >
                <Card {...card} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
