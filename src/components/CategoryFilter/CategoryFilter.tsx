import { getLocale, getTranslations } from "next-intl/server";
import Link from "next/link";
import { Filter } from "lucide-react";
import styles from "./CategoryFilter.module.scss";

interface ApiCategory {
  id: number;
  name: string;
  is_active: number;
  created_at: string;
}

interface CategoriesApiResponse {
  status: string;
  message: string;
  data: { data: ApiCategory[] };
}

async function getCategories(lang: string): Promise<ApiCategory[]> {
  try {
    const base = process.env.NEXT_PUBLIC_API_BASE_URL;
    const url = `${base}website/categories?lang=${lang}`;

    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (!res.ok) throw new Error("Failed to fetch categories");

    const json: CategoriesApiResponse = await res.json();
    return json.data.data;
  } catch {
    return [];
  }
}

interface CategoryFilterProps {
  selectedCategory: string;
  basePath: string;
}

export default async function CategoryFilter({
  selectedCategory,
  basePath,
}: CategoryFilterProps) {
  const locale = await getLocale();
  const t = await getTranslations("TeachersPage");
  const categories = await getCategories(locale);

  const buildHref = (id: string) =>
    id === "all" ? basePath : `${basePath}?category=${id}`;

  return (
    <div className={styles.filterBar}>
      <div className={styles.filterIconLabel}>
        <Filter size={16} />
        <span>{t("categoryLabel")}</span>
      </div>
      <div className={styles.filterButtonsWrapper}>
        <Link
          href={buildHref("all")}
          className={`${styles.filterBtn} ${selectedCategory === "all" ? styles.active : ""}`}
        >
          {t("allFilter")}
        </Link>

        {categories.map((cat) => (
          <Link
            key={cat.id}
            href={buildHref(String(cat.id))}
            className={`${styles.filterBtn} ${selectedCategory === String(cat.id) ? styles.active : ""}`}
          >
            {cat.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
