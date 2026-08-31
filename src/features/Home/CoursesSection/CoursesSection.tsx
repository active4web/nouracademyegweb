"use client";

import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Users, Clock, ArrowRight } from "lucide-react";
import { featuredCourses } from "@/data/courses.data";
import styles from "./CoursesSection.module.scss";

export default function CoursesSection() {
    const t = useTranslations("Courses");
    const locale = useLocale() as "ar" | "en";

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
                    {featuredCourses.map((course) => (
                        <div
                            key={course.id}
                            className={styles.courseCard}
                        >
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={course.image}
                                    alt={course.title[locale] || course.title.ar}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                    className={styles.cardImg}
                                />
                                <div className={styles.categoryBadge}>
                                    {course.category[locale] || course.category.ar}
                                </div>
                            </div>

                            <div className={styles.cardContent}>
                                <h3 className={styles.courseTitle}>
                                    {course.title[locale] || course.title.ar}
                                </h3>
                                <p className={styles.courseDesc}>
                                    {course.desc[locale] || course.desc.ar}
                                </p>

                                <div className={styles.metaInfo}>
                                    <div className={styles.metaRow}>
                                        <Users size={15} />
                                        <span>{course.targetAudience[locale] || course.targetAudience.ar}</span>
                                    </div>
                                    <div className={styles.metaRow}>
                                        <Clock size={15} />
                                        <span>{course.duration[locale] || course.duration.ar}</span>
                                    </div>
                                </div>

                                <div className={styles.cardFooter}>
                                    <Link href={``} className={styles.detailsLink}>
                                        <span>{t("viewDetails")}</span>
                                        <ArrowRight size={15} className={styles.arrowIcon} />
                                    </Link>
                                </div>
                            </div>
                        </div>
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