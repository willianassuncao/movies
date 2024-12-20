import React from 'react';

const desktopBanner = '/images/banner-desktop.jpg';
const mobileBanner = '/images/banner-mobile.jpg';

export const Banners: React.FC = () => {
  return (
    <div className="relative w-full max-w-full h-[400px] md:h-[600px]">
      <picture>
        {/* Mobile Image */}
        <source srcSet={mobileBanner} media="(max-width: 468px)" />
        {/* Desktop Image */}
        <img
          src={desktopBanner}
          alt="Banner"
          className="w-full h-full object-cover"
        />
      </picture>
    </div>
  );
};
