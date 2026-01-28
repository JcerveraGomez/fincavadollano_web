import React from 'react';
import { useTranslation } from 'react-i18next';

export const SecretsSection = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-white py-16 md:py-24 px-4 font-kefa">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light  text-[#848435] mb-8 md:mb-12">
          {t('secrets_title')}
        </h2>

        {/* Subtitle/Description */}
        <p className="text-base md:text-lg lg:text-xl leading-relaxed text-[#848435] max-w-5xl mx-auto font-kefa">
          {t('secrets_description')}
        </p>
      </div>
    </section>
  );
};
