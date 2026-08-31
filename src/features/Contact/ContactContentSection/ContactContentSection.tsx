"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, Loader2 } from "lucide-react";
import styles from "./ContactContentSection.module.scss";

export default function ContactContentSection() {
    const t = useTranslations("ContactContent");

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "general",
        message: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // محاكاة إرسال البيانات
        setTimeout(() => {
            setLoading(false);
            setSuccess(true);
            setFormData({ name: "", email: "", phone: "", subject: "general", message: "" });
        }, 1500);
    };

    return (
        <section className={styles.contentSection}>
            <div className="container">
                <div className={styles.gridWrapper}>
                    {/* معلومات الاتصال المباشر */}
                    <div className={styles.infoColumn}>
                        <div className={styles.infoCard}>
                            <h3 className={styles.infoTitle}>{t("infoTitle")}</h3>
                            <p className={styles.infoDesc}>{t("infoDesc")}</p>

                            <div className={styles.contactItemsList}>
                                <a href="mailto:support@nouracademyeg.com" className={styles.contactItem}>
                                    <div className={styles.iconBox}>
                                        <Mail size={18} />
                                    </div>
                                    <div className={styles.itemText}>
                                        <span className={styles.label}>{t("emailLabel")}</span>
                                        <span className={styles.value}>{t("emailValue")}</span>
                                    </div>
                                </a>

                                <a href="https://wa.me/201000000000" target="_blank" rel="noreferrer" className={styles.contactItem}>
                                    <div className={styles.iconBox}>
                                        <Phone size={18} />
                                    </div>
                                    <div className={styles.itemText}>
                                        <span className={styles.label}>{t("phoneLabel")}</span>
                                        <span className={styles.value}>{t("phoneValue")}</span>
                                    </div>
                                </a>

                                <div className={styles.contactItem}>
                                    <div className={styles.iconBox}>
                                        <MapPin size={18} />
                                    </div>
                                    <div className={styles.itemText}>
                                        <span className={styles.label}>{t("locationLabel")}</span>
                                        <span className={styles.value}>{t("locationValue")}</span>
                                    </div>
                                </div>

                                <div className={styles.contactItem}>
                                    <div className={styles.iconBox}>
                                        <Clock size={18} />
                                    </div>
                                    <div className={styles.itemText}>
                                        <span className={styles.label}>{t("hoursLabel")}</span>
                                        <span className={styles.value}>{t("hoursValue")}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* نموذج المراسلة التفاعلي */}
                    <div className={styles.formColumn}>
                        <div className={styles.formCard}>
                            <h3 className={styles.formTitle}>{t("formTitle")}</h3>

                            {success ? (
                                <div className={styles.successState}>
                                    <div className={styles.successIconCircle}>
                                        <CheckCircle2 size={36} />
                                    </div>
                                    <h4 className={styles.successTitle}>{t("successTitle")}</h4>
                                    <p className={styles.successDesc}>{t("successDesc")}</p>
                                    <button
                                        type="button"
                                        onClick={() => setSuccess(false)}
                                        className={styles.resetBtn}
                                    >
                                        إرسال رسالة أخرى
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className={styles.form}>
                                    <div className={styles.inputGroup}>
                                        <label htmlFor="name">{t("nameLabel")}</label>
                                        <input
                                            type="text"
                                            id="name"
                                            required
                                            placeholder={t("namePlaceholder")}
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        />
                                    </div>

                                    <div className={styles.rowGroup}>
                                        <div className={styles.inputGroup}>
                                            <label htmlFor="email">{t("emailInputLabel")}</label>
                                            <input
                                                type="email"
                                                id="email"
                                                required
                                                placeholder={t("emailPlaceholder")}
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            />
                                        </div>

                                        <div className={styles.inputGroup}>
                                            <label htmlFor="phone">{t("phoneInputLabel")}</label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                required
                                                placeholder={t("phonePlaceholder")}
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    <div className={styles.inputGroup}>
                                        <label htmlFor="subject">{t("subjectLabel")}</label>
                                        <select
                                            id="subject"
                                            value={formData.subject}
                                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                        >
                                            <option value="general">{t("subjectGeneral")}</option>
                                            <option value="courses">{t("subjectCourses")}</option>
                                            <option value="technical">{t("subjectTechnical")}</option>
                                        </select>
                                    </div>

                                    <div className={styles.inputGroup}>
                                        <label htmlFor="message">{t("messageLabel")}</label>
                                        <textarea
                                            id="message"
                                            rows={4}
                                            required
                                            placeholder={t("messagePlaceholder")}
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        />
                                    </div>

                                    <button type="submit" disabled={loading} className={styles.submitBtn}>
                                        {loading ? (
                                            <>
                                                <Loader2 size={17} className={styles.spinner} />
                                                <span>{t("sendingBtn")}</span>
                                            </>
                                        ) : (
                                            <>
                                                <span>{t("submitBtn")}</span>
                                                <Send size={16} className={styles.sendIcon} />
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}