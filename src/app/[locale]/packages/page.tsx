import { getLocale } from "next-intl/server";
// import PackagesComparisonSection from '@/features/Packages/PackagesComparisonSection/PackagesComparisonSection'
import PackagesFaqSection from "@/features/Packages/PackagesFaqSection/PackagesFaqSection";
import PackagesFinalCtaSection from "@/features/Packages/PackagesFinalCtaSection/PackagesFinalCtaSection";
import PackagesGridSection from "@/features/Packages/PackagesGridSection/PackagesGridSection";
import PackagesHeroSection from "@/features/Packages/PackagesHeroSection/PackagesHeroSection";
import {
  ApiPackage,
  ApiCurrency,
  PackagesApiResponse,
  CurrenciesApiResponse,
} from "./type";

async function getPackages(lang: string): Promise<ApiPackage[]> {
  try {
    const base = process.env.NEXT_PUBLIC_API_BASE_URL;
    const url = `${base}website/packages?lang=${lang}`;

    const res = await fetch(url, { next: { revalidate: 3600 } });

    if (!res.ok) {
      return [];
    }

    const json: PackagesApiResponse = await res.json();

    if (json.status !== "Success") {
      return [];
    }

    return json.data.data;
  } catch {
    return [];
  }
}

async function getCurrencies(lang: string): Promise<ApiCurrency[]> {
  try {
    const base = process.env.NEXT_PUBLIC_API_BASE_URL;
    const url = `${base}website/currencies?lang=${lang}`;

    const res = await fetch(url, { next: { revalidate: 3600 } });

    if (!res.ok) {
      return [];
    }

    const json: CurrenciesApiResponse = await res.json();

    if (json.status !== "Success") {
      return [];
    }

    return json.data.data;
  } catch {
    return [];
  }
}

export default async function PackagesPage() {
  const locale = await getLocale();

  const [packages, currencies] = await Promise.all([
    getPackages(locale),
    getCurrencies(locale),
  ]);

  return (
    <main style={{ display: "flex", flexDirection: "column", gap: "75px" }}>
      <PackagesHeroSection />
      <PackagesGridSection packages={packages} currencies={currencies} />
      {/* <PackagesComparisonSection /> */}
      <PackagesFaqSection />
      <PackagesFinalCtaSection />
    </main>
  );
}
