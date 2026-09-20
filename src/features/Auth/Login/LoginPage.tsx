"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Cookies from "js-cookie";
import { LogIn, Loader2, Eye, EyeOff } from "lucide-react";
import { Link, useRouter } from "@/i18n/navigation";
import styles from "./LoginPage.module.scss";
import { TOKEN_COOKIE_KEY, notifyAuthChange } from "../AuthStore";

export default function LoginPage() {
  const t = useTranslations("Login");
  const router = useRouter();

  const [formData, setFormData] = useState({
    identifier: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSubmitError(null);

    try {
      const base = process.env.NEXT_PUBLIC_API_BASE_URL;
      const body = new FormData();
      body.append("identifier", formData.identifier);
      body.append("password", formData.password);

      const res = await fetch(`${base}website/login`, {
        method: "POST",
        body,
      });

      const json = await res.json().catch(() => null);

      if (!res.ok || json?.status !== "Success") {
        throw new Error(json?.message || "Login request failed");
      }

      const token = json?.data?.token ?? json?.data?.access_token;

      if (!token) {
        throw new Error("Token not found in response");
      }

      Cookies.set(TOKEN_COOKIE_KEY, token, {
        expires: 7,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
      });
      notifyAuthChange();

      router.push("/");
      router.refresh();
    } catch {
      setSubmitError(t("submitErrorMsg"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={styles.loginSection}>
      <div className="container">
        <div className={styles.formCard}>
          <div className={styles.formHeader}>
            <h1>{t("formTitle")}</h1>
            <p>{t("formDesc")}</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="identifier">{t("identifier")}</label>
              <input
                type="text"
                id="identifier"
                name="identifier"
                required
                placeholder={t("identifierPlaceholder")}
                value={formData.identifier}
                onChange={handleChange}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="password">{t("password")}</label>
              <div className={styles.passwordWrapper}>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  required
                  placeholder={t("passwordPlaceholder")}
                  value={formData.password}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  className={styles.togglePasswordBtn}
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label={
                    showPassword ? t("hidePassword") : t("showPassword")
                  }
                >
                  {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                </button>
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
                  <span>{t("loggingInBtn")}</span>
                </>
              ) : (
                <>
                  <span>{t("loginBtn")}</span>
                  <LogIn size={16} />
                </>
              )}
            </button>

            {submitError && (
              <p className={styles.submitErrorText}>{submitError}</p>
            )}

            <p className={styles.registerHint}>
              {t("noAccountText")}{" "}
              <Link href="/register" className={styles.registerLink}>
                {t("registerLink")}
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
