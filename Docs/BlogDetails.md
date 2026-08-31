# خطة صفحة تفاصيل المقال (Blog Details Page) - `/blog/[slug]`

المسار الرئيسي: `src/app/[locale]/blog/[slug]/page.tsx`
الهدف: توفير تجربة قراءة مريحة مع دعم الـ SEO وOpenGraph، وعرض المحتوى المقالي بتنسيق احترافي.

---

## 1. هيدر المقال ومسار التنقل (Article Header & Breadcrumb Section)
* **المسار:** `src/features/BlogDetails/ArticleHeaderSection/`
* **نوع المكون:** Server Component.
* **المحتوى:**
  * شريط مسار التنقل (Breadcrumb): الرئيسية > المدونة > اسم المقال.
  * وسم التصنيف (Category Badge).
  * العنوان الرئيسي للمقال (H1).
  * بيانات الكاتب وتاريخ النشر.
  * صورة الغلاف الرئيسية للمقال بدقة عالية.

---

## 2. جسم المحتوى والمشاركة (Article Content & Share Section)
* **المسار:** `src/features/BlogDetails/ArticleContentSection/`
* **نوع المكون:** Server / Client Component.
* **المحتوى:**
  * المحتوى التحريري الكامل للمقال (Formatted Typography / Rich HTML).
  * بطاقة معلومات الكاتب الموثقة (Author Info Card) في نهاية المقال.
  * أزرار مشاركة المقال على منصات التواصل (WhatsApp, X, Facebook, نسخ الرابط).

---

## 3. البانر الختامي المشترك (Final CTA Section)
* **المسار:** `src/features/Blog/BlogFinalCtaSection/`
* **المحتوى:** دعوة للبدء في التطبيق العملي وحجز حصة تجريبية مجانية.