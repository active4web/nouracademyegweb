import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Clock, Users, BookOpen } from "lucide-react";
import { type Course } from "@/data/courses.data";
import styles from "./CourseCard.module.scss";

interface CourseCardProps {
    course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
    const t = useTranslations("CoursesListing");
    const locale = useLocale() as "ar" | "en";

    return (
        <div className={styles.courseCard}>
            <div className={styles.imageWrapper}>
                <Image
                    src={course.image}
                    alt={course.title[locale] || course.title.ar}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className={styles.cardImg}
                />
                <div className={styles.categoryBadge}>
                    <BookOpen size={13} />
                    <span>{course.category[locale] || course.category.ar}</span>
                </div>
            </div>

            <div className={styles.cardContent}>
                <h3 className={styles.courseTitle}>
                    {course.title[locale] || course.title.ar}
                </h3>
                <p className={styles.courseDesc}>
                    {course.desc[locale] || course.desc.ar}
                </p>

                <div className={styles.metaRow}>
                    <div className={styles.metaItem}>
                        <Clock size={14} />
                        <span>{course.duration[locale] || course.duration.ar}</span>
                    </div>
                    <div className={styles.metaItem}>
                        <Users size={14} />
                        <span>{course.targetAudience[locale] || course.targetAudience.ar}</span>
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