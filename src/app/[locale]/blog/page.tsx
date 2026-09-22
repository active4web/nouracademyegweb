import { Metadata } from "next";
import BlogFinalCtaSection from "@/features/Blog/BlogFinalCtaSection/BlogFinalCtaSection";
import BlogHeroSection from "@/features/Blog/BlogHeroSection/BlogHeroSection";
import BlogListingSection from "@/features/Blog/BlogListingSection/BlogListingSection";

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

async function getBlogSeo(lang: string): Promise<ApiSeoEntry | null> {
  try {
    const base = process.env.NEXT_PUBLIC_API_BASE_URL;
    const url = `${base}website/seo/blog?lang=${lang}`;

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

  const seo = await getBlogSeo(locale);

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
      url: `${baseUrl}/${locale}/blog`,
      siteName,
      locale: isAr ? "ar_EG" : "en_US",
      type: "website",
    },

    alternates: {
      canonical: `${baseUrl}/${locale}/blog`,
      languages: {
        ar: `${baseUrl}/ar/blog`,
        en: `${baseUrl}/en/blog`,
      },
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function page() {
  return (
    <main style={{ display: "flex", flexDirection: "column", gap: "75px" }}>
      <BlogHeroSection />
      <BlogListingSection />
      <BlogFinalCtaSection />
    </main>
  );
}
