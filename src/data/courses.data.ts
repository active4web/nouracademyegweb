export interface Course {
    id: string;
    title: { ar: string; en: string };
    desc: { ar: string; en: string };
    category: { ar: string; en: string };
    targetAudience: { ar: string; en: string };
    duration: { ar: string; en: string };
    image: string;
}

export const featuredCourses: Course[] = [
    {
        id: "nourania-foundation",
        category: { ar: "تأسيس وقراءة", en: "Foundation" },
        title: {
            ar: "القاعدة النورانية وتأسيس القراءة السليمة",
            en: "Noorani Qaida & Sound Reading Foundation"
        },
        desc: {
            ar: "منهج تطبيقي لضبط مخارج الحروف الهجائية والتهجي الصحيح من الصفر حتى طلاقة القراءة.",
            en: "A structured practical foundation for Arabic phonetics, articulation points, and fluent Quranic reading."
        },
        targetAudience: { ar: "الأطفال والمبتدئون", en: "Kids & Beginners" },
        duration: { ar: "3 - 6 أشهر", en: "3 - 6 Months" },
        image: "https://images.unsplash.com/photo-1585036156171-384164a8c675?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: "tajweed-mastery",
        category: { ar: "تجويد وتلاوة", en: "Tajweed" },
        title: {
            ar: "إتقان التلاوة وأحكام التجويد العملي",
            en: "Practical Tajweed & Recitation Mastery"
        },
        desc: {
            ar: "دراسة وتطبيق أحكام النون والميم الساكنة والمدود مع التدريب الصوتي المباشر والتقييم الفوري.",
            en: "Comprehensive practical study of Tajweed rules, Noon/Meem Sakinah, and Madd with direct live tutoring."
        },
        targetAudience: { ar: "كافة المستويات", en: "All Levels" },
        duration: { ar: "6 أشهر", en: "6 Months" },
        image: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: "quran-memorization",
        category: { ar: "حفظ ومراجعة", en: "Memorization" },
        title: {
            ar: "حفظ ومراجعة القرآن الكريم بالقراءات",
            en: "Quran Memorization & Qira'at Revision"
        },
        desc: {
            ar: "خطة حفظ متدرجة مع نظام مراجعة مكثف وتثبيت الحفظ بإشراف معلمين مجازين بالسند المتصل.",
            en: "Structured memorization roadmap with systematic retention review under Al-Azhar certified scholars."
        },
        targetAudience: { ar: "الراغبون في الحفظ والإتقان", en: "Aspiring Hafiz & Adults" },
        duration: { ar: "حسب الخطة الفردية", en: "Flexible / Tailored" },
        image: "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: "arabic-grammar",
        category: { ar: "لغة عربية", en: "Arabic Language" },
        title: {
            ar: "النحو التطبيقي وقواعد اللغة العربية",
            en: "Applied Arabic Grammar & Linguistics"
        },
        desc: {
            ar: "فهم تراكيب الجمل والإعراب ودلالات الألفاظ مع تطبيقات قرآنية وأدبية منتقاة.",
            en: "Mastering Arabic syntax, grammatical analysis (I'rab), and linguistic comprehension using Quranic texts."
        },
        targetAudience: { ar: "الناطقون بالعربية وبغيرها", en: "Native & Non-Native Speakers" },
        duration: { ar: "4 - 8 أشهر", en: "4 - 8 Months" },
        image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=700&q=80"
    }
];