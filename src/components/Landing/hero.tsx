"use client";
import { Button } from "@nextui-org/react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Component() {
  const images = ['landingpage/background2.png', 'landingpage/background3.png', 'landingpage/background4.png', 'landingpage/background5.png'];
  const texts = [
    {
      heading: 'Unlock Innovation Discover, shop, and enjoy the latest tech trends',
      paragraph: 'Stay ahead of the curve with the latest technology trends. Discover new innovations and shop for the latest gadgets.'
    },
    {
      heading: 'Experience the future with cutting-edge technology',
      paragraph: 'Get a glimpse of the future with our cutting-edge technology products. Experience the best that technology has to offer.'
    },
    {
      heading: 'Stay ahead with our exclusive range of gadgets',
      paragraph: 'Keep up with the fast-paced world of technology with our exclusive range of gadgets. Stay ahead, stay updated.'
    },
    {
      heading: 'Explore new possibilities with our advanced tech solutions',
      paragraph: 'Unlock new possibilities and transform the way you work, play, and live with our advanced tech solutions.'
    }
  ];

  return (
    <section className="relative mx-auto max-w-6xl  font-roboto shadow-lg tablet:mb-24">
      <Carousel
        autoPlay
        infiniteLoop
        interval={5000}
        showThumbs={false}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="relative bg-cover bg-center py-12 md:py-24 lg:py-48 px-4 md:px-8 lg:px-12 minitablet:h-full	miniphone:h-60"
            style={{ backgroundImage: `url(${image})` }}
          >
              <div className="flex flex-col justify-center items-start sm:max-w-[360px] miniphone:max-w-44 tablet:max-w-[265px] lg:max-w-md ml-4 font-roboto">
              <h1 className="text-[20px] md:text-[30px] leading-[1.1] lg:text-[48px] text-black miniphone:text-[16px] phone:mb-2 md:mb-5 tablet:text-[20px] tablet:font-bold text-left  font-roboto ">
                {texts[index].heading}
              </h1>
              <p className=" miniphone:hidden tablet:flex md:text-[18px] text-black miniphone:text-[14px] mb-4 text-left f font-roboto opacity-90 leading-[1.2]">
                {texts[index].paragraph}
              </p>
              <Button className="bg-[#F9B823] text-white text-sm tablet:text-base py-3 md:py-3 lg:py-4 px-6 md:px-16 rounded-lg hover:bg-black">
                Learn more
              </Button>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );

}
