import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Sparkles, UserPlus, ArrowRight } from "lucide-react";
import styles from "./TeacherJoinBanner.module.scss";

export default async function TeacherJoinBanner() {
    const t = await getTranslations("TeacherJoinBanner");

    return (
        <section className={styles.joinBannerSection}>
            <div className="container">
                <div className={styles.bannerCard}>
                    <div className={styles.badge}>
                        <Sparkles size={14} />
                        <span>{t("badge")}</span>
                    </div>

                    <h2 className={styles.bannerTitle}>{t("title")}</h2>
                    <p className={styles.bannerDesc}>{t("description")}</p>

                    <div className={styles.actionWrapper}>
                        <Link href="/teachers/apply" className={styles.joinBtn}>
                            <UserPlus size={17} />
                            <span>{t("joinBtn")}</span>
                            <ArrowRight size={15} className={styles.arrowIcon} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}