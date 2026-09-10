import { notFound } from "next/navigation";
import { featuredPackages } from "@/data/packages.data";
import PackageApplyHeroSection from "@/features/Packages/PackageApply/PackageApplyHeroSection/PackageApplyHeroSection";
import PackageApplyFormSection from "@/features/Packages/PackageApply/PackageApplyFormSection/PackageApplyFormSection";
import PackageApplyFinalCtaSection from "@/features/Packages/PackageApply/PackageApplyFinalCtaSection/PackageApplyFinalCtaSection";

interface PackageApplyPageProps {
    params: Promise<{
        id: string;
    }>;
    searchParams: Promise<{
        currency?: string;
    }>;
}

export default async function PackageApplyPage({ params, searchParams }: PackageApplyPageProps) {
    const { id } = await params;
    const { currency } = await searchParams;

    const selectedPackage = featuredPackages.find((pkg) => pkg.id === id);

    if (!selectedPackage) {
        notFound();
    }

    return (
        <main style={{ display: "flex", flexDirection: "column", gap: "75px" }}>
            <PackageApplyHeroSection />
            <PackageApplyFormSection selectedPackage={selectedPackage} initialCurrency={currency} />
            <PackageApplyFinalCtaSection />
        </main>
    );
}