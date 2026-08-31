import PackagesComparisonSection from '@/features/Packages/PackagesComparisonSection/PackagesComparisonSection'
import PackagesFaqSection from '@/features/Packages/PackagesFaqSection/PackagesFaqSection'
import PackagesFinalCtaSection from '@/features/Packages/PackagesFinalCtaSection/PackagesFinalCtaSection'
import PackagesGridSection from '@/features/Packages/PackagesGridSection/PackagesGridSection'
import PackagesHeroSection from '@/features/Packages/PackagesHeroSection/PackagesHeroSection'

export default function page() {
    return (
        <main style={{ display: "flex", flexDirection: "column", gap: "75px" }}>
            <PackagesHeroSection />
            <PackagesGridSection />
            <PackagesComparisonSection />
            <PackagesFaqSection />
            <PackagesFinalCtaSection />
        </main>
    )
}
