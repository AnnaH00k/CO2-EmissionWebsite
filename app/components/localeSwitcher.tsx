

'use client'
import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next-intl/client';

export default function LocaleSwitcher() {
    const t = useTranslations('LocaleSwitcher')
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const onLocaleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newLocale = e.target.value;
        router.replace(pathname, { locale: newLocale });
    }

    return (
        <select
            defaultValue={locale}
            onChange={onLocaleChange}
            className='bg-blueExtraDark text-blueExtraLight border-none cursor-pointer  text-sm md:text-md lg:text-lg sm:text-md w-auto my-[1vh] mx-[1vw]'
        >
            {['en', 'ar'].map((lang) => (
                <option key={lang} value={lang}>
                    {t('locale', { locale: lang })}
                </option>
            ))}
        </select>
    )
}