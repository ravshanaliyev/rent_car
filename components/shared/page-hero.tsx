import React from 'react';

// Ensure the correct path to the banner image is used
import SingleCarBanner from "../../app/assets/images/SingleCarBanner.jpg";
import Image from 'next/image';

interface PageHeroProps {
  title: string;
}

const PageHero: React.FC<PageHeroProps> = ({ title }) => {
  return (
    <div className="relative w-full h-[380px]">
      {/* Image */}
      <Image
        src={SingleCarBanner}
        alt="Car Banner"
        className="w-full h-full object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0d273f] opacity-65"></div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center text-white">
          <h1 className="text-[50px] font-bold uppercase">{title}</h1>
        </div>
      </div>
    </div>
  );
};

export default PageHero;
