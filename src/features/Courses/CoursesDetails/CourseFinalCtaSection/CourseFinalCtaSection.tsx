"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Sparkles, ArrowRight, ShieldCheck, Award, BookOpen, Compass } from "lucide-react";
import { type Course } from "@/data/courses.data";
import styles from "./CourseFinalCtaSection.module.scss";

interface CourseFinalCtaSectionProps {
    course: Course;
}

export default function CourseFinalCtaSection({ course }: CourseFinalCtaSectionProps) {
    const t = useTranslations("CourseDetails.finalCta");

    return (
        <section className={styles.finalCtaSection}>
            <div className="container">
                <div className={styles.bannerCard}>
                    {/* Floating Calligraphy Letters */}
                    <div className={styles.calligraphyPattern} aria-hidden="true">
                        <span className={styles.letterFloating}>اقْرَأْ</span>
                        <span className={styles.letterFloating}>نٓ</span>
                        <span className={styles.letterFloating}>بِسْمِ</span>
                        <span className={styles.letterFloating}>عَلَّمَ</span>
                        <span className={styles.letterFloating}>الْقُرْآنَ</span>
                        <span className={styles.letterFloating}>قٓ</span>
                        <span className={styles.letterFloating}>وَرَتِّلِ</span>
                    </div>

                    <div className={styles.badgeWrapper}>
                        <div className={styles.badge}>
                            <Sparkles size={15} />
                            <span>{t("badge")}</span>
                        </div>
                    </div>

                    <h2 className={styles.bannerTitle}>{t("title")}</h2>
                    <p className={styles.bannerDesc}>{t("desc")}</p>

                    <div className={styles.actions}>
                        <Link
                            href={`/free-trial?course=${course.id}`}
                            className={styles.primaryCtaBtn}
                        >
                            <span>{t("bookBtn")}</span>
                            <ArrowRight size={16} className={styles.arrowIcon} />
                        </Link>

                        <Link href="/courses" className={styles.secondaryCtaBtn}>
                            <Compass size={16} />
                            <span>{t("browseCoursesBtn")}</span>
                        </Link>
                    </div>

                    <div className={styles.guaranteesRow}>
                        <div className={styles.guaranteeItem}>
                            <ShieldCheck size={16} />
                            <span>{t("highlights.free")}</span>
                        </div>
                        <div className={styles.guaranteeItem}>
                            <Award size={16} />
                            <span>{t("highlights.azhar")}</span>
                        </div>
                        <div className={styles.guaranteeItem}>
                            <BookOpen size={16} />
                            <span>{t("highlights.customPlan")}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}