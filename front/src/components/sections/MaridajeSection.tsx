import React from 'react';
import { useTranslation } from 'react-i18next';

// Define the component's props interface
interface MaridajeSectionProps {
  maridajeText?: string;
}

export const MaridajeSection: React.FC<MaridajeSectionProps> = ({ maridajeText }) => {
  const { t } = useTranslation();

  // If no text is provided, don't render the section
  if (!maridajeText) {
    return null;
  }

  return (
    <section className="w-full bg-[#f5f5f0] py-16 md:py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Title in Mollani font */}
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-mollani text-[#8b9456] mb-8 md:mb-12">
          {t('product_pairing_title')}
        </h2>

        {/* Content - Use whitespace-pre-line to respect newlines */}
        <div className="space-y-6 text-gray-700">
          <p className="text-base md:text-lg leading-relaxed whitespace-pre-line">
            {maridajeText}
          </p>
        </div>
      </div>
    </section>
  );
};
