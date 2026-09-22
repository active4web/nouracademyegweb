import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  BadgeCheck,
  Globe2,
  CalendarDays,
  Layers,
} from "lucide-react";
import { ApiUserProfile } from "@/app/[locale]/profile/type";
import styles from "./UserProfileHeader.module.scss";

interface UserProfileHeaderProps {
  user: ApiUserProfile;
}

export default function UserProfileHeader({ user }: UserProfileHeaderProps) {
  const t = useTranslations("UserProfile");
  const locale = useLocale() as "ar" | "en";
  const isAr = locale === "ar";

  const joinedDate = user.created_at
    ? new Date(user.created_at).toLocaleDateString(isAr ? "ar-EG" : "en-US", {
        year: "numeric",
        month: "long",
      })
    : null;

  const subscriptionsCount = user.subscriptions?.length ?? 0;

  return (
    <section className={styles.headerSection}>
      <div className="container">
        {/* Breadcrumbs */}
        <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
          <Link href="/" className={styles.breadLink}>
            {t("breadcrumbs.home")}
          </Link>
          {isAr ? (
            <ChevronLeft size={14} className={styles.breadIcon} />
          ) : (
            <ChevronRight size={14} className={styles.breadIcon} />
          )}
          <span className={styles.breadCurrent}>
            {t("breadcrumbs.profile")}
          </span>
        </nav>

        <div className={styles.profileCard}>
          {/* الصورة وكود الطالب */}
          <div className={styles.imageCol}>
            <div className={styles.avatarWrapper}>
              <Image
                src={user.image ?? "/image-default.png"}
                alt={user.name}
                fill
                priority
                sizes="(max-width: 768px) 140px, 180px"
                className={styles.avatarImg}
              />
            </div>
            <div className={styles.codeBadge}>
              <BadgeCheck size={14} />
              <span>{user.code}</span>
            </div>
          </div>

          {/* المحتوى والبيانات الأساسية */}
          <div className={styles.infoCol}>
            {user.email_verified_at && (
              <div className={styles.verifiedTag}>
                <CheckCircle2 size={15} />
                <span>{t("verifiedBadge")}</span>
              </div>
            )}

            <h1 className={styles.userName}>{user.name}</h1>
            <p className={styles.userRole}>{t("studentLabel")}</p>

            {/* شريط الإحصائيات */}
            <div className={styles.statsRow}>
              <div className={styles.statBox}>
                <div className={styles.iconCircle}>
                  <Globe2 size={16} />
                </div>
                <div className={styles.statInfo}>
                  <span className={styles.statNum}>{user.country}</span>
                  <span className={styles.statLabel}>{t("stats.country")}</span>
                </div>
              </div>

              {joinedDate && (
                <>
                  <div className={styles.statDivider} />
                  <div className={styles.statBox}>
                    <div className={styles.iconCircle}>
                      <CalendarDays size={16} />
                    </div>
                    <div className={styles.statInfo}>
                      <span className={styles.statNum}>{joinedDate}</span>
                      <span className={styles.statLabel}>
                        {t("stats.memberSince")}
                      </span>
                    </div>
                  </div>
                </>
              )}

              <div className={styles.statDivider} />

              <div className={styles.statBox}>
                <div className={styles.iconCircle}>
                  <Layers size={16} />
                </div>
                <div className={styles.statInfo}>
                  <span className={styles.statNum}>{subscriptionsCount}</span>
                  <span className={styles.statLabel}>
                    {t("stats.subscriptions")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
