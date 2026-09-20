import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import {
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Clock,
  Award,
  Globe,
  BarChart,
} from "lucide-react";
import CourseVideoPlayer from "@/components/CourseVideoPlayer/CourseVideoPlayer";
import styles from "./CourseDetailsHeroSection.module.scss";
import { ApiCourseDetail } from "@/app/[locale]/courses/[id]/type";

interface CourseDetailsHeroSectionProps {
  course: ApiCourseDetail;
}

export default function CourseDetailsHeroSection({
  course,
}: CourseDetailsHeroSectionProps) {
  const t = useTranslations("CourseDetails");
  const locale = useLocale() as "ar" | "en";
  const isAr = locale === "ar";

  const posterImage =
    course.image || course.thumbnail || "/image-default.png";

  const metaItems = [
    {
      icon: BarChart,
      label: t("meta.level"),
      value: course.target_level,
    },
    {
      icon: Clock,
      label: t("meta.hours"),
      value: course.total_hours,
    },
    {
      icon: Award,
      label: t("meta.certificate"),
      value: course.certificate_type,
    },
    {
      icon: Globe,
      label: t("meta.language"),
      value: course.teaching_language,
    },
  ];

  return (
    <section className={styles.heroSection}>
      <div className="container">
        {/* Breadcrumbs */}
        <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
          <Link href="/" className={styles.breadLink}>
            {t("breadcrumbs.home")}
          </Link>
          {isAr ? (
            <ChevronLeft size={14} className={styles.breadIcon} />
          ) : (
            <ChevronRight size={14} className={styles.breadIcon} />
          )}
          <Link href="/courses" className={styles.breadLink}>
            {t("breadcrumbs.courses")}
          </Link>
          {isAr ? (
            <ChevronLeft size={14} className={styles.breadIcon} />
          ) : (
            <ChevronRight size={14} className={styles.breadIcon} />
          )}
          <span className={styles.breadCurrent}>{course.title}</span>
        </nav>

        {/* Hero Grid */}
        <div className={styles.heroGrid}>
          <div className={styles.contentCol}>
            {course.category?.name && (
              <div className={styles.categoryBadge}>
                <BookOpen size={14} />
                <span>{course.category.name}</span>
              </div>
            )}

            <h1 className={styles.courseTitle}>{course.title}</h1>
            <p className={styles.courseDesc}>{course.description}</p>

            <div className={styles.metaGrid}>
              {metaItems.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className={styles.metaBox}>
                    <div className={styles.iconWrapper}>
                      <Icon size={18} />
                    </div>
                    <div className={styles.metaInfo}>
                      <span className={styles.metaLabel}>{item.label}</span>
                      <span className={styles.metaValue}>{item.value}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className={styles.mediaCol}>
            {course.video ? (
              <CourseVideoPlayer
                videoUrl={course.video}
                posterImage={posterImage}
                title={course.title}
                badgeText={t("videoBadge")}
              />
            ) : (
              <div className={styles.imageOnlyWrapper}>
                <Image
                  src="/video-placeholder.png"
                  alt={course.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={styles.imageOnly}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
