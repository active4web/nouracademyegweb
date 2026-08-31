# خطة صفحة دليل الباقات والأسعار (`/packages`)

## 1. هيكل السكاشن وآلية التفاعل (Page Sections & Interactions)

* **01. مقدمة الباقات ومبدل العملة (Packages Hero & Currency Switcher)**
  * العنوان الرئيسي والوصف التعريفي الذي يبرز مرونة الاشتراكات والخطط الشهرية.
  * مبدل عملات تفاعلي فوري (`EGP / USD`) يقوم بتحديث أسعار جميع الباقات وجدول المقارنة مباشرة.
  * مؤشرات سريعة للموثوقية (حصص فردية 1-on-1، مرونة تغيير المواعيد، تجربة أولى مجانية).

* **02. شبكة كروت الباقات الشهرية (Packages Grid Section)**
  * عرض كروت الباقات بتصميم متجاوب يعتمد على العملة المحددة.
  * تفاصيل كل باقة: شارة التمييز (الأكثر طلباً)، اسم الباقة، السعر الشهري ورمز العملة، عدد الحصص بالأسبوع، زمن الحصة، وقائمة المزايا المغطاة.
  * روابط الإجراءات: زر الانتقال لصفحة تفاصيل الباقة (`/packages/[id]`) وزر الاشتراك المباشر (`/packages/[id]/apply`).

* **03. جدول مقارنة الباقات الشامل (Packages Comparison Table)**
  * جدول مقارنة تفصيلي متجاوب يقارن بين كافة الباقات جنباً إلى جنب.
  * محاور المقارنة: (عدد الحصص الشهرية، زمن الجلسة، نوع المعلم الأزهري المجاز، التقارير الشهرية لولي الأمر، إمكانية تعويض الحصص، والمتابعة التفاعلية).

* **04. الأسئلة الشائعة حول الاشتراكات (Packages FAQ Accordion)**
  * نظام أكورديون تفاعلي للإجابة على الأسئلة المالية والتنظيمية (طرق الدفع المتاحة، سياسة الاسترجاع، تجميد الاشتراك، ونظام تعويض الحصص).

* **05. البانر الختامي المشترك (Packages Final CTA Section)**
  * استخدام مكون الحجز الختامي المعتمد للدعوة إلى جلسة تجريبية مجانية لتحديد المستوى.

---

## 2. خريطة الملفات والمكونات (Architecture Map)

```text
src/
├── data/
│   └── packages.data.ts                      # بيانات الباقات، الأسعار بالعملتين، مصفوفة المقارنة، والـ FAQs
│
├── features/
│   └── Packages/
│       ├── PackagesHeroSection/              # هيدر الباقات ومبدل العملة
│       │   ├── PackagesHeroSection.tsx
│       │   └── PackagesHeroSection.module.scss
│       │
│       ├── PackagesGridSection/              # شبكة كروت الباقات
│       │   ├── PackagesGridSection.tsx
│       │   ├── PackagesGridSection.module.scss
│       │   └── components/
│       │       ├── PackageCard.tsx           # المكون الفردي لكارت الباقة
│       │       └── PackageCard.module.scss
│       │
│       ├── PackagesComparisonSection/        # جدول المقارنة المتجاوب
│       │   ├── PackagesComparisonSection.tsx
│       │   └── PackagesComparisonSection.module.scss
│       │
│       ├── PackagesFaqSection/               # الأسئلة الشائعة للباقات
│       │   ├── PackagesFaqSection.tsx
│       │   └── PackagesFaqSection.module.scss
│       │
│       └── PackagesFinalCtaSection/          # البانر الختامي
│           ├── PackagesFinalCtaSection.tsx
│           └── PackagesFinalCtaSection.module.scss
│
└── app/[locale]/packages/
    └── page.tsx                              # تجميع سكاشن الصفحة وإعدادات الـ Metadata