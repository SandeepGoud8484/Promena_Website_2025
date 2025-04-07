import React from "react";
import { ArrowRight } from "lucide-react";
import { DotInLabelIcon } from "@/public/icons";

interface CardProps {
  number: string;
  title: string;
  heading:string;
  description: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({
  number,
  title,
  heading,
  description,
  imageUrl,
}) => {
  return (
    <div
      className="flex flex-col justify-between p-[25px] w-[280px]  md:w-[300px] bg-black rounded-[5px] overflow-hidden shadow-lg "
      style={{ border: "0.001px solid rgba(91, 91, 91, 1)" }}
    >
      <div className="relative overflow-hidden">

        <div className="flex items-center justify-between ">

          <div className="bg-black backdrop-blur-sm rounded-full flex items-center justify-center">
            <span
              className="text-[clamp(24px,5vw,40px)] leading-[clamp(28px,5.5vw,45px)] font-medium text-[#5B5B5B]"
            >
              {number}
            </span>
          </div>
          <div className="flex items-center gap-[10px] text-[clamp(16px,3vw,20px)] leading-[clamp(22px,3.5vw,25px)] font-medium text-[#5B5B5B]"><DotInLabelIcon />{title}</div>
        </div>
      </div>
      <div className="my-[50px]">
      <div className="text-[clamp(18px,4vw,24px)] leading-[clamp(22px,4.5vw,27.6px)] font-medium text-[#FFFFFF]">{heading}</div>
      <p className="mt-[5px] text-[#ADADAD] text-[14px] font-normal leading-[24px]" >{description}</p>
      </div>
      <img 
          src={imageUrl} 
          alt={title} 
          className="rounded relative w-[248px] h-[165px]"
        />
    </div>
  );
};

export default Card;
