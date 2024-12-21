import { FC } from "react"
import { Banner } from "@core/components/banner.component";

const HeroBanner: FC = () => {
  return (
    <div className="relative w-full flex items-center justify-center bg-gray-700 overflow-hidden">
      <Banner />
    </div>
  );
};

export default HeroBanner;
