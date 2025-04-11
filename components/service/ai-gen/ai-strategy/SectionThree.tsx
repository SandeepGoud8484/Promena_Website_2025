'use client'
import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const data = [
  {
    id: 1,
    title: "Holistic Expertise",
    image: "/assets/aistrategy-2.png",
    description:
      "Our consultants blend technical knowledge with business acumen to create strategies that work.",
  },
  {
    id: 2,
    title: "Tailored Insights",
    image: "/assets/aistrategy-3.png",
    description:
      "We innovate with strategy in mind, helping you future-proof your digital transformation.",
  },
  {
    id: 3,
    title: "Real-World Impact",
    image: "/assets/aistrategy-4.png",
    description:
      "With a deep understanding of technology, we guide your teams toward long-term success.",
  },
];
const SectionThree = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First one open by default

  const toggle = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="bg-[#FFFFFF]">
      <div className="containerTypeOne py-[100px] flex flex-col items-center">
        <div className="sectionHeading text-[#101118] mb-[10px] text-center">
          What Makes Us Different?
        </div>
        <p className="sectionDescription text-[#54565A] mb-[50px] text-center">
          We’re not just consultants; we’re your partners in transformation. At
          Promena, we bring
        </p>
        <div className="w-full flex flex-col-reverse md:flex-row gap-[50px] justify-between">
          <div className="w-full md:w-1/2 md:max-w-[500px]">
            {data.map((item, index) => (
              <div
                key={item.id}
                className="w-full pb-[12px] border-b-2 border-[#DADADA] mb-[40px]"
              >
                <div
                  className="flex items-center gap-[15px] mb-[12px] cursor-pointer"
                  onClick={() => toggle(index)}
                >
                  <Image src={item.image} alt="icon" width={35} height={35} />
                  <div className="featuresTitle text-[#101118]">
                    {item.title}
                  </div>
                </div>

                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      className="sectionDescription text-[#54565A] overflow-hidden"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="pb-3">{item.description}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
          <div className="relative w-full md:w-1/2 md:max-w-[577px] aspect-[577/370] self-start">
            <Image
              src="/assets/aistrategy-img2.webp"
              alt="image"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
