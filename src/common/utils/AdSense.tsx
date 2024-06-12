"use client"
import React, { useEffect } from 'react';
import siteConfig from '../../../config/site.config';

interface AdSenseProps extends React.HTMLAttributes<HTMLModElement> {
  adFormat: string;
  adSlot: string;
}

const AdSense: React.FC<AdSenseProps> = ({ adFormat, adSlot, ...props }) => {
  const loadAds = () => {
    try {
      if (typeof window !== 'undefined') {
        (window as any).adsbygoogle = ((window as any).adsbygoogle || []).push({});
      }
    } catch (error) {
      console.log('Adsense error:', (error as Error).message);
    }
  };

  useEffect(() => {
    loadAds();
  }, []);

  return (
    <ins
      className={'adsbygoogle'}
      data-ad-format={adFormat}
      data-ad-client={'ca-' + siteConfig.adsense.publisherId}
      data-ad-slot={adSlot}
      {...props}
    ></ins>
  );
};

export default AdSense;

