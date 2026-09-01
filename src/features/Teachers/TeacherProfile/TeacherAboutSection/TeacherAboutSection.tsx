"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { GraduationCap, Award, CheckCircle, Sparkles } from "lucide-react";
import { type Teacher } from "@/data/teachers.data";
import styles from "./TeacherAboutSection.module.scss";

interface TeacherAboutSectionProps {
    teacher: Teacher;
}

export default function TeacherAboutSection({ teacher }: TeacherAboutSectionProps) {
    const t = useTranslations("TeacherProfile.aboutSection");
    const locale = useLocale() as "ar" | "en";

    const aboutText = teacher.about[locale] || teacher.about.ar;
    const qualifications = teacher.qualifications || [];
    const specialties = teacher.specialties || [];

    return (
        <section className={styles.aboutSection}>
            <div className="container">
                <div className={styles.sectionLayoutGrid}>
                    <div className={styles.mainCol}>
                        <div className={styles.cardBlock}>
                            <div className={styles.cardHeader}>
                                <div className={styles.badge}>
                                    <Sparkles size={14} />
                                    <span>{t("badge")}</span>
                                </div>
                                <h2 className={styles.cardTitle}>{t("aboutTitle")}</h2>
                            </div>
                            <p className={styles.aboutParagraph}>{aboutText}</p>
                        </div>

                        {qualifications.length > 0 && (
                            <div className={styles.cardBlock}>
                                <div className={styles.cardHeader}>
                                    <div className={styles.iconCircle}>
                                        <GraduationCap size={18} />
                                    </div>
                                    <h3 className={styles.subTitle}>{t("qualificationsTitle")}</h3>
                                </div>

                                <div className={styles.qualificationsTimeline}>
                                    {qualifications.map((q, idx) => {
                                        const qTitle = q.title[locale] || q.title.ar;
                                        const qInst = q.institution[locale] || q.institution.ar;

                                        return (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, y: 10 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.25, delay: idx * 0.05 }}
                                                className={styles.timelineItem}
                                            >
                                                <div className={styles.timelineMarker} />
                                                <div className={styles.timelineContent}>
                                                    <div className={styles.titleRow}>
                                                        <h4 className={styles.qualificationTitle}>
                                                            {qTitle}
                                                        </h4>
                                                        {q.year && (
                                                            <span className={styles.yearBadge}>
                                                                {q.year}
                                                            </span>
                                                        )}
                                                    </div>
                                                    <p className={styles.institutionText}>{qInst}</p>
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* عمود التخصصات الدقيقة */}
                    {specialties.length > 0 && (
                        <aside className={styles.sideCol}>
                            <div className={styles.specialtiesCard}>
                                <div className={styles.cardHeader}>
                                    <div className={styles.iconCircle}>
                                        <Award size={18} />
                                    </div>
                                    <h3 className={styles.subTitle}>{t("specialtiesTitle")}</h3>
                                </div>

                                <div className={styles.specialtiesList}>
                                    {specialties.map((spec, idx) => {
                                        const specText = spec[locale] || spec.ar;
                                        return (
                                            <div key={idx} className={styles.specialtyItem}>
                                                <div className={styles.checkIcon}>
                                                    <CheckCircle size={16} />
                                                </div>
                                                <span className={styles.specialtyText}>
                                                    {specText}
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </aside>
                    )}
                </div>
            </div>
        </section>
    );
}