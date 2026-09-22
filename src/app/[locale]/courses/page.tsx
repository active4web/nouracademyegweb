import { getLocale } from "next-intl/server";
import { Metadata } from "next";
import CoursesFinalCtaSection from "@/features/Courses/CoursesFinalCtaSection/CoursesFinalCtaSection";
import CoursesHeroSection from "@/features/Courses/CoursesHeroSection/CoursesHeroSection";
import CoursesListingSection from "@/features/Courses/CoursesListingSection/CoursesListingSection";
import CategoryFilter from "@/components/CategoryFilter/CategoryFilter";
import { CoursesApiResponse } from "./type";

interface CoursesPageProps {
  searchParams?: Promise<{
    category?: string;
    page?: string;
    per_page?: string;
    q?: string;
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

const DEFAULT_PER_PAGE = 6;

async function getCoursesSeo(lang: string): Promise<ApiSeoEntry | null> {
  try {
    const base = process.env.NEXT_PUBLIC_API_BASE_URL;
    const url = `${base}website/seo/courses?lang=${lang}`;

    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) return null;

    const json: SeoApiResponse = await res.json();
    return json.data ?? null;
  } catch {
    return null;
  }
}

async function getCourses(
  lang: string,
  categoryId: string,
  page: number,
  perPage: number,
  search: string,
): Promise<CoursesApiResponse> {
  try {
    const base = process.env.NEXT_PUBLIC_API_BASE_URL;
    const categoryParam = categoryId && categoryId !== "all" ? categoryId : "";
    const url = `${base}website/courses?category_id=${categoryParam}&per_page=${perPage}&page=${page}&lang=${lang}&search=${encodeURIComponent(search)}`;

    const res = await fetch(url, { cache: "no-store" });

    if (!res.ok) {
      throw new Error("Failed to fetch courses");
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

  const seo = await getCoursesSeo(locale);

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
      url: `${baseUrl}/${locale}/courses`,
      siteName,
      locale: isAr ? "ar_EG" : "en_US",
      type: "website",
    },

    alternates: {
      canonical: `${baseUrl}/${locale}/courses`,
      languages: {
        ar: `${baseUrl}/ar/courses`,
        en: `${baseUrl}/en/courses`,
      },
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function CoursesPage({ searchParams }: CoursesPageProps) {
  const resolvedParams = searchParams ? await searchParams : {};
  const selectedCategory = resolvedParams.category ?? "all";
  const currentPage = Number(resolvedParams.page) || 1;
  const perPage = Number(resolvedParams.per_page) || DEFAULT_PER_PAGE;
  const searchQuery = resolvedParams.q ?? "";

  const locale = await getLocale();

  const coursesData = await getCourses(
    locale,
    selectedCategory,
    currentPage,
    perPage,
    searchQuery,
  );
  const courses = coursesData.data.data;
  const pagination = coursesData.data.pagination;

  return (
    <main style={{ display: "flex", flexDirection: "column", gap: "75px" }}>
      <CoursesHeroSection />
      <CoursesListingSection
        selectedCategory={selectedCategory}
        searchQuery={searchQuery}
        courses={courses}
        pagination={pagination}
        perPage={perPage}
        categoryFilter={
          <CategoryFilter
            selectedCategory={selectedCategory}
            basePath="/courses"
          />
        }
      />
      <CoursesFinalCtaSection />
    </main>
  );
}
