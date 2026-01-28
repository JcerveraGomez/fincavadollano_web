import React from 'react';
import { useTranslation } from 'react-i18next';

export const EarlyHarvestSection = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-[#f5f5f0] py-16 md:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative aspect-[4/3] overflow-hidden bg-gray-200">
              <img
                src="/images/early_harvest.webp"
                alt="Cosecha temprana de aceitunas"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-6">
            {/* Title */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-mollani text-[#848435] leading-tight">
              {t('early_harvest_title')}
            </h2>



            {/* Description */}
            <div className="space-y-4 text-gray-700 leading-relaxed font-kefa">
              <p className="text-sm md:text-base">
                {t('early_harvest_intro')} <strong>{t('early_harvest_intro_bold')}</strong>{t('early_harvest_intro_end')}
              </p>

              <ul className="space-y-3 text-sm md:text-base pl-4">
                <li>{t('early_harvest_point_1')}</li>
                <li>{t('early_harvest_point_2')}</li>
                <li>{t('early_harvest_point_3')}</li>
                <li>{t('early_harvest_point_4')}</li>
                <li>{t('early_harvest_point_5')}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
