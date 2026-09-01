import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import {
    ChevronLeft,
    ChevronRight,
    BookOpen,
    Clock,
    Award,
    Globe,
    BarChart
} from "lucide-react";
import { type Course } from "@/data/courses.data";
import CourseVideoPlayer from "@/components/CourseVideoPlayer/CourseVideoPlayer";
import styles from "./CourseDetailsHeroSection.module.scss";

interface CourseDetailsHeroSectionProps {
    course: Course;
}

export default function CourseDetailsHeroSection({
    course
}: CourseDetailsHeroSectionProps) {
    const t = useTranslations("CourseDetails");
    const locale = useLocale() as "ar" | "en";
    const isAr = locale === "ar";

    const title = course.title[locale] || course.title.ar;
    const category = course.category[locale] || course.category.ar;
    const desc = course.desc[locale] || course.desc.ar;

    const metaItems = [
        {
            icon: BarChart,
            label: t("meta.level"),
            value: course.level[locale] || course.level.ar
        },
        {
            icon: Clock,
            label: t("meta.hours"),
            value: course.totalHours[locale] || course.totalHours.ar
        },
        {
            icon: Award,
            label: t("meta.certificate"),
            value: course.certificate[locale] || course.certificate.ar
        },
        {
            icon: Globe,
            label: t("meta.language"),
            value: course.language[locale] || course.language.ar
        }
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
                    <span className={styles.breadCurrent}>{title}</span>
                </nav>

                {/* Hero Grid */}
                <div className={styles.heroGrid}>
                    <div className={styles.contentCol}>
                        <div className={styles.categoryBadge}>
                            <BookOpen size={14} />
                            <span>{category}</span>
                        </div>

                        <h1 className={styles.courseTitle}>{title}</h1>
                        <p className={styles.courseDesc}>{desc}</p>

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
                        <CourseVideoPlayer
                            videoUrl={course.introVideoUrl}
                            posterImage={course.image}
                            title={title}
                            badgeText={t("videoBadge")}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}