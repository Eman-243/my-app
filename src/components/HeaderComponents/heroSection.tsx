"use client";
import { Button } from "@nextui-org/react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Component() {
  const images = ['/background2.png', '/background3.png', '/background4.png', '/background5.png'];
  const texts = [
    {
      heading: 'Unlock innovation Discover, shop, and enjoy the latest tech trends',
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
    <section className="relative bg-no-repeat mx-auto max-w-6xl font-worksans shadow-lg">
      <Carousel
        autoPlay
        infiniteLoop
        interval={5000}
        showThumbs={false}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="relative bg-cover bg-no-repeat py-12 md:py-24 lg:py-48 px-4 md:px-8 lg:px-12  mx-auto max-w-6xl font-worksans"
            style={{ backgroundImage: `url(${image})`, height: '700px' }} // Adjust this height value to match the arrows' hover height
          >
            <div className="flex flex-col justify-center items-start max-w-md ml-4 font-worksans">
              <h1 className="text-xl md:text-3xl lg:text-4xl text-black  mb-6  text-left font-worksans leading-relaxed">
                {texts[index].heading}
              </h1>
              <p className="text-md md:text-lg lg:text-lg text-black  mb-6  text-left font-worksans opacity-90 leading-relaxed">
                {texts[index].paragraph}
              </p>
              <div className="inline-block">
                <Button
                  className="bg-yellow-500 text-white py-2 md:py-3 lg:py-4 px-6 md:px-16 rounded-lg hover:bg-black"
                  style={{ width: "auto" }}
                >
                  Learn more
                </Button>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
}
