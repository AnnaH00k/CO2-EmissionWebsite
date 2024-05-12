'use client';
import React from "react";
import { useTranslations } from 'next-intl'


export default function ContactPage() {
  const t = useTranslations('ContactPage')

  return (
    <div>
      <div className=" mt-[5vh] flex flex-col justify-center items-center">
        <h1 className="text-blueExtraLight text-4xl  m-4 "> 
          {t('header')}
        </h1>
      </div>
      <div className="text-blueExtraLight container mx-auto px-4">
        <p className="text-lg mb-4">
        {t('text1')}  
        </p>
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2">  {t('adress')} </h3>
          <p>  {t('companyName')}
            <br/>  {t('street')}  <br/> {t('city')} <br /> {t('country')}
          
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2"> {t('phoneheader')} </h3>
          <p> {t('phonenumber')} </p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2"> {t('emailheader')} </h3>
          <p> {t('mail')} </p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2">  {t('mediaHeader')}</h3>
          <p> {t('mediaInvite')} </p>
          <ul className="list-disc list-inside">
            <li> {t('twitterHeader')}
             <a href="https://twitter.com/co2zone" >@co2zone</a>
            </li>
            <li> {t('facebookHeader')} 
              <a href="https://www.facebook.com/co2zone">CO2zone</a>
            </li>
            <li> 
            {t('instaHeader')}
              <a href="https://www.instagram.com/co2zone">@co2zone</a>
            </li>
          </ul>
        </div>
        <p className="text-lg mb-4"> 
        {t('responseTime')}     
        </p>
      </div>
    </div>
  );
}
