"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, RotateCcw, Filter } from "lucide-react";
import { allCoursesData, courseCategories } from "@/data/courses.data";
import CourseCard from "../../../components/CourseCard/CourseCard";
import styles from "./CoursesListingSection.module.scss";

export default function CoursesListingSection() {
    const t = useTranslations("CoursesListing");
    const locale = useLocale() as "ar" | "en";
    const searchParams = useSearchParams();

    const [selectedCategory, setSelectedCategory] = useState<string>("all");

    const searchQuery = searchParams.get("q") || "";

    const filteredCourses = useMemo(() => {
        return allCoursesData.filter((course) => {
            const matchesCategory =
                selectedCategory === "all" || course.categoryKey === selectedCategory;

            const query = searchQuery.toLowerCase().trim();
            const matchesSearch =
                !query ||
                course.title.ar.toLowerCase().includes(query) ||
                course.title.en.toLowerCase().includes(query) ||
                course.desc.ar.toLowerCase().includes(query) ||
                course.desc.en.toLowerCase().includes(query);

            return matchesCategory && matchesSearch;
        });
    }, [selectedCategory, searchQuery]);

    const handleReset = () => {
        setSelectedCategory("all");
        window.history.replaceState({}, "", window.location.pathname);
    };

    return (
        <section id="courses-grid" className={styles.listingSection}>
            <div className="container">
                {/* Filter Bar with Framer Motion Pill */}
                <div className={styles.filterBar}>
                    <div className={styles.filterIconLabel}>
                        <Filter size={16} />
                        <span>التصنيف:</span>
                    </div>
                    <div className={styles.filterButtonsWrapper}>
                        {courseCategories.map((cat) => {
                            const isActive = selectedCategory === cat.key;
                            return (
                                <button
                                    key={cat.key}
                                    type="button"
                                    className={`${styles.filterBtn} ${isActive ? styles.active : ""}`}
                                    onClick={() => setSelectedCategory(cat.key)}
                                >
                                    <span className={styles.btnText}>
                                        {cat.label[locale] || cat.label.ar}
                                    </span>
                                    {isActive && (
                                        <motion.span
                                            layoutId="courseFilterPill"
                                            className={styles.activePill}
                                            transition={{ type: "spring", stiffness: 350, damping: 28 }}
                                        />
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Active Search Notification Bar */}
                {searchQuery && (
                    <div className={styles.searchAlertBar}>
                        <div className={styles.alertInfo}>
                            <Search size={16} />
                            <span>
                                {t("searchResultFor")} &quot;<strong>{searchQuery}</strong>&quot; ({filteredCourses.length} {t("coursesFound")})
                            </span>
                        </div>
                        <button type="button" className={styles.clearSearchBtn} onClick={handleReset}>
                            <X size={15} />
                            <span>{t("clearSearch")}</span>
                        </button>
                    </div>
                )}

                {/* Courses Grid or Empty State with Framer Motion */}
                <AnimatePresence mode="wait">
                    {filteredCourses.length > 0 ? (
                        <motion.div
                            key={selectedCategory + searchQuery}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -15 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                            className={styles.coursesGrid}
                        >
                            {filteredCourses.map((course) => (
                                <motion.div
                                    key={course.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.96 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <CourseCard course={course} />
                                </motion.div>
                            ))}
                        </motion.div>
                    ) : (
                        <motion.div
                            key="empty-state"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className={styles.emptyState}
                        >
                            <div className={styles.emptyIconCircle}>
                                <Search size={32} />
                            </div>
                            <h3 className={styles.emptyTitle}>{t("noResultsTitle")}</h3>
                            <p className={styles.emptyDesc}>{t("noResultsDesc")}</p>
                            <button type="button" className={styles.resetBtn} onClick={handleReset}>
                                <RotateCcw size={16} />
                                <span>{t("clearSearch")}</span>
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}