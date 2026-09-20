import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Clock, Users, BookOpen } from "lucide-react";
import { ApiCourse } from "@/app/[locale]/courses/type";
import styles from "./CourseCard.module.scss";

interface CourseCardProps {
  course: ApiCourse;
}

export default function CourseCard({ course }: CourseCardProps) {
  const t = useTranslations("CoursesListing");


  return (
    <div className={styles.courseCard}>
      <div className={styles.imageWrapper}>
        <Image
          src={course.image ?? "/image-default.png"}
          alt={course.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className={styles.cardImg}
        />
        {course.category && (
          <div className={styles.categoryBadge}>
            <BookOpen size={13} />
            <span>{course.category.name}</span>
          </div>
        )}
      </div>

      <div className={styles.cardContent}>
        <h3 className={styles.courseTitle}>{course.title}</h3>
        <p className={styles.courseDesc}>{course.description}</p>

        <div className={styles.metaRow}>
          <div className={styles.metaItem}>
            <Clock size={14} />
            <span>{course.total_hours}</span>
          </div>
          <div className={styles.metaItem}>
            <Users size={14} />
            <span>{course.target_level}</span>
          </div>
        </div>

        <div className={styles.actionsRow}>
          <Link href={`/courses/${course.id}`} className={styles.detailsBtn}>
            <span>{t("detailsBtn")}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
