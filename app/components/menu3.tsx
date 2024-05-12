"use client";
import { useTranslations } from 'next-intl';
import Link from 'next-intl/link';


export default function Menu3() {
  const t = useTranslations('Menu3')

  return (
    <div className={`sm:relative fixed bg-blueExtraDark shadow-xl sm:left-60 hover:bg-blueExtraDark flex flex-col flex flex-col items-start w-auto h-auto  rounded-3xl border border-blueDark border-solid border-2 m-[1vh] text-blueExtraLight z-10`}>
    <Link
        className="text-blueExtraLight hyphens-auto no-underline text-sm md:text-lg sm:text-md w-full my-[1vh] mx-[1vw]"
        href= '/interesting'
      >
       {t("h0")}
      </Link>
      <Link
        className="text-blueExtraLight no-underline text-sm md:text-lg sm:text-md w-full my-[1vh] mx-[1vw]"
        href='/interesting#EmissionTradingSchemes'
      >
         {t("h1")}
      </Link>
      <Link
        className="text-blueExtraLight no-underline text-sm md:text-lg sm:text-md w-full my-[1vh] mx-[1vw]"
        href= '/interesting#Geoengineering'
      >
        {t("h2")}
      </Link>
      <Link
        className="text-blueExtraLight no-underline text-sm md:text-lg sm:text-md w-full my-[1vh] mx-[1vw]"
        href= '/interesting#ClimateChangeDenial'
      >
        {t("h3")}
      </Link>
    </div>
  );
}
