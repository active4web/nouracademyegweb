"use client";

import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import {
  User,
  Shield,
  Calendar,
  CheckCircle2,
  Clock,
  Send,
  Loader2,
} from "lucide-react";
import Cookies from "js-cookie";
import { ApiCurrency } from "@/app/[locale]/packages/type";
import styles from "./PackageApplyFormSection.module.scss";
import { ApiPackageDetail } from "@/app/[locale]/packages/[id]/apply/type";
import { TOKEN_COOKIE_KEY, ApiProfile } from "@/features/Auth/AuthStore";

interface PackageApplyFormSectionProps {
  selectedPackage: ApiPackageDetail;
  currencies: ApiCurrency[];
  initialCurrency?: string;
  profile: ApiProfile | null;
}

const INITIAL_FORM = {
  studentName: "",
  studentPhone: "",
  studentWhatsapp: "",
  studentEmail: "",
  guardianPhone: "",
  guardianWhatsapp: "",
  guardianEmail: "",
  country: "",
  notes: "",
};

export default function PackageApplyFormSection({
  selectedPackage,
  currencies,
  initialCurrency,
  profile,
}: PackageApplyFormSectionProps) {
  const t = useTranslations("PackageApply");

  const isLoggedIn = profile !== null;

  const defaultCurrencyCode =
    initialCurrency &&
    currencies.some((c) => c.code === initialCurrency.toUpperCase())
      ? initialCurrency.toUpperCase()
      : (currencies[0]?.code ?? "EGP");

  const [currencyCode, setCurrencyCode] = useState<string>(defaultCurrencyCode);
  const [loading, setLoading] = useState(false);

  // البيانات جاهزة من السيرفر (لو المستخدم مسجل دخول) — من غير أي fetch إضافي هنا
  const [formData, setFormData] = useState(() => ({
    ...INITIAL_FORM,
    ...(profile
      ? {
          studentName: profile.name ?? "",
          studentEmail: profile.email ?? "",
          studentPhone: profile.phone ?? "",
          studentWhatsapp: profile.whatsapp ?? "",
          guardianEmail: profile.parent_email ?? "",
          guardianPhone: profile.parent_phone ?? "",
          guardianWhatsapp: profile.parent_whatsapp ?? "",
          country: profile.country ?? "",
        }
      : {}),
  }));

  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const activeCurrency = useMemo(
    () => currencies.find((c) => c.code === currencyCode) ?? null,
    [currencies, currencyCode],
  );

  const rate = activeCurrency?.rate || 1;

  const convertPrice = (value: string | null): number | null => {
    if (value === null) return null;
    const numeric = Number(value);
    if (Number.isNaN(numeric)) return null;
    return numeric / rate;
  };

  const packagePrice = convertPrice(
    selectedPackage.discount_price ?? selectedPackage.price,
  );

  const weeklySessionsCount = Math.round(
    (selectedPackage.sessions_count / selectedPackage.duration_in_days) * 7,
  );

  const getFormattedPrice = () => {
    if (packagePrice === null) return "";
    const rounded = packagePrice.toFixed(2);
    return activeCurrency ? `${rounded} ${activeCurrency.code}` : rounded;
  };

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
      body.append("package_id", String(selectedPackage.id));
      body.append("notes", formData.notes);

      const headers: HeadersInit = {};

      if (isLoggedIn) {
        // مستخدم مسجل دخول: بياناته الشخصية معروفة عند الباك من التوكين،
        // فمش محتاجين نبعتها تاني
        const token = Cookies.get(TOKEN_COOKIE_KEY);
        if (token) headers.Authorization = `Bearer ${token}`;
      } else {
        body.append("name", formData.studentName);
        body.append("email", formData.studentEmail);
        body.append("phone", formData.studentPhone);
        body.append("whatsapp", formData.studentWhatsapp);
        body.append("parent_email", formData.guardianEmail);
        body.append("parent_phone", formData.guardianPhone);
        body.append("parent_whatsapp", formData.guardianWhatsapp);
        body.append("country", formData.country);
      }

      const res = await fetch(`${base}website/subscribe`, {
        method: "POST",
        headers,
        body,
      });

      const json = await res.json().catch(() => null);

      if (!res.ok || json?.status !== "Success") {
        throw new Error(json?.message || "Subscribe request failed");
      }

      setFormData((prev) => ({ ...INITIAL_FORM, ...(isLoggedIn ? prev : {}) }));
      setSubmitSuccess(true);
    } catch {
      setSubmitError(t("submitErrorMsg"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={styles.formSection}>
      <div className="container">
        <div className={styles.mainLayout}>
          {/* عمود ملخص الباقة */}
          <aside className={styles.packageSummaryCard}>
            <div className={styles.cardHeaderRow}>
              <span className={styles.cardTag}>{t("selectedPackageTag")}</span>
              <div className={styles.currencySelector}>
                {currencies.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    className={`${styles.currencyBtn} ${currencyCode === c.code ? styles.active : ""}`}
                    onClick={() => setCurrencyCode(c.code)}
                  >
                    {c.code}
                  </button>
                ))}
              </div>
            </div>

            <h2 className={styles.packageName}>{selectedPackage.name}</h2>

            <div className={styles.priceBlock}>
              <span className={styles.amount}>{getFormattedPrice()}</span>
              <span className={styles.period}>{t("perMonth")}</span>
            </div>

            <div className={styles.metaList}>
              <div className={styles.metaItem}>
                <Calendar size={15} />
                <span>
                  {t("monthlySessionsLabel", {
                    count: selectedPackage.sessions_count,
                    weeklyCount: weeklySessionsCount,
                  })}
                </span>
              </div>
              <div className={styles.metaItem}>
                <Clock size={15} />
                <span>{selectedPackage.duration_in_days}</span>
              </div>
            </div>

            <div className={styles.featuresList}>
              {selectedPackage.features.map((feature) => (
                <div key={feature.id} className={styles.featureItem}>
                  <CheckCircle2 size={14} />
                  <span>{feature.description}</span>
                </div>
              ))}
            </div>
          </aside>

          {/* عمود نموذج التسجيل */}
          <main className={styles.formCard}>
            <div className={styles.formHeader}>
              <h2>{t("formTitle")}</h2>
              <p>{isLoggedIn ? t("formDescLoggedIn") : t("formDesc")}</p>
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
                    disabled={isLoggedIn}
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
                    disabled={isLoggedIn}
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
                    disabled={isLoggedIn}
                    dir="ltr"
                    placeholder={t("studentPhonePlaceholder")}
                    value={formData.studentPhone}
                    onChange={handleChange}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="studentWhatsapp">
                    {t("studentWhatsapp")}
                  </label>
                  <input
                    type="tel"
                    id="studentWhatsapp"
                    name="studentWhatsapp"
                    disabled={isLoggedIn}
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
                    required
                    disabled={isLoggedIn}
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
                    disabled={isLoggedIn}
                    dir="ltr"
                    placeholder={t("guardianPhonePlaceholder")}
                    value={formData.guardianPhone}
                    onChange={handleChange}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="guardianWhatsapp">
                    {t("guardianWhatsapp")}
                  </label>
                  <input
                    type="tel"
                    id="guardianWhatsapp"
                    name="guardianWhatsapp"
                    disabled={isLoggedIn}
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
                    disabled={isLoggedIn}
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
                    <span>{t("sendRequestBtn")}</span>
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
          </main>
        </div>
      </div>
    </section>
  );
}
