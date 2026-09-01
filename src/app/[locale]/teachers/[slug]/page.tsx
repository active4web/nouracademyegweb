import { notFound } from "next/navigation";
import { featuredTeachers } from "@/data/teachers.data";
import TeacherProfileHeader from "@/features/Teachers/TeacherProfile/TeacherProfileHeader/TeacherProfileHeader";
import TeacherAboutSection from "@/features/Teachers/TeacherProfile/TeacherAboutSection/TeacherAboutSection";
import TeacherIjazahsSection from "@/features/Teachers/TeacherProfile/TeacherIjazahsSection/TeacherIjazahsSection";
import TeacherReviewsSection from "@/features/Teachers/TeacherProfile/TeacherReviewsSection/TeacherReviewsSection";
import TeacherFinalCtaSection from "@/features/Teachers/TeacherProfile/TeacherFinalCtaSection/TeacherFinalCtaSection";

interface TeacherProfilePageProps {
    params: Promise<{
        locale: string;
        slug: string;
    }>;
}

export default async function TeacherProfilePage({ params }: TeacherProfilePageProps) {
    const { slug } = await params;
    const teacher = featuredTeachers.find((item) => item.id === slug);

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