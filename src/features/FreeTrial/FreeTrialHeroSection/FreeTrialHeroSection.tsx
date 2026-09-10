import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./FreeTrialHeroSection.module.scss";

export default function FreeTrialHeroSection() {
    const t = useTranslations("FreeTrial");
    const locale = useLocale() as "ar" | "en";
    const isAr = locale === "ar";

    return (
        <section className={styles.heroSection}>
            <div className="container">
                {/* Breadcrumbs */}
                <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
                    <Link href="/" className={styles.breadLink}>
                        {t("breadcrumbHome")}
                    </Link>
                    {isAr ? (
                        <ChevronLeft size={14} className={styles.breadIcon} />
                    ) : (
                        <ChevronRight size={14} className={styles.breadIcon} />
                    )}
                    <span className={styles.breadCurrent}>{t("breadcrumbCurrent")}</span>
                </nav>

                <div className={styles.headerWrapper}>
                    <div className={styles.badge}>
                        <Sparkles size={15} />
                        <span>{t("badge")}</span>
                    </div>
                    <h1 className={styles.mainTitle}>{t("heroTitle")}</h1>
                    <p className={styles.leadDesc}>{t("heroDesc")}</p>
                </div>
            </div>
        </section>
    );
}
