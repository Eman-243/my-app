

"use client";
import { useRouter } from 'next/navigation';
import { usePathname  } from 'next/navigation';
import { useEffect } from 'react';
import { useState } from 'react';
import {motion} from "framer-motion";


export default function ServicePage() {
  const pathname = usePathname();

  const [serviceName, setServiceName] = useState('');

  useEffect(() => {
    const pathParts = pathname.split('/');
    setServiceName(pathParts[2]);
    sessionStorage.setItem('scrollPosition', '0');
  }, [pathname]);
  const serviceData = [
    {
      title: 'Computer AMC',
      subtitle: 'Subtitle for Computer AMC',
      description: 'Reliable and comprehensive Computer AMC services are readily available for you in Bahrain, ensuring optimal performance.',
      features: [
        {
          title: 'Benefit 1',
          benefits: [
            'Effortless file and print sharing',
            'Automated server backup capabilities',
            'Remote access for anywhere anytime access to files and applications',
            'Simplified server management',
            'Centralized security',
            'Centralized virus and spyware management',
            'Client Machine Backups to store all corporate data in one place'
          ]             
          },
        {
          title: 'Benefit 2',
          benefits: [
            'Effortless file and print sharing',
            'Automated server backup capabilities',
            'Remote access for anywhere anytime access to files and applications',
            'Simplified server management',
            'Centralized security',
            'Centralized virus and spyware management',
            'Client Machine Backups to store all corporate data in one place'
          ]       
                }
      ],      image: '/services/amc.png'
    },
    {
      title: 'Time Attendance Systems',
      subtitle: 'Experience seamless workforce management with our Time Attendance Systems, designed for optimal efficiency and productivity',
      description: "Still entrapped in outdated methods of managing employee work time through cards and handwritten journals? Such methods can't ensure the desired level of effectiveness and accuracy. Nexcel has a transformative solution - Time-Attendance & Access Control systems, which render managing your employees and physical security both effortless and precise. Perfect for businesses of all sizes, these systems ensure the optimal utilization of your company's most valuable asset - employee work time. Additionally, we offer contactless systems for hygienic attendance requirements. Our face detection systems allow users to identify themselves simply by presenting their face to the device. The TFT color touch screen and our robust face detection algorithm ensure a rich, simple user experience. Using state-of-the-art 3D imaging technology, our devices recognize faces, offering a hygienic, 100% touch-free biometric authentication.",
      features: [
        {
          title: 'key benefits of installing a server with us are listed below',
          benefits: [
            'Effortless file and print sharing',
            'Automated server backup capabilities',
            'Remote access for anywhere anytime access to files and applications',
            'Simplified server management',
            'Centralized security',
            'Centralized virus and spyware management',
            'Client Machine Backups to store all corporate data in one place'
          ]       
         },
        {
          title: 'Benefit 2',
          benefits: [
            'Effortless file and print sharing',
            'Automated server backup capabilities',
            'Remote access for anywhere anytime access to files and applications',
            'Simplified server management',
            'Centralized security',
            'Centralized virus and spyware management',
            'Client Machine Backups to store all corporate data in one place'
          ]        },{
            title: 'Benefit 1',
            benefits: [
                'Effortless file and print sharing',
                'Automated server backup capabilities',
                'Remote access for anywhere anytime access to files and applications',
                'Simplified server management',
                'Centralized security',
                'Centralized virus and spyware management',
                'Client Machine Backups to store all corporate data in one place'
              ]          },
         
      ],      image: '/services/time.png'
    },
    // Add more services as needed
  ];
  // Find the service that matches the ID in the URL
  const service = serviceData.find(service => service.title.replace(/ /g, '-').toLowerCase() === serviceName);

  // If no service was found, return null
  if (!service) {
    return null;
  }

  return (
    <div >
      <div className='max-w-6xl mx-auto w-auto font-sans'>
        <div className='relative'>
          <img src={service.image} alt={service.title} className='w-full' />
          <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-50'></div>
          <div className='absolute top-0 left-0 w-full h-full flex items-center p-4'>
            <div className='max-w-md ml-2'>
              <h1 className='text-white text-5xl font-bold mb-2 tablet:text-5xl miniphone:text-xl'>{service.title}</h1>
              <h2 className='text-white tablet:text-xl miniphone:text-sm'>{service.subtitle}</h2>
            </div>
          </div>
        </div>
        <div className='py-2 px-2 mb-24 mt-24  dark:bg-[#030712] dark:border-[#313a51] border border-transparent' >
          <div className='mb-16 mt-16 '>
            <div className=''>
              <h1 className='text-black text-3xl miniphone:text-xl font-bold mb-1 text-center dark:text-white'>{service.title}</h1>
              <h2 className='text-black text-xl mb-1 text-center dark:text-gray-300'>Installation Across Bahrain !</h2>
            </div>
            <div className=''>
              <p className='text-lg text-center'>
                {service.description}
              </p>
            </div>
          </div>
          <div className=''>
            <h2 className='text-3xl font-bold mb-4 text-center'>Key Benefits</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
              {service.features.map((feature, index) => (
                <motion.div key={index} className='bg-white  rounded-lg p-6 shadow-md' whileHover={{
                    position: 'relative',
                    zIndex: 1,
                    backgroundImage: 'url("/services/back2.png")',
                    scale: 1.05,
                    transition: {
                      duration: .2
                    }
                  }} style={{ backgroundImage: 'url("/services/back2.png")'}}>
                  <h3 className='text-xl font-bold mb-2 dark:text-black'>{feature.title}</h3>
                  <ul>
                    {feature.benefits.map((benefit, index) => (
                      <li className="mb-1 dark:text-black" key={index}>{`${index + 1}. ${benefit}`}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
}
  

