import { notFound } from "next/navigation";
import { allCoursesData } from "@/data/courses.data";
import CourseDetailsHeroSection from "@/features/Courses/CoursesDetails/CourseDetailsHeroSection/CourseDetailsHeroSection";
import CourseOutcomesFeaturesSection from "@/features/Courses/CoursesDetails/CourseOutcomesFeaturesSection/CourseOutcomesFeaturesSection";
import CourseCurriculumSection from "@/features/Courses/CoursesDetails/CourseCurriculumSection/CourseCurriculumSection";
import CoursePrerequisitesSidebar from "@/features/Courses/CoursesDetails/CoursePrerequisitesSidebar/CoursePrerequisitesSidebar";
import CourseFinalCtaSection from "@/features/Courses/CoursesDetails/CourseFinalCtaSection/CourseFinalCtaSection";

interface CourseDetailsPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function CourseDetailsPage({ params }: CourseDetailsPageProps) {
    const { slug } = await params;

    const course = allCoursesData.find((item) => item.id === slug);

    if (!course) {
        notFound();
    }

    return (
        <main style={{ display: "flex", flexDirection: "column", gap: "75px" }}>
            <CourseDetailsHeroSection course={course} />
            <CourseOutcomesFeaturesSection course={course} />
            <CourseCurriculumSection course={course} />
            <CoursePrerequisitesSidebar course={course} />
            <CourseFinalCtaSection course={course} />
        </main>
    );
}