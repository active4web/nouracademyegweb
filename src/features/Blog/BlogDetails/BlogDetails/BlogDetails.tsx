import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { ChevronLeft, ChevronRight, Calendar, Home } from "lucide-react";
import { type BlogPost } from "@/data/blog.data";
import styles from "./ArticleHeaderSection.module.scss";

interface ArticleHeaderSectionProps {
    post: BlogPost;
}

export default async function ArticleHeaderSection({ post }: ArticleHeaderSectionProps) {
    const t = await getTranslations("ArticleHeader");
    const locale = (await getLocale()) as "ar" | "en";

    const title = post.title[locale] || post.title.ar;
    const category = post.category[locale] || post.category.ar;
    const authorName = post.author.name[locale] || post.author.name.ar;
    const authorRole = post.author.role[locale] || post.author.role.ar;

    return (
        <section className={styles.headerSection}>
            <div className="container">
                {/* Breadcrumb Navigation */}
                <nav aria-label="breadcrumb" className={styles.breadcrumbNav}>
                    <ol className={styles.breadcrumbList}>
                        <li>
                            <Link href="/" className={styles.breadcrumbLink}>
                                <Home size={14} />
                                <span>{t("home")}</span>
                            </Link>
                        </li>
                        <li className={styles.separator}>
                            {locale === "ar" ? <ChevronLeft size={13} /> : <ChevronRight size={13} />}
                        </li>
                        <li>
                            <Link href="/blog" className={styles.breadcrumbLink}>
                                <span>{t("blog")}</span>
                            </Link>
                        </li>
                        <li className={styles.separator}>
                            {locale === "ar" ? <ChevronLeft size={13} /> : <ChevronRight size={13} />}
                        </li>
                        <li className={styles.currentCrumb} aria-current="page">
                            <span>{title}</span>
                        </li>
                    </ol>
                </nav>

                {/* Article Header Content */}
                <div className={styles.headerContent}>
                    <div className={styles.categoryBadge}>{category}</div>

                    <h1 className={styles.articleTitle}>{title}</h1>

                    <div className={styles.metaRow}>
                        <div className={styles.authorBox}>
                            <div className={styles.authorImgRing}>
                                <Image
                                    src={post.author.image}
                                    alt={authorName}
                                    width={38}
                                    height={38}
                                    className={styles.authorAvatar}
                                />
                            </div>
                            <div className={styles.authorText}>
                                <span className={styles.authorName}>{authorName}</span>
                                <span className={styles.authorRole}>{authorRole}</span>
                            </div>
                        </div>

                        <div className={styles.metaDivider} />

                        <div className={styles.dateMeta}>
                            <Calendar size={15} />
                            <span>{t("publishedOn")}</span>
                            <time dateTime={post.publishedAt}>{post.publishedAt}</time>
                        </div>
                    </div>
                </div>

                {/* Cover Image */}
                <div className={styles.coverImageContainer}>
                    <Image
                        src={post.image}
                        alt={title}
                        fill
                        priority
                        sizes="(max-width: 1024px) 100vw, 1000px"
                        className={styles.coverImg}
                    />
                </div>
            </div>
        </section>
    );
}