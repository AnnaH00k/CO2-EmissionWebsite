"use client";

export default function Menu2() {

    return (
        <div className={`sm:relative fixed bg-blueDark hover:bg-blueExtraDark flex flex-col flex flex-col items-start w-auto h-auto  shadow-xl rounded-3xl border border-blueDark border-solid border-2 m-[1vh]  text-blueExtraLight sm:left-40 z-10`}>
            <a className='text-blueExtraLight no-underline text-sm md:text-lg sm:text-md w-auto my-[1vh] mx-[1vw]' href={process.env.NODE_ENV === 'production' ? '/co2-zone/actions' : '/actions'} > What can Individuals do?</a>
            <a className='text-blueExtraLight no-underline text-sm md:text-lg sm:text-md w-auto my-[1vh] mx-[1vw]' href={process.env.NODE_ENV === 'production' ? '/co2-zone/actions#ActionCompanies' : '/actions#ActionCompanies'} >What can Companies do?</a>
            <a className='text-blueExtraLight no-underline text-sm md:text-lg sm:text-md w-auto my-[1vh] mx-[1vw]' href={process.env.NODE_ENV === 'production' ? '/co2-zone/actions#ActionGovernments' : '/actions#ActionGovernments'} >What can governments do?</a>
        </div>     
    );
}
