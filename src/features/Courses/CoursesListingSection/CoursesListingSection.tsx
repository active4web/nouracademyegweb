"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import { Search, X, RotateCcw } from "lucide-react";
import { allCoursesData, courseCategories } from "@/data/courses.data";
import CourseCard from "./components/CourseCard";
import styles from "./CoursesListingSection.module.scss";

export default function CoursesListingSection() {
    const t = useTranslations("CoursesListing");
    const locale = useLocale() as "ar" | "en";
    const searchParams = useSearchParams();

    const [selectedCategory, setSelectedCategory] = useState<string>("all");

    // استخراج قيمة البحث مباشرة من الـ URL كمتغير مشتق بدون الحاجة لـ useState أو useEffect
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
                {/* Categories Filter Bar */}
                <div className={styles.categoriesBar}>
                    {courseCategories.map((cat) => (
                        <button
                            key={cat.key}
                            type="button"
                            className={`${styles.catBtn} ${selectedCategory === cat.key ? styles.active : ""}`}
                            onClick={() => setSelectedCategory(cat.key)}
                        >
                            {cat.label[locale] || cat.label.ar}
                        </button>
                    ))}
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
                {filteredCourses.length > 0 ? (
                    <div className={styles.coursesGrid}>
                        {filteredCourses.map((course) => (
                            <CourseCard key={course.id} course={course} />
                        ))}
                    </div>
                ) : (
                    <div className={styles.emptyState}>
                        <div className={styles.emptyIconCircle}>
                            <Search size={32} />
                        </div>
                        <h3 className={styles.emptyTitle}>{t("noResultsTitle")}</h3>
                        <p className={styles.emptyDesc}>{t("noResultsDesc")}</p>
                        <button type="button" className={styles.resetBtn} onClick={handleReset}>
                            <RotateCcw size={16} />
                            <span>{t("clearSearch")}</span>
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}