import React, { createContext, useState, useEffect, ReactNode, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

type Language = 'es' | 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  isLoading: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export { LanguageContext };

interface LanguageProviderProps {
  children: ReactNode;
}

// Estado global fuera del componente para persistir entre re-renders
let globalLanguage: Language | null = null;

const initializeGlobalLanguage = (): Language => {
  if (globalLanguage) return globalLanguage;
  
  try {
    const savedLanguage = localStorage.getItem('preferred-language');
    if (savedLanguage && ['es', 'en', 'fr'].includes(savedLanguage)) {
      globalLanguage = savedLanguage as Language;
      return globalLanguage;
    }
  } catch (error) {
    console.warn('Error reading from localStorage:', error);
  }
  
  globalLanguage = 'es';
  return globalLanguage;
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const { i18n } = useTranslation();
  
  const [language, setLanguageState] = useState<Language>(() => initializeGlobalLanguage());
  const [isLoading, setIsLoading] = useState(false);

  // Función para cambiar idioma
  const setLanguage = async (newLanguage: Language) => {
    if (newLanguage === language) return;
    
    setIsLoading(true);
    try {
      // Actualizar estado global
      globalLanguage = newLanguage;
      
      // Cambiar en i18n
      await i18n.changeLanguage(newLanguage);
      
      // Guardar en localStorage
      localStorage.setItem('preferred-language', newLanguage);
      
      // Actualizar estado local
      setLanguageState(newLanguage);
    } catch (error) {
      console.error('Error changing language:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Solo sincronizar una vez al inicio cuando i18n esté listo
  useEffect(() => {
    if (i18n.isInitialized && globalLanguage) {
      const currentI18nLang = i18n.language.split('-')[0];
      
      if (currentI18nLang !== globalLanguage) {
        i18n.changeLanguage(globalLanguage);
      }
    }
  }, [i18n.isInitialized, i18n]);

  const value: LanguageContextType = {
    language,
    setLanguage,
    isLoading,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
