"use client";
import { useTranslations } from 'next-intl';
import Link from 'next-intl/link';


export default function Menu2() {
    const t = useTranslations('Menu2')

    return (
        <div className={`sm:relative fixed bg-blueExtraDark hover:bg-blueExtraDark flex flex-col flex flex-col items-start w-auto h-auto  shadow-xl rounded-3xl border border-blueDark border-solid border-2 m-[1vh]  text-blueExtraLight sm:left-40 z-10`}>
            <Link className='text-blueExtraLight no-underline text-sm md:text-lg sm:text-md w-full my-[1vh] mx-[1vw]' href= '/actions' >  {t("h0")} </Link>
            <Link className='text-blueExtraLight no-underline text-sm md:text-lg sm:text-md w-full my-[1vh] mx-[1vw]' href= '/actions#ActionCompanies' >  {t("h1")} </Link>
            <Link className='text-blueExtraLight no-underline text-sm md:text-lg sm:text-md w-full my-[1vh] mx-[1vw]' href= '/actions#ActionGovernments' >  {t("h2")} </Link>
        </div>     
    );
}
