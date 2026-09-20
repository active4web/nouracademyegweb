"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Clock, Calendar, ArrowRight, ChevronDown } from "lucide-react";
import { ApiPackage } from "@/app/[locale]/packages/type";
import styles from "./PackageCard.module.scss";

interface PackageCardProps {
  packageItem: ApiPackage;
  currencyCode: string;
  price: number | null;
  discountPrice: number | null;
}

const VISIBLE_FEATURES_COUNT = 4;

const formatPrice = (value: number): string =>
  Number.isInteger(value) ? String(value) : value.toFixed(2);

export default function PackageCard({
  packageItem,
  currencyCode,
  price,
  discountPrice,
}: PackageCardProps) {
  const t = useTranslations("PackagesGrid");
  const [isExpanded, setIsExpanded] = useState(false);

  const currentPrice = discountPrice ?? price;

  // مفيش sessionsPerWeek جاي من الـ API، فبنقدّرها من إجمالي عدد الحصص
  // على مدة الباقة بالأسابيع
  const weeksCount = packageItem.duration_in_days / 7;
  const sessionsPerWeek =
    weeksCount > 0
      ? Math.max(1, Math.round(packageItem.sessions_count / weeksCount))
      : packageItem.sessions_count;

  const visibleFeatures = packageItem.features.slice(0, VISIBLE_FEATURES_COUNT);
  const remainingFeatures = packageItem.features.slice(VISIBLE_FEATURES_COUNT);
  const hasMoreFeatures = remainingFeatures.length > 0;

  return (
    <div className={styles.packageCard}>
      <div className={styles.cardHeader}>
        <h3 className={styles.packageTitle}>{packageItem.name}</h3>
        <p className={styles.packageDesc}>{packageItem.description}</p>

        <div className={styles.priceContainer}>
          <div className={styles.priceRow}>
            <span className={styles.currencySymbol}>{currencyCode}</span>
            <span className={styles.priceValue}>
              {currentPrice !== null ? formatPrice(currentPrice) : "—"}
            </span>
            <span className={styles.pricePeriod}>{t("perMonth")}</span>
          </div>
        </div>

        <div className={styles.quickSpecs}>
          <div className={styles.specItem}>
            <Calendar size={15} />
            <span>
              {sessionsPerWeek} {t("sessionsPerWeekLabel")} (
              {packageItem.sessions_count} {t("sessionsCount")})
            </span>
          </div>
          <div className={styles.specItem}>
            <Clock size={15} />
            <span>
              {packageItem.duration_in_days} {t("durationDaysLabel")}
            </span>
          </div>
        </div>
      </div>

      <div className={styles.cardBody}>
        <p className={styles.featuresHeading}>{t("featuresTitle")}</p>
        <ul className={styles.featuresList}>
          {visibleFeatures.map((feature) => (
            <li key={feature.id} className={styles.featureItem}>
              <div className={styles.checkIcon}>
                <Check size={14} />
              </div>
              <span>{feature.description}</span>
            </li>
          ))}

          <AnimatePresence initial={false}>
            {isExpanded &&
              remainingFeatures.map((feature) => (
                <motion.li
                  key={feature.id}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.22, ease: "easeInOut" }}
                  className={styles.featureItem}
                >
                  <div className={styles.checkIcon}>
                    <Check size={14} />
                  </div>
                  <span>{feature.description}</span>
                </motion.li>
              ))}
          </AnimatePresence>
        </ul>

        {hasMoreFeatures && (
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
          </div>
        )}
      </div>

      <div className={styles.cardActions}>
        <Link
          href={`/packages/${packageItem.id}/apply?currency=${currencyCode}`}
          className={styles.applyBtn}
        >
          <span>{t("applyBtn")}</span>
          <ArrowRight size={15} className={styles.arrowIcon} />
        </Link>
      </div>
    </div>
  );
}
