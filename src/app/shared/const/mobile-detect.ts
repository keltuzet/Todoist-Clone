import * as MobileDetect from 'mobile-detect/mobile-detect';

export const mobileDetect = new MobileDetect(window.navigator.userAgent);
export const isMobile = Boolean(mobileDetect.phone() || mobileDetect.tablet());
export const isDesktop = !isMobile;
