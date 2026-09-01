import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import {
    ChevronLeft,
    ChevronRight,
    Briefcase,
    Users,
    Star,
    MessageCircle,
    ArrowRight,
    CheckCircle2
} from "lucide-react";
import { type Teacher } from "@/data/teachers.data";
import styles from "./TeacherProfileHeader.module.scss";

interface TeacherProfileHeaderProps {
    teacher: Teacher;
}

export default function TeacherProfileHeader({ teacher }: TeacherProfileHeaderProps) {
    const t = useTranslations("TeacherProfile");
    const locale = useLocale() as "ar" | "en";
    const isAr = locale === "ar";

    const name = teacher.name[locale] || teacher.name.ar;
    const role = teacher.role[locale] || teacher.role.ar;
    const category = teacher.category[locale] || teacher.category.ar;
    const bio = teacher.bio[locale] || teacher.bio.ar;

    const whatsappMessage = encodeURIComponent(
        `السلام عليكم، أود الاستفسار وحجز حصة تجريبية مع المعلم: (${name})`
    );
    const whatsappUrl = `https://wa.me/201000000000?text=${whatsappMessage}`;

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
                    <span className={styles.breadCurrent}>{name}</span>
                </nav>

                <div className={styles.profileCard}>
                    {/* الصورة والشارات */}
                    <div className={styles.imageCol}>
                        <div className={styles.avatarWrapper}>
                            <Image
                                src={teacher.image}
                                alt={name}
                                fill
                                priority
                                sizes="(max-width: 768px) 180px, 220px"
                                className={styles.avatarImg}
                            />
                        </div>
                        <div className={styles.categoryBadge}>{category}</div>
                    </div>

                    {/* المحتوى والبيانات الأساسية */}
                    <div className={styles.infoCol}>
                        <div className={styles.verifiedTag}>
                            <CheckCircle2 size={15} />
                            <span>{t("verifiedBadge")}</span>
                        </div>

                        <h1 className={styles.teacherName}>{name}</h1>
                        <p className={styles.teacherRole}>{role}</p>
                        <p className={styles.teacherBio}>{bio}</p>

                        {/* شريط الإحصائيات */}
                        <div className={styles.statsRow}>
                            <div className={styles.statBox}>
                                <div className={styles.iconCircle}>
                                    <Briefcase size={16} />
                                </div>
                                <div className={styles.statInfo}>
                                    <span className={styles.statNum}>+{teacher.experienceYears}</span>
                                    <span className={styles.statLabel}>{t("stats.experience")}</span>
                                </div>
                            </div>

                            <div className={styles.statDivider} />

                            <div className={styles.statBox}>
                                <div className={styles.iconCircle}>
                                    <Users size={16} />
                                </div>
                                <div className={styles.statInfo}>
                                    <span className={styles.statNum}>+{teacher.studentsCount}</span>
                                    <span className={styles.statLabel}>{t("stats.students")}</span>
                                </div>
                            </div>

                            <div className={styles.statDivider} />

                            <div className={styles.statBox}>
                                <div className={styles.iconCircle}>
                                    <Star size={16} />
                                </div>
                                <div className={styles.statInfo}>
                                    <span className={styles.statNum}>{teacher.rating || 5.0}</span>
                                    <span className={styles.statLabel}>{t("stats.rating")}</span>
                                </div>
                            </div>
                        </div>

                        {/* أزرار الإجراء السريع */}
                        <div className={styles.actionsRow}>
                            <Link
                                href={`/free-trial?teacher=${teacher.id}`}
                                className={styles.bookBtn}
                            >
                                <span>{t("actions.bookTrial")}</span>
                                <ArrowRight size={16} className={styles.arrowIcon} />
                            </Link>

                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.whatsappBtn}
                            >
                                <MessageCircle size={18} />
                                <span>{t("actions.whatsapp")}</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}