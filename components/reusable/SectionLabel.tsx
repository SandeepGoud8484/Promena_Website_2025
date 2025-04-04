import { DotInLabelIcon } from '@/public/icons'
import React from 'react'

export default function SectionLabel({label = "Our expertise spans"}) {
  return (
    <div className='sectionLabel rounded-[5px] flex items-center gap-[15px] 3xl:gap-[30px] py-[5px] px-[15px] 3xl:px-[30px] 3xl:py-[20px] bg-[#191A23] max-w-max'>
      <div><DotInLabelIcon /></div>
      <p className='leading-[25px] text-[#E0E0ED] 3xl:text-[30px]'>{label}</p>
    </div>
  )
}


