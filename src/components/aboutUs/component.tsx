import Link from "next/link"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    
    <div className="max-w-6xl mb-4 font-latolight mx-auto flex items-center justify-center flex-col">
      <div className='relative'>
        <img src="aboutBack.png" alt="Descriptive text" />
        <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-50'></div>
        <div className='absolute top-0 left-0 w-full h-full flex items-center justify-start p-4'>
          <motion.div className='text-left ml-4 max-w-lg'
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            whileHover={{ y: -10, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.75 }}>
            <h1 className='text-white text-7xl font-bold mb-2 '>About us</h1>
            <h2 className='text-white text-xl leading-relaxed'> Discover who we are, what we do, Dive deeper into our journey, Join us as we continue to evolve and strive to provide the best solutions, empowering our clients to excel in their endeavors.</h2>
            <a href="/NexcelProfile.pdf" target="_blank" rel="noopener noreferrer">
              <Button
                className="bg-[#F9B823] text-white py-2 md:py-3 lg:py-6 px-6 md:px-16 mt-3 rounded-lg hover:bg-black"
                style={{ width: "auto" }}>
                Learn more
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
      <section className="w-full py-4 md:py-8 lg:py-16 ">
        <div className="my-1">
          <p className="text-left text-lg leading-loose  items-center  text-pretty  text-gray-500 font-latolight">
            Nexcel Bahrain was formed with the aim of providing reliable and hassle free IT services to the world. We are a turnkey solution provider and believe in easing the way for businesses when it comes to managing business processes. Our IT solutions are reliable, secure and integrated with the latest technologies so customers like you can reap the benefits of your IT Investments.<br />
          </p>
        </div>
        <div >
          <p className="text-left text-lg leading-loose items-center  text-pretty  text-gray-500 font-latolight" >
            We believe in providing the highest quality of implementation and walking that extra mile so as to provide you with a high utilization factor of your IT solutions. We maintain this by implementing ethical practices and making optimum use of the latest tools and technologies to equip our customers. Our experience and expertise in designing, developing, implementing and supporting business solutions enable companies to streamline business operations, enhance efficiency, and gain the required competitive edge. By combining our business know how and technological expertise, we help our clients in Bahrain increase efficiency and simplify operations.<br />
          </p>
        
        </div>
        <p className="text-left text-lg leading-loose text-gray-500 text-pretty font-latolight">
          We are committed to achieve a sustained growth in the information technology services sector. Learning from the past experiences and adopting latest technological innovations, we implement cost effective and value added solutions for our clients to suite their business requirements.          Honesty, hard work and dedication to the cause is the hallmark of our approach. Our investments in technological infrastructure and telecommunications ensure that we have adequate capacity to sustain our growing business needs and provide seamless delivery of solutions to our clients.          Nexcel Team was carefully selected for specific expertise and the ability to work as a team for a goal. Team members are cross-trained in a number of functions to provide the products and services that our customers demand. Our team members are guided by a common set of values and ethics.
        </p>
        <p className=" text-left text-lg leading-loose  text-gray-500 text-pretty mt-1 font-latolight">
          The strength of Nexcel is its core professionals with vast experience in all spheres of software research, development and implementation. A well-networked environment with state of the art facilities makes Nexcel distinguishable. Products from Nexcel bear the tag of innovation and experience.          The core management team of the company consists of qualified engineers and professionals who are also the promoters and major shareholders of the company.
        </p>
      </section>
      

      <div className="grid grid-cols-2 grid-rows-3 gap-4">
  <motion.section
    className="bg-gradient-to-l from-[#F9B823] rounded-r-full p-4 flex items-center justify-center"
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    whileHover={{ y: -10, opacity: 1 }}
    transition={{ ease: "easeInOut", duration: 0.75 }}
    style={{ gridRow: "1", gridColumn: "1" }}
    
  >
    <div className="">
      <h2 className="text-2xl font-bold tracking-tighter sm:text-5xl text-center text-black/25">Our Mission</h2>
      <p className="text-center text-black/50 text-xl dark:text-gray-400">Our mission is to empower our clients with the latest, most reliable & the best available technology bundled with simplified business processes so they can perform their best.</p>
    </div>
  </motion.section>

  <motion.section
    className=" bg-gradient-to-r from-[#F9B823] rounded-l-full flex items-center justify-center p-6"
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    whileHover={{ y: -10, opacity: 1 }}
    transition={{ ease: "easeInOut", duration: 0.75 }}
    style={{ gridRow: "2" , gridColumn: "2" }}

  >
    <div className="">
      <h2 className="text-2xl font-bold tracking-tighter sm:text-5xl text-center text-black/25">Our Values</h2>
      <p className="text-center text-black/50 text-xl dark:text-gray-400 	">To be a technology company that understands the needs of a customer and deliver quality solutions by qualified professionals. In short, provide hassle-free solutions so our customers can focus on what they do best, their business.</p>
    </div>
  </motion.section>

  <motion.section
    className="bg-gradient-to-l from-[#F9B823] rounded-r-full p-4 flex items-center justify-center"
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    whileHover={{ y: -10, opacity: 1 }}
    transition={{ ease: "easeInOut", duration: 0.75 }}
    style={{ gridRow: "3" , gridColumn: "1" }}

  >
    <div className="">
      <h2 className="text-2xl font-bold tracking-tighter sm:text-5xl text-center text-black/25">Our Quality Policy</h2>
      <p className="text-center text-black/50 text-xl dark:text-gray-400">We commit to deliver quality services to our customers, for the first time and every time.</p>
    </div>
  </motion.section>
</div>

      </div>

    
  )
}
