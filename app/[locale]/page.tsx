'use client';
import { useTranslations } from 'next-intl'
import Table from "../components/table";

export default function Home() {
  const t = useTranslations('Homepage')

  return (
    <div className="overflow-x-hidden">
      <main>
        <div className=" mt-[5vh] flex flex-col justify-center items-center">
          <div className="w-[40vw] max-w-[500px]">
            <img
              src={t("startimage")}
              alt="logo"
              width="100%"
            />
          </div>
          <h1 className="flex hyphens-auto text-center text-blueExtraLight text-lg sm:text-4xl m-4 ">
            {t('helloWorld')}
          </h1>

          <Table />
        </div>
      </main>
    </div>
  );
}
