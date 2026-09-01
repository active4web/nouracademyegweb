"use client";

import { useTranslations, useLocale } from "next-intl";
import { Star, MessageSquareQuote, MapPin, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { type Teacher } from "@/data/teachers.data";

import "swiper/css";
import "swiper/css/navigation";
import styles from "./TeacherReviewsSection.module.scss";

interface TeacherReviewsSectionProps {
    teacher: Teacher;
}

export default function TeacherReviewsSection({ teacher }: TeacherReviewsSectionProps) {
    const t = useTranslations("TeacherProfile.reviewsSection");
    const locale = useLocale() as "ar" | "en";
    const isAr = locale === "ar";

    const reviews = teacher.reviews || [];
    const ratingScore = teacher.rating || 5.0;
    const reviewsCount = teacher.reviewsCount || reviews.length;

    if (reviews.length === 0) return null;

    return (
        <section className={styles.reviewsSection}>
            <div className="container">
                {/* Header مع صندوق التقييم في نفس السطر */}
                <div className={styles.sectionHeaderRow}>
                    <div className={styles.headerInfo}>
                        <div className={styles.badge}>
                            <MessageSquareQuote size={14} />
                            <span>{t("badge")}</span>
                        </div>
                        <h2 className={styles.title}>{t("title")}</h2>
                        <p className={styles.desc}>{t("desc")}</p>
                    </div>

                    <div className={styles.scoreBox}>
                        <div className={styles.scoreNumber}>{ratingScore.toFixed(1)}</div>
                        <div className={styles.scoreDetails}>
                            <div className={styles.starsWrapper}>
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        size={16}
                                        className={i < Math.floor(ratingScore) ? styles.starFilled : styles.starEmpty}
                                        fill="currentColor"
                                    />
                                ))}
                            </div>
                            <span className={styles.reviewsCountText}>
                                {t("basedOn", { count: reviewsCount })}
                            </span>
                        </div>
                    </div>
                </div>

                {/* سلايدر التقييمات باستخدام Swiper */}
                <div className={styles.sliderContainer}>
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        dir={isAr ? "rtl" : "ltr"}
                        key={locale}
                        spaceBetween={20}
                        slidesPerView={1}
                        autoplay={{ delay: 4000, disableOnInteraction: false }}
                        navigation={{
                            nextEl: `.${styles.swiperNext}`,
                            prevEl: `.${styles.swiperPrev}`
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 1.5,
                                spaceBetween: 20
                            },
                            1024: {
                                slidesPerView: 2,
                                spaceBetween: 24
                            }
                        }}
                        className={styles.reviewsSwiper}
                    >
                        {reviews.map((rev, idx) => {
                            const studentName = rev.studentName[locale] || rev.studentName.ar;
                            const country = rev.country[locale] || rev.country.ar;
                            const comment = rev.comment[locale] || rev.comment.ar;

                            return (
                                <SwiperSlide key={rev.id || idx}>
                                    <div className={styles.reviewCard}>
                                        <div className={styles.cardHeader}>
                                            <div className={styles.studentInfo}>
                                                <div className={styles.avatarLetter}>
                                                    {studentName.charAt(0)}
                                                </div>
                                                <div>
                                                    <h4 className={styles.studentName}>{studentName}</h4>
                                                    <div className={styles.countryRow}>
                                                        <MapPin size={12} />
                                                        <span>{country}</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className={styles.starsRow}>
                                                {[...Array(rev.rating)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        size={14}
                                                        className={styles.starFilled}
                                                        fill="currentColor"
                                                    />
                                                ))}
                                            </div>
                                        </div>

                                        <p className={styles.commentText}>{comment}</p>

                                        <div className={styles.cardFooter}>
                                            <span className={styles.verifiedTag}>
                                                <CheckCircle2 size={13} />
                                                <span>{t("verifiedStudent")}</span>
                                            </span>
                                            {rev.date && (
                                                <span className={styles.reviewDate}>{rev.date}</span>
                                            )}
                                        </div>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>

                    {/* أزرار التنقل بالسلايدر */}
                    <div className={styles.sliderControls}>
                        <button
                            type="button"
                            className={styles.swiperPrev}
                            aria-label="السابق"
                        >
                            {isAr ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
                        </button>
                        <button
                            type="button"
                            className={styles.swiperNext}
                            aria-label="التالي"
                        >
                            {isAr ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}