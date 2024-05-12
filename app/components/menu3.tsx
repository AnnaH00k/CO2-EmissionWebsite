"use client";
import Link from 'next-intl/link';


export default function Menu3() {

  return (
    <div className={`sm:relative fixed bg-blueDark shadow-xl sm:left-60 hover:bg-blueExtraDark flex flex-col flex flex-col items-start w-auto h-auto  rounded-3xl border border-blueDark border-solid border-2 m-[1vh] text-blueExtraLight z-10`}>
    <Link
        className="text-blueExtraLight hyphens-auto no-underline text-sm md:text-lg sm:text-md w-auto my-[1vh] mx-[1vw]"
        href={process.env.NODE_ENV === 'production' ? '/co2-zone/interesting' : '/interesting'}
      >
        Global Cooperation on Climate Change
      </Link>
      <Link
        className="text-blueExtraLight no-underline text-sm md:text-lg sm:text-md w-auto my-[1vh] mx-[1vw]"
        href={process.env.NODE_ENV === 'production' ? '/co2-zone/interesting#EmissionTradingSchemes' : '/interesting#EmissionTradingSchemes'}
      >
        Emission Trading Schemes
      </Link>
      <Link
        className="text-blueExtraLight no-underline text-sm md:text-lg sm:text-md w-auto my-[1vh] mx-[1vw]"
        href={process.env.NODE_ENV === 'production' ? '/co2-zone/interesting#Geoengineering' : '/interesting#Geoengineering'}
      >
        Geoengineering solutions?
      </Link>
      <Link
        className="text-blueExtraLight no-underline text-sm md:text-lg sm:text-md w-auto my-[1vh] mx-[1vw]"
        href={process.env.NODE_ENV === 'production' ? '/co2-zone/interesting#ClimateChangeDenial' : '/interesting#ClimateChangeDenial'}
      >
        Climate Change Denial
      </Link>
    </div>
  );
}
