// src/main.ts
import { setupLanguageButtons } from './translations';

setupLanguageButtons();

export function getLogoSrcForHost(host: string): string {
  const base = import.meta.env.BASE_URL || '/';
  if (host.endsWith('topten.ch')) {
    return base + 'topten_ch_logo.svg';
  } else if (host.endsWith('topten.eu')) {
    return base + 'logo_large.png';
  } else {
    return base + 'logo_large.png'; // default
  }
}

const logo = document.getElementById('main-logo');
if (logo) {
  logo.setAttribute('src', getLogoSrcForHost(window.location.hostname));
}
