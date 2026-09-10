import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Users, Briefcase } from "lucide-react";
import { type Teacher } from "@/data/teachers.data";
import styles from "./TeacherCard.module.scss";

interface TeacherCardProps {
    teacher: Teacher;
    showApplyBtn?: boolean;
}

export default function TeacherCard({ teacher, showApplyBtn = false }: TeacherCardProps) {
    const locale = useLocale() as "ar" | "en";
    const tCommon = useTranslations("TeacherCardCommon");

    return (
        <div className={styles.teacherCard}>
            <div className={styles.imageContainer}>
                <div className={styles.imageRing}>
                    <Image
                        src={teacher.image}
                        alt={teacher.name[locale] || teacher.name.ar}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className={styles.teacherImg}
                    />
                </div>
                <div className={styles.categoryBadge}>
                    {teacher.category[locale] || teacher.category.ar}
                </div>
            </div>

            <div className={styles.cardContent}>
                <h3 className={styles.teacherName}>
                    {teacher.name[locale] || teacher.name.ar}
                </h3>
                <p className={styles.teacherRole}>
                    {teacher.role[locale] || teacher.role.ar}
                </p>

                <div className={styles.quickStats}>
                    <div className={styles.statPill}>
                        <Briefcase size={14} />
                        <span>
                            {teacher.experienceYears}+ {tCommon("experienceLabel")}
                        </span>
                    </div>
                    <div className={styles.statPill}>
                        <Users size={14} />
                        <span>
                            {teacher.studentsCount}+ {tCommon("studentsCount")}
                        </span>
                    </div>
                </div>

                <div className={`${styles.cardFooter} ${showApplyBtn ? styles.dualActions : ""}`}>
                    <Link
                        href={`/teachers/${teacher.id}`}
                        className={styles.profileBtn}
                    >
                        <span>{tCommon("viewProfile")}</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}