import { getLocale } from "next-intl/server";
import { Metadata } from "next";
import CoursesSection from "@/features/Home/CoursesSection/CoursesSection";
import FaqSection from "@/features/Home/FaqSection/FaqSection";
import FeaturesSection from "@/features/Home/FeaturesSection/FeaturesSection";
import FinalCtaSection from "@/features/Home/FinalCtaSection/FinalCtaSection";
import HeroSection from "@/features/Home/HeroSection/HeroSection";
import JourneySection from "@/features/Home/JourneySection/JourneySection";
import TeachersSection from "@/features/Home/TeachersSection/TeachersSection";
import TestimonialsSection from "@/features/Home/TestimonialsSection/TestimonialsSection";
import { ApiTeacher, TeachersApiResponse } from "@/app/[locale]/teachers/type";
import { ApiCourse, CoursesApiResponse } from "@/app/[locale]/courses/type";

const FEATURED_TEACHERS_COUNT = 6;
const FEATURED_COURSES_COUNT = 6;

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

async function getHomeSeo(lang: string): Promise<ApiSeoEntry | null> {
  try {
    const base = process.env.NEXT_PUBLIC_API_BASE_URL;
    const url = `${base}website/seo/home?lang=${lang}`;

    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) return null;

    const json: SeoApiResponse = await res.json();
    return json.data ?? null;
  } catch {
    return null;
  }
}

async function getFeaturedTeachers(lang: string): Promise<ApiTeacher[]> {
  try {
    const base = process.env.NEXT_PUBLIC_API_BASE_URL;
    const url = `${base}website/teachers?per_page=${FEATURED_TEACHERS_COUNT}&page=1&lang=${lang}`;

    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) throw new Error("Failed to fetch teachers");

    const json: TeachersApiResponse = await res.json();
    return json.data.data;
  } catch {
    return [];
  }
}

async function getFeaturedCourses(lang: string): Promise<ApiCourse[]> {
  try {
    const base = process.env.NEXT_PUBLIC_API_BASE_URL;
    const url = `${base}website/courses?per_page=${FEATURED_COURSES_COUNT}&page=1&lang=${lang}`;

    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) throw new Error("Failed to fetch courses");

    const json: CoursesApiResponse = await res.json();
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

  const seo = await getHomeSeo(locale);

  const title = seo?.title || siteName;
  const description = seo?.description || siteName;
  const keywords = seo?.keywords
    ? seo.keywords
        .split("،")
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
      url: `${baseUrl}/${locale}`,
      siteName,
      locale: isAr ? "ar_EG" : "en_US",
      type: "website",
    },

    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        ar: `${baseUrl}/ar`,
        en: `${baseUrl}/en`,
      },
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function Home() {
  const locale = await getLocale();

  const [teachers, courses] = await Promise.all([
    getFeaturedTeachers(locale),
    getFeaturedCourses(locale),
  ]);

  return (
    <main style={{ display: "flex", flexDirection: "column", gap: "75px" }}>
      <HeroSection />
      <FeaturesSection />
      <CoursesSection courses={courses} />
      <JourneySection />
      <TeachersSection teachers={teachers} />
      <TestimonialsSection />
      <FaqSection />
      <FinalCtaSection />
    </main>
  );
}
