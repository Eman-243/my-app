"use client";
import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { MdOutlineSupportAgent, MdOutlinePhonelinkSetup, MdInstallDesktop } from "react-icons/md";
import { GiAutoRepair } from "react-icons/gi";
import { motion } from 'framer-motion';


export default function FlipCard() {
  const [flippedStates, setFlippedStates] = useState([false, false, false, false]);

  const cards = [
    { text: "Avaya & NEC PABX Systems.", service: "Phone Systems", Icon: MdOutlinePhonelinkSetup },
    { text: "Managed IT Services/Sloutions in Bahrain.", service: "IT Support", Icon: MdOutlineSupportAgent },
    { text: "Expert Laptop Repair/Upgrade in Bahrain.", service: "Laptop Repair", Icon: GiAutoRepair },
    { text: "We'll install Windows on your PC quickly and easily, so you can get back to work or play.", service: "Windows Installation", Icon: MdInstallDesktop },
  ];

  const handleClick = (index: number) => {
    setFlippedStates((prev) =>
      prev.map((state, i) => (i === index ? !state : state))
    );
  };
  // px-4 sm:px-6 lg:px-8

  return (
    <div className="mx-auto my-8 max-w-6xl font-sans tablet:my-24">
    <div className="tablet:text-3xl miniphone:text-xl font-bold mb-6 tablet:text-left miniphone:text-center">Our Featured Services</div>
    <div className="flex flex-wrap justify-center mx-2">
      {cards.map((card, index) => {
        const Icon = card.Icon;
        return (
          <div className="px-2 w-1/2 sm:w-1/4 miniphone:w-1/4 " key={index}>
            <motion.div
              className="flex flex-col items-center justify-center cursor-pointer"
              onClick={() => handleClick(index)}
            >
              <div className="rounded-full bg-[#F9B823] p-4">
                <Icon className="tablet:w-16 tablet:h-16 miniphone:w-10 miniphone:h-10 text-white" />
              </div>
              <div className="text-black dark:text-white tablet:text-xl miniphone:text-[10px] pt-3 font-semibold text-center">
                {card.service}
              </div>
            </motion.div>
          </div>
        );
      })}
    </div>
  </div>
);

}


