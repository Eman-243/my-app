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

  return (
    <div className="max-w-6xl mx-auto mb-8 font-sans">
      <h2 className="text-3xl font-bold mb-6">Services</h2>
      <div className="flex justify-between">
        {cards.map((card, index) => {
          const Icon = card.Icon;
          return (
            <ReactCardFlip isFlipped={flippedStates[index]} flipDirection="horizontal" key={index}>
              <div
                className="w-64 h-56 relative rounded-md flex flex-col items-center justify-center  cursor-pointer transition-colors duration-300"
                onClick={() => handleClick(index)}
              >
                <Icon className="w-16 h-16 text-[#F9B823]" />
                <div className="text-gray-600	 text-lg pt-3 font-semibold">
                  {card.service}
                </div>
              </div>

              <div
                className="w-64 h-56 relative flex items-center justify-center"
                onClick={() => handleClick(index)}
              >
                <div className="w-64 h-56 relative rounded-md flex flex-col items-center justify-center border border-slate-100 text-black text-center">
                  {card.text}
                </div>
              </div>
            </ReactCardFlip>
          );
        })}
      </div>
    </div>
  );
}


