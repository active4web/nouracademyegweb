import { notFound } from "next/navigation";
import { getLocale } from "next-intl/server";
import { cookies } from "next/headers";
import PackageApplyHeroSection from "@/features/Packages/PackageApply/PackageApplyHeroSection/PackageApplyHeroSection";
import PackageApplyFormSection from "@/features/Packages/PackageApply/PackageApplyFormSection/PackageApplyFormSection";
import PackageApplyFinalCtaSection from "@/features/Packages/PackageApply/PackageApplyFinalCtaSection/PackageApplyFinalCtaSection";
import { ApiPackageDetail, PackageDetailApiResponse } from "./type";
import { ApiCurrency, CurrenciesApiResponse } from "../../type";
import {
  ApiProfile,
  ProfileApiResponse,
  TOKEN_COOKIE_KEY,
} from "@/features/Auth/AuthStore";

interface PackageApplyPageProps {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ currency?: string }>;
}

async function getPackage(
  id: string,
  lang: string,
): Promise<ApiPackageDetail | null> {
  try {
    const base = process.env.NEXT_PUBLIC_API_BASE_URL;
    const url = `${base}website/packages/${id}?lang=${lang}`;

    const res = await fetch(url, { next: { revalidate: 3600 } });

    if (!res.ok) {
      return null;
    }

    const json: PackageDetailApiResponse = await res.json();

    if (json.status !== "Success") {
      return null;
    }

    return json.data;
  } catch {
    return null;
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

async function getProfile(
  token: string | undefined,
): Promise<ApiProfile | null> {
  if (!token) return null;

  try {
    const base = process.env.NEXT_PUBLIC_API_BASE_URL;
    const res = await fetch(`${base}website/profile`, {
      headers: { Authorization: `Bearer ${token}` },
      cache: "no-store",
    });

    if (!res.ok) return null;

    const json: ProfileApiResponse = await res.json();

    if (json.status !== "Success") return null;

    return json.data;
  } catch {
    return null;
  }
}

export default async function PackageApplyPage({
  params,
  searchParams,
}: PackageApplyPageProps) {
  const { id } = await params;
  const { currency } = await searchParams;
  const locale = await getLocale();
  const cookieStore = await cookies();
  const token = cookieStore.get(TOKEN_COOKIE_KEY)?.value;

  const [selectedPackage, currencies, profile] = await Promise.all([
    getPackage(id, locale),
    getCurrencies(locale),
    getProfile(token),
  ]);

  if (!selectedPackage) {
    notFound();
  }

  return (
    <main style={{ display: "flex", flexDirection: "column", gap: "75px" }}>
      <PackageApplyHeroSection />
      <PackageApplyFormSection
        selectedPackage={selectedPackage}
        currencies={currencies}
        initialCurrency={currency}
        profile={profile}
      />
      <PackageApplyFinalCtaSection />
    </main>
  );
}
