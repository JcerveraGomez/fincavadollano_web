import React from 'react';
import { useTranslation } from 'react-i18next';

export const OurFarmSection = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-white py-16 md:py-24 px-4" id="finca">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-mollani text-[#848435] leading-tight mb-4">
            {t('our_farm_title')}
          </h2>
          <p className="text-lg md:text-xl text-[#848435] font-light tracking-wide font-kefa md:ml-[100px] lg:ml-[200px]">
            {t('our_farm_subtitle')}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image */}
          <div className="order-1">
            <div className="relative aspect-[4/3] overflow-hidden bg-gray-200">
              <img
                src="/images/our_farm.webp"
                alt="Nuestra finca - Río Guadalén junto a los olivos"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-2 space-y-6">
            <div className="space-y-5 text-gray-700 leading-relaxed text-justify text-sm md:text-base font-kefa">
              <p>{t('our_farm_paragraph_1')}</p>
              <p>{t('our_farm_paragraph_2')}</p>
              <p>{t('our_farm_paragraph_3')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
