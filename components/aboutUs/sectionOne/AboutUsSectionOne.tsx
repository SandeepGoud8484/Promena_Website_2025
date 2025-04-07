import React from 'react'
import styles from './AboutUsSectionOne.module.css'
import Counter from '@/components/ui/counter';
import { metrics } from '@/data/staticData';



const AboutUsSectionOne = () => {
  return (
    <section className='bg-[#FFFFFF]'>
      <div className={`containerTypeOne pt-[50px] pb-[100px]`}>
        <div className='flex flex-col md:flex-row md:justify-between'>
          <div className={`${styles.metricSubHeading} mb-[10px]`}>Our Mission</div>
          <p className={`${styles.metricDescription} w-[100%] md:w-[60%] `}>
            Empowering brands to thrive in a digital world, we inspire
            imagination, collaboration, and excellence. Our goal is to
            elevate brands through impactful storytelling and innovative
            design solutions.
          </p>
        </div>
        <div className='flex flex-col md:flex-row md:justify-between my-[30px]'>
          <div className={`${styles.metricSubHeading} mb-[10px]`}>Our Approach</div>
          <p className={`${styles.metricDescription} w-[100%] md:w-[60%]`}>
            Empowering brands to thrive in a digital world, we inspire
            imagination, collaboration, and excellence. Our goal is to
            elevate brands through impactful storytelling and innovative
            design solutions. Empowering brands to thrive in a digital world, we inspire
            imagination, collaboration, and excellence.
          </p>
        </div>
        <div className='flex flex-col md:flex-row md:justify-between my-[30px]'>
          <div className={`${styles.metricSubHeading} mb-[10px]`}>In Numbers</div>
          <div className={`${styles.metricNumbers} w-[100%] md:w-[60%] grid grid-cols-2 gap-[50px] `}>
              {
                metrics.map((metric,index) => {
                  return(
                    <div className={`${styles.metricNumber}`} key={index}>
                      <Counter
                        className="counter-number"
                        delay={1}
                        direction="up"
                        targetValue={parseInt(
                          metric.digit.replace(/\D/g, ""),
                          10
                        )}
                      />
                      {metric.digit.replace(/\d/g, "")}{" "}
                      <p>{metric.label}</p>
                    </div>
                  )
                })
              }
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUsSectionOne
