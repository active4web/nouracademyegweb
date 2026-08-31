import ContactContentSection from "@/features/Contact/ContactContentSection/ContactContentSection";
import ContactFinalCtaSection from "@/features/Contact/ContactFinalCtaSection/ContactFinalCtaSection";
import ContactHeroSection from "@/features/Contact/ContactHeroSection/ContactHeroSection";

export default function page() {
    return (
        <main style={{ display: "flex", flexDirection: "column", gap: "75px" }}>
            <ContactHeroSection />
            <ContactContentSection />
            <ContactFinalCtaSection />
        </main>
    )
}
