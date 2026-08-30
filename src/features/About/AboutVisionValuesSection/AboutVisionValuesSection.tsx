import { useTranslations, useLocale } from "next-intl";
import { Compass, Target, ShieldCheck, Award, HeartHandshake, CheckCircle2 } from "lucide-react";
import { coreValuesData } from "@/data/about.data";
import styles from "./AboutVisionValuesSection.module.scss";

export default function AboutVisionValuesSection() {
    const t = useTranslations("AboutVisionValues");
    const locale = useLocale() as "ar" | "en";

    const getIcon = (iconName: string) => {
        switch (iconName) {
            case "ShieldCheck":
                return <ShieldCheck size={20} />;
            case "Award":
                return <Award size={20} />;
            case "Target":
                return <Target size={20} />;
            case "HeartHandshake":
                return <HeartHandshake size={20} />;
            default:
                return <CheckCircle2 size={20} />;
        }
    };

    return (
        <section className={styles.visionValuesSection}>
            <div className="container">
                {/* Section Header */}
                <div className={styles.headerWrapper}>
                    <div className={styles.sectionBadge}>
                        <span>{t("sectionBadge")}</span>
                    </div>
                    <h2 className={styles.sectionTitle}>{t("sectionTitle")}</h2>
                    <p className={styles.sectionDesc}>{t("sectionDesc")}</p>
                </div>

                {/* Top Row: Vision & Mission (2 Columns) */}
                <div className={styles.visionMissionGrid}>
                    {/* Vision Card */}
                    <div className={`${styles.mainCard} ${styles.visionCard}`}>
                        <div className={styles.cardTop}>
                            <div className={styles.iconWrapper}>
                                <Compass size={22} />
                            </div>
                            <span className={styles.badgeLabel}>{t("visionBadge")}</span>
                        </div>
                        <h3 className={styles.cardTitle}>{t("visionTitle")}</h3>
                        <p className={styles.cardDesc}>{t("visionDesc")}</p>
                    </div>

                    {/* Mission Card */}
                    <div className={`${styles.mainCard} ${styles.missionCard}`}>
                        <div className={styles.cardTop}>
                            <div className={styles.iconWrapper}>
                                <Target size={22} />
                            </div>
                            <span className={styles.badgeLabel}>{t("missionBadge")}</span>
                        </div>
                        <h3 className={styles.cardTitle}>{t("missionTitle")}</h3>
                        <p className={styles.cardDesc}>{t("missionDesc")}</p>
                    </div>
                </div>

                {/* Bottom Row: Core Values Heading & 4 Bento Cards */}
                <div className={styles.valuesWrapper}>
                    <h3 className={styles.valuesSubheading}>{t("valuesHeading")}</h3>

                    <div className={styles.valuesGrid}>
                        {coreValuesData.map((item) => (
                            <div key={item.id} className={styles.valueCard}>
                                <div className={styles.iconBox}>
                                    {getIcon(item.iconName)}
                                </div>
                                <h4 className={styles.valueTitle}>
                                    {item.title[locale] || item.title.ar}
                                </h4>
                                <p className={styles.valueDesc}>
                                    {item.desc[locale] || item.desc.ar}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}