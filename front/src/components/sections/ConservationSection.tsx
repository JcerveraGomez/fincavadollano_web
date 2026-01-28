import React from 'react';
import { useTranslation } from 'react-i18next';

export const ConservationSection = () => {
  const { t } = useTranslation();

  // Helper function to highlight specific terms
  const highlightTerms = (text: string, terms: string[]) => {
    let result: React.ReactNode = text;

    for (const term of terms) {
      if (typeof result === 'string' && result.includes(term)) {
        const parts = result.split(term);
        result = (
          <>
            {parts[0]}
            <span className="text-[#848435] font-semibold">{term}</span>
            {parts[1]}
          </>
        );
        break;
      }
    }

    return result;
  };

  return (
    <section className="w-full bg-white py-12 md:py-16 px-6 md:px-12 font-kefa">
      <div className="max-w-4xl mx-auto">
        {/* Title - Centered */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-4xl md:text-3xl lg:text-5xl font-light text-[#848435] mb-6 md:mb-8">
            {t('conservation_main_title')}
          </h2>
        </div>

        {/* Conservation instructions */}
        <div className="space-y-6 text-xs md:text-sm text-gray-800  font-kefa text-center">
          <p className="text-gray-700 text-sm md:text-base leading-relaxed font-kefa">
            {t('conservation_title')}
          </p>

          {/* NUESTRO AOVE Section */}
          <div className="space-y-3">
            <h3 className="text-[#848435] font-semibold text-sm md:text-xl">
              {t('conservation_nuestro_aove_title')}.
            </h3>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed font-kefa">
              {highlightTerms(t('conservation_nuestro_aove_p1'), ['Picual'])}
            </p>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed font-kefa">
              {t('conservation_nuestro_aove_p2')}
            </p>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed font-kefa">
              {t('conservation_nuestro_aove_p3')}
            </p>
          </div>

          {/* AOVE TEMPRANO Section */}
          <div className="space-y-3">
            <h3 className="text-[#848435] font-semibold text-sm md:text-xl">
              {t('conservation_aove_temprano_title')}.
            </h3>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed font-kefa">
              {highlightTerms(t('conservation_aove_temprano_p1'), ['octubre', 'October', 'octobre', 'frío', 'cold', 'froid'])}
            </p>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed font-kefa">
              {highlightTerms(t('conservation_aove_temprano_p2'), ['olor, color y sabor', 'smell, color and taste', 'odeur, couleur et goût'])}
            </p>
          </div>

          {/* AOVE RESERVA Section */}
          <div className="space-y-3">
            <h3 className="text-[#848435] font-semibold text-sm md:text-xl">
              {t('conservation_aove_reserva_title')}.
            </h3>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed font-kefa">
              {highlightTerms(t('conservation_aove_reserva_p1'), ['noviembre', 'November', 'novembre', 'suave, equilibrado', 'smooth, balanced', 'doux, équilibré'])}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
