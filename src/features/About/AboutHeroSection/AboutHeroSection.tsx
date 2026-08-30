import { useTranslations } from "next-intl";
import { Sparkles } from "lucide-react";
import styles from "./AboutHeroSection.module.scss";

export default function AboutHeroSection() {
    const t = useTranslations("AboutHero");

    const stats = [
        { count: t("stat1Count"), label: t("stat1Label") },
        { count: t("stat2Count"), label: t("stat2Label") },
        { count: t("stat3Count"), label: t("stat3Label") }
    ];

    return (
        <section className={styles.aboutHeroSection}>
            <div className="container">
                <div className={styles.contentWrapper}>
                    <div className={styles.badge}>
                        <Sparkles size={14} />
                        <span>{t("badge")}</span>
                    </div>

                    <h1 className={styles.mainTitle}>{t("mainTitle")}</h1>

                    <p className={styles.leadText}>{t("leadText")}</p>

                    <p className={styles.storyParagraph}>{t("storyParagraph")}</p>

                    <div className={styles.statsStrip}>
                        {stats.map((stat, idx) => (
                            <div key={idx} className={styles.statItem}>
                                <span className={styles.statCount}>{stat.count}</span>
                                <span className={styles.statLabel}>{stat.label}</span>
                                {idx < stats.length - 1 && <div className={styles.divider} />}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}