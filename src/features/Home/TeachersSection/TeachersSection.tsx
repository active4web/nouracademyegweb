"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { BookOpenCheck, ArrowRight } from "lucide-react";
import TeacherCard from "@/components/TeacherCard/TeacherCard";
import styles from "./TeachersSection.module.scss";
import { ApiTeacher } from "@/app/[locale]/teachers/type";

interface TeachersSectionProps {
  teachers: ApiTeacher[];
}

export default function TeachersSection({ teachers }: TeachersSectionProps) {
  const t = useTranslations("Teachers");

  if (teachers.length === 0) return null;

  return (
    <section className={styles.teachersSection}>
      <div className="container">
        <div className={styles.headerWrapper}>
          <div className={styles.sectionBadge}>
            <span>{t("sectionBadge")}</span>
          </div>
          <h2 className={styles.sectionTitle}>{t("sectionTitle")}</h2>
          <p className={styles.sectionDesc}>{t("sectionDesc")}</p>
        </div>

        <div className={styles.teachersGrid}>
          {teachers.map((teacher) => (
            <TeacherCard
              key={teacher.id}
              teacher={teacher}
              showApplyBtn={false}
            />
          ))}
        </div>

        <div className={styles.viewAllWrapper}>
          <Link href="/teachers" className={styles.allTeachersBtn}>
            <BookOpenCheck size={17} />
            <span>{t("viewAllTeachers")}</span>
            <ArrowRight size={15} className={styles.arrowIcon} />
          </Link>
        </div>
      </div>
    </section>
  );
}
