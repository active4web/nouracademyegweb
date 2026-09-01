"use client";

import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import {
    CheckCircle2,
    ClipboardCheck,
    MessageCircle,
    ArrowRight,
    ShieldCheck,
    Calendar,
    Award,
    Sparkles
} from "lucide-react";
import { type Course } from "@/data/courses.data";
import styles from "./CoursePrerequisitesSidebar.module.scss";

interface CoursePrerequisitesSidebarProps {
    course: Course;
}

export default function CoursePrerequisitesSidebar({
    course
}: CoursePrerequisitesSidebarProps) {
    const t = useTranslations("CourseDetails");
    const locale = useLocale() as "ar" | "en";

    const prerequisites = course.prerequisites[locale] || course.prerequisites.ar;
    const courseTitle = course.title[locale] || course.title.ar;

    // رسالة واتساب المجهزة مسبقاً
    const whatsappMessage = encodeURIComponent(
        `السلام عليكم، أود الاستفسار عن تفاصيل دورة: (${courseTitle})`
    );
    const whatsappUrl = `https://wa.me/201000000000?text=${whatsappMessage}`;

    return (
        <section className={styles.prerequisitesBookingSection}>
            <div className="container">
                <div className={styles.sectionLayoutGrid}>
                    {/* 1. قائمة المتطلبات والشروط المسبقة */}
                    <div className={styles.prerequisitesCol}>
                        <div className={styles.sectionHeader}>
                            <div className={styles.badge}>
                                <ClipboardCheck size={14} />
                                <span>{t("prerequisitesSection.badge")}</span>
                            </div>
                            <h2 className={styles.title}>{t("prerequisitesSection.title")}</h2>
                            <p className={styles.desc}>{t("prerequisitesSection.desc")}</p>
                        </div>

                        <div className={styles.prerequisitesList}>
                            {prerequisites.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: locale === "ar" ? 15 : -15 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.25, delay: idx * 0.08 }}
                                    className={styles.prerequisiteItem}
                                >
                                    <div className={styles.iconCircle}>
                                        <CheckCircle2 size={18} />
                                    </div>
                                    <span className={styles.prerequisiteText}>{item}</span>
                                </motion.div>
                            ))}
                        </div>

                        <div className={styles.guidanceBox}>
                            <Sparkles size={20} className={styles.sparkleIcon} />
                            <div className={styles.guidanceContent}>
                                <h4>{t("prerequisitesSection.guidanceTitle")}</h4>
                                <p>{t("prerequisitesSection.guidanceDesc")}</p>
                            </div>
                        </div>
                    </div>

                    {/* 2. البطاقة الجانبية العائمة للحجز السريع (Sticky Booking Card) */}
                    <aside className={styles.sidebarCol}>
                        <div className={styles.stickyBookingCard}>
                            <div className={styles.cardHeader}>
                                <span className={styles.cardBadge}>{t("sidebarCard.badge")}</span>
                                <h3 className={styles.cardTitle}>{t("sidebarCard.title")}</h3>
                                <p className={styles.cardDesc}>{t("sidebarCard.desc")}</p>
                            </div>

                            <div className={styles.trustHighlights}>
                                <div className={styles.highlightItem}>
                                    <ShieldCheck size={16} />
                                    <span>{t("sidebarCard.features.guarantee")}</span>
                                </div>
                                <div className={styles.highlightItem}>
                                    <Calendar size={16} />
                                    <span>{t("sidebarCard.features.flexibility")}</span>
                                </div>
                                <div className={styles.highlightItem}>
                                    <Award size={16} />
                                    <span>{t("sidebarCard.features.tutors")}</span>
                                </div>
                            </div>

                            <div className={styles.actionButtons}>
                                <Link
                                    href={`/free-trial?course=${course.id}`}
                                    className={styles.primaryApplyBtn}
                                >
                                    <span>{t("sidebarCard.bookTrialBtn")}</span>
                                    <ArrowRight size={16} className={styles.arrowIcon} />
                                </Link>

                                <a
                                    href={whatsappUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.whatsappBtn}
                                >
                                    <MessageCircle size={18} />
                                    <span>{t("sidebarCard.whatsappBtn")}</span>
                                </a>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    );
}