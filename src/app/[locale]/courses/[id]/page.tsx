import { notFound } from "next/navigation";
import { getLocale } from "next-intl/server";
import CourseDetailsHeroSection from "@/features/Courses/CoursesDetails/CourseDetailsHeroSection/CourseDetailsHeroSection";
import CourseOutcomesFeaturesSection from "@/features/Courses/CoursesDetails/CourseOutcomesFeaturesSection/CourseOutcomesFeaturesSection";
// import CourseCurriculumSection from "@/features/Courses/CoursesDetails/CourseCurriculumSection/CourseCurriculumSection";
import CoursePrerequisitesSidebar from "@/features/Courses/CoursesDetails/CoursePrerequisitesSidebar/CoursePrerequisitesSidebar";
import CourseFinalCtaSection from "@/features/Courses/CoursesDetails/CourseFinalCtaSection/CourseFinalCtaSection";
import { CourseDetailApiResponse, ApiCourseDetail } from "./type";

interface CourseDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

async function getCourse(
  id: string,
  lang: string,
): Promise<ApiCourseDetail | null> {
  try {
    const base = process.env.NEXT_PUBLIC_API_BASE_URL;
    const url = `${base}website/courses/${id}?lang=${lang}`;

    const res = await fetch(url, { next: { revalidate: 3600 } });

    if (!res.ok) {
      return null;
    }

    const json: CourseDetailApiResponse = await res.json();

    if (json.status !== "Success" || !json.data) {
      return null;
    }

    return json.data;
  } catch {
    return null;
  }
}

export default async function CourseDetailsPage({
  params,
}: CourseDetailsPageProps) {
  const { id } = await params;
  const locale = await getLocale();

  const course = await getCourse(id, locale);

  if (!course) {
    notFound();
  }

  return (
    <main style={{ display: "flex", flexDirection: "column", gap: "75px" }}>
      <CourseDetailsHeroSection course={course} />
      <CourseOutcomesFeaturesSection course={course} />
      {/* <CourseCurriculumSection course={course} /> */}
      <CoursePrerequisitesSidebar course={course} />
      <CourseFinalCtaSection course={course} />
    </main>
  );
}
