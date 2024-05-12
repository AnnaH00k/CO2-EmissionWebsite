"use client";
import { useTranslations } from 'next-intl';
import Link from 'next-intl/link';



export default function Menu1() {
  const t = useTranslations('Menu1')


  return (
    <div className="sm:relative fixed bg-blueExtraDark shadow-xl sm:left-10 hover:bg-blueExtraDark flex flex-col flex flex-col items-start w-auto h-auto  rounded-3xl border border-blueDark border-solid border-2 m-[1vh] text-blueExtraLight ">
      <Link
        className="text-blueExtraLight hyphens-auto no-underline text-sm md:text-lg sm:text-md w-full my-[1vh] mx-[1vw]"
        href= '/co2Info'
      >
        {t("h0")} 
      </Link>
      <Link
        className="text-blueExtraLight hyphens-auto no-underline text-sm md:text-lg sm:text-md w-full my-[1vh] mx-[1vw]"
        href='/co2Info#WhatDoesCo2Do'
      >
        {t("h1")} 
      </Link>
      <Link
        className="text-blueExtraLight no-underline text-sm md:text-lg sm:text-md w-full my-[1vh] mx-[1vw]"
        href= '/co2Info#HowIsItMonitored'
      >
        {t("h2")} 
      </Link>
      <Link
        className="text-blueExtraLight no-underline text-sm md:text-lg sm:text-md w-full my-[1vh] mx-[1vw]"
        href='/co2Info#CurrentResearch'
      >
        {t("h3")} 
      </Link>
      <Link
        className="text-blueExtraLight no-underline text-sm md:text-lg sm:text-md w-full my-[1vh] mx-[1vw]"
        href= '/co2Info#OtherInfluences'
      >
         {t("h4")} 
      </Link>
      <Link
        className="text-blueExtraLight no-underline text-sm md:text-lg sm:text-md w-full my-[1vh] mx-[1vw]"
        href='/co2Info#CO2Equivalents'
      >
         {t("h5")} 
      </Link>
    </div>
  );
}
