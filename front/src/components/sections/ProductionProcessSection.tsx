import React from 'react';
import { useTranslation } from 'react-i18next';

export const ProductionProcessSection = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-white font-kefa">
      {/* Top Image - Full Width */}
      <div className="w-full h-[50vh] md:h-[60vh] lg:h-[70vh] relative overflow-hidden bg-gray-200">
        <img
          src="/images/production_process_2.webp"
          alt="Proceso productivo - Campo de olivos"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              {/* Title */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#848435] uppercase tracking-wide leading-tight">
                {t('production_process_title')}
              </h2>

              {/* Paragraphs */}
              <div className="space-y-5 text-gray-700 text-sm md:text-base leading-relaxed font-kefa">
                <p>{t('production_process_paragraph_1')}</p>
                <p>{t('production_process_paragraph_2')}</p>
                <p>
                  {t('production_process_paragraph_3')}{' '}
                  <span className="text-[#848435] font-semibold">{t('production_process_aove_premium')}</span>{t('production_process_paragraph_3_end')}
                </p>
                <p>
                  {t('production_process_paragraph_4')}{' '}
                  <span className="text-[#848435] font-semibold">{t('production_process_aove_reserva')}</span>{t('production_process_paragraph_4_end')}
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative aspect-[4/3] overflow-hidden bg-gray-200">
              <img
                src="/images/production_process.webp"
                alt="Proceso productivo - Aceitunas y olivos"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>


      {/* Excelencia Saludable Section */}
      <div className="w-full bg-white py-16 md:py-20 lg:py-24 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Title with cursive font */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-mollani text-[#848435] leading-tight">
            {t('production_process_excellence_title')}
          </h2>

          {/* Description */}
          <p className="text-gray-700 text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto font-kefa">
            {t('production_process_excellence_description')}
          </p>
        </div>
      </div>
    </section>
  );
};
