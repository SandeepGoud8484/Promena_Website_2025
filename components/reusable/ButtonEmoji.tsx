import Image from 'next/image';
import React from 'react'

const ButtonEmoji = ({label, icon}:{label: string; icon: string}) => {
  return (
    <button className='flex items-center gap-[20px] py-[12px] px-[30px] text-[14px] font-bold text-[#000000] bg-[#FFFFFF] shadow-[0px_2px_15px_0px_#ffffff40] rounded-[6px]'>
      {label}
      <div className=''>
        <Image 
            src={icon}
            alt={label}
            width="18"
            height="18"
        />
      </div>
    </button>
  )
}

export default ButtonEmoji
