export interface PackagePlan {
    id: string;
    isPopular?: boolean;
    name: { ar: string; en: string };
    desc: { ar: string; en: string };
    sessionsPerWeek: number;
    monthlySessions: number;
    sessionDuration: { ar: string; en: string };
    price: {
        EGP: number;
        USD: number;
    };
    features: { ar: string; en: string }[];
}

export const featuredPackages: PackagePlan[] = [
    {
        id: "starter-foundation",
        isPopular: false,
        name: {
            ar: "باقة التأسيس الأسبوعية",
            en: "Weekly Foundation Plan"
        },
        desc: {
            ar: "مناسبة للأطفال المبتدئين أو لمن يبحث عن وتيرة تعلم هادئة ومستمرة.",
            en: "Ideal for beginners or those seeking a steady, low-intensity pace."
        },
        sessionsPerWeek: 1,
        monthlySessions: 4,
        sessionDuration: { ar: "30 دقيقة للحصة", en: "30 mins / session" },
        price: {
            EGP: 450,
            USD: 25
        },
        features: [
            { ar: "حصة فردية مباشرة 1-on-1", en: "1-on-1 live private class" },
            { ar: "معلم مجاز ومعتمد", en: "Certified Al-Azhar tutor" },
            { ar: "تقرير تقييم شهري", en: "Monthly performance report" },
            { ar: "مرونة في تعديل الموعد مسبقاً", en: "Advance rescheduling option" }
        ]
    },
    {
        id: "standard-mastery",
        isPopular: true,
        name: {
            ar: "باقة الإتقان القياسية",
            en: "Standard Mastery Plan"
        },
        desc: {
            ar: "الخيار الأمثل والمتوازن لإتقان التجويد وتثبيت القراءة بوتيرة ممتازة.",
            en: "The balanced sweet spot for steady Tajweed progress and retention."
        },
        sessionsPerWeek: 2,
        monthlySessions: 8,
        sessionDuration: { ar: "45 دقيقة للحصة", en: "45 mins / session" },
        price: {
            EGP: 850,
            USD: 45
        },
        features: [
            { ar: "حصتان فرديتان أسبوعياً", en: "2 private 1-on-1 classes / week" },
            { ar: "متابعة أسبوعية مباشرة", en: "Weekly progress follow-up" },
            { ar: "تسجيلات وملاحظات الحصص", en: "Session notes and audio reviews" },
            { ar: "أولوية اختيار المواعيد", en: "Priority slot booking" }
        ]
    },
    {
        id: "intensive-excellence",
        isPopular: false,
        name: {
            ar: "باقة التميز والتكثيف",
            en: "Intensive Excellence Plan"
        },
        desc: {
            ar: "مسار مكثف للراغبين في الإنجاز السريع لحفظ أجزاء القرآن وتطبيق التجويد.",
            en: "Fast-track intensive track designed for rapid Quran memorization."
        },
        sessionsPerWeek: 3,
        monthlySessions: 12,
        sessionDuration: { ar: "45 دقيقة للحصة", en: "45 mins / session" },
        price: {
            EGP: 1200,
            USD: 65
        },
        features: [
            { ar: "3 حصص أسبوعية مباشرة", en: "3 private 1-on-1 classes / week" },
            { ar: "خطة مراجعة وحفظ متقدمة", en: "Advanced retention & review system" },
            { ar: "تقارير مباشرة لولي الأمر", en: "Direct parent progress portal" },
            { ar: "شهادة إتمام معتمدة لكل مرحلة", en: "Accredited completion certificate" }
        ]
    },
    {
        id: "ijazah-advanced",
        isPopular: false,
        name: {
            ar: "باقة الحفظ والإجازة بالسند",
            en: "Sanad & Ijazah Pathway"
        },
        desc: {
            ar: "مخصصة لخاتمي القرآن الكريم والقراء الساعين لنيل الإجازة بالسند المتصل.",
            en: "Dedicated for advanced memorizers seeking continuous chain Sanad."
        },
        sessionsPerWeek: 4,
        monthlySessions: 16,
        sessionDuration: { ar: "60 دقيقة للحصة", en: "60 mins / session" },
        price: {
            EGP: 1800,
            USD: 95
        },
        features: [
            { ar: "جلسات ختم وإقراء فردية", en: "Direct Ijazah recitation sittings" },
            { ar: "معلمون ومقرئون ذوو أسانيد عالية", en: "Top Al-Azhar Sanad scholars" },
            { ar: "اختبارات إتقان دورية للأحكام", en: "Rigorous Matn and rule tests" },
            { ar: "منح السند والإجازة عند الإتمام", en: "Official Ijazah award upon completion" }
        ]
    }
];