import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const WelcomeSection = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-[#f5f5f0] py-16 md:py-24 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Logo */}
        <div className="flex justify-center items-center mb-12">
          <img
            src="/images/logo.webp"
            alt="Finca Vadollano Logo"
            className="w-[250px] h-[90px] object-contain"
          />
        </div>

        {/* Content */}
        <div className="space-y-8 text-center font-kefa">
          {/* First Paragraph */}
          <p className="text-base md:text-lg leading-relaxed text-gray-800">
            <strong>{t('welcome_title_bold')}</strong>, {t('welcome_paragraph_1')}
          </p>

          {/* Second Paragraph */}
          <p className="text-base md:text-lg leading-relaxed text-gray-800">
            {t('welcome_paragraph_2')}
          </p>

          {/* Third Paragraph */}
          <p className="text-base md:text-lg leading-relaxed text-gray-800">
            {t('welcome_paragraph_3')}
          </p>

          {/* Fourth Paragraph */}
          <p className="text-base md:text-lg leading-relaxed text-gray-800">
            {t('welcome_paragraph_4')}
          </p>

          {/* Bullet Points */}


          {/* Final Paragraph */}
          <p className="text-base md:text-lg leading-relaxed text-gray-800">
            {t('welcome_paragraph_5')}
          </p>
        </div>
      </div>
    </section>
  );
};
