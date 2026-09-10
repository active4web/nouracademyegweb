"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import {
    User,
    Shield,
    BookOpen,
    Clock,
    CheckCircle2,
    Send,
    Loader2,
    Sparkles,
    Award,
    ChevronDown
} from "lucide-react";
import styles from "./FreeTrialFormSection.module.scss";

const ACADEMY_WHATSAPP_NUMBER = "201104321663";

export default function FreeTrialFormSection() {
    const locale = useLocale() as "ar" | "en";
    const t = useTranslations("FreeTrial");

    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        studentName: "",
        country: "",
        studentPhone: "",
        studentWhatsapp: "",
        studentEmail: "",
        guardianPhone: "",
        guardianWhatsapp: "",
        guardianEmail: "",
        preferredTrack: "",
        preferredTime: "",
        notes: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const getTrackLabel = (trackKey: string) => {
            switch (trackKey) {
                case "quran":
                    return t("trackQuran");
                case "tajweed":
                    return t("trackTajweed");
                case "islamic":
                    return t("trackIslamic");
                case "english":
                    return t("trackEnglish");
                case "school":
                    return t("trackSchool");
                case "ijazah":
                    return t("trackIjazah");
                default:
                    return trackKey || t("selectTrackPlaceholder");
            }
        };

        const trackText = getTrackLabel(formData.preferredTrack);

        const message =
            `${t("waMsgHeader")}\n\n` +
            `${t("waMsgTrialTitle")}\n` +
            `${t("waMsgTrack")} ${trackText}\n` +
            (formData.preferredTime ? `${t("waMsgPreferredTime")} ${formData.preferredTime}\n` : "") +
            `\n${t("waMsgStudentDetails")}\n` +
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
                country: "",
                studentPhone: "",
                studentWhatsapp: "",
                studentEmail: "",
                guardianPhone: "",
                guardianWhatsapp: "",
                guardianEmail: "",
                preferredTrack: "",
                preferredTime: "",
                notes: "",
            });
            window.open(encodedUrl, "_blank");
        }, 400);
    };

    const trialFeatures = [
        { title: t("feature1Title"), desc: t("feature1Desc"), icon: Sparkles },
        { title: t("feature2Title"), desc: t("feature2Desc"), icon: CheckCircle2 },
        { title: t("feature3Title"), desc: t("feature3Desc"), icon: Award },
        { title: t("feature4Title"), desc: t("feature4Desc"), icon: Clock },
    ];

    return (
        <section className={styles.formSection}>
            <div className="container">
                <div className={styles.mainLayout}>
                    {/* عمود المزايا والتفاصيل */}
                    <aside className={styles.summaryCard}>
                        <div className={styles.cardHeaderRow}>
                            <span className={styles.cardTag}>{t("summaryCardTag")}</span>
                        </div>

                        <h2 className={styles.summaryTitle}>{t("summaryTitle")}</h2>
                        <p className={styles.summaryDesc}>{t("summaryDesc")}</p>

                        <div className={styles.featuresList}>
                            {trialFeatures.map((feat, idx) => {
                                const Icon = feat.icon;
                                return (
                                    <div key={idx} className={styles.featureBox}>
                                        <div className={styles.iconCircle}>
                                            <Icon size={18} />
                                        </div>
                                        <div className={styles.featureText}>
                                            <h3 className={styles.featTitle}>{feat.title}</h3>
                                            <p className={styles.featDesc}>{feat.desc}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </aside>

                    {/* عمود نموذج حجز الحصة التجريبية */}
                    <main className={styles.formCard}>
                        <div className={styles.formHeader}>
                            <h2>{t("formTitle")}</h2>
                            <p>{t("formDesc")}</p>
                        </div>

                        <form onSubmit={handleSubmit}>
                            {/* المسار والموعد */}
                            <div className={styles.sectionDivider}>
                                <BookOpen size={18} />
                                <h3>{t("trackSectionTitle")}</h3>
                            </div>

                            <div className={styles.grid2Cols}>
                                <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                                    <label htmlFor="preferredTrack">{t("preferredTrack")}</label>
                                    <div className={styles.selectWrapper}>
                                        <select
                                            id="preferredTrack"
                                            name="preferredTrack"
                                            required
                                            value={formData.preferredTrack}
                                            onChange={handleChange}
                                        >
                                            <option value="" disabled>
                                                {t("selectTrackPlaceholder")}
                                            </option>
                                            <option value="quran">{t("trackQuran")}</option>
                                            <option value="tajweed">{t("trackTajweed")}</option>
                                            <option value="islamic">{t("trackIslamic")}</option>
                                            <option value="english">{t("trackEnglish")}</option>
                                            <option value="school">{t("trackSchool")}</option>
                                            <option value="ijazah">{t("trackIjazah")}</option>
                                        </select>
                                        <ChevronDown size={18} className={styles.selectArrow} />
                                    </div>
                                </div>

                                <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                                    <label htmlFor="preferredTime">{t("preferredTime")}</label>
                                    <input
                                        type="text"
                                        id="preferredTime"
                                        name="preferredTime"
                                        placeholder={t("preferredTimePlaceholder")}
                                        value={formData.preferredTime}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

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
