# خطة صفحة دليل الباقات والأسعار (`/packages`)

## 1. هيكل السكاشن (Page Sections)

* **01. مقدمة الباقات وهيدر الصفحة (Packages Hero & Currency Selector)**
  * العنوان الرئيسي والوصف التعريفي الذي يوضح مرونة خطط الاشتراكات والفئات التعليمية.
  * مبدل العملات التفاعلي (مثل: الجنيه المصري EGP / الدولار الأمريكي USD) لتحديث الأسعار في كافة الكروت فورياً.

* **02. شبكة كروت الباقات (Packages Cards Grid)**
  * كروت الباقات المختلفة (الباقة الأساسية، الباقة المكثفة، باقة العائلة).
  * تفاصيل الكارت: شارة الأكثر مبيعاً (Most Popular)، عنوان الباقة، السعر بناءً على العملة المحددة، الحصص الأسبوعية والمدة، والمميزات.
  * روابط التوجيه: زر تفاصيل الباقة (`/packages/[id]`) وزر الحجز المباشر (`/packages/[id]/apply`).

* **03. جدول مقارنة الباقات (Packages Comparison Table)**
  * جدول متجاوب يعرض مقارنة تفصيلية جنباً إلى جنب بين خصائص الباقات (عدد الساعات، التقارير الدورية، مرونة المواعيد، ونوع المعلم).

* **04. الأسئلة الشائعة للباقات (Packages FAQ Section)**
  * قائمة تفاعلية (Accordion) للإجابة على الاستفسارات المتعلقة بسياسة الاسترجاع، طرق الدفع، وتعديل المواعيد.

* **05. البانر الختامي المشترك (Courses Final CTA Section)**
  * إعادة استخدام مكون `CoursesFinalCtaSection` لدعوة المستخدم لحجز الحصة التجريبية المجانية.

---

## 2. خريطة الملفات والمكونات (Architecture Map)

```text
src/
├── data/
│   └── packages.data.ts                      # بيانات الباقات وأسعار العملات (EGP/USD) ثنائية اللغة (ar/en)
│
├── features/
│   └── Packages/
│       ├── PackagesHeroSection/              # هيدر الباقات ومبدل العملات
│       │   ├── PackagesHeroSection.tsx
│       │   └── PackagesHeroSection.module.scss
│       │
│       ├── PackagesGridSection/              # شبكة كروت الباقات
│       │   ├── PackagesGridSection.tsx
│       │   ├── PackagesGridSection.module.scss
│       │   └── components/
│       │       ├── PackageCard.tsx
│       │       └── PackageCard.module.scss
│       │
│       ├── PackagesComparisonSection/        # جدول المقارنة بين الباقات
│       │   ├── PackagesComparisonSection.tsx
│       │   └── PackagesComparisonSection.module.scss
│       │
│       └── PackagesFaqSection/               # الأسئلة الشائعة للاشتراكات
│           ├── PackagesFaqSection.tsx
│           └── PackagesFaqSection.module.scss
│
└── app/[locale]/packages/
    └── page.tsx                              # تجميع سكاشن الصفحة والـ Metadata