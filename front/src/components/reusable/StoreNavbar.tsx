import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { useTranslation } from 'react-i18next';
import { ES, GB, FR } from 'country-flag-icons/react/3x2';

interface NavItem {
  labelKey: string;
  href: string;
  isScroll?: boolean;
}

export const StoreNavbar = () => {
  const { t } = useTranslation();
  const { language, setLanguage, isLoading } = useLanguage();

  const navItems: NavItem[] = [
    { labelKey: 'nav_our_farm', href: '#finca', isScroll: true },
    { labelKey: 'nav_products', href: '#productos', isScroll: true },
    { labelKey: 'nav_benefits', href: '#benefits', isScroll: true },
    { labelKey: 'nav_gallery', href: '#galeria', isScroll: true },
  ];
  
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  
  const languageMobileMenuRef = useRef<HTMLDivElement>(null);
  const languageDesktopMenuRef = useRef<HTMLDivElement>(null);

  // --- CORRECCIÓN AQUÍ ---
  // Lógica de "Click Outside" unificada
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Verificamos si el clic fue dentro del menú móvil
      const clickedInsideMobile = languageMobileMenuRef.current && languageMobileMenuRef.current.contains(event.target as Node);
      
      // Verificamos si el clic fue dentro del menú escritorio
      const clickedInsideDesktop = languageDesktopMenuRef.current && languageDesktopMenuRef.current.contains(event.target as Node);

      // Si NO fue en ninguno de los dos, entonces cerramos
      if (!clickedInsideMobile && !clickedInsideDesktop) {
        if (languageOpen) {
            console.log('Cerrando menú por click fuera');
            setLanguageOpen(false);
        }
      }
    };

    if (languageOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [languageOpen]);

  const handleNavClick = (item: NavItem, e: React.MouseEvent) => {
    if (item.isScroll) {
      e.preventDefault();
      navigate(`/${item.href}`);
      setMobileMenuOpen(false);
    }
  };

  const handleLanguageChange = (lng: 'es' | 'en' | 'fr') => {
    console.log('Botón presionado, cambiando idioma a:', lng); // LOG PARA DEBUG
    setLanguage(lng);
    setLanguageOpen(false);
  };

  const flagMapping: Record<string, JSX.Element> = {
    en: <GB className="w-4 h-3" />,
    es: <ES className="w-4 h-3" />,
  };

  const languageLabels: Record<string, string> = {
    en: "English",
    es: "Español",
  };

  // Helper renderizado
  const renderLanguageOptions = () => (
    <>
      <button
        type="button" // IMPORTANTE: siempre especificar type="button"
        onClick={(e) => {
            e.stopPropagation(); // Evita burbujeo innecesario
            handleLanguageChange('es');
        }}
        className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors text-gray-800"
        disabled={isLoading}
      >
        <ES className="w-4 h-3" />
        <span>Español</span>
      </button>
      <button
        type="button"
        onClick={(e) => {
            e.stopPropagation();
            handleLanguageChange('en');
        }}
        className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors text-gray-800"
        disabled={isLoading}
      >
        <GB className="w-4 h-3" />
        <span>English</span>
      </button>

    </>
  );

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent mt-5">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-6">
          
          {/* Left Side - Language (Mobile/Tablet) */}
          <div className="flex items-center gap-4 lg:hidden">
            <div className="relative" ref={languageMobileMenuRef}>
              <button
                type="button"
                onClick={() => setLanguageOpen(!languageOpen)}
                className="flex items-center gap-2 text-sm text-[#FFFFFF] hover:text-[#b8985f] transition-colors"
                disabled={isLoading}
              >
                {flagMapping[language] || flagMapping['es']}
                <span className="hidden sm:inline">{languageLabels[language]}</span>
                <ChevronDown size={16} />
              </button>

              {languageOpen && (
                <div className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg py-1 z-50">
                  {renderLanguageOptions()}
                </div>
              )}
            </div>
          </div>

          <div className="w-32 hidden lg:block"></div>

          {/* Right Side - Language & Menu */}
          <div className="flex items-center gap-4">
            
            {/* Language Selector (Desktop only) */}
            <div className="relative hidden lg:block" ref={languageDesktopMenuRef}>
              <button
                type="button"
                onClick={() => setLanguageOpen(!languageOpen)}
                className="flex items-center gap-2 text-sm text-white hover:text-[#b8985f] transition-colors"
                disabled={isLoading}
              >
                {flagMapping[language] || flagMapping['es']}
                <span>{languageLabels[language]}</span>
                <ChevronDown size={16} />
              </button>

              {languageOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg py-1 z-50">
                  {renderLanguageOptions()}
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-[#b8985f] transition-colors"
            >
              {mobileMenuOpen ? <X size={24} color="white" /> : <Menu size={24} color="white" />}
            </button>
          </div>
        </div>

        {/* Navigation Menu (Desktop) */}
        <div className="hidden lg:flex justify-center items-center pb-6 space-x-[200px]">
          {navItems.map((item) => (
            item.isScroll ? (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(item, e)}
                className="text-[#FFFFFF] hover:text-[#a08550] text-xl tracking-widest transition-colors font-small cursor-pointer"
              >
                {t(item.labelKey)}
              </a>
            ) : (
              <Link
                key={item.href}
                to={item.href}
                className="text-[#b8985f] hover:text-[#a08550] text-base tracking-widest transition-colors font-light"
              >
                {t(item.labelKey)}
              </Link>
            )
          ))}
        </div>
      </div>

      {/* Mobile Menu Content */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white absolute w-full left-0 top-full">
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              item.isScroll ? (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(item, e)}
                  className="block text-[#b8985f] hover:text-[#a08550] text-sm tracking-wider transition-colors py-2 cursor-pointer"
                >
                  {t(item.labelKey)}
                </a>
              ) : (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-[#b8985f] hover:text-[#a08550] text-sm tracking-wider transition-colors py-2"
                >
                  {t(item.labelKey)}
                </Link>
              )
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};