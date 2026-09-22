import { useTranslations } from "next-intl";
import { Mail, Phone, MessageCircle, MapPin, IdCard } from "lucide-react";
import { ApiUserProfile } from "@/app/[locale]/profile/type";
import styles from "./UserContactInfoSection.module.scss";

interface UserContactInfoSectionProps {
  user: ApiUserProfile;
}

export default function UserContactInfoSection({
  user,
}: UserContactInfoSectionProps) {
  const t = useTranslations("UserProfile.contactSection");

  const items = [
    { key: "code", icon: IdCard, label: t("code"), value: user.code },
    { key: "email", icon: Mail, label: t("email"), value: user.email },
    { key: "phone", icon: Phone, label: t("phone"), value: user.phone },
    {
      key: "whatsapp",
      icon: MessageCircle,
      label: t("whatsapp"),
      value: user.whatsapp,
    },
    { key: "country", icon: MapPin, label: t("country"), value: user.country },
  ].filter((item) => item.value);

  if (items.length === 0) return null;

  return (
    <section className={styles.contactSection}>
      <div className="container">
        <div className={styles.cardBlock}>
          <div className={styles.cardHeader}>
            <div className={styles.iconCircle}>
              <IdCard size={18} />
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
