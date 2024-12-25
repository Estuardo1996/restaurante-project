export const deviceUtils = {
  isMobile: () => window.innerWidth <= 768,
  isTablet: () => window.innerWidth > 768 && window.innerWidth <= 1024,
  isDesktop: () => window.innerWidth > 1024,
  
  // Detectar características del dispositivo
  hasTouch: () => 'ontouchstart' in window,
  
  // Optimizar rendimiento según dispositivo
  getOptimalImageSize: () => {
    if (window.innerWidth <= 768) return 'small';
    if (window.innerWidth <= 1024) return 'medium';
    return 'large';
  }
};