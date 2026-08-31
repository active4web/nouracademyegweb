"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { motion, type Variants } from "framer-motion";
import {
    ArrowRight,
    Users,
    Clock,
    Star,
    ShieldCheck,
    Video,
    CheckCircle2
} from "lucide-react";
import styles from "./HeroSection.module.scss";

const lanternSwingLeft: Variants = {
    animate: {
        rotate: [3.5, -3.5, 3.5],
        transition: {
            duration: 2.8,
            ease: "easeInOut",
            repeat: Infinity
        }
    }
};

const lanternSwingRight: Variants = {
    animate: {
        rotate: [-4, 4, -4],
        transition: {
            duration: 3.2,
            ease: "easeInOut",
            repeat: Infinity
        }
    }
};

const floatSmoothA: Variants = {
    animate: {
        y: [-4, 4, -4],
        transition: {
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity
        }
    }
};

const floatSmoothB: Variants = {
    animate: {
        y: [4, -4, 4],
        transition: {
            duration: 2.2,
            ease: "easeInOut",
            repeat: Infinity
        }
    }
};

export default function HeroSection() {
    const t = useTranslations("Hero");

    const stats = [
        { id: "students", count: t("studentsCount"), label: t("studentsLabel"), icon: Users },
        { id: "hours", count: t("hoursCount"), label: t("hoursLabel"), icon: Clock },
        { id: "rating", count: t("ratingCount"), label: t("ratingLabel"), icon: Star }
    ];

    return (
        <section className={styles.heroSection}>
            <motion.div
                className={`${styles.lantern} ${styles.lanternLeft}`}
                variants={lanternSwingLeft}
                animate="animate"
            >
                <svg viewBox="0 0 50 140" fill="none" className={styles.lanternSvg}>
                    <line x1="25" y1="0" x2="25" y2="55" stroke="#c4a75e" strokeWidth="2" strokeDasharray="3 3" />
                    <circle cx="25" cy="58" r="4" fill="#c4a75e" />
                    <path d="M16 62 L34 62 L40 76 L10 76 Z" fill="#123d32" stroke="#c4a75e" strokeWidth="1.5" />
                    <path d="M10 76 L40 76 L34 112 L16 112 Z" fill="#faf8f5" stroke="#c4a75e" strokeWidth="1.5" />
                    <line x1="25" y1="76" x2="25" y2="112" stroke="#c4a75e" strokeWidth="1" opacity="0.6" />
                    <circle cx="25" cy="94" r="6" fill="#c4a75e" className={styles.glowPoint} />
                    <path d="M16 112 L34 112 L25 132 Z" fill="#123d32" stroke="#c4a75e" strokeWidth="1.5" />
                </svg>
            </motion.div>

            <motion.div
                className={`${styles.lantern} ${styles.lanternRight}`}
                variants={lanternSwingRight}
                animate="animate"
            >
                <svg viewBox="0 0 56 160" fill="none" className={styles.lanternSvg}>
                    <line x1="28" y1="0" x2="28" y2="65" stroke="#c4a75e" strokeWidth="2" strokeDasharray="3 3" />
                    <circle cx="28" cy="68" r="4" fill="#c4a75e" />
                    <path d="M18 72 L38 72 L46 88 L10 88 Z" fill="#123d32" stroke="#c4a75e" strokeWidth="1.5" />
                    <path d="M10 88 L46 88 L39 128 L17 128 Z" fill="#faf8f5" stroke="#c4a75e" strokeWidth="1.5" />
                    <line x1="28" y1="88" x2="28" y2="128" stroke="#c4a75e" strokeWidth="1" opacity="0.6" />
                    <circle cx="28" cy="108" r="7" fill="#c4a75e" className={styles.glowPoint} />
                    <path d="M17 128 L39 128 L28 152 Z" fill="#123d32" stroke="#c4a75e" strokeWidth="1.5" />
                </svg>
            </motion.div>

            <div className="container">
                <div className={styles.heroGrid}>
                    <div className={styles.textContent}>
                        <div className={styles.badgeWrapper}>
                            <div className={styles.badge}>
                                <ShieldCheck size={16} />
                                <span>{t("badge")}</span>
                            </div>
                        </div>

                        <h1 className={styles.mainTitle}>
                            {t("titleStart")}{" "}
                            <span className={styles.highlightText}>
                                {t("titleHighlight")}
                            </span>
                        </h1>

                        <p className={styles.description}>
                            {t("description")}
                        </p>

                        <div className={styles.actions}>
                            <Link href="" className={styles.primaryCta}>
                                <Video size={17} />
                                <span>{t("bookTrial")}</span>
                            </Link>

                            <Link href="/courses" className={styles.secondaryCta}>
                                <span>{t("exploreCourses")}</span>
                                <ArrowRight size={16} className={styles.arrowIcon} />
                            </Link>
                        </div>
                    </div>

                    <div className={styles.visualContent}>
                        <div className={styles.archContainer}>
                            <div className={styles.archBackdrop} />

                            <div className={styles.archFrame}>
                                <Image
                                    src="https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=800&q=80"
                                    alt="Nour Academy Quran Learning"
                                    width={480}
                                    height={560}
                                    priority
                                    className={styles.archImage}
                                />
                            </div>

                            <motion.div
                                className={`${styles.floatingBox} ${styles.floatingBoxTop}`}
                                variants={floatSmoothA}
                                animate="animate"
                            >
                                <div className={styles.iconCircle}>
                                    <Video size={17} />
                                </div>
                                <div className={styles.boxInfo}>
                                    <strong>{t("cardTopTitle")}</strong>
                                    <p>{t("cardTopSubtitle")}</p>
                                </div>
                            </motion.div>

                            <motion.div
                                className={`${styles.floatingBox} ${styles.floatingBoxBottom}`}
                                variants={floatSmoothB}
                                animate="animate"
                            >
                                <div className={`${styles.iconCircle} ${styles.goldCircle}`}>
                                    <CheckCircle2 size={17} />
                                </div>
                                <div className={styles.boxInfo}>
                                    <strong>{t("cardBottomTitle")}</strong>
                                    <p>{t("cardBottomSubtitle")}</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>

                <div className={styles.statsCard}>
                    <div className={styles.statsGrid}>
                        {stats.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div key={item.id} className={styles.statItem}>
                                    <div className={styles.statIconWrapper}>
                                        <Icon size={20} />
                                    </div>
                                    <div className={styles.statDetails}>
                                        <span className={styles.statCount}>{item.count}</span>
                                        <span className={styles.statLabel}>{item.label}</span>
                                    </div>
                                    {index < stats.length - 1 && (
                                        <div className={styles.statDivider} />
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}