// src/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Importa los archivos de idiomas
import en from "./locales/en";
import es from "./locales/es";
import fr from "./locales/fr";

// Función para obtener el idioma guardado
const getSavedLanguage = (): string => {
    try {
        const savedLanguage = localStorage.getItem('preferred-language');
        if (savedLanguage && ['es', 'en', 'fr'].includes(savedLanguage)) {
            return savedLanguage;
        }
    } catch (error) {
        // localStorage no disponible (servidor)
        console.warn('localStorage not available');
    }
    return 'es'; // Default
};

i18n.use(initReactI18next).init({
    resources: {
        en,
        es,
        fr,
    },
    lng: getSavedLanguage(), // Usar idioma guardado
    fallbackLng: "es",
    interpolation: {
        escapeValue: false, // React ya protege contra XSS
    },
});

export default i18n;
