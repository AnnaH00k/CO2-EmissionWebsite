"use client";
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next-intl/link';



export default function Menu1() {
  const t = useTranslations('Menu1')
  const locale = useLocale();
  const isArabic = locale === 'ar';

  return (
    <div className={` fixed flex flex-col  sm:w-[100vw] w-auto h-auto items-center ${isArabic ? 'sm:items-end' : 'sm:items-start'}`}>
    <div className={`sm:relative fixed bg-blueExtraDark shadow-xl hover:bg-blueExtraDark flex flex-col items-start w-auto h-auto  rounded-3xl  border-blueDark border-solid border-2 m-[1vh] p-[1vh]  text-blueExtraLight ${isArabic ? 'sm:right-10' : 'sm:left-10'}`}>
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
    </div>
  );
}
