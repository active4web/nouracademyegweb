import { getLocale } from "next-intl/server";
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

const DEFAULT_PER_PAGE = 4;

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

    const res = await fetch(url, { next: { revalidate: 3600 } });

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
