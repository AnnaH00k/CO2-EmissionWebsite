"use client";
import React, { useEffect, useRef, useState } from 'react';
import Menu1 from "./menu1";
import Menu2 from "./menu2";
import Menu3 from "./menu3";
import {MagnifyingGlass } from "@phosphor-icons/react";

export default function MenuHeader() {
    const menuRef = useRef(null);
    const [menu1open, setMenu1Open] = useState(false);
    const [menu2open, setMenu2Open] = useState(false);
    const [menu3open, setMenu3Open] = useState(false);


    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !(menuRef.current as any).contains(event.target)) {
                setMenu1Open(false);
                setMenu2Open(false);
                setMenu3Open(false);
            }
        }
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    

    useEffect(() => {
        const timer = setTimeout(() => {
            setMenu1Open(false);
            setMenu2Open(false);
            setMenu3Open(false);
        }, 10000);

        return () => clearTimeout(timer);
    }, [menu1open, menu2open, menu3open]);


    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>)  => {
        if (event.key === 'Enter') {
            event.preventDefault();
            checkInput();
        }
    };

    function checkInput() {
        var query = document.getElementById('search') as HTMLInputElement;
        var regex = /^[a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;=<>]+$/;
    
        if (query === null || query.value === "" || query.value === undefined) {
            alert("Please enter a search term");
            return false;
        }
        else if (!regex.test(query.value)) {
            alert("Special characters are not allowed due to risk of code injection");
            return false;
        }
        else {
            var value = query.value;
            (window as any).find(value);
        }
    
        return true;
    }
    



    useEffect(() => {
        if (window.location.hostname === 'annah00k.github.io') {
            const links = document.querySelectorAll('.github-page-link');
            links.forEach(link => {
                const href = link.getAttribute('href');
                if (href) {
                    link.setAttribute('href', href.startsWith('/CO2-EmissionWebsite') ? href : '/CO2-EmissionWebsite' + href);
                }
            });
        }
    }, []);

    return (
        <header>
            <nav >
                <div ref={menuRef} className='flex z-100 flex-col items-center'>
                    <div className={`flex flex-row items-start sm:fixed top-0  left-0 w-auto h-auto text-blueExtraLight bg-blueExtraDark pl-[1vw] pr-[1vw] rounded-3xl border border-blueDark border-solid border-1 m-[1vh]  z-10`}>
                        <a className='text-blueExtraLight no-underline text-sm md:text-lg sm:text-md w-auto my-[1vh] mx-[1vw]' onMouseEnter={() => { setMenu1Open(false); setMenu2Open(false); setMenu3Open(false) }} href='/'> Overview</a>
                        <div className='flex flex-col items-start top-0 left-0 w-auto h-auto bg-blueExtraDark pl-[1vw] pr-[1vw] rounded-3xl text-blueExtraLight z-10' onMouseEnter={() => { setMenu1Open(true); setMenu2Open(false); setMenu3Open(false) }} onMouseLeave={() => setMenu1Open(true)}>
                            <a className='text-blueExtraLight no-underline text-sm md:text-lg sm:text-md w-auto my-[1vh] mx-[1vw]' onClick={() => setMenu1Open(true)} > CO2 Infos</a>
                        </div>
                        <div className='flex flex-col items-start top-0 left-0 w-auto h-auto bg-blueExtraDark pl-[1vw] pr-[1vw] rounded-3xl text-blueExtraLight z-10' onMouseEnter={() => { setMenu1Open(false); setMenu2Open(true); setMenu3Open(false) }} onMouseLeave={() => setMenu2Open(true)} >
                            <a className='text-blueExtraLight no-underline text-sm md:text-lg sm:text-md w-auto my-[1vh] mx-[1vw]' onClick={() => setMenu2Open(true)}> Actions</a>
                        </div>
                        <div className='flex flex-col items-start top-0 left-0 w-auto h-auto bg-blueExtraDark pl-[1vw] pr-[1vw] rounded-3xl text-blueExtraLight z-10' onMouseEnter={() => { setMenu1Open(false); setMenu2Open(false); setMenu3Open(true) }} onMouseLeave={() => setMenu3Open(true)}>
                            <a className='text-blueExtraLight no-underline text-sm md:text-lg sm:text-md w-auto my-[1vh] mx-[1vw]' onClick={() => setMenu3Open(true)}>Interesting</a>
                        </div>
                    </div>
                    <div className={`flex flex-col sm:flex-row sm:items-start items-center sm:fixed top-0  left-0 sm:mt-[6vh] z-100`}>
                        {menu1open && <Menu1 />}
                        {menu2open && <Menu2 />}
                        {menu3open && <Menu3 />}
                    </div>
                    <div className="search_box">
                        <form action="" id="form2" className={`flex flex-row items-center sm:fixed top-0 right-0 w-auto h-auto bg-blueExtraDark pl-[1vw] pr-[1vw] pt-[1vh] pb-[1vh] rounded-3xl border border-blueDark border-1 m-[1vh] text-blueExtraLight text-sm md:text-lg sm:text-md z-10`} >
                            <input className='bg-blueExtraDark'  type="text" id="search" name="suche" placeholder="Search" onKeyDown={handleKeyDown} />
                            <button type="button" id="submit_form" onClick={checkInput} title="Search"><MagnifyingGlass size={25} /></button>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    );
}
