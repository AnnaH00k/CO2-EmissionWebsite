'use client';

import { useEffect } from "react";

export default function Menu3() {
 
  useEffect(() => {
    if (window.location.hostname === 'annah00k.github.io') {
      const links = document.querySelectorAll('.github-page-link');
      links.forEach(link => {
        const href = link.getAttribute('href');
        if (href) {
          link.setAttribute('href', href.startsWith('/co2-zone') ? href : '/co2-zone' + href);
        }
      });
    }
  }, []);

  return (
    <div className={`sm:relative fixed bg-blueDark sm:left-60 hover:bg-blueExtraDark flex flex-col flex flex-col items-start w-auto h-auto  rounded-3xl border border-blueDark border-solid border-2 m-[1vh] text-blueExtraLight z-10`}>
    <a
        className="text-blueExtraLight hyphens-auto no-underline text-sm md:text-lg sm:text-md w-auto my-[1vh] mx-[1vw]"
        href="/interesting#CooperationOnClimateChange"
      >
        Global Cooperation on Climate Change
      </a>
      <a
        className="text-blueExtraLight no-underline text-sm md:text-lg sm:text-md w-auto my-[1vh] mx-[1vw]"
        href="/interesting#EmissionTradingSchemes"
      >
        Emission Trading Schemes
      </a>
      <a
        className="text-blueExtraLight no-underline text-sm md:text-lg sm:text-md w-auto my-[1vh] mx-[1vw]"
        href="/interesting#Geoengineering"
      >
        Geoengineering solutions?
      </a>
      <a
        className="text-blueExtraLight no-underline text-sm md:text-lg sm:text-md w-auto my-[1vh] mx-[1vw]"
        href="/interesting#ClimateChangeDenial"
      >
        Climate Change Denial
      </a>
    </div>
  );
}
