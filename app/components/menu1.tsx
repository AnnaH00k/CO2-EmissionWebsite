"use client";
import Link from 'next-intl/link';


export default function Menu1() {

  return (
    <div className="sm:relative fixed bg-blueDark shadow-xl sm:left-10 hover:bg-blueExtraDark flex flex-col flex flex-col items-start w-auto h-auto  rounded-3xl border border-blueDark border-solid border-2 m-[1vh] text-blueExtraLight ">
      <Link
        className="text-blueExtraLight hyphens-auto no-underline text-sm md:text-lg sm:text-md w-auto my-[1vh] mx-[1vw]"
        href= '/co2Info'
      >
        What is CO2?
      </Link>
      <Link
        className="text-blueExtraLight hyphens-auto no-underline text-sm md:text-lg sm:text-md w-auto my-[1vh] mx-[1vw]"
        href='/co2Info#WhatDoesCo2Do'
      >
        What does CO2 do?
      </Link>
      <Link
        className="text-blueExtraLight no-underline text-sm md:text-lg sm:text-md w-auto my-[1vh] mx-[1vw]"
        href= '/co2Info#HowIsItMonitored'
      >
        How is it monitored?
      </Link>
      <Link
        className="text-blueExtraLight no-underline text-sm md:text-lg sm:text-md w-auto my-[1vh] mx-[1vw]"
        href='/co2Info#CurrentResearch'
      >
        Current research on CO2 Emissions
      </Link>
      <Link
        className="text-blueExtraLight no-underline text-sm md:text-lg sm:text-md w-auto my-[1vh] mx-[1vw]"
        href= '/co2Info#OtherInfluences'
      >
        What else influences our Environment ?
      </Link>
      <Link
        className="text-blueExtraLight no-underline text-sm md:text-lg sm:text-md w-auto my-[1vh] mx-[1vw]"
        href='/co2Info#CO2Equivalents'
      >
         CO2 Equivalents
      </Link>
    </div>
  );
}
