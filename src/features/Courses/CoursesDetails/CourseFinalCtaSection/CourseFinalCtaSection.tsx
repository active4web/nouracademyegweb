"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
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
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3 }}
                    className={styles.ctaCard}
                >
                    {/* Decorative Background Elements */}
                    <div className={styles.decorativeCircleTop} />
                    <div className={styles.decorativeCircleBottom} />

                    <div className={styles.ctaContent}>
                        <div className={styles.badge}>
                            <Sparkles size={14} />
                            <span>{t("badge")}</span>
                        </div>

                        <h2 className={styles.title}>{t("title")}</h2>
                        <p className={styles.desc}>{t("desc")}</p>

                        <div className={styles.highlightsRow}>
                            <div className={styles.highlightItem}>
                                <ShieldCheck size={16} />
                                <span>{t("highlights.free")}</span>
                            </div>
                            <div className={styles.highlightItem}>
                                <Award size={16} />
                                <span>{t("highlights.azhar")}</span>
                            </div>
                            <div className={styles.highlightItem}>
                                <BookOpen size={16} />
                                <span>{t("highlights.customPlan")}</span>
                            </div>
                        </div>

                        <div className={styles.buttonsRow}>
                            <Link
                                href={`/free-trial?course=${course.id}`}
                                className={styles.primaryBtn}
                            >
                                <span>{t("bookBtn")}</span>
                                <ArrowRight size={16} className={styles.arrowIcon} />
                            </Link>

                            <Link href="/courses" className={styles.secondaryBtn}>
                                <Compass size={16} />
                                <span>{t("browseCoursesBtn")}</span>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}