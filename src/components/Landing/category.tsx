"use client";
import React, { useEffect, useRef } from "react";

export default function Component() {
  const urls = [
    'landingpage/lapC.mp4',
    'landingpage/AcceC.mp4',
    'landingpage/iphoneC.mp4'
  ];

  const buttonNames = ['Laptops', 'IT Equipment', 'Phones'];

  const videoRefs = useRef(urls.map(() => React.createRef<HTMLVideoElement>()));

  const handleMouseOver = (index: number) => {
    const video = videoRefs.current[index].current;
    if (video) {
      video.play();
    }
  };

  const handleMouseOut = (index: number) => {
    const video = videoRefs.current[index].current;
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const video = entry.target as HTMLVideoElement;
        if (entry.isIntersecting) {
          video.play();
        } else {
          video.pause();
          video.currentTime = 0;
        }
      });
    });

    videoRefs.current.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      videoRefs.current.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <div className="mx-auto my-8 max-w-6xl font-sans tablet:my-24">
      <div className="tablet:text-3xl miniphone:text-xl font-bold mb-6 tablet:text-left miniphone:text-center">Shop with us!</div>
      <div className="grid grid-cols-3 gap-4.1 mb-4">
        {videoRefs.current.map((ref, index) => (
          <div key={index} className="relative overflow-hidden group rounded shadow-md">
            <div className="flex flex-col border dark:border-[#313a51] border-gray-200">
              <video 
                id={`video-${index}`} 
                ref={ref} 
                className="w-full h-full shadow-lg  rounded-t-lg"
                onMouseOver={() => handleMouseOver(index)}
                src={urls[index]}
                muted
              />
              <button className="bg-white  text-black miniphone:text-[12px]  dark:bg-[#424242] dark:text-white border border-transparent tablet:text-xl font-semibold py-2 px-4 rounded hover:bg-[#F9B823] hover:text-white">
                {buttonNames[index]}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
