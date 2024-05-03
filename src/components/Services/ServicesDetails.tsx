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
      <section className="max-w-6xl pt-12 md:pt-16 lg:pt-24 pb-3 md:pb-6 lg:pb-12 ">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Our Services
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">

              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-6xl py-3 md:py-6 lg:py-12 bg-gray-100 dark:bg-gray-800" style={{ backgroundImage: 'url("services/background.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="container grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 md:px-6 grid-rows-1">
  {services.map((service, index) => (
    <Link href={`/services/${service.title.replace(/ /g, '-').toLowerCase()}`} key={index}>
      <div className="flex flex-col items-start space-y-3 rounded-lg bg-white p-6 shadow-sm transition-all hover:scale-[1.02] hover:shadow-md dark:bg-gray-950 dark:shadow-none hover:text-white border hover:border-white hover:bg-[#0054A1] h-full">
        <service.icon className="h-8 w-8" />
        <h3 className="text-lg font-semibold">{service.title}</h3>
        <p className="text-sm flex-grow">{service.description}</p>
      </div>
    </Link>
  ))}
</div>


</section>


     
      <section className="w-full py-8 md:py-12 lg:py-16 ">
  <div className="container px-4 md:px-6">
    <div className="grid gap-6 lg:grid-cols-2 lg:gap-12" style={{ height: '371px' }}>
      <div className="space-y-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Redefining IT Solutions with Nexcel</h2>
        <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          In today's digital age, trustworthy IT services are crucial for business growth. But is your IT partner up to the task? At Nexcel, Bahrain's premier IT company, we provide reliable services that turn complex IT problems into simple, economical solutions. We specialize in IT support, including installation and maintenance of IT equipment. Choose Nexcel for fast, efficient IT solutions that make a world of difference.
        </p>
      </div>
      <img
        alt="Expertise"
        className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full h-full"
        src="services/ServicesBack.png"
      />
    </div>
  </div>
</section>
<section className="max-w-6xl py-8 md:py-16 lg:py-24 ">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center py-1 md:py-3 lg:py-6">Your Ultimate IT Support Solution in Bahrain</h2>
              <p className="max-w-6xl text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 text-center">
              In search of top-notch IT Support? Look no further than Nexcel. We function as an in-house IT department, delivering prompt, precise, and high-quality services. Our IT Support Services in Bahrain are feature-rich and economically priced to reduce your business costs. Established in 2014, we are a proud Bahraini company with corporate offices and a retail store. Over time, we've built a solid reputation as a reliable IT service provider, adept at successfully delivering on every project. Trust Nexcel for all your IT needs.</p>
      </section>
    </div>
  )
}



