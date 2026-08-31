import TeacherJoinBanner from "@/features/Teachers/TeacherJoinBanner/TeacherJoinBanner";
import TeachersFinalCtaSection from "@/features/Teachers/TeachersFinalCtaSection/TeachersFinalCtaSection";
import TeachersGridSection from "@/features/Teachers/TeachersGridSection/TeachersGridSection";
import TeachersHeroSection from "@/features/Teachers/TeachersHeroSection/TeachersHeroSection";
import TeachersStandardsSection from "@/features/Teachers/TeachersStandardsSection/TeachersStandardsSection";

export default function page() {
    return (
        <main style={{ display: "flex", flexDirection: "column", gap: "75px" }}>
            <TeachersHeroSection />
            <TeachersGridSection />
            <TeachersStandardsSection />
            <TeacherJoinBanner />
            <TeachersFinalCtaSection />
        </main>
    )
}
