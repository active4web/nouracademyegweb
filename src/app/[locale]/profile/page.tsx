import { cookies } from "next/headers";
import { redirect } from "@/i18n/navigation";
import { getLocale } from "next-intl/server";
import { TOKEN_COOKIE_KEY } from "@/features/Auth/AuthStore";
import UserProfileHeader from "@/features/Profile/UserProfileHeader/UserProfileHeader";
import UserContactInfoSection from "@/features/Profile/UserContactInfoSection/UserContactInfoSection";
import UserGuardianInfoSection from "@/features/Profile/UserGuardianInfoSection/UserGuardianInfoSection";
import UserSubscriptionsSection from "@/features/Profile/UserSubscriptionsSection/UserSubscriptionsSection";
import { ApiUserProfile, UserProfileApiResponse } from "./type";

async function getProfile(): Promise<ApiUserProfile | null> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get(TOKEN_COOKIE_KEY)?.value;

    if (!token) {
      return null;
    }

    const base = process.env.NEXT_PUBLIC_API_BASE_URL;
    const res = await fetch(`${base}website/profile`, {
      headers: { Authorization: `Bearer ${token}` },
      cache: "no-store",
    });

    if (!res.ok) {
      return null;
    }

    const json: UserProfileApiResponse = await res.json();

    if (json.status !== "Success" || !json.data) {
      return null;
    }

    return json.data;
  } catch {
    return null;
  }
}

export default async function ProfilePage() {
  const locale = await getLocale();
  const profile = await getProfile();

  if (!profile) {
    redirect({ href: "/login", locale });
    return null;
  }

  return (
    <main style={{ display: "flex", flexDirection: "column", gap: "60px" }}>
      <UserProfileHeader user={profile} />
      <UserContactInfoSection user={profile} />
      <UserGuardianInfoSection user={profile} />
      <UserSubscriptionsSection subscriptions={profile.subscriptions} />
    </main>
  );
}
