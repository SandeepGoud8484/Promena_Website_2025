'use client'
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { TestimonialCard } from './TestimonialCard';
import SectionLabel from './reusable/SectionLabel';
import { testimonials } from '@/data/staticData';
import { motion } from 'framer-motion';

export const TestimonialSlider: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const sliderRef = useRef<HTMLDivElement>(null);

    const [visibleCount, setVisibleCount] = useState(2); // Default to 2 (safe for SSR)
    const dots = visibleCount === 2 ? testimonials.length-1 : testimonials.length;

    useEffect(() => {
        const getVisibleCount = () => (window.innerWidth < 768 ? 1 : 2);

        setVisibleCount(getVisibleCount()); // Update only on client

        const handleResize = () => {
            setVisibleCount(getVisibleCount());
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) =>
            prevIndex + visibleCount >= testimonials.length ? 0 : prevIndex + 1
        );
    }, [visibleCount]);

    useEffect(() => {
        if (isHovered) return;
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, [isHovered, nextSlide]);

    //   useEffect(() => {
    //     const setEqualHeights = () => {
    //       if (!sliderRef.current) return;

    //       const cards = sliderRef.current.querySelectorAll('.testimonialsStyles');
    //       let maxHeight = 0;

    //       cards.forEach((card) => {
    //         (card as HTMLElement).style.height = 'auto'; // Reset height
    //         const height = card.getBoundingClientRect().height;
    //         if (height > maxHeight) maxHeight = height;
    //       });

    //       cards.forEach((card) => {
    //         (card as HTMLElement).style.height = `${maxHeight}px`;
    //       });
    //     };

    //     setEqualHeights();
    //     window.addEventListener('resize', setEqualHeights);

    //     return () => window.removeEventListener('resize', setEqualHeights);
    //   }, [visibleCount]);


    return (
        <section className='flex justify-center  rounded-[2rem]'>
            <div className="containerTypeOne relative py-[100px]">
                <div className='flex justify-center flex-col items-center'>
                    <div className='mb-[25px] '>
                        <SectionLabel label='Testimonials' />
                    </div>
                    <div className='sectionHeading md:w-[700px] text-[#FFFFFF] text-center mb-8'>
                        First-Hand Opinions Of Clients On Their Partnership Experience
                    </div>
                </div>

                <div
                    className="relative overflow-hidden"
                    ref={sliderRef}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <motion.div
                        className="flex"
                        animate={{ x: `-${currentIndex * (100 / visibleCount)}%` }}
                        transition={{ ease: 'linear', duration: 1, type: "spring", stiffness: 100, damping: 10 }}
                    >
                        {testimonials.map((testimonial) => (
                            <div
                                key={testimonial.id}
                                className="flex px-2"
                                style={{ flex: `0 0 ${100 / visibleCount}%` }}
                            >
                                <TestimonialCard testimonial={testimonial} />
                            </div>
                        ))}
                    </motion.div>
                </div>

                <div className="flex justify-center mt-10 gap-2">
                    {[...Array(Math.ceil(dots))].map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-2 h-2 rounded-full transition-colors ${currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'}`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
