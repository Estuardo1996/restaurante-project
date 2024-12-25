import { useState, useEffect } from 'react';
import { deviceUtils } from '@/utils/device';

export function useResponsive() {
  const [isMobile, setIsMobile] = useState(deviceUtils.isMobile());
  const [isTablet, setIsTablet] = useState(deviceUtils.isTablet());
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(deviceUtils.isMobile());
      setIsTablet(deviceUtils.isTablet());
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { isMobile, isTablet, isDesktop: !isMobile && !isTablet };
}