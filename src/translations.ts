// src/translations.ts

export const translations: Record<string, Record<string, string>> = {
  en: {
    headline: 'We’ll Be Back Soon!',
    almost: 'Almost',
    subtitle: 'Our site is currently undergoing scheduled maintenance. We appreciate your patience and invite you to subscribe for updates.',
    subscribe: 'Subscribe',
    newsletterTitle: 'Subscribe to our newsletter',
    newsletterDesc: 'Stay informed on our policy work for energy efficiency.',
    firstName: 'First name',
    lastName: 'Last name',
    emailPlaceholder: 'Enter your email',
    monthlyArticlesTitle: 'Monthly Articles',
    monthlyArticlesDesc: 'We send emails once a month with the latest articles and updates.',
    noSpamTitle: 'No spam',
    noSpamDesc: 'We don\'t send spam emails or share your data with third parties.'
  },
  de: {
    headline: 'Wir sind bald zurück!',
    almost: 'fast',
    subtitle: 'Unsere Website wird derzeit gewartet. Wir danken für Ihre Geduld und laden Sie ein, unseren Newsletter zu abonnieren.',
    subscribe: 'Abonnieren',
    newsletterTitle: 'Abonnieren Sie unseren Newsletter',
    newsletterDesc: 'Bleiben Sie über unsere energiepolitische Arbeit informiert.',
    firstName: 'Vorname',
    lastName: 'Nachname',
    emailPlaceholder: 'E-Mail eingeben',
    monthlyArticlesTitle: 'Monatliche Artikel',
    monthlyArticlesDesc: 'Wir senden einmal im Monat E-Mails mit den neuesten Artikeln und Updates.',
    noSpamTitle: 'Kein Spam',
    noSpamDesc: 'Wir versenden keine Spam-E-Mails und geben Ihre Daten nicht an Dritte weiter.'
  },
  it: {
    headline: 'Torneremo presto!',
    almost: 'quasi',
    subtitle: 'Il nostro sito è attualmente in manutenzione. Grazie per la pazienza! Iscriviti per ricevere aggiornamenti.',
    subscribe: 'Iscriviti',
    newsletterTitle: 'Iscriviti alla nostra newsletter',
    newsletterDesc: 'Rimani informato sul nostro lavoro politico per l\'efficienza energetica.',
    firstName: 'Nome',
    lastName: 'Cognome',
    emailPlaceholder: 'Inserisci la tua email',
    monthlyArticlesTitle: 'Articoli mensili',
    monthlyArticlesDesc: 'Invieremo una email al mese con gli ultimi articoli e aggiornamenti.',
    noSpamTitle: 'Nessuno spam',
    noSpamDesc: 'Non inviamo spam e non condividiamo i tuoi dati con terze parti.'
  },
  fr: {
    headline: 'Nous serons bientôt de retour !',
    almost: 'presque',
    subtitle: 'Notre site est actuellement en maintenance. Merci de votre patience, abonnez-vous pour recevoir des mises à jour.',
    subscribe: 'S’abonner',
    newsletterTitle: 'Abonnez-vous à notre newsletter',
    newsletterDesc: 'Restez informé sur notre travail politique pour l\'efficacité énergétique.',
    firstName: 'Prénom',
    lastName: 'Nom',
    emailPlaceholder: 'Entrez votre email',
    monthlyArticlesTitle: 'Articles mensuels',
    monthlyArticlesDesc: 'Nous envoyons un email par mois avec les derniers articles et mises à jour.',
    noSpamTitle: 'Pas de spam',
    noSpamDesc: 'Nous n\'envoyons pas de spam et ne partageons pas vos données avec des tiers.'
  }
};

export function setLanguage(lang: string) {
  const headline = document.getElementById('headline');
  const subtitle = document.getElementById('subtitle');
  const subscribeBtn = document.getElementById('subscribe-btn');
  const newsletterTitle = document.getElementById('newsletter-title');
  const newsletterDesc = document.getElementById('newsletter-desc');
  const firstName = document.getElementById('first-name');
  const lastName = document.getElementById('last-name');
  const emailInput = document.getElementById('email-address');
  const monthlyArticlesTitle = document.getElementById('monthly-articles-title');
  const monthlyArticlesDesc = document.getElementById('monthly-articles-desc');
  const noSpamTitle = document.getElementById('no-spam-title');
  const noSpamDesc = document.getElementById('no-spam-desc');

  if (headline) headline.innerHTML = translations[lang].headline;
  if (subtitle) subtitle.textContent = translations[lang].subtitle;
  if (subscribeBtn) subscribeBtn.textContent = translations[lang].subscribe;
  if (newsletterTitle) newsletterTitle.textContent = translations[lang].newsletterTitle;
  if (newsletterDesc) newsletterDesc.textContent = translations[lang].newsletterDesc;
  if (firstName) (firstName as HTMLInputElement).placeholder = translations[lang].firstName;
  if (lastName) (lastName as HTMLInputElement).placeholder = translations[lang].lastName;
  if (emailInput) (emailInput as HTMLInputElement).placeholder = translations[lang].emailPlaceholder;
  if (monthlyArticlesTitle) monthlyArticlesTitle.textContent = translations[lang].monthlyArticlesTitle;
  if (monthlyArticlesDesc) monthlyArticlesDesc.textContent = translations[lang].monthlyArticlesDesc;
  if (noSpamTitle) noSpamTitle.textContent = translations[lang].noSpamTitle;
  if (noSpamDesc) noSpamDesc.textContent = translations[lang].noSpamDesc;
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
