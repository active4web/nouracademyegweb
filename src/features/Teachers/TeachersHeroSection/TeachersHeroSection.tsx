import { getTranslations } from "next-intl/server";
import { Sparkles, GraduationCap, Award, Users } from "lucide-react";
import styles from "./TeachersHeroSection.module.scss";

export default async function TeachersHeroSection() {
    const t = await getTranslations("TeachersHero");

    return (
        <section className={styles.teachersHeroSection}>
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
                            <GraduationCap size={16} />
                            <span>{t("trust1")}</span>
                        </div>
                        <div className={styles.trustItem}>
                            <Award size={16} />
                            <span>{t("trust2")}</span>
                        </div>
                        <div className={styles.trustItem}>
                            <Users size={16} />
                            <span>{t("trust3")}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}