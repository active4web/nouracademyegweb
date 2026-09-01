"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import {
    BookOpen,
    Layers,
    Clock,
    ChevronDown,
    Video,
    FileCheck2,
    Sparkles,
    CheckCircle2
} from "lucide-react";
import { type Course, type CourseLesson } from "@/data/courses.data";
import styles from "./CourseCurriculumSection.module.scss";

interface CourseCurriculumSectionProps {
    course: Course;
}

export default function CourseCurriculumSection({
    course
}: CourseCurriculumSectionProps) {
    const t = useTranslations("CourseDetails.curriculumSection");
    const locale = useLocale() as "ar" | "en";

    const curriculum = course.curriculum || [];
    const totalLessons = curriculum.reduce(
        (acc, unit) => acc + (unit.lessons?.length || 0),
        0
    );

    // افتراض فتح الوحدة الأولى بشكل افتراضي
    const [openUnits, setOpenUnits] = useState<number[]>([1]);

    const toggleUnit = (unitNumber: number) => {
        setOpenUnits((prev) =>
            prev.includes(unitNumber)
                ? prev.filter((id) => id !== unitNumber)
                : [...prev, unitNumber]
        );
    };

    const getLessonTypeBadge = (type: CourseLesson["type"]) => {
        switch (type) {
            case "live":
                return {
                    icon: Video,
                    label: t("lessonTypes.live"),
                    className: styles.live
                };
            case "interactive":
                return {
                    icon: Sparkles,
                    label: t("lessonTypes.interactive"),
                    className: styles.interactive
                };
            case "exam":
                return {
                    icon: FileCheck2,
                    label: t("lessonTypes.exam"),
                    className: styles.exam
                };
            default:
                return {
                    icon: Video,
                    label: t("lessonTypes.video"),
                    className: styles.live
                };
        }
    };

    if (curriculum.length === 0) return null;

    return (
        <section className={styles.curriculumSection}>
            <div className="container">
                {/* 1. Header */}
                <div className={styles.sectionHeader}>
                    <div className={styles.badge}>
                        <BookOpen size={14} />
                        <span>{t("badge")}</span>
                    </div>
                    <h2 className={styles.title}>{t("title")}</h2>
                    <p className={styles.desc}>{t("desc")}</p>
                </div>

                {/* 2. Stats Bar */}
                <div className={styles.statsBar}>
                    <div className={styles.statItem}>
                        <Layers size={20} className={styles.statIcon} />
                        <div className={styles.statInfo}>
                            <span className={styles.statValue}>{curriculum.length}</span>
                            <span className={styles.statLabel}>{t("stats.units")}</span>
                        </div>
                    </div>
                    <div className={styles.statDivider} />
                    <div className={styles.statItem}>
                        <BookOpen size={20} className={styles.statIcon} />
                        <div className={styles.statInfo}>
                            <span className={styles.statValue}>{totalLessons}</span>
                            <span className={styles.statLabel}>{t("stats.lessons")}</span>
                        </div>
                    </div>
                    <div className={styles.statDivider} />
                    <div className={styles.statItem}>
                        <Clock size={20} className={styles.statIcon} />
                        <div className={styles.statInfo}>
                            <span className={styles.statValue}>
                                {course.duration[locale] || course.duration.ar}
                            </span>
                            <span className={styles.statLabel}>{t("stats.duration")}</span>
                        </div>
                    </div>
                </div>

                {/* 3. Accordion Units List */}
                <div className={styles.unitsAccordion}>
                    {curriculum.map((unit) => {
                        const isOpen = openUnits.includes(unit.unitNumber);
                        const unitTitle = unit.title[locale] || unit.title.ar;
                        const unitDesc = unit.desc[locale] || unit.desc.ar;

                        return (
                            <div
                                key={unit.unitNumber}
                                className={`${styles.unitCard} ${isOpen ? styles.active : ""}`}
                            >
                                <button
                                    type="button"
                                    className={styles.unitHeader}
                                    onClick={() => toggleUnit(unit.unitNumber)}
                                    aria-expanded={isOpen}
                                >
                                    <div className={styles.unitMeta}>
                                        <span className={styles.unitNumberBadge}>
                                            {t("unitLabel")} {unit.unitNumber}
                                        </span>
                                        <div className={styles.unitTitleWrapper}>
                                            <h3 className={styles.unitTitle}>{unitTitle}</h3>
                                            <p className={styles.unitDesc}>{unitDesc}</p>
                                        </div>
                                    </div>

                                    <div className={styles.headerRight}>
                                        <span className={styles.lessonsCount}>
                                            {unit.lessons.length} {t("stats.lessons")}
                                        </span>
                                        <div className={`${styles.chevronIcon} ${isOpen ? styles.rotated : ""}`}>
                                            <ChevronDown size={20} />
                                        </div>
                                    </div>
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            key="content"
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.25, ease: "easeInOut" }}
                                            className={styles.lessonsCollapse}
                                        >
                                            <div className={styles.lessonsList}>
                                                {unit.lessons.map((lesson, lIdx) => {
                                                    const lessonType = getLessonTypeBadge(lesson.type);
                                                    const TypeIcon = lessonType.icon;
                                                    const lessonTitle = lesson.title[locale] || lesson.title.ar;
                                                    const lessonDuration = lesson.duration[locale] || lesson.duration.ar;

                                                    return (
                                                        <div key={lIdx} className={styles.lessonItem}>
                                                            <div className={styles.lessonLeft}>
                                                                <div className={styles.checkIcon}>
                                                                    <CheckCircle2 size={16} />
                                                                </div>
                                                                <span className={styles.lessonTitle}>
                                                                    {lessonTitle}
                                                                </span>
                                                            </div>

                                                            <div className={styles.lessonRight}>
                                                                <div className={`${styles.typeBadge} ${lessonType.className}`}>
                                                                    <TypeIcon size={12} />
                                                                    <span>{lessonType.label}</span>
                                                                </div>
                                                                <span className={styles.lessonDuration}>
                                                                    <Clock size={13} />
                                                                    {lessonDuration}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}