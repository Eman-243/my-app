"use client";
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button";

export default function Component() {
    return (
        <div className="max-w-6xl mb-4 font-latolight mx-auto flex items-center justify-center flex-col">
            <div className='relative'>
                <img src="aboutBack.png" alt="Descriptive text" className="w-full" />
                <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-50'></div>
                <div className='absolute top-0 left-0 w-full h-full flex items-center justify-start p-4'>
                    <motion.div className='text-left ml-4 max-w-lg'
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        whileHover={{ y: -10, opacity: 1 }}
                        transition={{ ease: "easeInOut", duration: 0.75 }}>
                        <h1 className='text-white text-4xl md:text-7xl font-bold mb-2 '>About us</h1>
                        <h2 className='text-white text-sm md:text-xl leading-relaxed'> Discover who we are, what we do, Dive deeper into our journey, Join us as we continue to evolve and strive to provide the best solutions, empowering our clients to excel in their endeavors.</h2>
                        <a href="/NexcelProfile.pdf" target="_blank" rel="noopener noreferrer">
                            <Button
                                className="bg-[#F9B823] text-white py-2 px-4 md:px-16 mt-3 rounded-lg hover:bg-black"
                                style={{ width: "auto" }}>
                                Learn more
                            </Button>
                        </a>
                    </motion.div>
                </div>
            </div>
            <section className="w-full py-4 md:py-8 lg:py-16 ">
            <div className="my-8">
                <h2 className="text-3xl text-center font-bold dark:text-white text-[#F9B823]">
                        Nexcel Bahrain Overview
                    </h2>
                    <p className="text-center text-[18px] mt-2 leading-[1.6] items-center  text-pretty dark:text-gray-400 text-gray-500 font-latolight" >
                        Nexcel Bahrain offers reliable IT services globally, specializing in streamlining business processes with secure and advanced technology solutions. Our commitment to high-quality implementation and customer-centric practices allows businesses to maximize the benefits of their IT investments.          </p>
                </div>
                <div className="my-8">
                <h2 className="text-3xl text-center font-bold dark:text-white text-[#F9B823]">
                        Our Approach
                    </h2>
                    <p className="text-center text-[18px] mt-2 leading-[1.6] items-center  text-pretty dark:text-gray-400 text-gray-500 font-latolight" >
                    We prioritize ethical practices, using cutting-edge tools to enhance operational efficiency and competitiveness. Our dedication to growth in IT services is reflected in our cost-effective, innovative solutions tailored to client needs. Our team's collaborative spirit and shared values drive our ability to meet customer demands effectively.                    </p>

                </div>
                <div className="my-8">
                <h2 className="text-3xl text-center dark:text-white font-bold text-[#F9B823]">
                Our Strength

                </h2>
                <p className="text-center text-[18px] mt-2 leading-[1.6] items-center  text-pretty dark:text-gray-400 text-gray-500 font-latolight" >
                The Nexcel team comprises seasoned professionals skilled in software research, development, and deployment, operating in a well-connected, modern environment. Our leadership, rooted in engineering and professional expertise, is key to our innovative and experienced approach to product development                </p>
                </div>
                
                
              
            </section>


            <div className="tablet:grid grid-cols-2 grid-rows-3 gap-4">
                <motion.section
                    className="bg-gradient-to-l from-[#F9B823] dark:from-[#030712] rounded-r-full p-4 flex items-center justify-center"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    whileHover={{ y: -10, opacity: 1 }}
                    transition={{ ease: "easeInOut", duration: 0.75 }}
                    style={{ gridRow: "1", gridColumn: "1" }}

                >
                    <div className="">
                        <h2 className="text-2xl font-bold tracking-tighter sm:text-5xl text-center dark:text-white text-black/25">Our Mission</h2>
                        <p className="text-center text-black/50 text-xl dark:text-gray-500">Our mission is to empower our clients with the latest, most reliable & the best available technology bundled with simplified business processes so they can perform their best.</p>
                    </div>
                </motion.section>

                <motion.section
                    className=" bg-gradient-to-r from-[#F9B823] dark:from-[#030712] rounded-l-full flex items-center justify-center p-6"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    whileHover={{ y: -10, opacity: 1 }}
                    transition={{ ease: "easeInOut", duration: 0.75 }}
                    style={{ gridRow: "2", gridColumn: "2" }}

                >
                    <div className="">
                        <h2 className="text-2xl font-bold tracking-tighter sm:text-5xl text-center dark:text-white text-black/25">Our Values</h2>
                        <p className="text-center text-black/50 text-xl	dark:text-gray-500 mt-1">To be a technology company that understands the needs of a customer and deliver quality solutions by qualified professionals. In short, provide hassle-free solutions so our customers can focus on what they do best, their business.</p>
                    </div>
                </motion.section>

                <motion.section
                    className="bg-gradient-to-l  from-[#F9B823] dark:from-[#030712] rounded-r-full p-4 flex items-center justify-center"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    whileHover={{ y: -10, opacity: 1 }}
                    transition={{ ease: "easeInOut", duration: 0.75 }}
                    style={{ gridRow: "3", gridColumn: "1" }}

                >
                    <div className="">
                        <h2 className="text-2xl font-bold tracking-tighter sm:text-5xl text-center dark:text-white text-black/25">Our Quality Policy</h2>
                        <p className="text-center text-black/50 text-xl dark:text-gray-500 mt-1">We commit to deliver quality services to our customers, for the first time and every time.</p>
                    </div>
                </motion.section>
            </div>

        </div>


    )
}
