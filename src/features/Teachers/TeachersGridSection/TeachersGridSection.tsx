"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { Filter } from "lucide-react";
import { featuredTeachers } from "@/data/teachers.data";
import TeacherCard from "@/components/TeacherCard/TeacherCard";
import styles from "./TeachersGridSection.module.scss";

export default function TeachersGridSection() {
    const t = useTranslations("TeachersPage");
    const locale = useLocale() as "ar" | "en";
    const [selectedCategory, setSelectedCategory] = useState<string>("all");

    const categories = [
        { id: "all", label: { ar: t("allFilter"), en: "All Specialties" } },
        { id: "قرآن وقراءات", label: { ar: "قرآن وقراءات", en: "Quran & Qira'at" } },
        { id: "تجويد وتأسيس", label: { ar: "تجويد وتأسيس", en: "Tajweed & Foundation" } },
        { id: "لغة عربية ونحو", label: { ar: "لغة عربية ونحو", en: "Arabic & Grammar" } },
        { id: "حفظ وإقراء", label: { ar: "حفظ وإقراء", en: "Memorization & Sanad" } }
    ];

    const filteredTeachers = selectedCategory === "all"
        ? featuredTeachers
        : featuredTeachers.filter((tr) => tr.category.ar === selectedCategory);

    return (
        <section className={styles.teachersGridSection}>
            <div className="container">
                {/* Filter Bar */}
                <div className={styles.filterBar}>
                    <div className={styles.filterIconLabel}>
                        <Filter size={16} />
                        <span>التصنيف:</span>
                    </div>
                    <div className={styles.filterButtonsWrapper}>
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                type="button"
                                className={`${styles.filterBtn} ${selectedCategory === cat.id ? styles.active : ""}`}
                                onClick={() => setSelectedCategory(cat.id)}
                            >
                                {cat.label[locale] || cat.label.ar}
                            </button>
                        ))}
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    {filteredTeachers.length > 0 ? (
                        <motion.div
                            key={selectedCategory}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -15 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                            className={styles.teachersGrid}
                        >
                            {filteredTeachers.map((teacher) => (
                                <motion.div
                                    key={teacher.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.2 }}
                                    className={styles.gridItem}
                                >
                                    <TeacherCard teacher={teacher} showApplyBtn={true} />
                                </motion.div>
                            ))}
                        </motion.div>
                    ) : (
                        <motion.div
                            key="no-results"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className={styles.noResults}
                        >
                            <p>{t("noResults")}</p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}