'use client';
import React from "react";
import { useTranslations } from 'next-intl'



export default function DatasecurityPage() {
  const t = useTranslations('DatasecurityPage')

  return (
    <div>
      <div className=" mt-[5vh] flex flex-col justify-center items-center">
        <h1 className="text-blueExtraLight text-4xl  m-4 ">
          {t("header")} 
        </h1>
      </div>
      <div className="container text-blueExtraLight mx-auto px-4">
        <p className="text-lg mb-4">
        {t("subheader")} 
        </p>
        <ul className="list-disc list-inside mb-4">
          <li className="mb-2">
            <strong> {t("l1s")} </strong> {t("l1")}  
          </li>
          <li className="mb-2">
            <strong> {t("l2s")}  </strong>{t("l2")}   
          </li>
          <li className="mb-2">
          <strong> {t("l3s")} </strong> {t("l3")}   
          </li>
          <li className="mb-2">
          <strong>{t("l4s")} </strong>{t("l4")}  
          </li>
          <li className="mb-2">
          <strong>{t("l5s")}</strong>{t("l5")} 
          </li>
          <li className="mb-2">
          <strong>{t("l6s")}</strong> {t("l6")} 
          </li>
          <li className="mb-2">
          <strong>{t("l7s")}</strong>{t("l7")} 
          </li>
          <li className="mb-2">
          <strong>{t("l8s")}</strong>{t("l8")}
          </li>
        </ul>
        <p className="text-lg mb-4">
        {t("questions")} 
        </p>
      </div>
    </div>
  );
}
