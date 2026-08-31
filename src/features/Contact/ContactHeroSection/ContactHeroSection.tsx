import { getTranslations } from "next-intl/server";
import { Headphones } from "lucide-react";
import styles from "./ContactHeroSection.module.scss";

export default async function ContactHeroSection() {
    const t = await getTranslations("ContactHero");

    return (
        <section className={styles.contactHeroSection}>
            <div className="container">
                <div className={styles.headerWrapper}>
                    <div className={styles.badge}>
                        <Headphones size={15} />
                        <span>{t("badge")}</span>
                    </div>
                    <h1 className={styles.mainTitle}>{t("mainTitle")}</h1>
                    <p className={styles.leadDesc}>{t("description")}</p>
                </div>
            </div>
        </section>
    );
}