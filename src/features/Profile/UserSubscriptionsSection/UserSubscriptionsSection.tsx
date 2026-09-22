import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Layers, PackageOpen, CalendarClock, ArrowRight } from "lucide-react";
import { ApiSubscription } from "@/app/[locale]/profile/type";
import styles from "./UserSubscriptionsSection.module.scss";

interface UserSubscriptionsSectionProps {
  subscriptions: ApiSubscription[];
}

export default function UserSubscriptionsSection({
  subscriptions,
}: UserSubscriptionsSectionProps) {
  const t = useTranslations("UserProfile.subscriptionsSection");
  const locale = useLocale();

  const formatDate = (dateStr?: string) => {
    if (!dateStr) return null;
    const date = new Date(dateStr);
    if (Number.isNaN(date.getTime())) return null;
    return new Intl.DateTimeFormat(locale, {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(date);
  };

  return (
    <section className={styles.subscriptionsSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <div className={styles.badge}>
            <Layers size={14} />
            <span>{t("badge")}</span>
          </div>
          <h2 className={styles.title}>{t("title")}</h2>
        </div>

        {subscriptions.length === 0 ? (
          <div className={styles.emptyState}>
            <PackageOpen size={32} className={styles.emptyIcon} />
            <p className={styles.emptyText}>{t("emptyText")}</p>
            <Link href="/packages" className={styles.emptyCta}>
              <span>{t("browsePackages")}</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        ) : (
          <div className={styles.subscriptionsGrid}>
            {subscriptions.map((sub) => {
              const title =
                sub.package_name ||
                sub.name ||
                (sub.package_id
                  ? `${t("packageFallbackPrefix")} #${sub.package_id}`
                  : t("subscriptionFallback"));

              const isActive = sub.status === "active";
              const startDate = formatDate(sub.start_date);
              const endDate = formatDate(sub.end_date);

              return (
                <div key={sub.id} className={styles.subscriptionCard}>
                  <div className={styles.cardTop}>
                    <div className={styles.iconCircle}>
                      <Layers size={18} />
                    </div>
                    {sub.status && (
                      <span
                        className={`${styles.statusBadge} ${
                          isActive ? styles.statusActive : ""
                        }`}
                      >
                        {sub.status}
                      </span>
                    )}
                  </div>

                  <h3 className={styles.subscriptionTitle}>{title}</h3>

                  {(startDate || endDate) && (
                    <div className={styles.dateRow}>
                      <CalendarClock size={14} />
                      <span>
                        {startDate}
                        {endDate ? ` — ${endDate}` : ""}
                      </span>
                    </div>
                  )}

                  {sub.paid_amount && (
                    <div className={styles.priceRow}>
                      <span>
                        {sub.paid_amount} {sub.currency ?? ""}
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}