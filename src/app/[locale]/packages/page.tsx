import { getLocale } from "next-intl/server";
import { Metadata } from "next";
// import PackagesComparisonSection from '@/features/Packages/PackagesComparisonSection/PackagesComparisonSection'
import PackagesFaqSection from "@/features/Packages/PackagesFaqSection/PackagesFaqSection";
import PackagesFinalCtaSection from "@/features/Packages/PackagesFinalCtaSection/PackagesFinalCtaSection";
import PackagesGridSection from "@/features/Packages/PackagesGridSection/PackagesGridSection";
import PackagesHeroSection from "@/features/Packages/PackagesHeroSection/PackagesHeroSection";
import {
  ApiPackage,
  ApiCurrency,
  PackagesApiResponse,
  CurrenciesApiResponse,
} from "./type";

interface ApiSeoEntry {
  id: number;
  title: string;
  description: string;
  keywords: string;
}

interface SeoApiResponse {
  status: string;
  message?: string;
  data: ApiSeoEntry | null;
}

async function getPackagesSeo(lang: string): Promise<ApiSeoEntry | null> {
  try {
    const base = process.env.NEXT_PUBLIC_API_BASE_URL;
    const url = `${base}website/seo/packages?lang=${lang}`;

    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) return null;

    const json: SeoApiResponse = await res.json();
    return json.data ?? null;
  } catch {
    return null;
  }
}

async function getPackages(lang: string): Promise<ApiPackage[]> {
  try {
    const base = process.env.NEXT_PUBLIC_API_BASE_URL;
    const url = `${base}website/packages?lang=${lang}`;

    const res = await fetch(url, { cache: "no-store" });

    if (!res.ok) {
      return [];
    }

    const json: PackagesApiResponse = await res.json();

    if (json.status !== "Success") {
      return [];
    }

    return json.data.data;
  } catch {
    return [];
  }
}

async function getCurrencies(lang: string): Promise<ApiCurrency[]> {
  try {
    const base = process.env.NEXT_PUBLIC_API_BASE_URL;
    const url = `${base}website/currencies?lang=${lang}`;

    const res = await fetch(url, { cache: "no-store" });

    if (!res.ok) {
      return [];
    }

    const json: CurrenciesApiResponse = await res.json();

    if (json.status !== "Success") {
      return [];
    }

    return json.data.data;
  } catch {
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === "ar";

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const siteName = isAr ? "نور أكاديمي" : "Nour Academy";

  const seo = await getPackagesSeo(locale);

  const title = seo?.title || siteName;
  const description = seo?.description || siteName;
  const keywords = seo?.keywords
    ? seo.keywords.split(",").map((k) => k.trim()).filter(Boolean)
    : [siteName];

  return {
    title,
    description,
    keywords,

    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}/packages`,
      siteName,
      locale: isAr ? "ar_EG" : "en_US",
      type: "website",
    },

    alternates: {
      canonical: `${baseUrl}/${locale}/packages`,
      languages: {
        ar: `${baseUrl}/ar/packages`,
        en: `${baseUrl}/en/packages`,
      },
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function PackagesPage() {
  const locale = await getLocale();

  const [packages, currencies] = await Promise.all([
    getPackages(locale),
    getCurrencies(locale),
  ]);

  return (
    <main style={{ display: "flex", flexDirection: "column", gap: "75px" }}>
      <PackagesHeroSection />
      <PackagesGridSection packages={packages} currencies={currencies} />
      {/* <PackagesComparisonSection /> */}
      <PackagesFaqSection />
      <PackagesFinalCtaSection />
    </main>
  );
}