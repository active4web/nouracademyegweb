"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import {
    Mail,
    Phone,
    MapPin,
    Send,
    ArrowRight
} from "lucide-react";
import styles from "./Footer.module.scss";

export default function Footer() {
    const t = useTranslations("Footer");

    return (
        <footer className={styles.footer}>
            {/* Decorative Quranic Letters & Diacritics Watermark */}
            <div className={styles.calligraphyPattern} aria-hidden="true">
                <span className={styles.letterFloating}>نٓ</span>
                <span className={styles.letterFloating}>اقْرَأْ</span>
                <span className={styles.letterFloating}>بِسْمِ</span>
                <span className={styles.letterFloating}>قٓ</span>
                <span className={styles.letterFloating}>عَلَّمَ</span>
                <span className={styles.letterFloating}>طه</span>
                <span className={styles.letterFloating}>يٰسٓ</span>
                <span className={styles.letterFloating}>الْقُرْآنَ</span>
                <span className={styles.letterFloating}>حكيم</span>
                <span className={styles.letterFloating}>كۤهٰيٰعٓصٓ</span>
                <span className={styles.letterFloating}>وَرَتِّلِ</span>
            </div>

            <div className="container">
                <div className={styles.footerGrid}>
                    {/* Brand Info */}
                    <div className={styles.brandCol}>
                        <Link href="/" className={styles.logoLink}>
                            <Image
                                src="/logo.png"
                                alt="Nour Academy Logo"
                                width={90}
                                height={90}
                                priority
                                className={styles.mainLogo}
                            />
                        </Link>
                        <p className={styles.brandDesc}>{t("brandDesc")}</p>

                        <div className={styles.socialRow}>
                            {/* Facebook SVG */}
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.socialBtn}
                                aria-label="Facebook"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className={styles.socialSvg}
                                >
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                </svg>
                            </a>

                            {/* Instagram SVG */}
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.socialBtn}
                                aria-label="Instagram"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className={styles.socialSvg}
                                >
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                                </svg>
                            </a>

                            {/* YouTube SVG */}
                            <a
                                href="https://youtube.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.socialBtn}
                                aria-label="YouTube"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className={styles.socialSvg}
                                >
                                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                                    <polygon points="10 15 15 12 10 9 10 15" fill="currentColor" stroke="none" />
                                </svg>
                            </a>

                            {/* Telegram */}
                            <a
                                href="https://telegram.org"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.socialBtn}
                                aria-label="Telegram"
                            >
                                <Send size={15} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className={styles.navCol}>
                        <h4 className={styles.colTitle}>{t("quickLinksTitle")}</h4>
                        <ul className={styles.linksList}>
                            <li>
                                <Link href="/" className={styles.linkItem}>
                                    <ArrowRight size={13} className={styles.arrowIcon} />
                                    <span>{t("navHome")}</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/courses" className={styles.linkItem}>
                                    <ArrowRight size={13} className={styles.arrowIcon} />
                                    <span>{t("navCourses")}</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/packages" className={styles.linkItem}>
                                    <ArrowRight size={13} className={styles.arrowIcon} />
                                    <span>{t("navPackages")}</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/teachers" className={styles.linkItem}>
                                    <ArrowRight size={13} className={styles.arrowIcon} />
                                    <span>{t("navTeachers")}</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/free-trial" className={styles.linkItem}>
                                    <ArrowRight size={13} className={styles.arrowIcon} />
                                    <span>{t("navTrial")}</span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Courses Links */}
                    <div className={styles.navCol}>
                        <h4 className={styles.colTitle}>{t("coursesTitle")}</h4>
                        <ul className={styles.linksList}>
                            <li>
                                <Link href="/courses/nourania-foundation" className={styles.linkItem}>
                                    <ArrowRight size={13} className={styles.arrowIcon} />
                                    <span>{t("course1")}</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/courses/tajweed-mastery" className={styles.linkItem}>
                                    <ArrowRight size={13} className={styles.arrowIcon} />
                                    <span>{t("course2")}</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/courses/quran-memorization" className={styles.linkItem}>
                                    <ArrowRight size={13} className={styles.arrowIcon} />
                                    <span>{t("course3")}</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/courses/arabic-grammar" className={styles.linkItem}>
                                    <ArrowRight size={13} className={styles.arrowIcon} />
                                    <span>{t("course4")}</span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Details */}
                    <div className={styles.contactCol}>
                        <h4 className={styles.colTitle}>{t("contactTitle")}</h4>
                        <div className={styles.contactList}>
                            <div className={styles.contactItem}>
                                <Mail size={16} />
                                <span>{t("emailLabel")}</span>
                            </div>
                            <div className={styles.contactItem}>
                                <Phone size={16} />
                                <span dir="ltr">{t("phoneLabel")}</span>
                            </div>
                            <div className={styles.contactItem}>
                                <MapPin size={16} />
                                <span>{t("locationLabel")}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.bottomBar}>
                    <p className={styles.rightsText}>{t("rights")}</p>
                    <div className={styles.legalLinks}>
                        <Link href="/privacy" className={styles.legalLink}>
                            {t("privacyPolicy")}
                        </Link>
                        <span className={styles.dotSeparator}>•</span>
                        <Link href="/terms" className={styles.legalLink}>
                            {t("termsOfService")}
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}