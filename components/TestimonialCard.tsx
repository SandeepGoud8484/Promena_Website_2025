'use client'
import React from "react";
import Image from "next/image";
import { Testimonial } from "@/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
}) => {
  return (
    <>
     <div className="flex flex-col justify-between bg-white rounded-[20px] p-4 md:p-6 max-w-[90%] md:max-w-[575px] shadow-lg mx-auto">
   
      <div className="flex justify-between items-center">

        <div className="relative w-[24px] h-[29px] md:w-[57px] md:h-[57px]">
          <Image
            src="/assets/quotes.png"
            alt="Quotes Icon"
            fill
            className="object-contain"
          />
        </div>

        <div className="relative w-[80px] h-[20px] md:w-[122px] md:h-[24px]">
          <Image
            src={testimonial.stars}
            alt="Rating Stars"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Testimonial Text */}
      <p className="font-normal text-sm md:text-base text-[#101118] leading-relaxed my-4 md:my-6">
        {testimonial.quote}
      </p>

      {/* Author Section */}
      <div className="flex items-center gap-4 md:gap-6">
        {/* Author Image */}
        <div className="relative w-10 h-10 md:w-16 md:h-16 rounded-full overflow-hidden">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Author Details */}
        <div>
          <p className="font-bold text-sm md:text-base text-[#101118]">
            {testimonial.name}
          </p>
          <p className="font-normal text-xs md:text-sm text-gray-500">
            {testimonial.designation}
          </p>
        </div>
      </div>
    </div>
    </>
  );
};
