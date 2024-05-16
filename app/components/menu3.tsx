"use client";
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next-intl/link';


export default function Menu3() {
  const t = useTranslations('Menu3')
  const locale = useLocale();
  const isArabic = locale === 'ar';

  return (
    <div className={` fixed flex flex-col  sm:w-[100vw] w-auto h-auto items-center ${isArabic ? 'sm:items-end' : 'sm:items-start'}`}>
        <div className={`sm:relative fixed bg-blueExtraDark shadow-xl hover:bg-blueExtraDark flex flex-col items-start w-auto h-auto  rounded-3xl p-[1vh] border-blueDark border-solid border-2 m-[1vh]  text-blueExtraLight ${isArabic ? 'sm:right-80' : 'sm:left-60'}`}>
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
    </div>
  );
}
