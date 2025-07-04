// tests/logo-domain.test.ts
import { getLogoSrcForHost } from '../src/main';

describe('getLogoSrcForHost', () => {
  it('returns topten_ch_logo.svg for topten.ch', () => {
    expect(getLogoSrcForHost('www.topten.ch')).toBe('/topten_ch_logo.svg');
    expect(getLogoSrcForHost('subdomain.topten.ch')).toBe('/topten_ch_logo.svg');
  });
  it('returns logo_large.png for topten.eu', () => {
    expect(getLogoSrcForHost('www.topten.eu')).toBe('/logo_large.png');
    expect(getLogoSrcForHost('subdomain.topten.eu')).toBe('/logo_large.png');
  });
  it('returns logo_large.png for other domains', () => {
    expect(getLogoSrcForHost('localhost')).toBe('/logo_large.png');
    expect(getLogoSrcForHost('example.com')).toBe('/logo_large.png');
  });
});
