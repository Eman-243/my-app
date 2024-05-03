
import Image from "next/image";
import HeroSection from "../../components/LandingPage/heroSection";
import Category from "../../components/LandingPage/categorySection";
import Services from "@/components/LandingPage/ServicesSection";
import Product from "@/components/LandingPage/productSection";
import Brands from "@/components/LandingPage/brands";
export default function Home() {

  return (
    <div>
      
      <HeroSection></HeroSection>
      <div className="my-12"> 
      <Category ></Category>
        </div>
     <div className="my-12">
      <Services></Services>
      </div>
      <Product></Product>
      <Brands></Brands>
    </div>
  );
}
