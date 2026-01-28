import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "../components/ui/navigation-menu";
import { LanguageSelector } from "../components/ui/languageComponent";
import { Footer } from "../components/reusable/Footer";
import { Menu, X } from "lucide-react";
import NewsletterBanner from "../components/NewsletterBanner";
import { useTranslation } from 'react-i18next';

interface LayoutProps {
  children: React.ReactNode;
}




export default function LayoutStore({ children }: LayoutProps) {
  const { t } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = () => {
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavigation = () => {
    closeMobile();
  };


  return (
    <div className="flex min-h-screen flex-col">
      {/* Logo navbar - Left (Desktop) / Hamburger Menu (Mobile) */}
      <nav className="fixed top-4 left-4 z-30 w-fit">
        <div className="flex items-center gap-2 rounded-2xl border border-gray-300 bg-white/70 px-3 py-1 shadow-md backdrop-blur-lg sm:px-4 sm:py-2">
          {/* Mobile hamburger - Solo en móvil, reemplaza al logo */}
          <button
            className="flex items-center justify-center rounded-lg p-1 hover:bg-gray-100 sm:hidden min-w-[36px] min-h-[36px] touch-manipulation"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          
          {/* Logo - Solo en desktop */}
          <a href="/" className="hidden sm:flex items-center">
            <img 
              src="/logo.png" 
              alt="Logo" 
              className="h-8 w-auto sm:h-10"
              onError={(e) => {
                // Fallback si no existe logo.png
                e.currentTarget.style.display = 'none';
                const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                if (nextElement) {
                  nextElement.style.display = 'block';
                }
              }}
            />
          </a>
        </div>
      </nav>

      {/* User navbar - Right (ambos desktop y mobile) */}
      <nav className="fixed top-4 right-4 z-30 w-fit">
        <div className="flex items-center gap-2 rounded-2xl border border-gray-300 bg-white/70 px-2 py-1 shadow-md backdrop-blur-lg sm:gap-4 sm:px-4 sm:py-2">
          <div className="flex items-center gap-1 sm:gap-2">
            <LanguageSelector />
          </div>
        </div>
      </nav>

      {/* Main navbar - Navigation & Cart (top center) - Solo Desktop */}
      <nav className="hidden sm:block fixed top-4 left-1/2 -translate-x-1/2 z-30 w-fit">
        <div className="flex items-center gap-6 rounded-2xl border border-gray-300 bg-white/70 px-6 py-2 shadow-md backdrop-blur-lg">
          {/* Desktop navigation */}
          <NavigationMenu viewport={false}>
            <NavigationMenuList className="flex items-center gap-4">
              {/* Home */}
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/"
                  onClick={handleNavigation}
                  className="rounded px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-100"
                >
                  {t('Home')}
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* About */}
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/store/about"
                  className="rounded px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-100"
                >
                  Sobre Nosotros
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </nav>

      {/* Mobile full‑screen menu - Mejorado */}
      <div
        className={`fixed inset-0 z-40 transform transition-transform duration-300 ease-out sm:hidden ${mobileOpen ? "translate-x-0" : "translate-x-full"} bg-white/95 backdrop-blur-xl border border-gray-300/70 shadow-xl`}
        role="dialog"
        aria-modal="true"
        style={{ pointerEvents: mobileOpen ? "auto" : "none" }}
      >
        {/* Close button - Mejorado */}
        <button
          onClick={closeMobile}
          aria-label="Cerrar menú"
          className="absolute right-4 top-4 rounded-lg p-3 hover:bg-white/30 backdrop-blur-sm min-w-[44px] min-h-[44px] touch-manipulation"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="mx-auto mt-20 flex max-w-md flex-col gap-6 p-6">
          <nav className="space-y-4 text-lg font-medium text-gray-800">
            <a
              href="/store"
              className="block rounded-lg px-4 py-3 transition-colors hover:bg-white/40 hover:backdrop-blur-sm min-h-[48px] flex items-center"
              onClick={handleNavigation}
            >
              {t('Home')}
            </a>


            <a
              href="/store/about"
              className="block rounded-lg px-4 py-3 transition-colors hover:bg-white/40 hover:backdrop-blur-sm min-h-[48px] flex items-center"
              onClick={closeMobile}
            >
              Sobre Nosotros
            </a>
          </nav>
        </div>
      </div>

      {/* Main */}
      <main className="flex-1 pt-24 sm:pt-28 text-gray-800">
        <div className="mx-auto w-full max-w-7xl">{children}</div>
      </main>

      {/* Footer */}
      <Footer />
      
      {/* Newsletter Banner */}
      <NewsletterBanner />
    </div>
  );
}