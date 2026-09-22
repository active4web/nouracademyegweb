import { useTranslations } from "next-intl";
import { Shield, Mail, Phone, MessageCircle } from "lucide-react";
import { ApiUserProfile } from "@/app/[locale]/profile/type";
import styles from "./UserGuardianInfoSection.module.scss";

interface UserGuardianInfoSectionProps {
  user: ApiUserProfile;
}

export default function UserGuardianInfoSection({
  user,
}: UserGuardianInfoSectionProps) {
  const t = useTranslations("UserProfile.guardianSection");

  const items = [
    {
      key: "parentPhone",
      icon: Phone,
      label: t("parentPhone"),
      value: user.parent_phone,
    },
    {
      key: "parentWhatsapp",
      icon: MessageCircle,
      label: t("parentWhatsapp"),
      value: user.parent_whatsapp,
    },
    {
      key: "parentEmail",
      icon: Mail,
      label: t("parentEmail"),
      value: user.parent_email,
    },
  ].filter((item) => item.value);

  if (items.length === 0) return null;

  return (
    <section className={styles.guardianSection}>
      <div className="container">
        <div className={styles.cardBlock}>
          <div className={styles.cardHeader}>
            <div className={styles.iconCircle}>
              <Shield size={18} />
            </div>
            <h2 className={styles.sectionTitle}>{t("title")}</h2>
          </div>

          <div className={styles.infoGrid}>
            {items.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.key} className={styles.infoItem}>
                  <div className={styles.itemIconCircle}>
                    <Icon size={16} />
                  </div>
                  <div className={styles.itemText}>
                    <span className={styles.itemLabel}>{item.label}</span>
                    <span className={styles.itemValue}>{item.value}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
