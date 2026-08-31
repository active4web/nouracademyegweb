import BlogFinalCtaSection from '@/features/Blog/BlogFinalCtaSection/BlogFinalCtaSection'
import BlogHeroSection from '@/features/Blog/BlogHeroSection/BlogHeroSection'
import BlogListingSection from '@/features/Blog/BlogListingSection/BlogListingSection'

export default function page() {
    return (
        <main style={{ display: "flex", flexDirection: "column", gap: "75px" }}>
            <BlogHeroSection />
            <BlogListingSection />
            <BlogFinalCtaSection />
        </main>
    )
}
