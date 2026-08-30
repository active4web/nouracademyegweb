import AboutCtaSection from '@/features/About/AboutCtaSection/AboutCtaSection'
import AboutGallerySection from '@/features/About/AboutGallerySection/AboutGallerySection'
import AboutHeroSection from '@/features/About/AboutHeroSection/AboutHeroSection'
import AboutMethodologySection from '@/features/About/AboutMethodologySection/AboutMethodologySection'
import AboutVisionValuesSection from '@/features/About/AboutVisionValuesSection/AboutVisionValuesSection'

export default function page() {
    return (
        <main style={{ display: "flex", flexDirection: "column", gap: "75px" }}>
            <AboutHeroSection />
            <AboutVisionValuesSection />
            <AboutMethodologySection />
            <AboutGallerySection />
            <AboutCtaSection />
        </main>
    )
}
