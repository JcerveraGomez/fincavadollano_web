"use client";

import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "./dropdown-menu";
import { Button } from "./button";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../../hooks/useLanguage";
import { GB, ES, FR } from "country-flag-icons/react/3x2";

export function LanguageSelector() {
    const { i18n } = useTranslation();
    const { language, setLanguage, isLoading } = useLanguage();

    const changeLanguage = (lng: 'es' | 'en' | 'fr') => {
        setLanguage(lng);
    };

    // Mapeo de banderas y etiquetas para cada idioma
    const flagMapping: Record<string, JSX.Element> = {
        en: <GB className="w-4 h-4" />,
        es: <ES className="w-4 h-4" />,
        fr: <FR className="w-4 h-4" />,
    };

    const languageLabels: Record<string, string> = {
        en: "English",
        es: "Español",
        fr: "Français",
    };

    // Obtenemos los lenguajes disponibles desde la configuración de i18n.
    // Si no se encuentran, se usan valores por defecto.
    const availableLanguages = i18n.options.resources
        ? Object.keys(i18n.options.resources)
        : ["en", "es", "fr"];

    // Bandera actual según el idioma seleccionado (por defecto, inglés)
    const currentFlag = flagMapping[language] || flagMapping["en"];

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button 
                    variant="ghost" 
                    className="flex items-center gap-1 px-2 sm:px-3"
                    disabled={isLoading}
                >
                    {currentFlag}
                    <span className="text-black hidden sm:inline">{languageLabels[language]}</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-40">
                {availableLanguages.map((lng) => (
                    <DropdownMenuItem 
                        key={lng} 
                        onSelect={() => changeLanguage(lng as 'es' | 'en' | 'fr')}
                        disabled={isLoading}
                    >
                        <div className="flex items-center gap-2">
                            {flagMapping[lng] || flagMapping["en"]}
                            <span className={"text-black"}>{languageLabels[lng]}</span>
                        </div>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
