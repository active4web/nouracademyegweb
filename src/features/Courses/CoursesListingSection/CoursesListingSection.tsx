"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, RotateCcw, Filter, ChevronDown } from "lucide-react";
import { allCoursesData, courseCategories } from "@/data/courses.data";
import CourseCard from "../../../components/CourseCard/CourseCard";
import styles from "./CoursesListingSection.module.scss";

const INITIAL_COUNT = 6;
const LOAD_MORE_STEP = 3;

export default function CoursesListingSection() {
    const t = useTranslations("CoursesListing");
    const locale = useLocale() as "ar" | "en";
    const searchParams = useSearchParams();

    const [selectedCategory, setSelectedCategory] = useState<string>("all");
    const [addedCount, setAddedCount] = useState<number>(0);

    const searchQuery = searchParams.get("q") || "";

    // تصفية البيانات
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

    // تغيير الفئة وإعادة ضبط العداد الإضافي مباشرة في الـ Handler
    const handleCategoryChange = (key: string) => {
        setSelectedCategory(key);
        setAddedCount(0);
    };

    const handleLoadMore = () => {
        setAddedCount((prev) => prev + LOAD_MORE_STEP);
    };

    const handleReset = () => {
        setSelectedCategory("all");
        setAddedCount(0);
        window.history.replaceState({}, "", window.location.pathname);
    };

    // حساب عدد الكروت المعروضة حالياً
    const visibleLimit = INITIAL_COUNT + addedCount;
    const displayedCourses = useMemo(() => {
        return filteredCourses.slice(0, visibleLimit);
    }, [filteredCourses, visibleLimit]);

    return (
        <section id="courses-grid" className={styles.listingSection}>
            <div className="container">
                {/* Filter Bar */}
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
                                    onClick={() => handleCategoryChange(cat.key)}
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

                {/* Courses Grid or Empty State */}
                <AnimatePresence mode="wait">
                    {filteredCourses.length > 0 ? (
                        <div className={styles.resultsContainer}>
                            <motion.div
                                key={selectedCategory + searchQuery}
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -15 }}
                                transition={{ duration: 0.25, ease: "easeInOut" }}
                                className={styles.coursesGrid}
                            >
                                {displayedCourses.map((course) => (
                                    <motion.div
                                        key={course.id}
                                        layout
                                        initial={{ opacity: 0, scale: 0.96 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.2 }}
                                        className={styles.gridItem}
                                    >
                                        <CourseCard course={course} />
                                    </motion.div>
                                ))}
                            </motion.div>

                            {/* Load More Button */}
                            {visibleLimit < filteredCourses.length && (
                                <div className={styles.loadMoreWrapper}>
                                    <button
                                        type="button"
                                        className={styles.loadMoreBtn}
                                        onClick={handleLoadMore}
                                    >
                                        <span>{t("loadMoreBtn")}</span>
                                        <ChevronDown size={18} />
                                    </button>
                                    <span className={styles.loadMoreInfo}>
                                        {t("showingCount", {
                                            current: displayedCourses.length,
                                            total: filteredCourses.length
                                        })}
                                    </span>
                                </div>
                            )}
                        </div>
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