// src/translations.ts

export const translations: Record<string, Record<string, string>> = {
  en: {
    headline: 'We’ll Be Back Soon!',
    almost: 'Almost',
    subtitle: 'Our site is currently undergoing scheduled maintenance. We appreciate your patience and invite you to subscribe for updates.',
    subscribe: 'Subscribe',
  },
  de: {
    headline: 'Wir sind bald zurück!',
    almost: 'fast',
    subtitle: 'Unsere Website wird derzeit gewartet. Wir danken für Ihre Geduld und laden Sie ein, unseren Newsletter zu abonnieren.',
    subscribe: 'Abonnieren',
  },
  it: {
    headline: 'Torneremo presto!',
    almost: 'quasi',
    subtitle: 'Il nostro sito è attualmente in manutenzione. Grazie per la pazienza! Iscriviti per ricevere aggiornamenti.',
    subscribe: 'Iscriviti',
  },
  fr: {
    headline: 'Nous serons bientôt de retour !',
    almost: 'presque',
    subtitle: 'Notre site est actuellement en maintenance. Merci de votre patience, abonnez-vous pour recevoir des mises à jour.',
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
