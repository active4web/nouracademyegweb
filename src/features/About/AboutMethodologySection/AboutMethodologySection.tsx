import { useTranslations } from "next-intl";
import { UserCheck2, Route, BarChart3 } from "lucide-react";
import styles from "./AboutMethodologySection.module.scss";

export default function AboutMethodologySection() {
    const t = useTranslations("AboutMethodology");

    const standards = [
        {
            id: "std-1",
            number: "01",
            icon: UserCheck2,
            tag: t("step1Tag"),
            title: t("step1Title"),
            desc: t("step1Desc")
        },
        {
            id: "std-2",
            number: "02",
            icon: Route,
            tag: t("step2Tag"),
            title: t("step2Title"),
            desc: t("step2Desc")
        },
        {
            id: "std-3",
            number: "03",
            icon: BarChart3,
            tag: t("step3Tag"),
            title: t("step3Title"),
            desc: t("step3Desc")
        }
    ];

    return (
        <section className={styles.methodologySection}>
            <div className="container">
                <div className={styles.headerWrapper}>
                    <div className={styles.sectionBadge}>
                        <span>{t("sectionBadge")}</span>
                    </div>
                    <h2 className={styles.sectionTitle}>{t("sectionTitle")}</h2>
                    <p className={styles.sectionDesc}>{t("sectionDesc")}</p>
                </div>

                <div className={styles.standardsGrid}>
                    {standards.map((item) => {
                        const Icon = item.icon;
                        return (
                            <div key={item.id} className={styles.standardCard}>
                                <div className={styles.cardHeader}>
                                    <div className={styles.iconCircle}>
                                        <Icon size={20} />
                                    </div>
                                    <span className={styles.stepNumber}>{item.number}</span>
                                </div>

                                <div className={styles.tagBadge}>
                                    <span>{item.tag}</span>
                                </div>

                                <h3 className={styles.cardTitle}>{item.title}</h3>
                                <p className={styles.cardDesc}>{item.desc}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}