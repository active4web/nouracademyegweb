"use client";

import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import { featuredCourses } from "@/data/courses.data";
import styles from "./CoursesSection.module.scss";
import CourseCard from "@/components/CourseCard/CourseCard";
import { ApiCourse } from "@/app/[locale]/courses/type";

export default function CoursesSection() {
    const t = useTranslations("Courses");
    const locale = useLocale() as "ar" | "en";
    const displayedCourses = featuredCourses.slice(0, 6);

    const apiCourses: ApiCourse[] = displayedCourses.map((course, idx) => ({
        id: course.id,
        title: course.title[locale] || course.title.ar,
        description: course.desc[locale] || course.desc.ar,
        video: course.introVideoUrl || null,
        thumbnail: course.image || null,
        image: course.image || null,
        target_level: course.level[locale] || course.level.ar,
        total_hours: course.totalHours[locale] || course.totalHours.ar,
        certificate_type: course.certificate[locale] || course.certificate.ar,
        teaching_language: course.language[locale] || course.language.ar,
        is_active: 1,
        category: {
            id: idx + 1,
            name: course.category[locale] || course.category.ar,
            is_active: 1,
            created_at: "",
        },
        features: course.features.map((f, fIdx) => ({
            id: fIdx + 1,
            title: f.title[locale] || f.title.ar,
            description: f.desc[locale] || f.desc.ar,
        })),
        students_count: 100,
        created_at: "",
    }));

    return (
        <section className={styles.coursesSection}>
            <div className="container">
                <div className={styles.headerWrapper}>
                    <div className={styles.sectionBadge}>
                        <span>{t("sectionBadge")}</span>
                    </div>
                    <h2 className={styles.sectionTitle}>{t("sectionTitle")}</h2>
                    <p className={styles.sectionDesc}>{t("sectionDesc")}</p>
                </div>

                <div className={styles.coursesGrid}>
                    {apiCourses.map((course) => (
                        <CourseCard course={course} key={course.id} />
                    ))}
                </div>

                <div className={styles.allCoursesWrapper}>
                    <Link href="/courses" className={styles.viewAllBtn}>
                        <span>{t("viewAllCourses")}</span>
                        <ArrowRight size={16} className={styles.arrowIcon} />
                    </Link>
                </div>
            </div>
        </section>
    );
}