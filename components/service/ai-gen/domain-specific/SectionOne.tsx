import React from 'react'
import styles from './DomainSpefic.module.css'

const SectionOne = () => {
    return (
        <section className={`${styles.domainSecOneBg}`}>
            <div className='containerTypeOne py-[100px]'>
                <div className='sectionHeading text-[#FFFFFF] text-center mb-[50px]'>Why Domain-Specific AI Matters</div>
                <div className="flex flex-wrap gap-[30px] w-[100%]">
                    {/* Increased Accuracy Card */}
                    <div className="bg-[#1B1B1B] rounded-[16px] p-6 relative w-full md:w-[65%]">
                        <div className="flex justify-between items-start">
                            <div className="text-2xl mb-4 text-[#FFFFFF]">Increased Accuracy</div>
                            <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                                <svg
                                    className="w-4 h-4 text-blue-500"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                                    <path
                                        fillRule="evenodd"
                                        d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                        </div>
                        <p className="text-[#ADADAD] pt-[20px]">
                            Models trained on industry-specific data deliver more precise
                            results.
                        </p>
                    </div>

                    {/* Enhanced Efficiency Card */}
                    <div className="bg-[#1B1B1B] rounded-[16px] p-6 relative w-full md:w-[30%]">
                        <div className="flex justify-between items-start">
                            <div className="text-2xl mb-4 text-[#FFFFFF]">Enhanced Efficiency</div>
                            <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                                <svg
                                    className="w-4 h-4 text-blue-500"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                                </svg>
                            </div>
                        </div>
                        <p className="text-[#ADADAD] pt-[20px]">
                            Solve your sectors unique problems faster with tailored
                            solutions.
                        </p>
                    </div>

                    {/* Competitive Edge Card */}
                    <div className="bg-[#1B1B1B] rounded-[16px] p-6 relative w-full md:w-[30%]">
                        <div className="flex justify-between items-start">
                            <div className="text-2xl mb-4 text-[#FFFFFF]">Competitive Edge</div>
                            <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                                <svg
                                    className="w-4 h-4 text-blue-500"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                        </div>
                        <p className="text-[#ADADAD] pt-[20px]">
                            Stay ahead with AI models designed to address your niche
                            requirements.
                        </p>
                    </div>

                    {/* Better ROI Card */}
                    <div className="bg-[#1B1B1B] rounded-[16px] p-6 relative w-full md:w-[65%]">
                        <div className="flex justify-between items-start">
                            <div className="text-2xl mb-4 text-[#FFFFFF]">Better ROI</div>
                            <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                                <svg
                                    className="w-4 h-4 text-blue-500"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                        </div>
                        <p className="text-[#ADADAD] pt-[20px]">
                            Optimize resource allocation with AI solutions that understand
                            your business context.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionOne
