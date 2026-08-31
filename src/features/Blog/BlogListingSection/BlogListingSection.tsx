"use client";

import { useState, useMemo } from "react";
import { useTranslations, useLocale } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, Filter, ChevronRight, ChevronLeft, BookOpen } from "lucide-react";
import { allBlogPosts, blogCategories } from "@/data/blog.data";
import BlogCard from "@/components/BlogCard/BlogCard";
import styles from "./BlogListingSection.module.scss";

const ITEMS_PER_PAGE = 6;

export default function BlogListingSection() {
    const t = useTranslations("BlogListing");
    const locale = useLocale() as "ar" | "en";

    const [selectedCategory, setSelectedCategory] = useState<string>("all");
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [currentPage, setCurrentPage] = useState<number>(1);

    const filteredPosts = useMemo(() => {
        return allBlogPosts.filter((post) => {
            const matchesCategory =
                selectedCategory === "all" || post.categoryKey === selectedCategory;

            const query = searchQuery.toLowerCase().trim();
            const matchesSearch =
                !query ||
                post.title.ar.toLowerCase().includes(query) ||
                post.title.en.toLowerCase().includes(query) ||
                post.excerpt.ar.toLowerCase().includes(query) ||
                post.excerpt.en.toLowerCase().includes(query) ||
                post.author.name.ar.toLowerCase().includes(query) ||
                post.author.name.en.toLowerCase().includes(query);

            return matchesCategory && matchesSearch;
        });
    }, [selectedCategory, searchQuery]);

    const totalPages = Math.ceil(filteredPosts.length / ITEMS_PER_PAGE) || 1;

    const currentPosts = useMemo(() => {
        const start = (currentPage - 1) * ITEMS_PER_PAGE;
        return filteredPosts.slice(start, start + ITEMS_PER_PAGE);
    }, [filteredPosts, currentPage]);

    const handleCategoryChange = (key: string) => {
        setSelectedCategory(key);
        setCurrentPage(1);
    };

    const handleSearchChange = (val: string) => {
        setSearchQuery(val);
        setCurrentPage(1);
    };

    const handleClearSearch = () => {
        setSearchQuery("");
        setCurrentPage(1);
    };

    return (
        <section id="blog-listing" className={styles.blogListingSection}>
            <div className="container">
                {/* Search and Filters Bar */}
                <div className={styles.controlsWrapper}>
                    <div className={styles.searchBar}>
                        <Search size={17} className={styles.searchIcon} />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => handleSearchChange(e.target.value)}
                            placeholder={t("searchPlaceholder")}
                            className={styles.searchInput}
                        />
                        {searchQuery && (
                            <button
                                type="button"
                                onClick={handleClearSearch}
                                className={styles.clearBtn}
                            >
                                <X size={15} />
                            </button>
                        )}
                    </div>

                    <div className={styles.filterBar}>
                        <div className={styles.filterIconLabel}>
                            <Filter size={15} />
                            <span>{t("filterLabel")}</span>
                        </div>
                        <div className={styles.filterButtonsWrapper}>
                            {blogCategories.map((cat) => (
                                <button
                                    key={cat.key}
                                    type="button"
                                    className={`${styles.filterBtn} ${selectedCategory === cat.key ? styles.active : ""}`}
                                    onClick={() => handleCategoryChange(cat.key)}
                                >
                                    {cat.label[locale] || cat.label.ar}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Search Status */}
                {searchQuery && (
                    <div className={styles.searchAlertBar}>
                        <span>
                            {t("searchResultFor")} &quot;<strong>{searchQuery}</strong>&quot; ({filteredPosts.length} {t("articlesFound")})
                        </span>
                        <button type="button" onClick={handleClearSearch} className={styles.alertClearBtn}>
                            <X size={14} />
                            <span>{t("clearSearch")}</span>
                        </button>
                    </div>
                )}

                {/* Posts Grid with Framer Motion */}
                <AnimatePresence mode="wait">
                    {currentPosts.length > 0 ? (
                        <motion.div
                            key={selectedCategory + searchQuery + currentPage}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -15 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                            className={styles.postsGrid}
                        >
                            {currentPosts.map((post) => (
                                <motion.div
                                    key={post.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <BlogCard post={post} />
                                </motion.div>
                            ))}
                        </motion.div>
                    ) : (
                        <motion.div
                            key="empty-state"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className={styles.emptyState}
                        >
                            <div className={styles.emptyIconCircle}>
                                <BookOpen size={30} />
                            </div>
                            <h3 className={styles.emptyTitle}>{t("noResultsTitle")}</h3>
                            <p className={styles.emptyDesc}>{t("noResultsDesc")}</p>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Pagination Controls */}
                {totalPages > 1 && (
                    <div className={styles.paginationWrapper}>
                        <button
                            type="button"
                            disabled={currentPage === 1}
                            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                            className={styles.pageArrowBtn}
                            aria-label={t("prevPage")}
                        >
                            {locale === "ar" ? <ChevronRight size={17} /> : <ChevronLeft size={17} />}
                        </button>

                        <div className={styles.pageNumbers}>
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                <button
                                    key={page}
                                    type="button"
                                    className={`${styles.pageNumberBtn} ${currentPage === page ? styles.active : ""}`}
                                    onClick={() => setCurrentPage(page)}
                                >
                                    {page}
                                </button>
                            ))}
                        </div>

                        <button
                            type="button"
                            disabled={currentPage === totalPages}
                            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                            className={styles.pageArrowBtn}
                            aria-label={t("nextPage")}
                        >
                            {locale === "ar" ? <ChevronLeft size={17} /> : <ChevronRight size={17} />}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}