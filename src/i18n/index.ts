import en from './en';
import ar from './ar';

export type Lang = 'en' | 'ar';
export type Translations = typeof en;

const translations: Record<Lang, Translations> = { en, ar };

export function t(lang: Lang): Translations {
  return translations[lang];
}

export { en, ar };
