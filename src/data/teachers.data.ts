export interface Teacher {
    id: string;
    name: { ar: string; en: string };
    role: { ar: string; en: string };
    category: { ar: string; en: string };
    experienceYears: number;
    studentsCount: number;
    ijazah: { ar: string; en: string };
    bio: { ar: string; en: string };
    image: string;
}

export const featuredTeachers: Teacher[] = [
    {
        id: "sheikh-ahmed-mansour",
        name: { ar: "الشيخ أحمد منصور", en: "Sheikh Ahmed Mansour" },
        role: { ar: "مقرئ بالقراءات العشر الصغرى والكبرى", en: "Scholar of 10 Minor & Major Qira'at" },
        category: { ar: "قرآن وقراءات", en: "Quran & Qira'at" },
        experienceYears: 12,
        studentsCount: 420,
        ijazah: {
            ar: "إجازة بالسند المتصل برواية حفص وشعبة وعاصم",
            en: "Connected Sanad in Hafs, Shu'bah & Asim"
        },
        bio: {
            ar: "خريج كلية القرآن الكريم بطنطا، باحث في علوم القراءات والتجويد التطبيقي.",
            en: "Graduate of the Faculty of Quranic Studies, researcher in applied Tajweed."
        },
        image: "/image-default.png"
    },
    {
        id: "sheikha-fatima-hassan",
        name: { ar: "أ. فاطمة حسن الأزهري", en: "Ustatha Fatima Hassan" },
        role: { ar: "معلمة تجويد وتأسيس أطفال وناطقين بغير العربية", en: "Tajweed & Non-Arabic Specialist" },
        category: { ar: "تجويد وتأسيس", en: "Tajweed & Foundation" },
        experienceYears: 9,
        studentsCount: 360,
        ijazah: {
            ar: "إجازة في تحفة الأطفال والمقدمة الجزرية",
            en: "Licensed in Tuhfat Al-Atfal & Al-Jazariyyah"
        },
        bio: {
            ar: "معلمة معتمدة لتعليم القاعدة النورانية وتأسيس الحروف بدقة وصبر عاليين.",
            en: "Certified Noorani Qaida tutor with deep experience in children's articulation."
        },
        image: "/image-default.png"
    },
    {
        id: "dr-mahmoud-abdelaziz",
        name: { ar: "د. محمود عبد العزيز", en: "Dr. Mahmoud Abdelaziz" },
        role: { ar: "أستاذ النحو واللغة العربية بجامعة الأزهر", en: "Arabic Syntax & Linguistics Professor" },
        category: { ar: "لغة عربية ونحو", en: "Arabic & Grammar" },
        experienceYears: 15,
        studentsCount: 510,
        ijazah: {
            ar: "دكتوراه في اللغويات والتراكيب القرآنية",
            en: "Ph.D. in Quranic Syntax & Linguistics"
        },
        bio: {
            ar: "خبرة واسعة في تدريس النحو التطبيقي، الإعراب، وتذوق البلاغة القرآنية.",
            en: "Extensive background in applied Arabic grammar, syntax analysis, and rhetoric."
        },
        image: "/image-default.png"
    },
    {
        id: "sheikh-khalid-ibrahim",
        name: { ar: "الشيخ خالد إبراهيم", en: "Sheikh Khalid Ibrahim" },
        role: { ar: "مشرف مسار الحفظ والتثبيت والإقراء", en: "Head of Quran Memorization Track" },
        category: { ar: "حفظ وإقراء", en: "Memorization & Sanad" },
        experienceYears: 11,
        studentsCount: 390,
        ijazah: {
            ar: "إجازة بروايتي قالون وورش عن نافع",
            en: "Licensed in Qalun & Warsh 'an Nafi'"
        },
        bio: {
            ar: "متخصص في نظم مراجعة المتون وتثبيت حفظ الأجزاء بجلسات إقراء فردية.",
            en: "Specialist in Matn retention and rigorous individual recitation monitoring."
        },
        image: "/image-default.png"
    }
];