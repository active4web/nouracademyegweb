"use client";

import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Star, Quote } from "lucide-react";
import { testimonialsData } from "@/data/testimonials.data";

import "swiper/css";
import "swiper/css/pagination";
import styles from "./TestimonialsSection.module.scss";

export default function TestimonialsSection() {
    const t = useTranslations("Testimonials");
    const locale = useLocale() as "ar" | "en";

    return (
        <section className={styles.testimonialsSection}>
            <div className="container">
                <motion.div
                    className={styles.headerWrapper}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.2 }}
                >
                    <div className={styles.sectionBadge}>
                        <span>{t("sectionBadge")}</span>
                    </div>
                    <h2 className={styles.sectionTitle}>{t("sectionTitle")}</h2>
                    <p className={styles.sectionDesc}>{t("sectionDesc")}</p>
                </motion.div>

                <div className={styles.sliderContainer}>
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        spaceBetween={24}
                        slidesPerView={1}
                        slidesPerGroup={1}
                        speed={1500}
                        loop={true}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true
                        }}
                        pagination={{
                            clickable: true,
                            bulletActiveClass: styles.activeBullet,
                            bulletClass: styles.paginationBullet
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                                slidesPerGroup: 1
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 24,
                                slidesPerGroup: 1
                            }
                        }}
                        className={styles.swiperInstance}
                    >
                        {testimonialsData.map((item) => (
                            <SwiperSlide key={item.id} className={styles.slideItem}>
                                <div className={styles.reviewCard}>
                                    <div className={styles.cardHeader}>
                                        <div className={styles.starsRow}>
                                            {Array.from({ length: item.rating }).map((_, idx) => (
                                                <Star key={idx} size={15} className={styles.goldStar} />
                                            ))}
                                        </div>
                                        <Quote size={24} className={styles.quoteIcon} />
                                    </div>

                                    <p className={styles.reviewText}>
                                        {item.content[locale] || item.content.ar}
                                    </p>

                                    <div className={styles.trackBadge}>
                                        <span>{item.track[locale] || item.track.ar}</span>
                                    </div>

                                    <div className={styles.authorProfile}>
                                        <div className={styles.avatarWrapper}>
                                            <Image
                                                src={item.avatar}
                                                alt={item.authorName[locale] || item.authorName.ar}
                                                fill
                                                sizes="44px"
                                                className={styles.avatarImg}
                                            />
                                        </div>

                                        <div className={styles.authorDetails}>
                                            <h3 className={styles.authorName}>
                                                {item.authorName[locale] || item.authorName.ar}
                                            </h3>
                                            <div className={styles.locationRow}>
                                                <span className={styles.flagIcon}>{item.countryFlag}</span>
                                                <span className={styles.countryName}>
                                                    {item.country[locale] || item.country.ar}
                                                </span>
                                                <span className={styles.roleDot}>•</span>
                                                <span className={styles.authorRole}>
                                                    {item.role[locale] || item.role.ar}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}