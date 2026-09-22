import { getLocale } from "next-intl/server";
import { Metadata } from "next";
import TeacherJoinBanner from "@/features/Teachers/TeacherJoinBanner/TeacherJoinBanner";
import TeachersFinalCtaSection from "@/features/Teachers/TeachersFinalCtaSection/TeachersFinalCtaSection";
import TeachersGridSection from "@/features/Teachers/TeachersGridSection/TeachersGridSection";
import TeachersHeroSection from "@/features/Teachers/TeachersHeroSection/TeachersHeroSection";
import TeachersStandardsSection from "@/features/Teachers/TeachersStandardsSection/TeachersStandardsSection";
import CategoryFilter from "@/components/CategoryFilter/CategoryFilter";
import { TeachersApiResponse } from "./type";

interface TeachersPageProps {
  searchParams?: Promise<{
    category?: string;
    page?: string;
    per_page?: string;
  }>;
}

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

const DEFAULT_PER_PAGE = 4;

async function getTeachersSeo(lang: string): Promise<ApiSeoEntry | null> {
  try {
    const base = process.env.NEXT_PUBLIC_API_BASE_URL;
    const url = `${base}website/seo/teachers?lang=${lang}`;

    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) return null;

    const json: SeoApiResponse = await res.json();
    return json.data ?? null;
  } catch {
    return null;
  }
}

async function getTeachers(
  lang: string,
  categoryId: string,
  page: number,
  perPage: number,
): Promise<TeachersApiResponse> {
  try {
    const base = process.env.NEXT_PUBLIC_API_BASE_URL;
    const categoryParam = categoryId && categoryId !== "all" ? categoryId : "";
    const url = `${base}website/teachers?category_id=${categoryParam}&per_page=${perPage}&page=${page}&lang=${lang}`;

    const res = await fetch(url, { cache: "no-store" });

    if (!res.ok) {
      throw new Error("Failed to fetch teachers");
    }

    return await res.json();
  } catch {
    return {
      status: "error",
      message: "error",
      data: {
        data: [],
        pagination: {
          total: 0,
          per_page: perPage,
          current_page: 1,
          last_page: 1,
          from: 0,
          to: 0,
        },
      },
    };
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

  const seo = await getTeachersSeo(locale);

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
      url: `${baseUrl}/${locale}/teachers`,
      siteName,
      locale: isAr ? "ar_EG" : "en_US",
      type: "website",
    },

    alternates: {
      canonical: `${baseUrl}/${locale}/teachers`,
      languages: {
        ar: `${baseUrl}/ar/teachers`,
        en: `${baseUrl}/en/teachers`,
      },
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function TeachersPage({
  searchParams,
}: TeachersPageProps) {
  const resolvedParams = searchParams ? await searchParams : {};
  const selectedCategory = resolvedParams.category ?? "all";
  const currentPage = Number(resolvedParams.page) || 1;
  const perPage = Number(resolvedParams.per_page) || DEFAULT_PER_PAGE;

  const locale = await getLocale();

  const teachersData = await getTeachers(
    locale,
    selectedCategory,
    currentPage,
    perPage,
  );
  const teachers = teachersData.data.data;
  const pagination = teachersData.data.pagination;

  return (
    <main style={{ display: "flex", flexDirection: "column", gap: "75px" }}>
      <TeachersHeroSection />
      <TeachersGridSection
        selectedCategory={selectedCategory}
        teachers={teachers}
        pagination={pagination}
        perPage={perPage}
        categoryFilter={
          <CategoryFilter
            selectedCategory={selectedCategory}
            basePath="/teachers"
          />
        }
      />
      <TeachersStandardsSection />
      <TeacherJoinBanner />
      <TeachersFinalCtaSection />
    </main>
  );
}
