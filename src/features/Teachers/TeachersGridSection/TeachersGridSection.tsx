"use client";

import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "@/i18n/navigation";
import TeacherCard from "@/components/TeacherCard/TeacherCard";
import { ApiTeacher, TeachersPagination } from "@/app/[locale]/teachers/type";
import styles from "./TeachersGridSection.module.scss";

const LOAD_MORE_STEP = 4;
const BASE_PATH = "/teachers";

interface TeachersGridSectionProps {
  selectedCategory: string;
  teachers: ApiTeacher[];
  pagination: TeachersPagination;
  perPage: number;
  categoryFilter: ReactNode;
}

export default function TeachersGridSection({
  selectedCategory,
  teachers,
  pagination,
  perPage,
  categoryFilter,
}: TeachersGridSectionProps) {
  const t = useTranslations("TeachersPage");

  const buildHref = (overrides: { per_page?: number }) => {
    const params = new URLSearchParams();
    if (selectedCategory !== "all") params.set("category", selectedCategory);

    const pp = overrides.per_page ?? perPage;
    params.set("per_page", String(pp));

    return `${BASE_PATH}?${params.toString()}`;
  };

  const loadMoreHref = buildHref({ per_page: perPage + LOAD_MORE_STEP });

  const hasMore =
    pagination.current_page < pagination.last_page ||
    teachers.length < pagination.total;

  return (
    <section className={styles.teachersGridSection}>
      <div className="container">
        {categoryFilter}

        <AnimatePresence mode="wait">
          {teachers.length > 0 ? (
            <div className={styles.resultsContainer}>
              <motion.div
                key={selectedCategory}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className={styles.teachersGrid}
              >
                {teachers.map((teacher) => (
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

              {hasMore && (
                <div className={styles.loadMoreWrapper}>
                  <Link href={loadMoreHref} className={styles.loadMoreBtn}>
                    <span>{t("loadMoreBtn")}</span>
                    <ChevronDown size={18} />
                  </Link>
                  <span className={styles.loadMoreInfo}>
                    {t("showingCount", {
                      current: teachers.length,
                      total: pagination.total,
                    })}
                  </span>
                </div>
              )}
            </div>
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
