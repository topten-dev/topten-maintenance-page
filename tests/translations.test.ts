// tests/translations.test.ts
import { setLanguage, setupLanguageButtons, translations } from '../src/translations';

describe('Language detection and switching', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <h1 id="headline"></h1>
      <p id="subtitle"></p>
      <button id="subscribe-btn"></button>
      <button type="button" data-lang="en">English</button>
      <button type="button" data-lang="de">Deutsch</button>
      <button type="button" data-lang="it">Italiano</button>
      <button type="button" data-lang="fr">Français</button>
    `;
  });

  it('should set English by default if browser language is not supported', () => {
    Object.defineProperty(window.navigator, 'language', { value: 'ru', configurable: true });
    setupLanguageButtons();
    expect(document.getElementById('headline')!.innerHTML).toBe(translations.en.headline);
    expect(document.getElementById('subtitle')!.textContent).toBe(translations.en.subtitle);
    expect(document.getElementById('subscribe-btn')!.textContent).toBe(translations.en.subscribe);
  });

  it('should set German if browser language is de', () => {
    Object.defineProperty(window.navigator, 'language', { value: 'de', configurable: true });
    setupLanguageButtons();
    expect(document.getElementById('headline')!.innerHTML).toBe(translations.de.headline);
  });

  it('should set Italian if browser language is it', () => {
    Object.defineProperty(window.navigator, 'language', { value: 'it', configurable: true });
    setupLanguageButtons();
    expect(document.getElementById('headline')!.innerHTML).toBe(translations.it.headline);
  });

  it('should set French if browser language is fr', () => {
    Object.defineProperty(window.navigator, 'language', { value: 'fr', configurable: true });
    setupLanguageButtons();
    expect(document.getElementById('headline')!.innerHTML).toBe(translations.fr.headline);
  });

  it('should switch language when button is clicked', () => {
    Object.defineProperty(window.navigator, 'language', { value: 'en', configurable: true });
    setupLanguageButtons();
    (document.querySelector('[data-lang="de"]') as HTMLButtonElement).click();
    expect(document.getElementById('headline')!.innerHTML).toBe(translations.de.headline);
    (document.querySelector('[data-lang="it"]') as HTMLButtonElement).click();
    expect(document.getElementById('headline')!.innerHTML).toBe(translations.it.headline);
  });
});
