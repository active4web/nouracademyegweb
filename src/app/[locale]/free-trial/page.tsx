import FreeTrialHeroSection from "@/features/FreeTrial/FreeTrialHeroSection/FreeTrialHeroSection";
import FreeTrialFormSection from "@/features/FreeTrial/FreeTrialFormSection/FreeTrialFormSection";
import FreeTrialFinalCtaSection from "@/features/FreeTrial/FreeTrialFinalCtaSection/FreeTrialFinalCtaSection";

export default function FreeTrialPage() {
    return (
        <main style={{ display: "flex", flexDirection: "column", gap: "75px" }}>
            <FreeTrialHeroSection />
            <FreeTrialFormSection />
            <FreeTrialFinalCtaSection />
        </main>
    );
}
