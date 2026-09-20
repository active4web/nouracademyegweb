"use client";

import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { BookOpenCheck, ArrowRight } from "lucide-react";
import { featuredTeachers } from "@/data/teachers.data";
import TeacherCard from "@/components/TeacherCard/TeacherCard";
import styles from "./TeachersSection.module.scss";
import { ApiTeacher } from "@/app/[locale]/teachers/type";

export default function TeachersSection() {
    const t = useTranslations("Teachers");
    const locale = useLocale() as "ar" | "en";

    const apiTeachers: ApiTeacher[] = featuredTeachers.map((teacher, idx) => ({
        id: teacher.id,
        display_name: teacher.name[locale] || teacher.name.ar,
        role: teacher.role[locale] || teacher.role.ar,
        image: teacher.image,
        experience_years: teacher.experienceYears,
        is_verified: 1,
        categories: [
            {
                id: idx + 1,
                name: teacher.category[locale] || teacher.category.ar,
                is_active: 1,
                created_at: "",
            },
        ],
        rating_avg: teacher.rating,
        reviews_count: teacher.reviewsCount,
        students_count: teacher.studentsCount,
    }));

    return (
        <section className={styles.teachersSection}>
            <div className="container">
                <div className={styles.headerWrapper}>
                    <div className={styles.sectionBadge}>
                        <span>{t("sectionBadge")}</span>
                    </div>
                    <h2 className={styles.sectionTitle}>{t("sectionTitle")}</h2>
                    <p className={styles.sectionDesc}>{t("sectionDesc")}</p>
                </div>

                <div className={styles.teachersGrid}>
                    {apiTeachers.map((teacher) => (
                        <TeacherCard key={teacher.id} teacher={teacher} showApplyBtn={false} />
                    ))}
                </div>

                <div className={styles.viewAllWrapper}>
                    <Link href="/teachers" className={styles.allTeachersBtn}>
                        <BookOpenCheck size={17} />
                        <span>{t("viewAllTeachers")}</span>
                        <ArrowRight size={15} className={styles.arrowIcon} />
                    </Link>
                </div>
            </div>
        </section>
    );
}