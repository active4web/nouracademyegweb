"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Sparkles, Clock, Calendar, ArrowRight, ChevronDown, Plus } from "lucide-react";
import { type PackagePlan } from "@/data/packages.data";
import styles from "./PackageCard.module.scss";

interface PackageCardProps {
    packageItem: PackagePlan;
    currency: "EGP" | "USD";
}

export default function PackageCard({ packageItem, currency }: PackageCardProps) {
    const t = useTranslations("PackagesGrid");
    const locale = useLocale() as "ar" | "en";
    const [isExpanded, setIsExpanded] = useState(false);

    const currentPrice = packageItem.price[currency];
    const currencySymbol = currency === "EGP" ? (locale === "ar" ? "ج.م" : "EGP") : "$";
    const hasExtendedFeatures = Boolean(packageItem.extendedFeatures && packageItem.extendedFeatures.length > 0);

    return (
        <div className={`${styles.packageCard} ${packageItem.isPopular ? styles.featured : ""}`}>
            {packageItem.isPopular && (
                <div className={styles.popularBadge}>
                    <Sparkles size={13} />
                    <span>{t("mostPopular")}</span>
                </div>
            )}

            <div className={styles.cardHeader}>
                <h3 className={styles.packageTitle}>
                    {packageItem.name[locale] || packageItem.name.ar}
                </h3>
                <p className={styles.packageDesc}>
                    {packageItem.desc[locale] || packageItem.desc.ar}
                </p>

                <div className={styles.priceContainer}>
                    <div className={styles.priceRow}>
                        <span className={styles.currencySymbol}>{currencySymbol}</span>
                        <span className={styles.priceValue}>{currentPrice}</span>
                        <span className={styles.pricePeriod}>{t("perMonth")}</span>
                    </div>
                </div>

                <div className={styles.quickSpecs}>
                    <div className={styles.specItem}>
                        <Calendar size={15} />
                        <span>
                            {packageItem.sessionsPerWeek} {t("sessionsPerWeekLabel")} ({packageItem.monthlySessions} {t("sessionsCount")})
                        </span>
                    </div>
                    <div className={styles.specItem}>
                        <Clock size={15} />
                        <span>{packageItem.sessionDuration[locale] || packageItem.sessionDuration.ar}</span>
                    </div>
                </div>
            </div>

            <div className={styles.cardBody}>
                <p className={styles.featuresHeading}>{t("featuresTitle")}</p>
                <ul className={styles.featuresList}>
                    {packageItem.features.map((feature, idx) => (
                        <li key={idx} className={styles.featureItem}>
                            <div className={styles.checkIcon}>
                                <Check size={14} />
                            </div>
                            <span>{feature[locale] || feature.ar}</span>
                        </li>
                    ))}
                </ul>

                {hasExtendedFeatures && (
                    <div className={styles.expandableWrapper}>
                        <button
                            type="button"
                            className={`${styles.toggleFeaturesBtn} ${isExpanded ? styles.active : ""}`}
                            onClick={() => setIsExpanded((prev) => !prev)}
                            aria-expanded={isExpanded}
                        >
                            <span>{isExpanded ? t("showLess") : t("showMore")}</span>
                            <ChevronDown size={15} className={styles.toggleChevron} />
                        </button>

                        <AnimatePresence initial={false}>
                            {isExpanded && (
                                <motion.div
                                    key="extended-content"
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.22, ease: "easeInOut" }}
                                    className={styles.extendedContainer}
                                >
                                    <ul className={styles.extendedList}>
                                        {packageItem.extendedFeatures?.map((extra, idx) => (
                                            <li key={idx} className={styles.extraItem}>
                                                <div className={styles.plusIcon}>
                                                    <Plus size={13} />
                                                </div>
                                                <span>{extra[locale] || extra.ar}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                )}
            </div>

            <div className={styles.cardActions}>
                <Link href={`/packages/${packageItem.id}/apply`} className={styles.applyBtn}>
                    <span>{t("applyBtn")}</span>
                    <ArrowRight size={15} className={styles.arrowIcon} />
                </Link>
            </div>
        </div>
    );
}