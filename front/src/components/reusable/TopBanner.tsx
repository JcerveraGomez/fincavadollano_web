import { Phone } from "lucide-react";
import { useTranslation } from 'react-i18next';

interface TopBannerProps {
  className?: string;
}

export const TopBanner = ({ className = "" }: TopBannerProps) => {
  const { t } = useTranslation();

  return (
    <div
      className={`w-full bg-[#3a3a3a]/90 backdrop-blur-sm text-white py-2 px-4 ${className}`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center text-xs sm:text-sm">
        <span className="font-light tracking-wide">
          {t('banner_shipping')}
        </span>
        <a
          href="tel:+34"
          className="hidden sm:flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <Phone size={16}  />
<span>{t('banner_phone_order')}</span>
        </a>
      </div>
    </div>
  );
};
