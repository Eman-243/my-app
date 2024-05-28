import HeroSection from '@/components/Services/heroSection';
import ServicesDetails from '@/components/Services/ServicesDetails';
export const metadata = {
    title: 'Professional Services | Nexcel: Your Partner in Innovation and Excellence',
    description: 'Discover a wide range of professional services designed to meet your unique needs. From cutting-edge technology solutions to expert consulting, Nexcel offers unparalleled service and support to help you achieve your goals.',
    openGraph: {
      title: 'Professional Services | Nexcel: Your Partner in Innovation and Excellence',
      description: 'Discover a wide range of professional services designed to meet your unique needs. From cutting-edge technology solutions to expert consulting, Nexcel offers unparalleled service and support to help you achieve your goals.',
    },
  };
export default function services() {
    
    return (
        <div>
            <HeroSection />
            <ServicesDetails />

        </div>

    )
}