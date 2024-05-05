"use client";

import { useEffect } from "react";

export default function Footer() {
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
        <footer className="flex my-[10vh] w-full overflow-hidden mx-2 justify-center">
            <ul className="">
                <a className="m-2 text-blueExtraLight github-page-link" href="/datasecurity"> Datasecurity</a>
                <a className="m-2 text-blueExtraLight github-page-link" href="/impressum"> Imprint</a>
                <a className="m-2 text-blueExtraLight github-page-link" href="/contact">Contact</a>
            </ul>
        </footer>
    );
}
