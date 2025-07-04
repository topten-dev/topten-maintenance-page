// src/translations.ts

export const translations: Record<string, Record<string, string>> = {
  en: {
    headline: 'We are <b>Almost</b> there!',
    almost: 'Almost',
    subtitle: 'Stay tuned for something amazing!!!',
    subscribe: 'Subscribe',
  },
  de: {
    headline: 'Wir sind <b>fast</b> da!',
    almost: 'fast',
    subtitle: 'Bleiben Sie dran für etwas Großartiges!',
    subscribe: 'Abonnieren',
  },
  it: {
    headline: 'Siamo <b>quasi</b> pronti!',
    almost: 'quasi',
    subtitle: 'Resta sintonizzato per qualcosa di straordinario!',
    subscribe: 'Iscriviti',
  },
  fr: {
    headline: 'Nous y sommes <b>presque</b> !',
    almost: 'presque',
    subtitle: 'Restez à l’écoute pour quelque chose d’incroyable !',
    subscribe: 'S’abonner',
  }
};

export function setLanguage(lang: string) {
  const headline = document.getElementById('headline');
  const subtitle = document.getElementById('subtitle');
  const subscribeBtn = document.getElementById('subscribe-btn');
  if (headline) headline.innerHTML = translations[lang].headline;
  if (subtitle) subtitle.textContent = translations[lang].subtitle;
  if (subscribeBtn) subscribeBtn.textContent = translations[lang].subscribe;
}

export function setupLanguageButtons() {
  const buttons = document.querySelectorAll<HTMLButtonElement>('[data-lang]');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      setLanguage(btn.dataset.lang || 'en');
    });
  });
  // Autodetect browser language, fallback to English
  const supported = ['en', 'de', 'it', 'fr'];
  const browserLang = navigator.language.slice(0, 2);
  const lang = supported.includes(browserLang) ? browserLang : 'en';
  setLanguage(lang);
}
