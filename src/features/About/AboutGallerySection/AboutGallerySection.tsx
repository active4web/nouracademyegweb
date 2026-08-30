"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Maximize2, X, Award } from "lucide-react";
import { galleryData, type GalleryItem } from "@/data/about.data";
import styles from "./AboutGallerySection.module.scss";

type CategoryFilter = "all" | "honor" | "ijazah" | "competition";

export default function AboutGallerySection() {
    const t = useTranslations("AboutGallery");
    const locale = useLocale() as "ar" | "en";
    const [activeFilter, setActiveFilter] = useState<CategoryFilter>("all");
    const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

    const filteredItems = activeFilter === "all"
        ? galleryData
        : galleryData.filter((item) => item.category === activeFilter);

    return (
        <section className={styles.gallerySection}>
            <div className="container">
                <div className={styles.headerWrapper}>
                    <div className={styles.sectionBadge}>
                        <span>{t("sectionBadge")}</span>
                    </div>
                    <h2 className={styles.sectionTitle}>{t("sectionTitle")}</h2>
                    <p className={styles.sectionDesc}>{t("sectionDesc")}</p>

                    {/* Filter Tabs */}
                    <div className={styles.filtersWrapper}>
                        <button
                            type="button"
                            className={`${styles.filterBtn} ${activeFilter === "all" ? styles.active : ""}`}
                            onClick={() => setActiveFilter("all")}
                        >
                            {t("allTab")}
                        </button>
                        <button
                            type="button"
                            className={`${styles.filterBtn} ${activeFilter === "honor" ? styles.active : ""}`}
                            onClick={() => setActiveFilter("honor")}
                        >
                            {t("honorTab")}
                        </button>
                        <button
                            type="button"
                            className={`${styles.filterBtn} ${activeFilter === "ijazah" ? styles.active : ""}`}
                            onClick={() => setActiveFilter("ijazah")}
                        >
                            {t("ijazahTab")}
                        </button>
                        <button
                            type="button"
                            className={`${styles.filterBtn} ${activeFilter === "competition" ? styles.active : ""}`}
                            onClick={() => setActiveFilter("competition")}
                        >
                            {t("competitionTab")}
                        </button>
                    </div>
                </div>

                {/* Gallery Cards Grid */}
                <div className={styles.galleryGrid}>
                    {filteredItems.map((item) => (
                        <div
                            key={item.id}
                            className={styles.galleryCard}
                            onClick={() => setSelectedImage(item)}
                        >
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={item.image}
                                    alt={item.title[locale] || item.title.ar}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    className={styles.cardImage}
                                />
                                <div className={styles.imageOverlay}>
                                    <div className={styles.zoomCircle}>
                                        <Maximize2 size={18} />
                                    </div>
                                </div>
                                <div className={styles.categoryPill}>
                                    <Award size={13} />
                                    <span>{item.categoryLabel[locale] || item.categoryLabel.ar}</span>
                                </div>
                            </div>

                            <div className={styles.cardInfo}>
                                <div className={styles.dateRow}>
                                    <Calendar size={13} />
                                    <span>{item.date[locale] || item.date.ar}</span>
                                </div>
                                <h3 className={styles.itemTitle}>
                                    {item.title[locale] || item.title.ar}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Lightbox Modal */}
                <AnimatePresence>
                    {selectedImage && (
                        <div
                            className={styles.modalBackdrop}
                            onClick={() => setSelectedImage(null)}
                        >
                            <motion.div
                                className={styles.modalContainer}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.2, ease: "easeOut" }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button
                                    type="button"
                                    className={styles.closeBtn}
                                    onClick={() => setSelectedImage(null)}
                                    aria-label={t("closeModal")}
                                >
                                    <X size={20} />
                                </button>

                                <div className={styles.modalImageWrapper}>
                                    <Image
                                        src={selectedImage.image}
                                        alt={selectedImage.title[locale] || selectedImage.title.ar}
                                        fill
                                        sizes="(max-width: 1024px) 90vw, 680px"
                                        className={styles.modalImg}
                                    />
                                </div>

                                <div className={styles.modalFooter}>
                                    <span className={styles.modalTag}>
                                        {selectedImage.categoryLabel[locale] || selectedImage.categoryLabel.ar}
                                    </span>
                                    <h4 className={styles.modalTitle}>
                                        {selectedImage.title[locale] || selectedImage.title.ar}
                                    </h4>
                                    <div className={styles.modalDate}>
                                        <Calendar size={14} />
                                        <span>{selectedImage.date[locale] || selectedImage.date.ar}</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}