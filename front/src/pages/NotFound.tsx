import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
    const { t } = useTranslation();

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#788573] via-[#8a9580] to-[#788573] flex items-center justify-center px-4 py-12">
            <div className="max-w-2xl w-full">
                {/* Card Container */}
                <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
                    {/* Header con fondo oscuro */}
                    <div className="bg-[#3a4234] px-8 py-12 text-center">
                        <div className="flex justify-center mb-6">
                            {/* Icono decorativo - Rama de olivo estilizada */}
                            <div className="relative">
                                <div className="text-[120px] font-bold text-[#c9a961] leading-none">
                                    404
                                </div>
                                <div className="absolute -top-4 -right-4 text-4xl opacity-30">
                                    🫒
                                </div>
                                <div className="absolute -bottom-2 -left-4 text-4xl opacity-30">
                                    🫒
                                </div>
                            </div>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-light text-white mb-2 uppercase tracking-wide">
                            {t('notfound_title')}
                        </h1>
                        <div className="w-24 h-1 bg-[#c9a961] mx-auto"></div>
                    </div>

                    {/* Content */}
                    <div className="px-8 py-12 text-center">
                        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                            {t('notfound_description')}
                        </p>

                        {/* Mensaje adicional */}
                        <div className="bg-[#f9f9f5] border-l-4 border-[#c9a961] px-6 py-4 mb-8 text-left">
                            <p className="text-sm text-gray-600">
                                <strong className="text-[#3a4234]">{t('notfound_suggestion_title')}</strong><br />
                                {t('notfound_suggestion_text')}
                            </p>
                        </div>

                        {/* Botones de acción */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link
                                to="/"
                                className="flex items-center gap-2 px-6 py-3 bg-[#3a4234] text-white rounded hover:bg-[#4a5244] transition-colors duration-300 shadow-md hover:shadow-lg w-full sm:w-auto justify-center"
                            >
                                <Home className="h-5 w-5" />
                                <span className="font-medium">{t('notfound_go_home')}</span>
                            </Link>

                        </div>

                        {/* Link alternativo */}
                        <div className="mt-8">
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 text-[#3a4234] hover:text-[#c9a961] transition-colors duration-300 text-sm font-medium"
                            >
                                <ArrowLeft className="h-4 w-4" />
                                {t('notfound_contact_us')}
                            </Link>
                        </div>
                    </div>

                    {/* Footer decorativo */}
                    <div className="bg-[#f9f9f5] px-8 py-6 border-t border-gray-200">
                        <p className="text-center text-sm text-gray-600">
                            {t('notfound_footer_text')} <span className="text-[#c9a961] font-semibold">Finca Vadollano</span>
                        </p>
                    </div>
                </div>

                {/* Breadcrumb informativo */}
                <div className="mt-6 text-center">
                    <p className="text-white text-sm opacity-80">
                        Error 404 | {t('notfound_page_not_exists')}
                    </p>
                </div>
            </div>
        </div>
    );
}
