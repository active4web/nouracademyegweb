"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Sparkles,
  Star,
  ShieldCheck,
  Video,
  FileText,
} from "lucide-react";
import { ApiCourseDetail } from "@/app/[locale]/courses/[id]/type";
import styles from "./CourseOutcomesFeaturesSection.module.scss";

interface CourseOutcomesFeaturesSectionProps {
  course: ApiCourseDetail;
}

export default function CourseOutcomesFeaturesSection({
  course,
}: CourseOutcomesFeaturesSectionProps) {
  const t = useTranslations("CourseDetails");

  const outcomes = course.outcomes || [];
  const features = course.features || [];

  const featureIcons = [Video, ShieldCheck, FileText, Star];

  return (
    <section className={styles.outcomesFeaturesSection}>
      <div className="container">
        {/* 1. شبكة مخرجات التعلم (Learning Outcomes) */}
        {outcomes.length > 0 && (
          <div className={styles.outcomesWrapper}>
            <div className={styles.sectionHeader}>
              <div className={styles.badge}>
                <Sparkles size={14} />
                <span>{t("outcomesSection.badge")}</span>
              </div>
              <h2 className={styles.title}>{t("outcomesSection.title")}</h2>
              <p className={styles.desc}>{t("outcomesSection.desc")}</p>
            </div>

            <div className={styles.outcomesGrid}>
              {outcomes.map((outcome, idx) => (
                <motion.div
                  key={outcome.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.25, delay: idx * 0.05 }}
                  className={styles.outcomeCard}
                >
                  <div className={styles.checkIconWrapper}>
                    <CheckCircle2 size={20} />
                  </div>
                  <p className={styles.outcomeText}>{outcome.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* 2. بطاقات مميزات الدورة ونظام التدريس الفردي */}
        {features.length > 0 && (
          <div className={styles.featuresWrapper}>
            <div className={styles.sectionHeader}>
              <div className={styles.badge}>
                <Star size={14} />
                <span>{t("featuresSection.badge")}</span>
              </div>
              <h2 className={styles.title}>{t("featuresSection.title")}</h2>
              <p className={styles.desc}>{t("featuresSection.desc")}</p>
            </div>

            <div className={styles.featuresGrid}>
              {features.map((feature, idx) => {
                const IconComponent = featureIcons[idx % featureIcons.length];
                return (
                  <motion.div
                    key={feature.id}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.25, delay: idx * 0.08 }}
                    className={styles.featureCard}
                  >
                    <div className={styles.featureIcon}>
                      <IconComponent size={22} />
                    </div>
                    <div className={styles.featureContent}>
                      <h3 className={styles.featureTitle}>{feature.title}</h3>
                      <p className={styles.featureDesc}>
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
