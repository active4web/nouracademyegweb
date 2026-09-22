"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { User, Shield, Send, Loader2 } from "lucide-react";
import styles from "./RegisterPage.module.scss";

const INITIAL_FORM = {
  name: "",
  email: "",
  phone: "",
  whatsapp: "",
  parentEmail: "",
  parentPhone: "",
  parentWhatsapp: "",
  country: "",
};

export default function RegisterPage() {
  const t = useTranslations("Register");

  const [formData, setFormData] = useState(INITIAL_FORM);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSubmitError(null);
    setSubmitSuccess(false);

    try {
      const base = process.env.NEXT_PUBLIC_API_BASE_URL;
      const body = new FormData();
      body.append("name", formData.name);
      body.append("email", formData.email);
      body.append("phone", formData.phone);
      body.append("whatsapp", formData.whatsapp);
      body.append("parent_email", formData.parentEmail);
      body.append("parent_phone", formData.parentPhone);
      body.append("parent_whatsapp", formData.parentWhatsapp);
      body.append("country", formData.country);

      const res = await fetch(`${base}website/register`, {
        method: "POST",
        body,
      });

      const json = await res.json().catch(() => null);

      if (!res.ok || json?.status !== "Success") {
        throw new Error(json?.message || "Register request failed");
      }

      setFormData(INITIAL_FORM);
      setSubmitSuccess(true);
    } catch {
      setSubmitError(t("submitErrorMsg"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={styles.registerSection}>
      <div className="container">
        <div className={styles.formCard}>
          <div className={styles.formHeader}>
            <h1>{t("formTitle")}</h1>
            <p>{t("formDesc")}</p>
          </div>

          <form onSubmit={handleSubmit}>
            {/* بيانات الطالب */}
            <div className={styles.sectionDivider}>
              <User size={18} />
              <h2>{t("studentSectionTitle")}</h2>
            </div>

            <div className={styles.grid2Cols}>
              <div className={styles.formGroup}>
                <label htmlFor="name">{t("name")}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder={t("namePlaceholder")}
                  value={formData.name}
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
                <label htmlFor="phone">{t("phone")}</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder={t("phonePlaceholder")}
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="whatsapp">{t("whatsapp")}</label>
                <input
                  type="tel"
                  id="whatsapp"
                  name="whatsapp"
                  placeholder={t("whatsappPlaceholder")}
                  value={formData.whatsapp}
                  onChange={handleChange}
                />
              </div>

              <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                <label htmlFor="email">{t("email")}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder={t("emailPlaceholder")}
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* بيانات ولي الأمر */}
            <div className={styles.sectionDivider}>
              <Shield size={18} />
              <h2>{t("guardianSectionTitle")}</h2>
            </div>

            <div className={styles.grid2Cols}>
              <div className={styles.formGroup}>
                <label htmlFor="parentPhone">{t("parentPhone")}</label>
                <input
                  type="tel"
                  id="parentPhone"
                  name="parentPhone"
                  required
                  placeholder={t("parentPhonePlaceholder")}
                  value={formData.parentPhone}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="parentWhatsapp">{t("parentWhatsapp")}</label>
                <input
                  type="tel"
                  id="parentWhatsapp"
                  name="parentWhatsapp"
                  placeholder={t("parentWhatsappPlaceholder")}
                  value={formData.parentWhatsapp}
                  onChange={handleChange}
                />
              </div>

              <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                <label htmlFor="parentEmail">{t("parentEmail")}</label>
                <input
                  type="email"
                  id="parentEmail"
                  name="parentEmail"
                  required
                  placeholder={t("parentEmailPlaceholder")}
                  value={formData.parentEmail}
                  onChange={handleChange}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={styles.submitBtn}
            >
              {loading ? (
                <>
                  <Loader2 size={18} className={styles.spinner} />
                  <span>{t("sendingBtn")}</span>
                </>
              ) : (
                <>
                  <span>{t("registerBtn")}</span>
                  <Send size={16} />
                </>
              )}
            </button>

            {submitError && (
              <p className={styles.submitErrorText}>{submitError}</p>
            )}
            {submitSuccess && (
              <p className={styles.submitSuccessText}>
                {t("submitSuccessMsg")}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
