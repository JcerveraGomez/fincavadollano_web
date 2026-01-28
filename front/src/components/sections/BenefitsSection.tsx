import React from 'react';
import { useTranslation } from 'react-i18next';

export const BenefitsSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative w-full min-h-screen bg-gray-200" id='benefits'>
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/benefits_section.webp"
          alt="Beneficios del aceite de oliva - Campo de olivos"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full h-full flex flex-col justify-between px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20">
        {/* Top Section with intro and title */}
        <div className="flex-shrink-0">


          {/* Title - Centered */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-mollani text-[#DFB566] leading-tight mb-1">
              {t('benefits_title')}
            </h2>
            {/* <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light text-[#AD9748] md:ml-[200px] lg:ml-[400px] tracking-[0.25em] md:tracking-[0.3em] uppercase">
              {t('benefits_subtitle')}
            </p> */}
          </div>
        </div>

        {/* Bottom Section - Benefits Grid */}
        <div className="flex-grow flex items-end pb-8 md:pb-12 lg:pb-16 align-bottom">
          <div className="w-full max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
              {/* Benefit 1 - Left */}
              <div className="text-white space-y-3 md:space-y-4">
                <p className="text-white text-xs md:text-sm leading-relaxed max-w-xs md:max-w-md font-kefa">
                   {t('benefits_intro')}
                </p>
                <h3 className="text-base md:text-lg lg:text-xl font-semibold leading-tight font-kefa">
                  {t('benefits_1_title')}
                </h3>
                <div className="space-y-3 text-xs md:text-sm leading-relaxed font-kefa">
                  <p>{t('benefits_1_text_1')}</p>
                  <p>{t('benefits_1_text_2')}</p>
                </div>
              </div>

              {/* Benefit 2 - Center */}
              <div className="text-white space-y-3 md:space-y-4">
                <h3 className="text-base md:text-lg lg:text-xl font-semibold leading-tight font-kefa">
                  {t('benefits_2_title')}
                </h3>
                <p className="text-xs md:text-sm leading-relaxed font-kefa">
                  {t('benefits_2_text')}
                </p>
              </div>

              {/* Benefit 3 - Right */}
              <div className="text-white space-y-3 md:space-y-4">
                <h3 className="text-base md:text-lg lg:text-xl font-semibold leading-tight font-kefa">
                  {t('benefits_3_title')}
                </h3>
                <p className="text-xs md:text-sm leading-relaxed font-kefa">
                  {t('benefits_3_text')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
