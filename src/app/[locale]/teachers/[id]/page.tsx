import { notFound } from "next/navigation";
import { getLocale } from "next-intl/server";
import TeacherProfileHeader from "@/features/Teachers/TeacherProfile/TeacherProfileHeader/TeacherProfileHeader";
import TeacherAboutSection from "@/features/Teachers/TeacherProfile/TeacherAboutSection/TeacherAboutSection";
import TeacherIjazahsSection from "@/features/Teachers/TeacherProfile/TeacherIjazahsSection/TeacherIjazahsSection";
import TeacherReviewsSection from "@/features/Teachers/TeacherProfile/TeacherReviewsSection/TeacherReviewsSection";
import TeacherFinalCtaSection from "@/features/Teachers/TeacherProfile/TeacherFinalCtaSection/TeacherFinalCtaSection";
import { TeacherProfileApiResponse, ApiTeacherProfile } from "./type";

interface TeacherProfilePageProps {
  params: Promise<{
    locale: string;
    id: string;
  }>;
}

async function getTeacher(
  id: string,
  lang: string,
): Promise<ApiTeacherProfile | null> {
  try {
    const base = process.env.NEXT_PUBLIC_API_BASE_URL;
    const url = `${base}website/teachers/${id}?lang=${lang}`;

    const res = await fetch(url, { next: { revalidate: 3600 } });

    if (!res.ok) {
      return null;
    }

    const json: TeacherProfileApiResponse = await res.json();

    if (json.status !== "Success" || !json.data) {
      return null;
    }

    return json.data;
  } catch {
    return null;
  }
}

export default async function TeacherProfilePage({
  params,
}: TeacherProfilePageProps) {
  const { id } = await params;
  const locale = await getLocale();

  const teacher = await getTeacher(id, locale);

  if (!teacher) {
    notFound();
  }

  return (
    <main style={{ display: "flex", flexDirection: "column", gap: "75px" }}>
      <TeacherProfileHeader teacher={teacher} />
      <TeacherAboutSection teacher={teacher} />
      <TeacherIjazahsSection teacher={teacher} />
      <TeacherReviewsSection teacher={teacher} />

      <TeacherFinalCtaSection teacher={teacher} />
    </main>
  );
}
