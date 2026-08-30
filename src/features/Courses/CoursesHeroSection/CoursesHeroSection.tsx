"use client";

import { useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { Sparkles, Search, BookOpen, CheckCircle2 } from "lucide-react";
import { allCoursesData } from "@/data/courses.data";
import styles from "./CoursesHeroSection.module.scss";

export default function CoursesHeroSection() {
    const t = useTranslations("CoursesHero");
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const [query, setQuery] = useState(searchParams.get("q") || "");
    const totalCourses = allCoursesData.length;

    const handleSearch = (e: FormEvent) => {
        e.preventDefault();
        const trimmed = query.trim();
        const params = new URLSearchParams(searchParams.toString());

        if (trimmed) {
            params.set("q", trimmed);
        } else {
            params.delete("q");
        }

        router.push(`${pathname}?${params.toString()}#courses-grid`, { scroll: false });

        const target = document.getElementById("courses-grid");
        if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <section className={styles.coursesHeroSection}>
            <div className="container">
                <div className={styles.contentWrapper}>
                    {/* Badge & Total Count Counter */}
                    <div className={styles.topMeta}>
                        <div className={styles.badge}>
                            <Sparkles size={14} />
                            <span>{t("badge")}</span>
                        </div>
                        <div className={styles.counterBadge}>
                            <BookOpen size={14} />
                            <span>
                                <strong>{totalCourses}</strong> {t("totalCountBadge")}
                            </span>
                        </div>
                    </div>

                    {/* Main Title & Description */}
                    <h1 className={styles.mainTitle}>{t("mainTitle")}</h1>
                    <p className={styles.leadDesc}>{t("description")}</p>

                    {/* Search Form (Submit On Enter or Click) */}
                    <form className={styles.searchForm} onSubmit={handleSearch}>
                        <div className={styles.inputWrapper}>
                            <Search size={18} className={styles.searchIcon} />
                            <input
                                type="text"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder={t("searchPlaceholder")}
                                className={styles.searchInput}
                            />
                        </div>
                        <button type="submit" className={styles.searchSubmitBtn}>
                            <Search size={16} />
                            <span>{t("searchBtn")}</span>
                        </button>
                    </form>

                    {/* Quick Features Row */}
                    <div className={styles.featuresRow}>
                        <div className={styles.featureItem}>
                            <CheckCircle2 size={15} />
                            <span>{t("feature1")}</span>
                        </div>
                        <div className={styles.featureItem}>
                            <CheckCircle2 size={15} />
                            <span>{t("feature2")}</span>
                        </div>
                        <div className={styles.featureItem}>
                            <CheckCircle2 size={15} />
                            <span>{t("feature3")}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}