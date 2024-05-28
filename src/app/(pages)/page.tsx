import Hero from '@/components/Landing/hero'
import Category from '@/components/Landing/category'
import Services from '@/components/Landing/service'
import Product from '@/components/Landing/product'
import Brands from '@/components/Landing/brand'

export const metadata = {
  title: 'Welcome to Nexcel: Your Hub for Innovative Technology Solutions',
  description: 'Discover Nexcel, your one-stop destination for the latest in technology products, professional services, and top brands. Explore our diverse categories, from cutting-edge computers and mobile devices to expert consulting and support.',
  openGraph: {
    title: 'Welcome to Nexcel: Your Hub for Innovative Technology Solutions',
    description: 'Discover Nexcel, your one-stop destination for the latest in technology products, professional services, and top brands. Explore our diverse categories, from cutting-edge computers and mobile devices to expert consulting and support.',
  },
};
export default function Landing() {
  return (
    <div>
    <Hero/>
    <Category/>
    <Services/>
    <Product/>
    <Brands/>

    </div>
  );
}