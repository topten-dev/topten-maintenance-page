// src/main.ts
import { setupLanguageButtons } from './translations';

setupLanguageButtons();

export function getLogoSrcForHost(host: string): string {
  if (host.endsWith('topten.ch')) {
    return '/topten_ch_logo.svg';
  } else if (host.endsWith('topten.eu')) {
    return '/logo_large.png';
  } else {
    return '/logo_large.png'; // default
  }
}

const logo = document.getElementById('main-logo');
if (logo) {
  logo.setAttribute('src', getLogoSrcForHost(window.location.hostname));
}
