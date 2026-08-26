export interface Testimonial {
    id: string;
    authorName: { ar: string; en: string };
    role: { ar: string; en: string };
    country: { ar: string; en: string };
    countryFlag: string;
    rating: number;
    content: { ar: string; en: string };
    track: { ar: string; en: string };
    avatar: string;
}

export const testimonialsData: Testimonial[] = [
    {
        id: "review-1",
        authorName: { ar: "م. عبد الرحمن الشمري", en: "Eng. Abdulrahman Al-Shammari" },
        role: { ar: "ولي أمر الطالبين (عمر وزياد)", en: "Parent of Omar & Ziyad" },
        country: { ar: "المملكة العربية السعودية", en: "Saudi Arabia" },
        countryFlag: "🇸🇦",
        rating: 5,
        track: { ar: "القاعدة النورانية وتأسيس الأطفال", en: "Noorani Foundation" },
        content: {
            ar: "لاحظت تطوراً ملحوظاً في مخارج الحروف لدى أبنائي بعد شهر واحد فقط من الحصص الفردية. المعلم يتميز بالصبر البالغ والأسلوب التربوي المحبب.",
            en: "Remarkable progress in my children's Arabic pronunciation after just one month of 1-on-1 tutoring. The teacher's patience and teaching pedagogy are outstanding."
        },
        avatar: "/image-default.png"
    },
    {
        id: "review-2",
        authorName: { ar: "د. سارة المنصوري", en: "Dr. Sarah Al-Mansouri" },
        role: { ar: "طالبة في مسار إتقان التجويد", en: "Tajweed Student" },
        country: { ar: "الإمارات العربية المتحدة", en: "United Arab Emirates" },
        countryFlag: "🇦🇪",
        rating: 5,
        track: { ar: "التجويد العملي وتصحيح التلاوة", en: "Practical Tajweed" },
        content: {
            ar: "المرونة في جدول المواعيد ساعدتني على الالتزام رغم ضغط ساعات العمل في المستشفى. الدقة في تصحيح الأحكام أعادت لي الشغف بضبط التلاوة.",
            en: "The schedule flexibility enabled me to stay committed despite hectic hospital shifts. The precise feedback reignited my passion for accurate recitation."
        },
        avatar: "/image-default.png"
    },
    {
        id: "review-3",
        authorName: { ar: "أ. طارق عثمان", en: "Tariq Osman" },
        role: { ar: "ولي أمر الطالبة (مريم)", en: "Parent of Maryam" },
        country: { ar: "المملكة المتحدة", en: "United Kingdom" },
        countryFlag: "🇬🇧",
        rating: 5,
        track: { ar: "حفظ القرآن الكريم للمغتربين", en: "Quran for Diaspora" },
        content: {
            ar: "العيش في لندن كان تحدياً لتعليم ابنتي القرآن واللغة العربية السليمة. منصة نور كانت الحل المثالي بمعلمة أزهرية متخصصة ومتمكنة باللغة الإنجليزية أيضاً.",
            en: "Living in London was challenging for Quran and Arabic education. Nour Academy bridged that gap with an Al-Azhar tutor fluent in English."
        },
        avatar: "/image-default.png"
    },
    {
        id: "review-4",
        authorName: { ar: "يوسف إبراهيم", en: "Youssef Ibrahim" },
        role: { ar: "طالب مسار السند والإجازة", en: "Ijazah Track Student" },
        country: { ar: "كندا", en: "Canada" },
        countryFlag: "🇨🇦",
        rating: 5,
        track: { ar: "ختم وإقراء بالسند المتصل", en: "Connected Sanad Track" },
        content: {
            ar: "أتممت بفضل الله الختمة الأولى على يد الشيخ المجاز، ونظام المنصة والتسجيلات ساعدني على مراجعة ملاحظات المقرئ بعد كل جلسة بدقة تامة.",
            en: "Alhamdulillah completed my first full recitation under a certified scholar. The platform recordings allowed me to review feedback meticulously after every session."
        },
        avatar: "/image-default.png"
    },
    {
        id: "review-5",
        authorName: { ar: "أ. نادية خليل", en: "Nadia Khalil" },
        role: { ar: "والدة الطالب (ياسين)", en: "Mother of Yassin" },
        country: { ar: "الولايات المتحدة", en: "United States" },
        countryFlag: "🇺🇸",
        rating: 5,
        track: { ar: "تأسيس القراءة وحفظ المفصل", en: "Reading & Memorization" },
        content: {
            ar: "التقارير الأسبوعية ومتابعة ولي الأمر تعطيني راحة بال تامة. ابني أصبح ينتظر موعد الحصة بنفسه بفضل أسلوب التحفيز والجوائز التفاعلية.",
            en: "Weekly progress reports give me absolute peace of mind. My son genuinely looks forward to every class thanks to their positive encouragement."
        },
        avatar: "/image-default.png"
    }
];