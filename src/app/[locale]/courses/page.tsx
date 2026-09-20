import { getLocale } from "next-intl/server";
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

const DEFAULT_PER_PAGE = 6;

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

    const res = await fetch(url, { next: { revalidate: 3600 } });

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
        pagination: { total: 0, per_page: perPage, current_page: 1, last_page: 1, from: 0, to: 0 },
      },
    };
  }
}

export default async function CoursesPage({ searchParams }: CoursesPageProps) {
  const resolvedParams = searchParams ? await searchParams : {};
  const selectedCategory = resolvedParams.category ?? "all";
  const currentPage = Number(resolvedParams.page) || 1;
  const perPage = Number(resolvedParams.per_page) || DEFAULT_PER_PAGE;
  const searchQuery = resolvedParams.q ?? "";

  const locale = await getLocale();

  const coursesData = await getCourses(locale, selectedCategory, currentPage, perPage, searchQuery);
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
          <CategoryFilter selectedCategory={selectedCategory} basePath="/courses" />
        }
      />
      <CoursesFinalCtaSection />
    </main>
  );
}