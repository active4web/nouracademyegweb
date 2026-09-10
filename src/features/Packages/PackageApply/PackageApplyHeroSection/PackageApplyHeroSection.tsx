import { getTranslations } from "next-intl/server";
import { Sparkles } from "lucide-react";
import styles from "./PackageApplyHeroSection.module.scss";

export default async function PackageApplyHeroSection() {
    const t = await getTranslations("PackageApplyHero");

    return (
        <section className={styles.heroSection}>
            <div className="container">
                <div className={styles.headerWrapper}>
                    <div className={styles.badge}>
                        <Sparkles size={15} />
                        <span>{t("badge")}</span>
                    </div>
                    <h1 className={styles.mainTitle}>{t("mainTitle")}</h1>
                    <p className={styles.leadDesc}>{t("description")}</p>
                </div>
            </div>
        </section>
    );
}
