import { createContext, useContext, useState, ReactNode } from 'react';
import { Lang, Translations, t } from '../i18n';

interface LangContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  tr: Translations;
  isRTL: boolean;
}

const LangContext = createContext<LangContextType>({
  lang: 'en',
  setLang: () => {},
  tr: t('en'),
  isRTL: false,
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en');

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLang;
  };

  const isRTL = lang === 'ar';

  return (
    <LangContext.Provider value={{ lang, setLang, tr: t(lang), isRTL }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
