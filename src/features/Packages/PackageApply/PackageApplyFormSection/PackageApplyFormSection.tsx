"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import {
    User,
    Shield,
    Calendar,
    CheckCircle2,
    Clock,
    Send,
    Loader2,
} from "lucide-react";
import { PackagePlan } from "@/data/packages.data";
import styles from "./PackageApplyFormSection.module.scss";

const ACADEMY_WHATSAPP_NUMBER = "201104321663";

interface PackageApplyFormSectionProps {
    selectedPackage: PackagePlan;
    initialCurrency?: string;
}

export default function PackageApplyFormSection({
    selectedPackage,
    initialCurrency,
}: PackageApplyFormSectionProps) {
    const locale = useLocale() as "ar" | "en";
    const t = useTranslations("PackageApply");

    const defaultCurrency: "EGP" | "USD" | "GBP" = (
        initialCurrency && ["EGP", "USD", "GBP"].includes(initialCurrency.toUpperCase())
            ? (initialCurrency.toUpperCase() as "EGP" | "USD" | "GBP")
            : "EGP"
    );

    const [currency, setCurrency] = useState<"EGP" | "USD" | "GBP">(defaultCurrency);
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        studentName: "",
        studentPhone: "",
        studentWhatsapp: "",
        studentEmail: "",
        guardianPhone: "",
        guardianWhatsapp: "",
        guardianEmail: "",
        country: "",
        notes: "",
    });

    const getFormattedPrice = (curr: "EGP" | "USD" | "GBP") => {
        if (curr === "GBP" && selectedPackage.price.GBP) {
            return `£${selectedPackage.price.GBP}`;
        }
        if (curr === "USD" && selectedPackage.price.USD) {
            return `$${selectedPackage.price.USD}`;
        }
        return locale === "ar"
            ? `${selectedPackage.price.EGP} ج.م`
            : `${selectedPackage.price.EGP} EGP`;
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const packageName = selectedPackage.name[locale] || selectedPackage.name.ar;
        const duration = selectedPackage.sessionDuration[locale] || selectedPackage.sessionDuration.ar;
        const price = getFormattedPrice(currency);

        const sessionsText = t("waMsgPkgSessions", {
            count: selectedPackage.monthlySessions,
            weeklyCount: selectedPackage.sessionsPerWeek,
        });

        const message =
            `${t("waMsgHeader")}\n\n` +
            `${t("waMsgPkgDetails")}\n` +
            `${t("waMsgPkgName")} ${packageName}\n` +
            `${sessionsText}\n` +
            `${t("waMsgPkgDuration")} ${duration}\n` +
            `${t("waMsgPkgPrice")} ${price}\n\n` +
            `${t("waMsgStudentDetails")}\n` +
            `${t("waMsgStudentName")} ${formData.studentName}\n` +
            `${t("waMsgCountry")} ${formData.country}\n` +
            `${t("waMsgStudentPhone")} ${formData.studentPhone}\n` +
            `${t("waMsgStudentWhatsapp")} ${formData.studentWhatsapp}\n` +
            (formData.studentEmail ? `${t("waMsgStudentEmail")} ${formData.studentEmail}\n` : "") +
            `\n${t("waMsgGuardianDetails")}\n` +
            `${t("waMsgGuardianPhone")} ${formData.guardianPhone}\n` +
            `${t("waMsgGuardianWhatsapp")} ${formData.guardianWhatsapp}\n` +
            (formData.guardianEmail ? `${t("waMsgGuardianEmail")} ${formData.guardianEmail}\n` : "") +
            (formData.notes ? `\n${t("waMsgNotes")} ${formData.notes}\n` : "");

        const encodedUrl = `https://wa.me/${ACADEMY_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

        setTimeout(() => {
            setLoading(false);
            setFormData({
                studentName: "",
                studentPhone: "",
                studentWhatsapp: "",
                studentEmail: "",
                guardianPhone: "",
                guardianWhatsapp: "",
                guardianEmail: "",
                country: "",
                notes: "",
            });
            window.open(encodedUrl, "_blank");
        }, 400);
    };

    const packagePriceFormatted = getFormattedPrice(currency);

    return (
        <section className={styles.formSection}>
            <div className="container">
                <div className={styles.mainLayout}>
                    {/* عمود ملخص الباقة */}
                    <aside className={styles.packageSummaryCard}>
                        <div className={styles.cardHeaderRow}>
                            <span className={styles.cardTag}>{t("selectedPackageTag")}</span>
                            <div className={styles.currencySelector}>
                                <button
                                    type="button"
                                    className={`${styles.currencyBtn} ${currency === "EGP" ? styles.active : ""}`}
                                    onClick={() => setCurrency("EGP")}
                                >
                                    {locale === "ar" ? "ج.م" : "EGP"}
                                </button>
                                <button
                                    type="button"
                                    className={`${styles.currencyBtn} ${currency === "USD" ? styles.active : ""}`}
                                    onClick={() => setCurrency("USD")}
                                >
                                    $ USD
                                </button>
                                {selectedPackage.price.GBP && (
                                    <button
                                        type="button"
                                        className={`${styles.currencyBtn} ${currency === "GBP" ? styles.active : ""}`}
                                        onClick={() => setCurrency("GBP")}
                                    >
                                        £ GBP
                                    </button>
                                )}
                            </div>
                        </div>

                        <h2 className={styles.packageName}>
                            {selectedPackage.name[locale] || selectedPackage.name.ar}
                        </h2>

                        <div className={styles.priceBlock}>
                            <span className={styles.amount}>{packagePriceFormatted}</span>
                            <span className={styles.period}>{t("perMonth")}</span>
                        </div>

                        <div className={styles.metaList}>
                            <div className={styles.metaItem}>
                                <Calendar size={15} />
                                <span>
                                    {t("monthlySessionsLabel", {
                                        count: selectedPackage.monthlySessions,
                                        weeklyCount: selectedPackage.sessionsPerWeek,
                                    })}
                                </span>
                            </div>
                            <div className={styles.metaItem}>
                                <Clock size={15} />
                                <span>
                                    {selectedPackage.sessionDuration[locale] || selectedPackage.sessionDuration.ar}
                                </span>
                            </div>
                        </div>

                        <div className={styles.featuresList}>
                            {selectedPackage.features.map((feature, idx) => (
                                <div key={idx} className={styles.featureItem}>
                                    <CheckCircle2 size={14} />
                                    <span>{feature[locale] || feature.ar}</span>
                                </div>
                            ))}
                        </div>
                    </aside>

                    {/* عمود نموذج التسجيل */}
                    <main className={styles.formCard}>
                        <div className={styles.formHeader}>
                            <h2>{t("formTitle")}</h2>
                            <p>{t("formDesc")}</p>
                        </div>

                        <form onSubmit={handleSubmit}>
                            {/* بيانات الطالب */}
                            <div className={styles.sectionDivider}>
                                <User size={18} />
                                <h3>{t("studentSectionTitle")}</h3>
                            </div>

                            <div className={styles.grid2Cols}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="studentName">{t("studentName")}</label>
                                    <input
                                        type="text"
                                        id="studentName"
                                        name="studentName"
                                        required
                                        placeholder={t("studentNamePlaceholder")}
                                        value={formData.studentName}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="country">{t("country")}</label>
                                    <input
                                        type="text"
                                        id="country"
                                        name="country"
                                        required
                                        placeholder={t("countryPlaceholder")}
                                        value={formData.country}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="studentPhone">{t("studentPhone")}</label>
                                    <input
                                        type="tel"
                                        id="studentPhone"
                                        name="studentPhone"
                                        required
                                        dir="ltr"
                                        placeholder={t("studentPhonePlaceholder")}
                                        value={formData.studentPhone}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="studentWhatsapp">{t("studentWhatsapp")}</label>
                                    <input
                                        type="tel"
                                        id="studentWhatsapp"
                                        name="studentWhatsapp"
                                        required
                                        dir="ltr"
                                        placeholder={t("studentWhatsappPlaceholder")}
                                        value={formData.studentWhatsapp}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                                    <label htmlFor="studentEmail">{t("studentEmail")}</label>
                                    <input
                                        type="email"
                                        id="studentEmail"
                                        name="studentEmail"
                                        dir="ltr"
                                        placeholder={t("studentEmailPlaceholder")}
                                        value={formData.studentEmail}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            {/* بيانات ولي الأمر */}
                            <div className={styles.sectionDivider}>
                                <Shield size={18} />
                                <h3>{t("guardianSectionTitle")}</h3>
                            </div>

                            <div className={styles.grid2Cols}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="guardianPhone">{t("guardianPhone")}</label>
                                    <input
                                        type="tel"
                                        id="guardianPhone"
                                        name="guardianPhone"
                                        required
                                        dir="ltr"
                                        placeholder={t("guardianPhonePlaceholder")}
                                        value={formData.guardianPhone}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="guardianWhatsapp">{t("guardianWhatsapp")}</label>
                                    <input
                                        type="tel"
                                        id="guardianWhatsapp"
                                        name="guardianWhatsapp"
                                        required
                                        dir="ltr"
                                        placeholder={t("guardianWhatsappPlaceholder")}
                                        value={formData.guardianWhatsapp}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                                    <label htmlFor="guardianEmail">{t("guardianEmail")}</label>
                                    <input
                                        type="email"
                                        id="guardianEmail"
                                        name="guardianEmail"
                                        dir="ltr"
                                        placeholder={t("guardianEmailPlaceholder")}
                                        value={formData.guardianEmail}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                                    <label htmlFor="notes">{t("notes")}</label>
                                    <textarea
                                        id="notes"
                                        name="notes"
                                        placeholder={t("notesPlaceholder")}
                                        value={formData.notes}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <button type="submit" disabled={loading} className={styles.submitBtn}>
                                {loading ? (
                                    <>
                                        <Loader2 size={18} className={styles.spinner} />
                                        <span>{t("submittingBtn")}</span>
                                    </>
                                ) : (
                                    <>
                                        <span>{t("submitBtn")}</span>
                                        <Send size={16} />
                                    </>
                                )}
                            </button>
                        </form>
                    </main>
                </div>
            </div>
        </section>
    );
}
