import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import MenuHeader from "../components/menuHeader";
import Footer from "../components/footer";
import { ReactNode } from 'react'
import { notFound } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'

type Props = {
  children: ReactNode
  params: { locale: string }
}

export const metadata: Metadata = {
  title: "CO2-Zone",
  description: "A open source Website, that shows important CO2-Data of countries and companys.",
};

//function to get the translations
async function getMessages(locale: string) {
  try {
    return (await import(`../../messages/${locale}.json`)).default
  } catch (error) {
    notFound()
  }
}

//function to generate the routes for all the locales
export async function generateStaticParams() {
  return ['en', 'fr'].map((locale) => ({ locale }))
}

export default async function RootLayout({
  children,
  params: { locale },
}: Props) {
  const messages = await getMessages(locale)


  return (
    <html lang={locale}>
      <body className='bg-background'>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <MenuHeader />
          <div className='p-5'>
            {children}
          </div>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
