'use client'
import SectionLabel from '@/components/reusable/SectionLabel';
import { timelineData } from '@/data/staticData';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import React, { useState } from 'react';

const OurJourney = () => {
  const SEGMENT_WIDTH = 150; // must match your gap + width
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const currentPosition = 100 * activeIndex;

  const handleNext = () => {
    if (activeIndex < timelineData.length - 1) {
      setDirection(1);
      setActiveIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      setDirection(-1);
      setActiveIndex(prev => prev - 1);
    }
  };

  const currentItem = timelineData[activeIndex];

  return (
    <section className='bg-[white]'>
      <div className='containerTypeOne py-[100px] flex flex-col items-center'>
        <div className='mb-[25px]'>
          <SectionLabel label='Our Journey' />
        </div>
        <div className='sectionHeading mb-[50px] text-[black] text-center'>
          Lorem Ipsum is simply dummy text
        </div>

          <div className='w-full flex justify-center gap-[100px]'>
            <button onClick={handlePrev} className="bg-blue-500 text-white px-3 text-[24px] rounded-[8px]">&lt;</button>
            <button onClick={handleNext} className="bg-blue-500 text-white px-3 text-[24px] rounded-[8px]">&gt;</button>
          </div>
        {/* Timeline Navigation */}
        <div className='relative w-full border rounded-md py-6'>

          {/* Timeline Line */}
          <div className='relative h-[150px] mt-10'>
            <div className='absolute top-[150px] left-0 w-full h-[2px] bg-gray-300'></div>
            <div className='flex transition-transform duration-500 gap-[100px]' style={{ transform: `translateX(-${currentPosition}px)` }}>
              {timelineData.map((item, index) => (
                <div key={item.year} className='relative w-[120px] flex flex-col items-center'>
                  <div className={`w-[12px] h-[12px] rounded-full ${index === activeIndex ? 'bg-black' : 'bg-gray-400'}`}></div>
                  <span className={`mt-2 rotate-[-90deg] whitespace-nowrap text-sm ${index === activeIndex ? 'font-bold text-black' : 'text-gray-400'}`}>{item.year}</span>
                </div>
              ))}
            </div>

            {/* Image */}
            <div className='absolute top-[30px]'>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentItem.year}
                  className="w-[250px] h-[300px] rounded-xl overflow-hidden shadow-lg"
                  initial={{
                    rotate: 0,
                    x: currentPosition,
                    // opacity: 0,
                  }}
                  animate={{ rotate: direction === 1 ? 360 : -360, 
                    x: direction === 1 ? (currentPosition + 1) : (currentPosition - 1), 
                    opacity: 1 }}
                  // exit={{
                  //   rotate: direction === 1 ? 180 : -180,
                  //   x: direction === 1 ? 100 : -100,
                  //   opacity: 0,
                  // }}
                  transition={{ duration: 0.6 }}
                
                >
                  <Image src={currentItem.image} alt="year-img" width={250} height={300} />
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
