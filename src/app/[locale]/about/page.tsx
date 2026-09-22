import { getLocale } from "next-intl/server";
import { Metadata } from "next";
import AboutCtaSection from "@/features/About/AboutCtaSection/AboutCtaSection";
import AboutGallerySection from "@/features/About/AboutGallerySection/AboutGallerySection";
import AboutHeroSection from "@/features/About/AboutHeroSection/AboutHeroSection";
import AboutMethodologySection from "@/features/About/AboutMethodologySection/AboutMethodologySection";
import AboutVisionValuesSection from "@/features/About/AboutVisionValuesSection/AboutVisionValuesSection";

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

async function getAboutSeo(lang: string): Promise<ApiSeoEntry | null> {
  try {
    const base = process.env.NEXT_PUBLIC_API_BASE_URL;
    const url = `${base}website/seo/about?lang=${lang}`;

    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) return null;

    const json: SeoApiResponse = await res.json();
    return json.data ?? null;
  } catch {
    return null;
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

  const seo = await getAboutSeo(locale);

  const title = seo?.title || siteName;
  const description = seo?.description || siteName;
  const keywords = seo?.keywords
    ? seo.keywords
        .split(",")
        .map((k) => k.trim())
        .filter(Boolean)
    : [siteName];

  return {
    title,
    description,
    keywords,

    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}/about`,
      siteName,
      locale: isAr ? "ar_EG" : "en_US",
      type: "website",
    },

    alternates: {
      canonical: `${baseUrl}/${locale}/about`,
      languages: {
        ar: `${baseUrl}/ar/about`,
        en: `${baseUrl}/en/about`,
      },
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function AboutPage() {

  return (
    <main style={{ display: "flex", flexDirection: "column", gap: "75px" }}>
      <AboutHeroSection />
      <AboutVisionValuesSection />
      <AboutMethodologySection />
      <AboutGallerySection />
      <AboutCtaSection />
    </main>
  );
}
