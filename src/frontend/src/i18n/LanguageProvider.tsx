import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { Language, translations, Translations } from './translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'magical-ac-language';
const VALID_LANGUAGES: Language[] = ['en', 'hi', 'gu'];

function getInitialLanguage(): Language {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && VALID_LANGUAGES.includes(stored as Language)) {
      return stored as Language;
    }
  } catch (error) {
    console.warn('Error reading language from localStorage, defaulting to English:', error);
  }
  return 'en'; // Default to English
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);
  const [isInitialized, setIsInitialized] = useState(false);

  const setLanguage = (lang: Language) => {
    if (VALID_LANGUAGES.includes(lang)) {
      setLanguageState(lang);
      try {
        localStorage.setItem(STORAGE_KEY, lang);
      } catch (error) {
        console.warn('Error saving language to localStorage:', error);
      }
    } else {
      console.warn(`Invalid language "${lang}", defaulting to English`);
      setLanguageState('en');
    }
  };

  // Update document language attribute
  useEffect(() => {
    try {
      document.documentElement.lang = language;
      console.log(`Language set to: ${language}`);
      setIsInitialized(true);
    } catch (error) {
      console.error('Error setting document language:', error);
      setIsInitialized(true);
    }
  }, [language]);

  const value: LanguageContextType = {
    language,
    setLanguage,
    t: translations[language],
  };

  // Don't render children until initialized to prevent flash of untranslated content
  if (!isInitialized) {
    return null;
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguageContext() {
  const context = React.useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguageContext must be used within LanguageProvider');
  }
  return context;
}
