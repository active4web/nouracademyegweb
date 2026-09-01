"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { Scroll, Award, CheckCircle2, ShieldCheck } from "lucide-react";
import { type Teacher } from "@/data/teachers.data";
import styles from "./TeacherIjazahsSection.module.scss";

interface TeacherIjazahsSectionProps {
    teacher: Teacher;
}

export default function TeacherIjazahsSection({ teacher }: TeacherIjazahsSectionProps) {
    const t = useTranslations("TeacherProfile.ijazahsSection");
    const locale = useLocale() as "ar" | "en";

    const ijazahList =
        teacher.fullIjazahList && teacher.fullIjazahList.length > 0
            ? teacher.fullIjazahList
            : [teacher.ijazah];

    return (
        <section className={styles.ijazahsSection}>
            <div className="container">
                {/* Header */}
                <div className={styles.sectionHeader}>
                    <div className={styles.badge}>
                        <Scroll size={14} />
                        <span>{t("badge")}</span>
                    </div>
                    <h2 className={styles.title}>{t("title")}</h2>
                    <p className={styles.desc}>{t("desc")}</p>
                </div>

                {/* Grid */}
                <div className={styles.ijazahsGrid}>
                    {ijazahList.map((item, idx) => {
                        const ijazahText = item[locale] || item.ar;
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.25, delay: idx * 0.06 }}
                                className={styles.ijazahCard}
                            >
                                <div className={styles.cardTop}>
                                    <div className={styles.iconCircle}>
                                        <Award size={20} />
                                    </div>
                                    <span className={styles.sanadBadge}>
                                        <ShieldCheck size={13} />
                                        <span>{t("sanadBadge")}</span>
                                    </span>
                                </div>

                                <div className={styles.cardContent}>
                                    <h3 className={styles.ijazahTitle}>{ijazahText}</h3>
                                </div>

                                <div className={styles.cardFooter}>
                                    <div className={styles.verifiedMark}>
                                        <CheckCircle2 size={15} />
                                        <span>معتمد وموثق</span>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}