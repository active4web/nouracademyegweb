"use client";

import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { motion, type Variants } from "framer-motion";
import { Users, Clock, ArrowRight } from "lucide-react";
import { featuredCourses } from "@/data/courses.data";
import styles from "./CoursesSection.module.scss";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.05
        }
    }
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.3,
            ease: "easeOut"
        }
    }
};

export default function CoursesSection() {
    const t = useTranslations("Courses");
    const locale = useLocale() as "ar" | "en";

    return (
        <section className={styles.coursesSection}>
            <div className="container">
                <motion.div
                    className={styles.headerWrapper}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className={styles.sectionBadge}>
                        <span>{t("sectionBadge")}</span>
                    </div>
                    <h2 className={styles.sectionTitle}>{t("sectionTitle")}</h2>
                    <p className={styles.sectionDesc}>{t("sectionDesc")}</p>
                </motion.div>

                <motion.div
                    className={styles.coursesGrid}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {featuredCourses.map((course) => (
                        <motion.div
                            key={course.id}
                            className={styles.courseCard}
                            variants={cardVariants}
                            whileHover={{ y: -4 }}
                        >
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={course.image}
                                    alt={course.title[locale] || course.title.ar}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                    className={styles.cardImg}
                                />
                                <div className={styles.categoryBadge}>
                                    {course.category[locale] || course.category.ar}
                                </div>
                            </div>

                            <div className={styles.cardContent}>
                                <h3 className={styles.courseTitle}>
                                    {course.title[locale] || course.title.ar}
                                </h3>
                                <p className={styles.courseDesc}>
                                    {course.desc[locale] || course.desc.ar}
                                </p>

                                <div className={styles.metaInfo}>
                                    <div className={styles.metaRow}>
                                        <Users size={15} />
                                        <span>{course.targetAudience[locale] || course.targetAudience.ar}</span>
                                    </div>
                                    <div className={styles.metaRow}>
                                        <Clock size={15} />
                                        <span>{course.duration[locale] || course.duration.ar}</span>
                                    </div>
                                </div>

                                <div className={styles.cardFooter}>
                                    <Link href={`/courses/${course.id}`} className={styles.detailsLink}>
                                        <span>{t("viewDetails")}</span>
                                        <ArrowRight size={15} className={styles.arrowIcon} />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <div className={styles.allCoursesWrapper}>
                    <Link href="/courses" className={styles.viewAllBtn}>
                        <span>{t("viewAllCourses")}</span>
                        <ArrowRight size={16} className={styles.arrowIcon} />
                    </Link>
                </div>
            </div>
        </section>
    );
}