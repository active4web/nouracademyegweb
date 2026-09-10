"use client";

import { useTranslations } from "next-intl";
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import styles from "./PackageApplyFinalCtaSection.module.scss";

const ACADEMY_WHATSAPP_NUMBER = "201104321663";

export default function PackageApplyFinalCtaSection() {
    const t = useTranslations("PackageApplyFinalCta");

    const whatsappUrl = `https://wa.me/${ACADEMY_WHATSAPP_NUMBER}`;

    return (
        <section className={styles.finalCtaSection}>
            <div className="container">
                <div className={styles.bannerCard}>
                    <div className={styles.calligraphyPattern} aria-hidden="true">
                        <span className={styles.letterFloating}>اقْرَأْ</span>
                        <span className={styles.letterFloating}>نٓ</span>
                        <span className={styles.letterFloating}>بِسْمِ</span>
                        <span className={styles.letterFloating}>عَلَّمَ</span>
                        <span className={styles.letterFloating}>الْقُرْآنَ</span>
                        <span className={styles.letterFloating}>قٓ</span>
                        <span className={styles.letterFloating}>وَرَتِّلِ</span>
                    </div>

                    <div className={styles.badgeWrapper}>
                        <div className={styles.badge}>
                            <Sparkles size={15} />
                            <span>{t("badge")}</span>
                        </div>
                    </div>

                    <h2 className={styles.bannerTitle}>
                        {t("titleStart")}{" "}
                        <span className={styles.highlightText}>{t("titleHighlight")}</span>
                    </h2>

                    <p className={styles.bannerDesc}>{t("description")}</p>

                    <div className={styles.actions}>
                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.ctaButton}
                        >
                            <span>{t("ctaBtn")}</span>
                            <ArrowRight size={16} className={styles.arrowIcon} />
                        </a>
                    </div>

                    <div className={styles.guaranteesRow}>
                        <div className={styles.guaranteeItem}>
                            <ShieldCheck size={16} />
                            <span>{t("feature1")}</span>
                        </div>
                        <div className={styles.guaranteeItem}>
                            <CheckCircle2 size={16} />
                            <span>{t("feature2")}</span>
                        </div>
                        <div className={styles.guaranteeItem}>
                            <CheckCircle2 size={16} />
                            <span>{t("feature3")}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
