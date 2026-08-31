import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Calendar, ArrowRight, User } from "lucide-react";
import { type BlogPost } from "@/data/blog.data";
import styles from "./BlogCard.module.scss";

interface BlogCardProps {
    post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
    const locale = useLocale() as "ar" | "en";
    const t = useTranslations("BlogListing");

    return (
        <article className={styles.blogCard}>
            <div className={styles.imageContainer}>
                <Image
                    src={post.image}
                    alt={post.title[locale] || post.title.ar}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className={styles.postImg}
                />
                <div className={styles.categoryBadge}>
                    {post.category[locale] || post.category.ar}
                </div>
            </div>

            <div className={styles.contentWrapper}>
                <div className={styles.metaRow}>
                    <div className={styles.metaItem}>
                        <User size={13} />
                        <span>{post.author.name[locale] || post.author.name.ar}</span>
                    </div>
                    <div className={styles.metaItem}>
                        <Calendar size={13} />
                        <time dateTime={post.publishedAt}>{post.publishedAt}</time>
                    </div>
                </div>

                <h3 className={styles.postTitle}>
                    <Link href={`/blog/${post.slug}`}>
                        {post.title[locale] || post.title.ar}
                    </Link>
                </h3>

                <p className={styles.postExcerpt}>
                    {post.excerpt[locale] || post.excerpt.ar}
                </p>

                <div className={styles.cardFooter}>
                    <Link href={`/blog/${post.slug}`} className={styles.readMoreLink}>
                        <span>{t("readMore")}</span>
                        <ArrowRight size={14} className={styles.arrowIcon} />
                    </Link>
                </div>
            </div>
        </article>
    );
}