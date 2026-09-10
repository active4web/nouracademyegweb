"use client";

import { useTranslations } from "next-intl";
import { Sparkles, ShieldCheck, CheckCircle2 } from "lucide-react";
import styles from "./FreeTrialFinalCtaSection.module.scss";

export default function FreeTrialFinalCtaSection() {
    const t = useTranslations("FreeTrial");

    return (
        <section className={styles.finalCtaSection}>
            <div className="container">
                <div className={styles.bannerCard}>
                    <div className={styles.calligraphyPattern} aria-hidden="true">
                        <span className={styles.letterFloating}>تَعَلَّمْ</span>
                        <span className={styles.letterFloating}>نٓ</span>
                        <span className={styles.letterFloating}>خَيْرُكُمْ</span>
                        <span className={styles.letterFloating}>وَرَتِّلِ</span>
                        <span className={styles.letterFloating}>الْقُرْآنَ</span>
                        <span className={styles.letterFloating}>قٓ</span>
                        <span className={styles.letterFloating}>الْقُرْآنِ</span>
                    </div>

                    <div className={styles.badgeWrapper}>
                        <div className={styles.badge}>
                            <Sparkles size={15} />
                            <span>{t("finalCtaBadge")}</span>
                        </div>
                    </div>

                    <h2 className={styles.bannerTitle}>
                        {t("finalCtaTitleStart")}{" "}
                        <span className={styles.highlightText}>{t("finalCtaTitleHighlight")}</span>
                    </h2>

                    <p className={styles.bannerDesc}>{t("finalCtaDesc")}</p>

                    <div className={styles.guaranteesRow}>
                        <div className={styles.guaranteeItem}>
                            <ShieldCheck size={16} />
                            <span>{t("finalFeature1")}</span>
                        </div>
                        <div className={styles.guaranteeItem}>
                            <CheckCircle2 size={16} />
                            <span>{t("finalFeature2")}</span>
                        </div>
                        <div className={styles.guaranteeItem}>
                            <CheckCircle2 size={16} />
                            <span>{t("finalFeature3")}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
