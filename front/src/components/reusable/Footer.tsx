import React, { useState } from 'react';
import { ChevronDown, CheckCircle, AlertCircle, Phone, Mail, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Footer() {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const currentYear = new Date().getFullYear();
  const mail = import.meta.env.VITE_COMPANY_MAIL;
  const number = import.meta.env.VITE_COMPANY_PHONE;
  const PHONE_NUMBER = '+34660261542';
  const EMAIL = 'administracion@fincavadollano.es';
  const WHATSAPP_NUMBER = '34660261542';


    
  return (
    <footer className="bg-[#3a4234] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* CONTACTO */}
          <div>
            <h3 className="text-lg font-light uppercase tracking-wider mb-6">
              {t('footer_contact_title')}
            </h3>
            <div className="flex flex-wrap gap-2">
              {/* WhatsApp */}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-3 py-2 rounded-md bg-[#25D366]/10 hover:bg-[#25D366]/20 transition-all duration-300 border border-[#25D366]/30 hover:border-[#25D366]/50"
                title="Contactar por WhatsApp"
              >
                <MessageCircle className="h-4 w-4 text-[#25D366] group-hover:rotate-12 transition-transform" />
                <span className="font-light text-gray-200 text-sm">WhatsApp</span>
              </a>

              {/* Phone */}
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="group flex items-center gap-2 px-3 py-2 rounded-md bg-[#848435]/20 hover:bg-[#848435]/30 transition-all duration-300 border border-[#848435]/40 hover:border-[#848435]/60"
                title="Llamar por teléfono"
              >
                <Phone className="h-4 w-4 text-white group-hover:rotate-12 transition-transform" />
                <span className="font-light text-gray-200 text-sm">Teléfono</span>
              </a>

              {/* Email */}
              <a
                href={`mailto:${EMAIL}`}
                className="group flex items-center gap-2 px-3 py-2 rounded-md bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/20 hover:border-white/30"
                title="Enviar email"
              >
                <Mail className="h-4 w-4 text-white group-hover:rotate-12 transition-transform" />
                <span className="font-light text-gray-200 text-sm">Email</span>
              </a>
            </div>
          </div>

          {/* Logo Finca Vadollano */}
          <div className="flex items-center justify-center md:justify-end">
            <img
              src="/images/logo.webp"
              alt="Finca Vadollano Logo"
              className="w-[200px] h-[72px] object-contain opacity-90"
            />
          </div>

          {/* Newsletter */}
          <div className="hidden">
            {/* <h3 className="text-lg font-medium uppercase tracking-wide mb-4">
              {t('footer_newsletter_title')}
            </h3>
            <p className="text-sm text-gray-300 mb-6 leading-relaxed">
              {t('footer_newsletter_description')}{' '}
              <span className="font-semibold">{t('footer_newsletter_discount')}</span> {t('footer_newsletter_first_order')}
            </p>
            <form onSubmit={handleSubscribe} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('footer_newsletter_placeholder')}
                className="w-full bg-transparent border border-gray-500 focus:border-white text-white placeholder-gray-400 px-4 py-3 text-sm transition-colors focus:outline-none"
                required
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !email.trim()}
                className="w-full bg-black hover:bg-gray-900 text-white py-3 text-sm uppercase tracking-wider transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? t('footer_newsletter_subscribing') : t('footer_newsletter_subscribe')}
              </button> */}

              {/* Status Messages */}
              {/* {status === 'success' && message && (
                <div className="flex items-center gap-2 text-green-400 text-sm bg-green-900/20 px-3 py-2 rounded">
                  <CheckCircle className="h-4 w-4" />
                  <span>{message}</span>
                </div>
              )}

              {status === 'error' && message && (
                <div className="flex items-center gap-2 text-red-400 text-sm bg-red-900/20 px-3 py-2 rounded">
                  <AlertCircle className="h-4 w-4" />
                  <span>{message}</span>
                </div>
              )}
            </form> */}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-sm text-gray-300">
              {t('footer_copyright', { year: currentYear })}
            </div>

            {/* Made by Coki */}
            <div className="text-sm text-gray-400">
              Made by{' '}
              <a
                href="https://coki-2md.pages.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors font-medium"
              >
                Coki
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
