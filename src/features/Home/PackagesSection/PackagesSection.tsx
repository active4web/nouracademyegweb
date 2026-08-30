"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Check, ArrowRight, MessageCircle, Layers } from "lucide-react";
import { featuredPackages } from "@/data/packages.data";
import styles from "./PackagesSection.module.scss";

type CurrencyType = "EGP" | "USD";

export default function PackagesSection() {
    const t = useTranslations("Packages");
    const locale = useLocale() as "ar" | "en";
    const [currency, setCurrency] = useState<CurrencyType>("EGP");

    return (
        <section className={styles.packagesSection}>
            <div className="container">
                <div className={styles.headerWrapper}>
                    <div className={styles.sectionBadge}>
                        <span>{t("sectionBadge")}</span>
                    </div>
                    <h2 className={styles.sectionTitle}>{t("sectionTitle")}</h2>
                    <p className={styles.sectionDesc}>{t("sectionDesc")}</p>

                    <div className={styles.currencySwitcher}>
                        <button
                            type="button"
                            className={`${styles.currencyBtn} ${currency === "EGP" ? styles.active : ""}`}
                            onClick={() => setCurrency("EGP")}
                        >
                            {t("currencyEgp")}
                        </button>
                        <button
                            type="button"
                            className={`${styles.currencyBtn} ${currency === "USD" ? styles.active : ""}`}
                            onClick={() => setCurrency("USD")}
                        >
                            {t("currencyUsd")}
                        </button>
                    </div>
                </div>

                <div className={styles.packagesGrid}>
                    {featuredPackages.map((pkg) => (
                        <div
                            key={pkg.id}
                            className={`${styles.packageCard} ${pkg.isPopular ? styles.popularCard : ""}`}
                        >
                            {pkg.isPopular && (
                                <div className={styles.popularBadge}>
                                    <span>{t("popularBadge")}</span>
                                </div>
                            )}

                            <div className={styles.cardHeader}>
                                <h3 className={styles.packageName}>
                                    {pkg.name[locale] || pkg.name.ar}
                                </h3>
                                <p className={styles.packageDesc}>
                                    {pkg.desc[locale] || pkg.desc.ar}
                                </p>

                                <div className={styles.priceRow}>
                                    <span className={styles.currencySymbol}>
                                        {currency === "USD" ? "$" : "ج.م "}
                                    </span>
                                    <span className={styles.priceAmount}>
                                        {pkg.price[currency]}
                                    </span>
                                    <span className={styles.perMonth}>{t("perMonth")}</span>
                                </div>

                                <div className={styles.sessionMeta}>
                                    <strong>{pkg.monthlySessions} {t("sessionsCountLabel")}</strong>
                                    <span>({pkg.sessionDuration[locale] || pkg.sessionDuration.ar})</span>
                                </div>
                            </div>

                            <div className={styles.featuresList}>
                                {pkg.features.map((feat, idx) => (
                                    <div key={idx} className={styles.featureItem}>
                                        <div className={styles.checkIcon}>
                                            <Check size={13} strokeWidth={3} />
                                        </div>
                                        <span>{feat[locale] || feat.ar}</span>
                                    </div>
                                ))}
                            </div>

                            <div className={styles.cardFooter}>
                                <Link
                                    href={`/packages/${pkg.id}/apply?currency=${currency}`}
                                    className={`${styles.subscribeBtn} ${pkg.isPopular ? styles.popularBtn : ""}`}
                                >
                                    <span>{t("subscribeBtn")}</span>
                                    <ArrowRight size={15} className={styles.arrowIcon} />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.customPlanBanner}>
                    <div className={styles.bannerInfo}>
                        <p>{t("customPlanText")}</p>
                        <Link href="/contact" className={styles.contactSalesBtn}>
                            <MessageCircle size={15} />
                            <span>{t("contactSales")}</span>
                        </Link>
                    </div>

                    <Link href="/packages" className={styles.allPackagesBtn}>
                        <Layers size={16} />
                        <span>{t("viewAllPackages")}</span>
                        <ArrowRight size={15} className={styles.arrowIcon} />
                    </Link>
                </div>
            </div>
        </section>
    );
}