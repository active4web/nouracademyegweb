import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import {
  ChevronLeft,
  ChevronRight,
  Briefcase,
  CheckCircle2,
} from "lucide-react";
import { ApiTeacherProfile } from "@/app/[locale]/teachers/[id]/type";
import styles from "./TeacherProfileHeader.module.scss";

interface TeacherProfileHeaderProps {
  teacher: ApiTeacherProfile;
}

export default function TeacherProfileHeader({
  teacher,
}: TeacherProfileHeaderProps) {
  const t = useTranslations("TeacherProfile");
  const locale = useLocale() as "ar" | "en";
  const isAr = locale === "ar";

  return (
    <section className={styles.headerSection}>
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
          <Link href="/teachers" className={styles.breadLink}>
            {t("breadcrumbs.teachers")}
          </Link>
          {isAr ? (
            <ChevronLeft size={14} className={styles.breadIcon} />
          ) : (
            <ChevronRight size={14} className={styles.breadIcon} />
          )}
          <span className={styles.breadCurrent}>{teacher.display_name}</span>
        </nav>

        <div className={styles.profileCard}>
          {/* الصورة والشارات */}
          <div className={styles.imageCol}>
            <div className={styles.avatarWrapper}>
              <Image
                src={teacher.image ?? "/image-default.png"}
                alt={teacher.display_name}
                fill
                priority
                sizes="(max-width: 768px) 180px, 220px"
                className={styles.avatarImg}
              />
            </div>
            {teacher.categories[0] && (
              <div className={styles.categoryBadge}>
                {teacher.categories[0].name}
              </div>
            )}
          </div>

          {/* المحتوى والبيانات الأساسية */}
          <div className={styles.infoCol}>
            <div className={styles.verifiedTag}>
              <CheckCircle2 size={15} />
              <span>{t("verifiedBadge")}</span>
            </div>

            <h1 className={styles.teacherName}>{teacher.display_name}</h1>
            <p className={styles.teacherRole}>{teacher.role}</p>
            <p className={styles.teacherBio}>{teacher.bio}</p>

            {/* شريط الإحصائيات */}
            <div className={styles.statsRow}>
              <div className={styles.statBox}>
                <div className={styles.iconCircle}>
                  <Briefcase size={16} />
                </div>
                <div className={styles.statInfo}>
                  <span className={styles.statNum}>
                    +{teacher.experience_years}
                  </span>
                  <span className={styles.statLabel}>
                    {t("stats.experience")}
                  </span>
                </div>
              </div>

              {/* <div className={styles.statDivider} />

              <div className={styles.statBox}>
                <div className={styles.iconCircle}>
                  <Users size={16} />
                </div>
                <div className={styles.statInfo}>
                  <span className={styles.statNum}>
                    +{teacher.students_count}
                  </span>
                  <span className={styles.statLabel}>
                    {t("stats.students")}
                  </span>
                </div>
              </div>

              <div className={styles.statDivider} />

              <div className={styles.statBox}>
                <div className={styles.iconCircle}>
                  <Star size={16} />
                </div>
                <div className={styles.statInfo}>
                  <span className={styles.statNum}>
                    {teacher.rating_avg || 5.0}
                  </span>
                  <span className={styles.statLabel}>{t("stats.rating")}</span>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
