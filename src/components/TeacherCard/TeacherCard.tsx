import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Users, Briefcase } from "lucide-react";
import { ApiTeacher } from "@/app/[locale]/teachers/type";
import styles from "./TeacherCard.module.scss";

interface TeacherCardProps {
  teacher: ApiTeacher;
  showApplyBtn?: boolean;
}

export default function TeacherCard({
  teacher,
  showApplyBtn = false,
}: TeacherCardProps) {
  const tCommon = useTranslations("TeacherCardCommon");

  const categoryName = teacher.categories[0]?.name ?? "";

  return (
    <div className={styles.teacherCard}>
      <div className={styles.imageContainer}>
        <div className={styles.imageRing}>
          <Image
            src={teacher.image ?? "/image-default.png"}
            alt={teacher.display_name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className={styles.teacherImg}
          />
        </div>
        {categoryName && (
          <div className={styles.categoryBadge}>{categoryName}</div>
        )}
      </div>

      <div className={styles.cardContent}>
        <h3 className={styles.teacherName}>{teacher.display_name}</h3>
        <p className={styles.teacherRole}>{teacher.role}</p>

        <div className={styles.quickStats}>
          <div className={styles.statPill}>
            <Briefcase size={14} />
            <span>
              {teacher.experience_years}+ {tCommon("experienceLabel")}
            </span>
          </div>
          <div className={styles.statPill}>
            <Users size={14} />
            <span>
              {teacher.students_count}+ {tCommon("studentsCount")}
            </span>
          </div>
        </div>

        <div
          className={`${styles.cardFooter} ${showApplyBtn ? styles.dualActions : ""}`}
        >
          <Link href={`/teachers/${teacher.id}`} className={styles.profileBtn}>
            <span>{tCommon("viewProfile")}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
