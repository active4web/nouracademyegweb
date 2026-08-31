import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Sparkles, Calendar, ArrowRight, BookOpen } from "lucide-react";
import { allBlogPosts } from "@/data/blog.data";
import styles from "./BlogHeroSection.module.scss";

export default async function BlogHeroSection() {
    const t = await getTranslations("BlogHero");
    const locale = (await getLocale()) as "ar" | "en";

    // جلب المقال المميز أو أول مقال كـ fallback
    const featuredPost = allBlogPosts.find((p) => p.featured) || allBlogPosts[0];

    return (
        <section className={styles.blogHeroSection}>
            <div className="container">
                {/* Header Info */}
                <div className={styles.headerWrapper}>
                    <div className={styles.badge}>
                        <BookOpen size={14} />
                        <span>{t("badge")}</span>
                    </div>
                    <h1 className={styles.mainTitle}>{t("mainTitle")}</h1>
                    <p className={styles.leadDesc}>{t("description")}</p>
                </div>

                {/* Featured Post Card */}
                {featuredPost && (
                    <div className={styles.featuredWrapper}>
                        <div className={styles.featuredCard}>
                            <div className={styles.imageContainer}>
                                <Image
                                    src={featuredPost.image}
                                    alt={featuredPost.title[locale] || featuredPost.title.ar}
                                    fill
                                    priority
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className={styles.postImg}
                                />
                                <div className={styles.categoryBadge}>
                                    {featuredPost.category[locale] || featuredPost.category.ar}
                                </div>
                            </div>

                            <div className={styles.contentContainer}>
                                <div className={styles.metaTop}>
                                    <span className={styles.featuredTag}>
                                        <Sparkles size={13} />
                                        <span>{t("featuredBadge")}</span>
                                    </span>
                                    <div className={styles.dateMeta}>
                                        <Calendar size={14} />
                                        <time dateTime={featuredPost.publishedAt}>
                                            {featuredPost.publishedAt}
                                        </time>
                                    </div>
                                </div>

                                <h2 className={styles.postTitle}>
                                    <Link href={`/blog/${featuredPost.slug}`}>
                                        {featuredPost.title[locale] || featuredPost.title.ar}
                                    </Link>
                                </h2>

                                <p className={styles.postExcerpt}>
                                    {featuredPost.excerpt[locale] || featuredPost.excerpt.ar}
                                </p>

                                <div className={styles.footerRow}>
                                    <div className={styles.authorBox}>
                                        <div className={styles.authorImgRing}>
                                            <Image
                                                src={featuredPost.author.image}
                                                alt={featuredPost.author.name[locale] || featuredPost.author.name.ar}
                                                width={36}
                                                height={36}
                                                className={styles.authorAvatar}
                                            />
                                        </div>
                                        <div className={styles.authorText}>
                                            <span className={styles.authorName}>
                                                {featuredPost.author.name[locale] || featuredPost.author.name.ar}
                                            </span>
                                            <span className={styles.authorRole}>
                                                {featuredPost.author.role[locale] || featuredPost.author.role.ar}
                                            </span>
                                        </div>
                                    </div>

                                    <Link
                                        href={`/blog/${featuredPost.slug}`}
                                        className={styles.readMoreBtn}
                                    >
                                        <span>{t("readArticle")}</span>
                                        <ArrowRight size={15} className={styles.arrowIcon} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}