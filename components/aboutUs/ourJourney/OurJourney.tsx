'use client'

import SectionLabel from '@/components/reusable/SectionLabel';
import { timelineData } from '@/data/staticData';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import React, { useState } from 'react';

const OurJourney = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    if (activeIndex < timelineData.length - 1) setActiveIndex(prev => prev + 1);
  };

  const handlePrev = () => {
    if (activeIndex > 0) setActiveIndex(prev => prev - 1);
  };

  const currentItem = timelineData[activeIndex];

  return (
    <section className=''>
      <div className='containerTypeOne py-[100px] flex flex-col items-center'>
        <div className='mb-[25px]'>
          <SectionLabel label='Our Journey' />
        </div>
        <div className='sectionHeading mb-[50px] text-[black] text-center'>
          Lorem Ipsum is simply dummy text
        </div>

        {/* Timeline Navigation */}
        <div className='relative w-full max-w-[1240px] border rounded-md p-6'>
          <div className='absolute left-0 top-1/2 transform -translate-y-1/2 z-10'>
            <button onClick={handlePrev} className="bg-blue-500 text-white px-3 text-[24px] rounded-[8px]">&lt;</button>
          </div>
          <div className='absolute right-0 top-1/2 transform -translate-y-1/2 z-10'>
            <button onClick={handleNext} className="bg-blue-500 text-white px-3 text-[24px] rounded-[8px]">&gt;</button>
          </div>

          {/* Timeline Line */}
          <div className='relative h-[150px] mt-10'>
            <div className='absolute top-[70px] left-0 w-full h-[2px] bg-gray-300'></div>
            <div className='flex transition-transform duration-500 gap-[100px] pl-[150px]' style={{ transform: `translateX(-${activeIndex * 150}px)` }}>
              {timelineData.map((item, index) => (
                <div key={item.year} className='relative w-[120px] flex flex-col items-center'>
                  <div className={`w-[12px] h-[12px] rounded-full ${index === activeIndex ? 'bg-black' : 'bg-gray-400'}`}></div>
                  <span className={`mt-2 rotate-[-90deg] whitespace-nowrap text-sm ${index === activeIndex ? 'font-bold text-black' : 'text-gray-400'}`}>{item.year}</span>
                </div>
              ))}
            </div>

            {/* Image */}
            <div className='absolute left-[150px] top-[-180px]'>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentItem.year}
                  className="w-[300px] h-[400px] rounded-xl overflow-hidden shadow-lg"
                  initial={{ rotate: -15, x: -150,  }}
                  animate={{ rotate: 0, x: 0,  }}
                  exit={{ rotate: 15, x: 150,  }}
                  transition={{ duration: 0.6 }}
                >
                  <Image src={currentItem.image} alt="year-img" width={300} height={400} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <motion.div
          key={currentItem.content}
          className="max-w-2xl mt-10 text-sm text-gray-600 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.4 }}
        >
          <p>{currentItem.content}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default OurJourney;
