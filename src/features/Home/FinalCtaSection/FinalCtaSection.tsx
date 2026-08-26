"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import styles from "./FinalCtaSection.module.scss";

export default function FinalCtaSection() {
    const t = useTranslations("FinalCta");

    return (
        <section className={styles.finalCtaSection}>
            <div className="container">
                <motion.div
                    className={styles.bannerCard}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                >
                    {/* Watermark Calligraphy & Letters */}
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
                        <Link href="/free-trial" className={styles.ctaButton}>
                            <span>{t("ctaBtn")}</span>
                            <ArrowRight size={16} className={styles.arrowIcon} />
                        </Link>
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
                </motion.div>
            </div>
        </section>
    );
}