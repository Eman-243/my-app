"use client";
import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { MdOutlineSupportAgent, MdOutlinePhonelinkSetup, MdInstallDesktop } from "react-icons/md";
import { GiAutoRepair } from "react-icons/gi";

export default function FlipCard() {
  const [flippedStates, setFlippedStates] = useState([false, false, false, false]);

  const cards = [
    { text: "Avaya & NEC PABX Systems.", service: "Phone Systems", Icon: MdOutlinePhonelinkSetup },
    { text: "Managed IT Services/Sloutions in Bahrain.", service: "IT Support", Icon: MdOutlineSupportAgent },
    { text: "Expert Laptop Repair/Upgrade in Bahrain.", service: "Laptop Repair", Icon:GiAutoRepair  },
    { text: "We'll install Windows on your PC quickly and easily, so you can get back to work or play.", service: "Windows Instaltion", Icon: MdInstallDesktop },
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
                className="w-64 h-56 relative rounded-md flex flex-col items-center justify-center border border-slate-100 hover:border-yellow-400 cursor-pointer"
                onClick={() => handleClick(index)}
              >
                <Icon className="w-16 h-16 text-yellow-400 hover:text-black" />
                <div className="text-black text-lg pt-3">
                  {card.service}
                </div>
              </div>

              <div
                className="w-64 h-56 relative flex items-center justify-center"
                onClick={() => handleClick(index)}
              >
                <Icon className="w-16 h-16 text-yellow-400 hover:text-black" />
                <div className="absolute inset-0 bg-black bg-fixed opacity-50 text-center flex items-center justify-center rounded text-white tracking-wide px-2">
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

