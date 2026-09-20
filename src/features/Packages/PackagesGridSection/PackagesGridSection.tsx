"use client";

import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { Coins } from "lucide-react";
import PackageCard from "@/components/PackageCard/PackageCard";
import { ApiPackage, ApiCurrency } from "@/app/[locale]/packages/type";
import styles from "./PackagesGridSection.module.scss";

interface PackagesGridSectionProps {
  packages: ApiPackage[];
  currencies: ApiCurrency[];
}

export default function PackagesGridSection({
  packages,
  currencies,
}: PackagesGridSectionProps) {
  const t = useTranslations("PackagesGrid");

  const [currencyCode, setCurrencyCode] = useState<string>(
    currencies[0]?.code ?? "EGP",
  );

  const activeCurrency = useMemo(
    () => currencies.find((c) => c.code === currencyCode) ?? null,
    [currencies, currencyCode],
  );

  const rate = activeCurrency?.rate || 1;

  const convertPrice = (value: string | null): number | null => {
    if (value === null) return null;
    const numeric = Number(value);
    if (Number.isNaN(numeric)) return null;
    return numeric / rate;
  };

  return (
    <section className={styles.packagesGridSection}>
      <div className="container">
        <div className={styles.currencyControlBar}>
          <div className={styles.currencySwitcher}>
            <div className={styles.switcherIcon}>
              <Coins size={16} />
              <span>{t("currencyLabel")}</span>
            </div>
            {currencies.map((c) => (
              <button
                key={c.id}
                type="button"
                className={`${styles.currencyBtn} ${currencyCode === c.code ? styles.active : ""}`}
                onClick={() => setCurrencyCode(c.code)}
              >
                {c.name} {c.code}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.cardsGrid}>
          {packages.map((pkg) => (
            <PackageCard
              key={pkg.id}
              packageItem={pkg}
              currencyCode={activeCurrency?.code ?? currencyCode}
              price={convertPrice(pkg.price)}
              discountPrice={convertPrice(pkg.discount_price)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
