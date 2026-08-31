import { notFound } from "next/navigation";
import { allBlogPosts } from "@/data/blog.data";
import ArticleHeaderSection from "@/features/Blog/BlogDetails/BlogDetails/BlogDetails";
import ArticleContentSection from "@/features/Blog/BlogDetails/ArticleContentSection/ArticleContentSection";
import BlogFinalCtaSection from "@/features/Blog/BlogFinalCtaSection/BlogFinalCtaSection";

interface PageProps {
    params: Promise<{
        locale: string;
        slug: string;
    }>;
}

export default async function BlogDetailsPage({ params }: PageProps) {
    const { slug } = await params;
    const post = allBlogPosts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <main style={{ display: "flex", flexDirection: "column", gap: "75px" }}>
            <ArticleHeaderSection post={post} />
            <ArticleContentSection post={post} />
            <BlogFinalCtaSection />
        </main>
    );
}