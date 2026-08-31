"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown, MessageCircle, ArrowRight } from "lucide-react";
import { packagesFaqData } from "@/data/packages.data";
import styles from "./PackagesFaqSection.module.scss";

export default function PackagesFaqSection() {
    const t = useTranslations("PackagesFaq");
    const locale = useLocale() as "ar" | "en";
    const [openId, setOpenId] = useState<string | null>(packagesFaqData[0]?.id || null);

    const toggleFaq = (id: string) => {
        setOpenId((prev) => (prev === id ? null : id));
    };

    return (
        <section className={styles.faqSection}>
            <div className="container">
                <div className={styles.headerWrapper}>
                    <div className={styles.sectionBadge}>
                        <span>{t("sectionBadge")}</span>
                    </div>
                    <h2 className={styles.sectionTitle}>{t("sectionTitle")}</h2>
                    <p className={styles.sectionDesc}>{t("sectionDesc")}</p>
                </div>

                <div className={styles.accordionContainer}>
                    {packagesFaqData.map((faq, idx) => {
                        const isOpen = openId === faq.id;

                        return (
                            <div
                                key={faq.id}
                                className={`${styles.accordionItem} ${isOpen ? styles.open : ""}`}
                            >
                                <button
                                    type="button"
                                    className={styles.accordionTrigger}
                                    onClick={() => toggleFaq(faq.id)}
                                    aria-expanded={isOpen}
                                >
                                    <div className={styles.triggerContent}>
                                        <div className={styles.iconCircle}>
                                            <HelpCircle size={16} />
                                        </div>
                                        <span className={styles.faqNumber}>0{idx + 1}</span>
                                        <h3 className={styles.questionTitle}>
                                            {faq.question[locale] || faq.question.ar}
                                        </h3>
                                    </div>

                                    <div className={styles.chevronWrapper}>
                                        <ChevronDown size={18} className={styles.chevronIcon} />
                                    </div>
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            key="content"
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.25, ease: [0.04, 0.62, 0.23, 0.98] }}
                                            className={styles.accordionContent}
                                        >
                                            <div className={styles.answerInner}>
                                                <p>{faq.answer[locale] || faq.answer.ar}</p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>

                <div className={styles.supportBanner}>
                    <p>{t("moreQuestionsText")}</p>
                    <Link href="/contact" className={styles.supportBtn}>
                        <MessageCircle size={16} />
                        <span>{t("contactSupport")}</span>
                        <ArrowRight size={14} className={styles.arrowIcon} />
                    </Link>
                </div>
            </div>
        </section>
    );
}