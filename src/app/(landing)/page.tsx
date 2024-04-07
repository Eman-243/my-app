
import Image from "next/image";
import HeroSection from "../../components/HeaderComponents/heroSection";
import Category from "../../components/HeaderComponents/categorySection";
import Services from "@/components/HeaderComponents/ServicesSection";
import Product from "@/components/HeaderComponents/productSection";
import Brands from "@/components/HeaderComponents/brands";
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
