import { getTranslations, getLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Sparkles, ArrowRight } from "lucide-react";
import { packagesComparisonData } from "@/data/packages.data";
import styles from "./PackagesComparisonSection.module.scss";

export default async function PackagesComparisonSection() {
    const t = await getTranslations("PackagesComparison");
    const locale = (await getLocale()) as "ar" | "en";

    return (
        <section className={styles.comparisonSection}>
            <div className="container">
                {/* Section Header */}
                <div className={styles.sectionHeader}>
                    <div className={styles.badge}>
                        <Sparkles size={14} />
                        <span>{t("badge")}</span>
                    </div>
                    <h2 className={styles.sectionTitle}>{t("title")}</h2>
                    <p className={styles.sectionDesc}>{t("description")}</p>
                </div>

                {/* Responsive Table Wrapper */}
                <div className={styles.tableWrapper}>
                    <table className={styles.comparisonTable}>
                        <thead>
                            <tr>
                                <th className={styles.featureCol}>{t("featureColumn")}</th>
                                <th className={styles.planCol}>{t("planStarter")}</th>
                                <th className={`${styles.planCol} ${styles.popularCol}`}>
                                    <div className={styles.colHeaderWrapper}>
                                        <span>{t("planStandard")}</span>
                                    </div>
                                </th>
                                <th className={styles.planCol}>{t("planIntensive")}</th>
                                <th className={styles.planCol}>{t("planIjazah")}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {packagesComparisonData.map((row, index) => (
                                <tr key={index}>
                                    <td className={styles.featureName}>
                                        {row.featureTitle[locale] || row.featureTitle.ar}
                                    </td>
                                    <td>{row.starter[locale] || row.starter.ar}</td>
                                    <td className={styles.popularCol}>
                                        {row.standard[locale] || row.standard.ar}
                                    </td>
                                    <td>{row.intensive[locale] || row.intensive.ar}</td>
                                    <td>{row.ijazah[locale] || row.ijazah.ar}</td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td className={styles.featureName}></td>
                                <td>
                                    <Link href="/packages/starter-foundation/apply" className={styles.tableBtn}>
                                        <span>{t("actionBtn")}</span>
                                        <ArrowRight size={13} className={styles.arrowIcon} />
                                    </Link>
                                </td>
                                <td className={styles.popularCol}>
                                    <Link href="/packages/standard-mastery/apply" className={`${styles.tableBtn} ${styles.popularBtn}`}>
                                        <span>{t("actionBtn")}</span>
                                        <ArrowRight size={13} className={styles.arrowIcon} />
                                    </Link>
                                </td>
                                <td>
                                    <Link href="/packages/intensive-excellence/apply" className={styles.tableBtn}>
                                        <span>{t("actionBtn")}</span>
                                        <ArrowRight size={13} className={styles.arrowIcon} />
                                    </Link>
                                </td>
                                <td>
                                    <Link href="/packages/ijazah-advanced/apply" className={styles.tableBtn}>
                                        <span>{t("actionBtn")}</span>
                                        <ArrowRight size={13} className={styles.arrowIcon} />
                                    </Link>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </section>
    );
}