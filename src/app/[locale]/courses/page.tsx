import CoursesFinalCtaSection from "@/features/Courses/CoursesFinalCtaSection/CoursesFinalCtaSection";
import CoursesHeroSection from "@/features/Courses/CoursesHeroSection/CoursesHeroSection";
import CoursesListingSection from "@/features/Courses/CoursesListingSection/CoursesListingSection";

export default function page() {
    return (
        <main style={{ display: "flex", flexDirection: "column", gap: "75px" }}>
            <CoursesHeroSection />
            <CoursesListingSection />
            <CoursesFinalCtaSection />
        </main>
    )
}
