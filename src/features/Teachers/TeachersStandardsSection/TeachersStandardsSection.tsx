import { getTranslations } from "next-intl/server";
import { Award, CheckCircle2, GraduationCap, ShieldCheck } from "lucide-react";
import styles from "./TeachersStandardsSection.module.scss";

export default async function TeachersStandardsSection() {
    const t = await getTranslations("TeachersStandards");

    return (
        <section className={styles.standardsSection}>
            <div className="container">
                <div className={styles.headerWrapper}>
                    <div className={styles.sectionBadge}>
                        <Award size={15} />
                        <span>{t("badge")}</span>
                    </div>
                    <h2 className={styles.sectionTitle}>{t("mainTitle")}</h2>
                    <p className={styles.sectionDesc}>{t("description")}</p>
                </div>

                <div className={styles.standardsGrid}>
                    <div className={styles.standardCard}>
                        <div className={styles.iconBox}>
                            <GraduationCap size={24} />
                        </div>
                        <h3 className={styles.cardTitle}>{t("card1Title")}</h3>
                        <p className={styles.cardDesc}>{t("card1Desc")}</p>
                    </div>

                    <div className={styles.standardCard}>
                        <div className={styles.iconBox}>
                            <ShieldCheck size={24} />
                        </div>
                        <h3 className={styles.cardTitle}>{t("card2Title")}</h3>
                        <p className={styles.cardDesc}>{t("card2Desc")}</p>
                    </div>

                    <div className={styles.standardCard}>
                        <div className={styles.iconBox}>
                            <CheckCircle2 size={24} />
                        </div>
                        <h3 className={styles.cardTitle}>{t("card3Title")}</h3>
                        <p className={styles.cardDesc}>{t("card3Desc")}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}