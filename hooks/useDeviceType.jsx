import { useEffect, useState } from 'react';
import { isMobile, isTablet } from 'react-device-detect';

export default function useDeviceType() {
  const [deviceType, setDeviceType] = useState(null);

  useEffect(() => {
    function handleResize() {
      const isPortrait = window.orientation === 0 || window.orientation === 180;
      if (isMobile && isPortrait) {
        setDeviceType('mobile');
      } else if (isTablet && isPortrait) {
        setDeviceType('mobile');
      } else {
        setDeviceType('desktop');
      }
    }

    handleResize();
    // window.addEventListener('resize', handleResize);

    // return () => window.removeEventListener('resize', handleResize);
  }, []);

  return deviceType;
}
