"use client";


export default function Menu3() {

  return (
    <div className={`sm:relative fixed bg-blueDark sm:left-60 hover:bg-blueExtraDark flex flex-col flex flex-col items-start w-auto h-auto  rounded-3xl border border-blueDark border-solid border-2 m-[1vh] text-blueExtraLight z-10`}>
    <a
        className="text-blueExtraLight hyphens-auto no-underline text-sm md:text-lg sm:text-md w-auto my-[1vh] mx-[1vw]"
        href={process.env.NODE_ENV === 'production' ? '/co2-zone/interesting#CooperationOnClimateChange' : '/interesting#CooperationOnClimateChange'}
      >
        Global Cooperation on Climate Change
      </a>
      <a
        className="text-blueExtraLight no-underline text-sm md:text-lg sm:text-md w-auto my-[1vh] mx-[1vw]"
        href={process.env.NODE_ENV === 'production' ? '/co2-zone/interesting#EmissionTradingSchemes' : '/interesting#EmissionTradingSchemes'}
      >
        Emission Trading Schemes
      </a>
      <a
        className="text-blueExtraLight no-underline text-sm md:text-lg sm:text-md w-auto my-[1vh] mx-[1vw]"
        href={process.env.NODE_ENV === 'production' ? '/co2-zone/interesting#Geoengineering' : '/interesting#Geoengineering'}
      >
        Geoengineering solutions?
      </a>
      <a
        className="text-blueExtraLight no-underline text-sm md:text-lg sm:text-md w-auto my-[1vh] mx-[1vw]"
        href={process.env.NODE_ENV === 'production' ? '/co2-zone/interesting#ClimateChangeDenial' : '/interesting#ClimateChangeDenial'}
      >
        Climate Change Denial
      </a>
    </div>
  );
}
