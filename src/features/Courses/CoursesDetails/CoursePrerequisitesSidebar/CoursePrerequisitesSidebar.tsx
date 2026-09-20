"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  ClipboardCheck,
  ShieldCheck,
  Calendar,
  Award,
  Sparkles,
} from "lucide-react";
import { ApiCourseDetail } from "@/app/[locale]/courses/[id]/type";
import styles from "./CoursePrerequisitesSidebar.module.scss";

interface CoursePrerequisitesSidebarProps {
  course: ApiCourseDetail;
}

export default function CoursePrerequisitesSidebar({
  course,
}: CoursePrerequisitesSidebarProps) {
  const t = useTranslations("CourseDetails");
  const locale = useLocale() as "ar" | "en";

  const prerequisites = course.requirements || [];

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
              <h2 className={styles.title}>
                {t("prerequisitesSection.title")}
              </h2>
              <p className={styles.desc}>{t("prerequisitesSection.desc")}</p>
            </div>

            <div className={styles.prerequisitesList}>
              {prerequisites.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: locale === "ar" ? 15 : -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.25, delay: idx * 0.08 }}
                  className={styles.prerequisiteItem}
                >
                  <div className={styles.iconCircle}>
                    <CheckCircle2 size={18} />
                  </div>
                  <span className={styles.prerequisiteText}>{item.name}</span>
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
                <span className={styles.cardBadge}>
                  {t("sidebarCard.badge")}
                </span>
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
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
