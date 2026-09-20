"use client";

import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, RotateCcw, ChevronDown } from "lucide-react";
import { Link } from "@/i18n/navigation";
import CourseCard from "../../../components/CourseCard/CourseCard";
import { ApiCourse, CoursesPagination } from "@/app/[locale]/courses/type";
import styles from "./CoursesListingSection.module.scss";

const LOAD_MORE_STEP = 3;
const BASE_PATH = "/courses";

interface CoursesListingSectionProps {
  selectedCategory: string;
  searchQuery: string;
  courses: ApiCourse[];
  pagination: CoursesPagination;
  perPage: number;
  categoryFilter: React.ReactNode;
}

export default function CoursesListingSection({
  selectedCategory,
  searchQuery,
  courses,
  pagination,
  perPage,
  categoryFilter,
}: CoursesListingSectionProps) {
  const t = useTranslations("CoursesListing");

  const buildHref = (overrides: { per_page?: number; q?: string | null }) => {
    const params = new URLSearchParams();
    if (selectedCategory !== "all") params.set("category", selectedCategory);

    const q = overrides.q !== undefined ? overrides.q : searchQuery;
    if (q) params.set("q", q);

    const pp = overrides.per_page ?? perPage;
    params.set("per_page", String(pp));

    return `${BASE_PATH}?${params.toString()}`;
  };

  const loadMoreHref = buildHref({ per_page: perPage + LOAD_MORE_STEP });
  const clearSearchHref = buildHref({ q: null });

  const hasMore =
    pagination.current_page < pagination.last_page ||
    courses.length < pagination.total;

  return (
    <section id="courses-grid" className={styles.listingSection}>
      <div className="container">
        {categoryFilter}

        {searchQuery && (
          <div className={styles.searchAlertBar}>
            <div className={styles.alertInfo}>
              <Search size={16} />
              <span>
                {t("searchResultFor")} &quot;<strong>{searchQuery}</strong>&quot; ({pagination.total} {t("coursesFound")})
              </span>
            </div>
            <Link href={clearSearchHref} className={styles.clearSearchBtn}>
              <X size={15} />
              <span>{t("clearSearch")}</span>
            </Link>
          </div>
        )}

        <AnimatePresence mode="wait">
          {courses.length > 0 ? (
            <div className={styles.resultsContainer}>
              <motion.div
                key={selectedCategory + searchQuery}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className={styles.coursesGrid}
              >
                {courses.map((course) => (
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

              {hasMore && (
                <div className={styles.loadMoreWrapper}>
                  <Link href={loadMoreHref} className={styles.loadMoreBtn}>
                    <span>{t("loadMoreBtn")}</span>
                    <ChevronDown size={18} />
                  </Link>
                  <span className={styles.loadMoreInfo}>
                    {t("showingCount", {
                      current: courses.length,
                      total: pagination.total,
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
              <Link href={BASE_PATH} className={styles.resetBtn}>
                <RotateCcw size={16} />
                <span>{t("clearSearch")}</span>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}