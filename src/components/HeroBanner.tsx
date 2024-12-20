import { FC } from 'react'
import { Banners } from './Banners'

const HeroBanner: FC = () => {
  return (
    <div className="relative w-full flex items-center justify-center bg-gray-700 overflow-hidden">
      <Banners />
    </div>
  );
};

export default HeroBanner;
