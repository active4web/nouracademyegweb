import type { Metadata } from "next";
import { Almarai, Inter, Aref_Ruqaa } from "next/font/google";
import "@/styles/globals.scss";
import { getLocale, getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import Header from "@/components/Layout/Header/Header";
import Footer from "@/components/Layout/Footer/Footer";
import FloatingActions from "@/components/FloatingActions/FloatingActions";

const arabicFont = Almarai({
    subsets: ["arabic"],
    weight: ["300", "400", "700"],
    variable: "--font-ar",
    display: 'swap',
});

const englishFont = Inter({
    subsets: ["latin"],
    variable: "--font-en",
    display: 'swap',
});

const arefRuqaa = Aref_Ruqaa({
    subsets: ["arabic"],
    weight: ["400", "700"],
    variable: "--font-ruqaa",
    display: "swap"
});

export const metadata: Metadata = {
    title: "نور أكاديمى",
    description: "نور أكاديمى لتعليم و تحفيظ القرأن",
};

interface LocaleLayoutProps {
    children: React.ReactNode;
}

export default async function LocaleLayout({ children }: LocaleLayoutProps) {
    const locale = await getLocale();
    const messages = await getMessages();

    return (
        <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
            <body className={`${arabicFont.variable} ${englishFont.variable} ${arefRuqaa.variable}`}>
                <NextIntlClientProvider messages={messages} locale={locale}>
                    <Header />
                    {children}
                    <FloatingActions />
                    <Footer />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
