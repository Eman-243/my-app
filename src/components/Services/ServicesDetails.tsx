import { BsDatabase } from "react-icons/bs";
import { MdComputer } from "react-icons/md";
import { FaRegClock } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
import { LuCable } from "react-icons/lu";
import { LuVideo } from "react-icons/lu";
import { AiOutlineSetting } from "react-icons/ai";
import { LuServer } from "react-icons/lu";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { GiAutoRepair } from "react-icons/gi";
import { AiOutlineWindows } from "react-icons/ai";
import { TbDeviceDesktopCog } from "react-icons/tb";
import { FaRegKeyboard } from "react-icons/fa";
import { MdMemory } from "react-icons/md";
import { GrUpgrade } from "react-icons/gr";
import { SiMicrosoftstore } from "react-icons/si";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { TbSpy } from "react-icons/tb";
import Link from 'next/link';

interface IconProps extends React.SVGProps<SVGSVGElement> { }

export default function Component() {
  const services = [
    {
      icon: MdComputer,
      title: 'Computer AMC',
      description: 'Reliable and comprehensive Computer AMC services are readily available for you in Bahrain, ensuring optimal performance.'
    },
    {
      icon: FaRegClock,
      title: 'Time Attendance Systems',
      description: 'For your TAS requirements, consider Fingertec, ZK & Matrix devices - reliable, efficient, and designed for your success.'
    },
    {
      icon: FiPhone,
      title: 'Phone Systems',
      description: 'Avaya & NEC PABX systems boost communication with reliability and advanced features.'
    },
    {
      icon: LuCable,
      title: 'Structured Cabling',
      description: 'Experience superior connectivity with our CAT 6 and Fiber Optic structured cabling solutions.'
    },
    {
      icon: LuVideo,
      title: 'CCTV systems',
      description: 'CCTV systems for simplified security & remote monitoring.'
    },
    {
      icon: AiOutlineSetting,
      title: 'IT Support',
      description: 'Our dedicated support team is available 24/7 to help you with any technical issues or questions.'
    },
    {
      icon: LuServer,
      title: 'Server Installation',
      description: 'Office 365, cloud email, hosted Microsoft exchange and much more.'
    },
    {
      icon: HiOutlineBuildingOffice2,
      title: 'Office IT Setup',
      description: 'All Office IT Requirements services under one roof.'
    },
    {
      icon: GiAutoRepair,
      title: 'Laptop Repair',
      description: 'Expert Laptop Repair/Upgrade in Bahrain.'
    },
    {
      icon: AiOutlineWindows,
      title: 'Windows Installation',
      description: 'We will install Windows on your PC quickly and easily, so you can get back to work or play.'
    },
    {
      icon: TbDeviceDesktopCog,
      title: 'Desktop Repair',
      description: 'Our desktop repair services are affordable and reliable.'
    },
    {
      icon: FaRegKeyboard,
      title: 'Computer/Laptop Spares',
      description: 'Laptop/computer spares: Were your one-stop shop!'
    },
    {
      icon: MdMemory,
      title: 'RAM/MEMORY Upgrade',
      description: 'All We offer a wide variety of RAM upgrades to fit your needs and budget.'
    },
    {
      icon: GrUpgrade,
      title: 'SSD Upgrade',
      description: 'Our SSD upgrades are fast, easy, and affordable.'
    },
    {
      icon: SiMicrosoftstore,
      title: 'MS OFFICE Installation',
      description: 'We ll help you get the most out of Microsoft 360.'
    },
    {
      icon: IoShieldCheckmarkOutline,
      title: 'ANTIVIRUS Installation',
      description: 'All We offer a wide variety of RAM upgrades to fit your needs and budget'
    },
    {
      icon: BsDatabase,
      title: 'Data Recovery',
      description: 'Our data recovery services are fast, easy, and affordable.'
    },
    {
      icon: TbSpy,
      title: 'VIRUS/SPYWARE REMOVAL',
      description: 'Our virus removal service is fast, affordable, and guaranteed'
    }



  ];

  return (
    <div className="mx-auto max-w-6xl">
      <section className="pt-12 pb-3 md:pt-16 md:pb-6 lg:pt-24 lg:pb-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tighter">
                Our Services
              </h1>
              <p className="mx-auto text-base md:text-lg lg:text-xl text-gray-500 dark:text-gray-400">
                {/* Description if needed */}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-3 md:py-6 lg:py-12 bg-gray-100 dark:bg-gray-800 flex justify-center rounded-md" style={{ backgroundImage: 'url("services/background.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
  <div className="container grid grid-cols-2 gap-6 px-4 md:px-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 ">
    {services.map((service, index) => (
      <Link href={`/services/${service.title.replace(/ /g, '-').toLowerCase()}`} key={index}>
        <div className="flex flex-col items-start space-y-3 rounded-lg bg-white p-6 shadow-sm transition-all hover:scale-105 hover:shadow-md dark:bg-gray-950 dark:shadow-none hover:text-white border hover:border-white hover:bg-[#0054A1] h-full">
          <service.icon className="h-8 w-8" />
          <h3 className="text-lg font-semibold">{service.title}</h3>
          <p className="text-sm flex-grow miniphone:hidden tablet:flex">{service.description}</p>
        </div>
      </Link>
    ))}
  </div>
</section>

      <section className="py-8 md:py-12 lg:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
                Redefining IT Solutions with Nexcel
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-base md:text-lg lg:text-xl">
                In today's digital age, trustworthy IT services are crucial for business growth. At Nexcel, we provide reliable services that simplify complex IT challenges. Choose Nexcel for efficient IT solutions.
              </p>
            </div>
            <img
              alt="Expertise"
              className="mx-auto w-full h-auto overflow-hidden rounded-xl object-cover"
              src="services/ServicesBack.png"
            />
          </div>
        </div>
      </section>
      <section className="py-8 md:py-16 px-4 lg:py-24">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-center py-1 md:py-3 lg:py-6">
          Your Ultimate IT Support Solution in Bahrain
        </h2>
        <p className="mx-auto text-gray-500 dark:text-gray-400 text-base md:text-lg lg:text-xl text-center">
          Looking for top-notch IT Support? Nexcel offers comprehensive, feature-rich IT services designed to minimize costs and maximize efficiency. Trust Nexcel for all your IT needs.
        </p>
      </section>
    </div>
  );
  
}



