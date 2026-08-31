import { getTranslations } from "next-intl/server";
import { Sparkles, CheckCircle2, ShieldCheck, CalendarCheck } from "lucide-react";
import styles from "./PackagesHeroSection.module.scss";

export default async function PackagesHeroSection() {
    const t = await getTranslations("PackagesHero");

    return (
        <section className={styles.packagesHeroSection}>
            <div className="container">
                <div className={styles.contentWrapper}>
                    {/* Badge */}
                    <div className={styles.badge}>
                        <Sparkles size={14} />
                        <span>{t("badge")}</span>
                    </div>

                    {/* Main Title & Description */}
                    <h1 className={styles.mainTitle}>{t("mainTitle")}</h1>
                    <p className={styles.leadDesc}>{t("description")}</p>

                    {/* Trust Indicators Row */}
                    <div className={styles.trustRow}>
                        <div className={styles.trustItem}>
                            <ShieldCheck size={15} />
                            <span>{t("trust1")}</span>
                        </div>
                        <div className={styles.trustItem}>
                            <CalendarCheck size={15} />
                            <span>{t("trust2")}</span>
                        </div>
                        <div className={styles.trustItem}>
                            <CheckCircle2 size={15} />
                            <span>{t("trust3")}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}