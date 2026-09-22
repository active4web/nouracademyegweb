"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import styles from "./CoursesSection.module.scss";
import CourseCard from "@/components/CourseCard/CourseCard";
import { ApiCourse } from "@/app/[locale]/courses/type";

interface CoursesSectionProps {
  courses: ApiCourse[];
}

export default function CoursesSection({ courses }: CoursesSectionProps) {
  const t = useTranslations("Courses");

  if (courses.length === 0) return null;

  return (
    <section className={styles.coursesSection}>
      <div className="container">
        <div className={styles.headerWrapper}>
          <div className={styles.sectionBadge}>
            <span>{t("sectionBadge")}</span>
          </div>
          <h2 className={styles.sectionTitle}>{t("sectionTitle")}</h2>
          <p className={styles.sectionDesc}>{t("sectionDesc")}</p>
        </div>

        <div className={styles.coursesGrid}>
          {courses.map((course) => (
            <CourseCard course={course} key={course.id} />
          ))}
        </div>

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
