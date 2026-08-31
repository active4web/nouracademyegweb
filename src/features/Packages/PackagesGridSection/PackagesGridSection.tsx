"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Coins } from "lucide-react";
import { featuredPackages } from "@/data/packages.data";
import styles from "./PackagesGridSection.module.scss";
import PackageCard from "@/components/PackageCard/PackageCard";

export default function PackagesGridSection() {
    const t = useTranslations("PackagesGrid");
    const [currency, setCurrency] = useState<"EGP" | "USD">("EGP");

    return (
        <section className={styles.packagesGridSection}>
            <div className="container">
                {/* Currency Switcher */}
                <div className={styles.currencyControlBar}>
                    <div className={styles.currencySwitcher}>
                        <div className={styles.switcherIcon}>
                            <Coins size={16} />
                            <span>{t("currencyLabel")}</span>
                        </div>
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

                {/* Cards Grid (4 Columns) */}
                <div className={styles.cardsGrid}>
                    {featuredPackages.map((pkg) => (
                        <PackageCard key={pkg.id} packageItem={pkg} currency={currency} />
                    ))}
                </div>
            </div>
        </section>
    );
}