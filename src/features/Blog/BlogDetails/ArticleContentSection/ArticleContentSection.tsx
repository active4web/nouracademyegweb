"use client";

import { useState } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Check, Copy, Share2 } from "lucide-react";
import { type BlogPost } from "@/data/blog.data";
import styles from "./ArticleContentSection.module.scss";

interface ArticleContentSectionProps {
    post: BlogPost;
}

function TwitterIcon({ size = 15 }: { size?: number }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
        >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
    );
}

function FacebookIcon({ size = 15 }: { size?: number }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
        >
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
    );
}

function WhatsAppIcon({ size = 15 }: { size?: number }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
        >
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.044c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.155.57 4.178 1.564 5.926l-1.572 5.748 5.882-1.543c1.679.914 3.601 1.434 5.64 1.434 6.627 0 12-5.373 12-12s-5.373-12-12-12z" />
        </svg>
    );
}

export default function ArticleContentSection({ post }: ArticleContentSectionProps) {
    const t = useTranslations("ArticleContent");
    const locale = useLocale() as "ar" | "en";
    const [copied, setCopied] = useState<boolean>(false);

    const contentHtml = post.content[locale] || post.content.ar;
    const authorName = post.author.name[locale] || post.author.name.ar;
    const authorRole = post.author.role[locale] || post.author.role.ar;
    const title = post.title[locale] || post.title.ar;

    const currentUrl = typeof window !== "undefined" ? window.location.href : "";

    const handleCopy = () => {
        if (typeof window !== "undefined") {
            navigator.clipboard.writeText(window.location.href);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    const shareOnTwitter = () => {
        window.open(
            `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(currentUrl)}`,
            "_blank"
        );
    };

    const shareOnFacebook = () => {
        window.open(
            `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
            "_blank"
        );
    };

    const shareOnWhatsApp = () => {
        window.open(
            `https://api.whatsapp.com/send?text=${encodeURIComponent(title + " " + currentUrl)}`,
            "_blank"
        );
    };

    return (
        <section className={styles.contentSection}>
            <div className="container">
                <div className={styles.articleWrapper}>
                    {/* Rich HTML Content Body */}
                    <div
                        className={styles.articleBody}
                        dangerouslySetInnerHTML={{ __html: contentHtml }}
                    />

                    {/* Share Bar */}
                    <div className={styles.shareBar}>
                        <div className={styles.shareLabel}>
                            <Share2 size={16} />
                            <span>{t("shareArticle")}</span>
                        </div>
                        <div className={styles.shareButtons}>
                            <button
                                type="button"
                                onClick={shareOnWhatsApp}
                                className={`${styles.shareBtn} ${styles.whatsapp}`}
                                aria-label="Share on WhatsApp"
                            >
                                <WhatsAppIcon size={16} />
                                <span>واتساب</span>
                            </button>
                            <button
                                type="button"
                                onClick={shareOnTwitter}
                                className={styles.shareBtn}
                                aria-label="Share on X"
                            >
                                <TwitterIcon size={14} />
                            </button>
                            <button
                                type="button"
                                onClick={shareOnFacebook}
                                className={styles.shareBtn}
                                aria-label="Share on Facebook"
                            >
                                <FacebookIcon size={15} />
                            </button>
                            <button
                                type="button"
                                onClick={handleCopy}
                                className={`${styles.shareBtn} ${styles.copyBtn}`}
                                aria-label="Copy Link"
                            >
                                {copied ? <Check size={15} /> : <Copy size={15} />}
                                <span>{copied ? t("linkCopied") : t("copyLink")}</span>
                            </button>
                        </div>
                    </div>

                    {/* Author Box */}
                    <div className={styles.authorCard}>
                        <div className={styles.authorAvatarRing}>
                            <Image
                                src={post.author.image}
                                alt={authorName}
                                width={64}
                                height={64}
                                className={styles.avatarImg}
                            />
                        </div>
                        <div className={styles.authorInfo}>
                            <span className={styles.writtenBy}>{t("writtenBy")}</span>
                            <h4 className={styles.authorName}>{authorName}</h4>
                            <p className={styles.authorRole}>{authorRole}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}