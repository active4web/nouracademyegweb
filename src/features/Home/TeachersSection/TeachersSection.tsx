"use client";

import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import {
    Award,
    BookOpenCheck,
    Users,
    Briefcase,
    ArrowRight
} from "lucide-react";
import { featuredTeachers } from "@/data/teachers.data";
import styles from "./TeachersSection.module.scss";

export default function TeachersSection() {
    const t = useTranslations("Teachers");
    const locale = useLocale() as "ar" | "en";

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
                    {featuredTeachers.map((teacher) => (
                        <div
                            key={teacher.id}
                            className={styles.teacherCard}
                        >
                            <div className={styles.imageContainer}>
                                <div className={styles.imageRing}>
                                    <Image
                                        src={teacher.image}
                                        alt={teacher.name[locale] || teacher.name.ar}
                                        fill
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                        className={styles.teacherImg}
                                    />
                                </div>
                                <div className={styles.categoryBadge}>
                                    {teacher.category[locale] || teacher.category.ar}
                                </div>
                            </div>

                            <div className={styles.cardContent}>
                                <h3 className={styles.teacherName}>
                                    {teacher.name[locale] || teacher.name.ar}
                                </h3>
                                <p className={styles.teacherRole}>
                                    {teacher.role[locale] || teacher.role.ar}
                                </p>

                                <div className={styles.quickStats}>
                                    <div className={styles.statPill}>
                                        <Briefcase size={14} />
                                        <span>
                                            {teacher.experienceYears}+ {t("experienceLabel")}
                                        </span>
                                    </div>
                                    <div className={styles.statPill}>
                                        <Users size={14} />
                                        <span>
                                            {teacher.studentsCount}+ {t("studentsCount")}
                                        </span>
                                    </div>
                                </div>

                                <div className={styles.ijazahBox}>
                                    <div className={styles.ijazahHeader}>
                                        <Award size={15} />
                                        <span>{t("ijazahLabel")}</span>
                                    </div>
                                    <p className={styles.ijazahText}>
                                        {teacher.ijazah[locale] || teacher.ijazah.ar}
                                    </p>
                                </div>

                                <div className={styles.cardFooter}>
                                    <Link
                                        href={`/teachers/${teacher.id}`}
                                        className={styles.profileBtn}
                                    >
                                        <span>{t("viewProfile")}</span>
                                        <ArrowRight size={15} className={styles.arrowIcon} />
                                    </Link>
                                </div>
                            </div>
                        </div>
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