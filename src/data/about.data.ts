export interface ValueItem {
    id: string;
    iconName: "ShieldCheck" | "Target" | "HeartHandshake" | "Award";
    title: { ar: string; en: string };
    desc: { ar: string; en: string };
}

export interface StandardItem {
    id: string;
    number: string;
    title: { ar: string; en: string };
    desc: { ar: string; en: string };
}

export interface GalleryItem {
    id: string;
    image: string;
    category: "honor" | "ijazah" | "competition";
    categoryLabel: { ar: string; en: string };
    title: { ar: string; en: string };
    date: { ar: string; en: string };
}

export const coreValuesData: ValueItem[] = [
    {
        id: "authenticity",
        iconName: "ShieldCheck",
        title: { ar: "الأصالة والإسناد", en: "Authentic Sanad" },
        desc: {
            ar: "تعليم كتاب الله بالسند المتصل إلى رسول الله ﷺ على يد علماء مجازين.",
            en: "Teaching Quran with connected chains of narration back to the Prophet ﷺ."
        }
    },
    {
        id: "excellence",
        iconName: "Award",
        title: { ar: "الإتقان والتجويد", en: "Excellence & Tajweed" },
        desc: {
            ar: "التركيز على ضبط مخارج الحروف وأحكام التلاوة بأعلى معايير الدقة.",
            en: "Dedicated focus on precise articulation points and advanced Tajweed rules."
        }
    },
    {
        id: "pedagogy",
        iconName: "Target",
        title: { ar: "التدرج والتربية", en: "Pedagogical Care" },
        desc: {
            ar: "مراعاة الفروق الفردية وغرس حب القرآن واللغة العربية في نفوس النشء.",
            en: "Nurturing Quranic love and Arabic mastery according to individual learning pace."
        }
    },
    {
        id: "flexibility",
        iconName: "HeartHandshake",
        title: { ar: "المرونة والأمانة", en: "Flexibility & Trust" },
        desc: {
            ar: "جداول تلائم المغتربين وبيئة تعليمية آمنة ومحفزة للجميع.",
            en: "Seamless scheduling worldwide within a safe, motivating online environment."
        }
    }
];

export const educationalStandardsData: StandardItem[] = [
    {
        id: "std-1",
        number: "01",
        title: { ar: "انتقاء النخبة الأزهرية", en: "Strict Scholar Selection" },
        desc: {
            ar: "خضوع المعلمين لاختبارات دقيقة في الحفظ، التجويد، وأساليب التدريس الحديثة.",
            en: "Rigorous testing for scholars in memorization, Tajweed, and pedagogical methods."
        }
    },
    {
        id: "std-2",
        number: "02",
        title: { ar: "الخطط الدراسية الفردية", en: "Individual Learning Plans" },
        desc: {
            ar: "تصميم مسار تعليمي مخصص لكل طالب يتناسب مع عمره، وقته، ومستواه الحالي.",
            en: "Customized curriculums tailored to each student's age, routine, and baseline."
        }
    },
    {
        id: "std-3",
        number: "03",
        title: { ar: "المتابعة والتقارير الدورية", en: "Continuous Assessment" },
        desc: {
            ar: "تقارير إنجاز شهرية وتواصل مباشر مع أولياء الأمور لمتابعة التطور والحفظ.",
            en: "Monthly progress reports and transparent parent-teacher communication."
        }
    }
];

export const galleryData: GalleryItem[] = [
    {
        id: "gal-1",
        image: "https://images.unsplash.com/photo-1585036156171-384164a8c675?auto=format&fit=crop&w=800&q=80",
        category: "honor",
        categoryLabel: { ar: "تكريم الخاتمين", en: "Graduation Honor" },
        title: { ar: "حفل تكريم خاتمي القرآن الكريم دفعة 2025", en: "2025 Quran Memorizers Graduation" },
        date: { ar: "ديسمبر 2025", en: "Dec 2025" }
    },
    {
        id: "gal-2",
        image: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=800&q=80",
        category: "ijazah",
        categoryLabel: { ar: "منح إجازة", en: "Ijazah Conferral" },
        title: { ar: "منح إجازة بالسند المتصل برواية حفص عن عاصم", en: "Conferring Sanad Ijazah in Hafs 'an Asim" },
        date: { ar: "يناير 2026", en: "Jan 2026" }
    },
    {
        id: "gal-3",
        image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80",
        category: "competition",
        categoryLabel: { ar: "مسابقات سنوية", en: "Annual Contests" },
        title: { ar: "مسابقة الماهر بالقرآن السنوية للبراعم", en: "Annual Junior Quran Recitation Contest" },
        date: { ar: "رمضان 1447", en: "Ramadan 1447" }
    }
];