import React from 'react';
import { MessageCircle, Phone, Mail } from 'lucide-react';
import { StoreNavbar } from '../../components/reusable/StoreNavbar';
import { HeroSlider } from '../../components/reusable/HeroSlider';
import { WelcomeSection } from '../../components/sections/WelcomeSection';
import { SecretsSection } from '../../components/sections/SecretsSection';
import { ProductsSection } from '../../components/sections/ProductsSection';
import { EarlyHarvestSection } from '../../components/sections/EarlyHarvestSection';
import { OurFarmSection } from '../../components/sections/OurFarmSection';
import { ProductionProcessSection } from '../../components/sections/ProductionProcessSection';
import { BenefitsSection } from '../../components/sections/BenefitsSection';
import { ConservationSection } from '../../components/sections/ConservationSection';
import { PhotoGallerySection } from '../../components/sections/PhotoGallerySection';
import { Footer } from '../../components/reusable/Footer';
import { useScrollToHash } from '../../hooks/useScrollToHash';

// Import Mollani font
import '../../assets/fonts/mollani.css';

const Home: React.FC = () => {
  // Enable automatic scroll to hash anchors
  useScrollToHash();

  return (
    <div className="min-h-screen bg-white">
      {/* Contact Banner - Compact */}
      <div className="sticky top-0 z-50 w-full bg-gradient-to-r from-[#3a3a3a] via-[#4a4a4a] to-[#3a3a3a] backdrop-blur-md text-white py-1.5 px-4 shadow-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-center items-center">
          {/* Contact options - responsive */}
          <div className="flex items-center justify-center gap-2 sm:gap-3">
            {/* WhatsApp - Icon only on mobile */}
            <a
              href="https://wa.me/34660261542"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-1.5 w-8 h-8 sm:w-auto sm:h-auto sm:px-3 sm:py-1.5 rounded-md bg-[#25D366]/15 hover:bg-[#25D366]/25 transition-all duration-300 border border-[#25D366]/40 hover:border-[#25D366]/60 hover:scale-105"
              aria-label="WhatsApp"
            >
              <MessageCircle className="h-4 w-4 text-[#25D366] group-hover:rotate-12 transition-transform" />
              <span className="hidden sm:inline font-light tracking-wide text-xs">WhatsApp</span>
            </a>

            {/* Phone - Main centered button */}
            <a
              href="tel:+34660261542"
              className="group flex items-center justify-center gap-1.5 w-8 h-8 sm:w-auto sm:h-auto sm:px-4 sm:py-2 rounded-md bg-[#848435] hover:bg-[#6d6e2b] transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
              aria-label="Teléfono"
            >
              <Phone className="h-4 w-4 text-white group-hover:rotate-12 transition-transform" />
              <span className="hidden sm:inline font-medium tracking-wide text-xs uppercase">Comprar por Teléfono</span>
            </a>

            {/* Email - Icon only on mobile */}
            <a
              href="mailto:administracion@fincavadollano.es"
              className="group flex items-center justify-center gap-1.5 w-8 h-8 sm:w-auto sm:h-auto sm:px-3 sm:py-1.5 rounded-md bg-white/10 hover:bg-white/20 transition-all duration-300 border border-white/30 hover:border-white/50 hover:scale-105"
              aria-label="Email"
            >
              <Mail className="h-4 w-4 text-white group-hover:rotate-12 transition-transform" />
              <span className="hidden sm:inline font-light tracking-wide text-xs">Email</span>
            </a>
          </div>
        </div>
      </div>

      {/* Hero Slider with Navbar Overlay */}
      <div className="relative">
        <StoreNavbar />
        <HeroSlider />
      </div>

      {/* Welcome Section */}
      <WelcomeSection />

      {/* Secrets of Nature Section */}
      <SecretsSection />

      {/* Products Section */}
      <ProductsSection />

      {/* Early Harvest Section */}
      <EarlyHarvestSection />

      {/* Our Farm Section */}
      <OurFarmSection />

      {/* Production Process Section */}
      <ProductionProcessSection />

      {/* Benefits Section */}
      <BenefitsSection />

      {/* Conservation Section */}
      <ConservationSection />

      {/* Photo Gallery Section */}
      <PhotoGallerySection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
