"use client";
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next-intl/link';


export default function Menu2() {
    const t = useTranslations('Menu2')
    const locale = useLocale();
    const isArabic = locale === 'ar';

    return (
        <div className={` fixed flex flex-col  sm:w-[100vw] w-auto h-auto items-center ${isArabic ? 'sm:items-end' : 'sm:items-start'}`}>
            <div className={`sm:relative fixed bg-blueExtraDark shadow-xl hover:bg-blueExtraDark flex flex-col items-start w-auto h-auto  rounded-3xl p-[1vh] border-blueDark border-solid border-2 m-[1vh]  text-blueExtraLight ${isArabic ? 'sm:right-60' : 'sm:left-40'}`}>
                <Link className='text-blueExtraLight no-underline text-sm md:text-lg sm:text-md w-full my-[1vh] mx-[1vw]' href= '/actions' >  {t("h0")} </Link>
                <Link className='text-blueExtraLight no-underline text-sm md:text-lg sm:text-md w-full my-[1vh] mx-[1vw]' href= '/actions#ActionCompanies' >  {t("h1")} </Link>
                <Link className='text-blueExtraLight no-underline text-sm md:text-lg sm:text-md w-full my-[1vh] mx-[1vw]' href= '/actions#ActionGovernments' >  {t("h2")} </Link>
        </div>  
        </div>   
    );
}
