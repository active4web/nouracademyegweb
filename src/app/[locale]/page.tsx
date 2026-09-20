// import CoursesSection from "@/features/Home/CoursesSection/CoursesSection";
import FaqSection from "@/features/Home/FaqSection/FaqSection";
import FeaturesSection from "@/features/Home/FeaturesSection/FeaturesSection";
import FinalCtaSection from "@/features/Home/FinalCtaSection/FinalCtaSection";
import HeroSection from "@/features/Home/HeroSection/HeroSection";
import JourneySection from "@/features/Home/JourneySection/JourneySection";
// import TeachersSection from "@/features/Home/TeachersSection/TeachersSection";
import TestimonialsSection from "@/features/Home/TestimonialsSection/TestimonialsSection";

export default function Home() {
    return (
        <main style={{ display: "flex", flexDirection: "column", gap: "75px" }}>
            <HeroSection />
            <FeaturesSection />
            {/* <CoursesSection /> */}
            <JourneySection />
            {/* <TeachersSection /> */}
            <TestimonialsSection />
            <FaqSection />
            <FinalCtaSection />
        </main>
    );
}
