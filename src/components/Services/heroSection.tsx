"use client";
import { createRef, RefObject } from 'react';


export default function Component() {
  let videoRef: RefObject<HTMLVideoElement> = createRef();

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleVideoEnd = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <section 
      className="relative bg-cover bg-no-repeat mb-10 mx-auto max-w-6xl font-worksans"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video ref={videoRef} autoPlay muted className="object-cover" onEnded={handleVideoEnd}>
        <source src="services/service.mp4" type="video/mp4" />
      </video>        
    </section>
  );
}
