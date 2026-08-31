export interface BlogCategory {
    key: string;
    label: { ar: string; en: string };
}

export interface BlogAuthor {
    name: { ar: string; en: string };
    role: { ar: string; en: string };
    image: string;
}

export interface BlogPost {
    id: string;
    slug: string;
    title: { ar: string; en: string };
    excerpt: { ar: string; en: string };
    content: { ar: string; en: string };
    categoryKey: string;
    category: { ar: string; en: string };
    author: BlogAuthor;
    publishedAt: string;
    image: string;
    featured?: boolean;
}

export const blogCategories: BlogCategory[] = [
    { key: "all", label: { ar: "جميع المقالات", en: "All Articles" } },
    { key: "quran-sciences", label: { ar: "علوم القرآن", en: "Quran Sciences" } },
    { key: "tajweed-rules", label: { ar: "أحكام التجويد", en: "Tajweed Rules" } },
    { key: "arabic-language", label: { ar: "اللغة العربية", en: "Arabic Language" } },
    { key: "parenting-tips", label: { ar: "نصائح وتوجيهات", en: "Parenting & Tips" } }
];

export const allBlogPosts: BlogPost[] = [
    {
        id: "1",
        slug: "best-strategies-for-quran-memorization-for-kids",
        title: {
            ar: "أفضل 5 استراتيجيات عملية لتحفيظ القرآن الكريم للأطفال دون ملل",
            en: "5 Practical Strategies for Teaching Quran to Children Without Boredom"
        },
        excerpt: {
            ar: "دليل إرشادي شامل لأولياء الأمور لغرس حب القرآن في نفوس الأبناء بطرق تفاعلية محفزة وخطط تكرار ذكية.",
            en: "A comprehensive guide for parents on instilling love for the Quran using engaging methods and retention routines."
        },
        content: {
            ar: `
                <p>تحفيظ القرآن الكريم للأطفال في سن مبكرة يمثل حجر الأساس لبناء شخصيتهم الإيمانية واللغوية. ومع ذلك، يواجه الكثير من الآباء والأمهات تحدي الملل أو تشتت انتباه الطفل أثناء جلسات التحفيظ.</p>
                <h3>1. التكرار الصوتي التفاعلي والتسجيل</h3>
                <p>استخدام أسلوب التكرار بنغمات محببة للطفل، وتسجيل صوته أثناء القراءة وسماعه لنفسه يعزز ثقته ويزيد من شغفه بالحفظ.</p>
                <h3>2. تقسيم الأوراد اليومية لوحدات صغيرة</h3>
                <p>التركيز على آيتين إلى ثلاث آيات يومياً بإتقان تام أفضل بكثير من حفظ صفحة كاملة بدون تثبيت.</p>
                <h3>3. ربط الآيات بالقصص والواقع</h3>
                <p>شرح المعاني الإجمالية للآيات وقصص الأنبياء المرتبطة بها يجعل الحفظ راسخاً في ذهن الطفل وليس مجرد ترديد للكلمات.</p>
            `,
            en: `
                <p>Teaching the Holy Quran to children at an early age lays the foundation for their faith and language development. However, parents often face the challenge of short attention spans.</p>
                <h3>1. Interactive Audio Repetition</h3>
                <p>Encouraging kids to listen to rhythmic recitation and recording their own voices builds confidence and enthusiasm.</p>
                <h3>2. Small Daily Portions</h3>
                <p>Focusing on two to three verses daily with full mastery yields far better retention than memorizing full pages at once.</p>
                <h3>3. Connecting Verses with Stories</h3>
                <p>Explaining basic word meanings and prophet stories anchors verses deeply in their hearts rather than rote repetition.</p>
            `
        },
        categoryKey: "parenting-tips",
        category: { ar: "نصائح وتوجيهات", en: "Parenting & Tips" },
        author: {
            name: { ar: "أ. فاطمة حسن", en: "Ustatha Fatima Hassan" },
            role: { ar: "معلمة تجويد وتأسيس أطفال", en: "Tajweed & Children Specialist" },
            image: "/image-default.png"
        },
        publishedAt: "2026-08-15",
        image: "/image-default.png",
        featured: true
    },
    {
        id: "2",
        slug: "understanding-noon-sakinah-and-tanween-rules",
        title: {
            ar: "الدليل المبسط لإتقان أحكام النون الساكنة والتنوين بالأمثلة العملية",
            en: "Simplified Practical Guide to Noon Sakinah and Tanween Rules"
        },
        excerpt: {
            ar: "شرح تفصيلي مع أمثلة صوتية ونماذج تطبيقية من المصحف الشريف لأحكام الإظهار، الإدغام، الإقلاب، والإخفاء.",
            en: "Detailed breakdown with examples from the Holy Quran covering Izhar, Idgham, Iqlab, and Ikhfa rules."
        },
        content: {
            ar: `
                <p>تعد أحكام النون الساكنة والتنوين الركيزة الأساسية الأولى في علم التجويد، وضبطها يمنح القارئ طلاقة وتجويداً صحيحاً للحروف.</p>
                <h3>الأحكام الأربعة الرئيسية:</h3>
                <ul>
                    <li><strong>الإظهار الحلقي:</strong> عند ملاقاتها أحرف الحلق الستة (ء، هـ، ع، ح، غ، خ).</li>
                    <li><strong>الإدغام:</strong> بنوعيه (بغنة وبغير غنة) في حروف كلمة (يرملون).</li>
                    <li><strong>الإقلاب:</strong> قلب النون ميماً مخفاة عند ملاقاة حرف الباء.</li>
                    <li><strong>الإخفاء الحقيقي:</strong> ستر النون عند بقية الحروف الخمسة عشر.</li>
                </ul>
            `,
            en: `
                <p>The rules of Noon Sakinah and Tanween form the foundation of Tajweed science. Mastering them ensures fluent and precise Quranic recitation.</p>
                <h3>The Four Core Rules:</h3>
                <ul>
                    <li><strong>Izhar (Clarity):</strong> When followed by throat letters (ء, هـ, ع, ح, غ, خ).</li>
                    <li><strong>Idgham (Merging):</strong> With or without ghunnah in letters grouped in (يرملون).</li>
                    <li><strong>Iqlab (Conversion):</strong> Converting Noon into hidden Meem before the letter Baa (ب).</li>
                    <li><strong>Ikhfa (Hiding):</strong> Hiding the Noon sound with ghunnah before the remaining 15 letters.</li>
                </ul>
            `
        },
        categoryKey: "tajweed-rules",
        category: { ar: "أحكام التجويد", en: "Tajweed Rules" },
        author: {
            name: { ar: "الشيخ أحمد منصور", en: "Sheikh Ahmed Mansour" },
            role: { ar: "مقرئ بالقراءات العشر", en: "Ten Qira'at Scholar" },
            image: "/image-default.png"
        },
        publishedAt: "2026-08-10",
        image: "/image-default.png",
        featured: false
    },
    {
        id: "3",
        slug: "importance-of-arabic-grammar-in-quranic-understanding",
        title: {
            ar: "كيف يساعدك فهم النحو العربي على تذوق البلاغة وإعجاز القرآن؟",
            en: "How Arabic Grammar Enhances Your Appreciation of Quranic Eloquence"
        },
        excerpt: {
            ar: "تعرف على العلاقة الوثيقة بين الإعراب والمعنى الدقيق للآيات وكيف يغير ضبط الحركات دلالات التراكيب القرآنية.",
            en: "Explore the deep connection between syntax and verse meaning, and how vowel markers affect interpretation."
        },
        content: {
            ar: `
                <p>اللغة العربية ليست مجرد وعاء لألفاظ القرآن الكريم، بل إن بنيتها النحوية والإعرابية هي المفتاح لفهم مقاصد الآيات وتفسيرها الدقيق.</p>
                <h3>أثر الإعراب في توجيه المعنى</h3>
                <p>تغيير حركة إعرابية واحدة في الكلمة قد يحول الفاعل إلى مفعول به أو يوضح حكمة دقيقة في السياق القرآني، مما يبرز الإعجاز اللغوي الخالد.</p>
            `,
            en: `
                <p>The Arabic language is not merely a vessel for Quranic words; its grammatical structures are crucial to understanding the precise meanings of the verses.</p>
                <h3>Syntactic Impact on Meaning</h3>
                <p>A single inflection marker can clarify whether a noun functions as a subject or object, unlocking layers of rhetorical eloquence.</p>
            `
        },
        categoryKey: "arabic-language",
        category: { ar: "اللغة العربية", en: "Arabic Language" },
        author: {
            name: { ar: "د. محمود عبد العزيز", en: "Dr. Mahmoud Abdelaziz" },
            role: { ar: "أستاذ النحو بجامعة الأزهر", en: "Arabic Syntax Professor" },
            image: "/image-default.png"
        },
        publishedAt: "2026-08-04",
        image: "/image-default.png",
        featured: false
    },
    {
        id: "4",
        slug: "the-seven-ahruf-and-ten-qiraat-explained",
        title: {
            ar: "الفرق بين الأحرف السبعة والقراءات العشر المتواترة: مدخل مبسّط",
            en: "Difference Between the Seven Ahruf and Ten Qira'at: A Beginner's Guide"
        },
        excerpt: {
            ar: "إيضاح علمي مبسط وموثق عن تاريخ نزول القرآن على سبعة أحرف وتواتر أسانيد القراءات العشر حتى عصرنا الحالي.",
            en: "A clear, documented introduction to the revelation on seven Ahruf and the authenticated chains of the ten Qira'at."
        },
        content: {
            ar: `
                <p>كثيراً ما يلتبس الأمر على الطلاب بين مفهوم "الأحرف السبعة" ومفهوم "القراءات السبع أو العشر". هذا المقال يقدم توضيحاً علمياً مبسطاً للتمييز بينهما.</p>
                <h3>تواتر القراءات وسندها</h3>
                <p>كل قراءة من القراءات العشر نقلت بالتواتر والمشافهة عن الصحابة رضي الله عنهم عن النبي ﷺ، وتعتبر كلها قرآناً متلواً معجزاً.</p>
            `,
            en: `
                <p>Students often confuse the concept of the 'Seven Ahruf' with the 'Ten Qira'at'. This article clarifies the distinction with authenticated sources.</p>
                <h3>Authenticity and Chains of Recitation</h3>
                <p>Each of the ten canonical Qira'at has been transmitted through continuous, verified oral chains from the Companions back to Prophet Muhammad ﷺ.</p>
            `
        },
        categoryKey: "quran-sciences",
        category: { ar: "علوم القرآن", en: "Quran Sciences" },
        author: {
            name: { ar: "الشيخ خالد إبراهيم", en: "Sheikh Khalid Ibrahim" },
            role: { ar: "مشرف مسار الإقراء والأسانيد", en: "Sanad Track Supervisor" },
            image: "/image-default.png"
        },
        publishedAt: "2026-07-28",
        image: "/image-default.png",
        featured: false
    }
];