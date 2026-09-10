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
        GBP?: number;
    };
    features: { ar: string; en: string }[];
    extendedFeatures?: { ar: string; en: string }[];
}

export interface ComparisonRow {
    featureTitle: { ar: string; en: string };
    starter: { ar: string; en: string };
    standard: { ar: string; en: string };
    intensive: { ar: string; en: string };
    ijazah: { ar: string; en: string };
}

export interface PackageFaqItem {
    id: string;
    question: { ar: string; en: string };
    answer: { ar: string; en: string };
}

export const featuredPackages: PackagePlan[] = [
    // --- باقات 30 دقيقة ---
    {
        id: "plan-30m-8classes",
        isPopular: false,
        name: {
            ar: "باقة 8 حصص (30 دقيقة)",
            en: "8 Classes Plan (30 Mins)"
        },
        desc: {
            ar: "خطة فردية شهرية بمعدل حصتين أسبوعياً لتعلم القرآن والعلوم الشرعية واللغة العربية.",
            en: "Monthly private 1-on-1 plan (2 classes/week) covering Quran, Islamic Studies & Arabic."
        },
        sessionsPerWeek: 2,
        monthlySessions: 8,
        sessionDuration: { ar: "30 دقيقة للحصة", en: "30 mins / session" },
        price: {
            GBP: 40,
            USD: 52,
            EGP: 2500
        },
        features: [
            {
                ar: "القرآن الكريم: حفظ ومراجعة وتلاوة صحيحة",
                en: "Quran: Memorization + Revision + Recitation"
            },
            {
                ar: "التفسير: شرح معاني الآيات التي تم حفظها",
                en: "Tafseer: Explanation of the verses memorized"
            },
            {
                ar: "دراسات إسلامية: سيرة وفقه وعقيدة حسب السن والمستوى",
                en: "Islamic Studies: Seerah, Fiqh & Aqeedah tailored to age & level"
            },
            {
                ar: "اللغة العربية: تأسيس القراءة والكتابة والنطق السليم",
                en: "Arabic Language: Reading & Writing foundations"
            }
        ],
        extendedFeatures: [
            { ar: "حصص فردية مباشرة 100% (شخص لشخص)", en: "100% Individual One-to-One live classes" },
            { ar: "معلمون للبنين ومعلمات للبنات", en: "Male teachers for boys & female teachers for girls" },
            { ar: "حصة تجريبية مجانية لتقييم المستوى", en: "Free Trial Class to assess the level" },
            { ar: "تقارير أسبوعية مفصلة لولي الأمر", en: "Detailed weekly progress reports for parents" }
        ]
    },
    {
        id: "plan-30m-16classes",
        isPopular: false,
        name: {
            ar: "باقة 16 حصة (30 دقيقة)",
            en: "16 Classes Plan (30 Mins)"
        },
        desc: {
            ar: "وتيرة متابعة أسرع بمعدل 4 حصص أسبوعياً لضمان تثبيت الحفظ وتطبيق القواعد بانتظام.",
            en: "Fast-track plan with 4 classes/week for steady retention and regular practice."
        },
        sessionsPerWeek: 4,
        monthlySessions: 16,
        sessionDuration: { ar: "30 دقيقة للحصة", en: "30 mins / session" },
        price: {
            GBP: 80,
            USD: 105,
            EGP: 5000
        },
        features: [
            {
                ar: "القرآن الكريم: حفظ جديد ومراجعة قوية مستمرة",
                en: "Quran: New Memorization + Strong Revision"
            },
            {
                ar: "التفسير: شرح مبسط لمعاني الآيات واستخراج العبر الحياتية",
                en: "Tafseer: Simple explanation of memorized verses & life lessons"
            },
            {
                ar: "دراسات إسلامية: سيرة وفقه وتفسير مخصص لمستوى الطالب",
                en: "Islamic Studies: Seerah, Fiqh & Tafseer tailored to age & level"
            },
            {
                ar: "اللغة العربية: طلاقة القراءة وقواعد أساسية وكتابة",
                en: "Arabic Language: Reading fluency + Grammar basics + Writing"
            }
        ],
        extendedFeatures: [
            { ar: "حصص فردية مباشرة 100% (شخص لشخص)", en: "100% Individual One-to-One live classes" },
            { ar: "معلمون للبنين ومعلمات للبنات", en: "Male teachers for boys & female teachers for girls" },
            { ar: "حصة تجريبية مجانية لتقييم المستوى", en: "Free Trial Class to assess the level" },
            { ar: "تقارير أسبوعية مفصلة لولي الأمر", en: "Detailed weekly progress reports for parents" }
        ]
    },
    {
        id: "plan-30m-20classes",
        isPopular: true,
        name: {
            ar: "باقة 20 حصة (30 دقيقة)",
            en: "20 Classes Plan (30 Mins)"
        },
        desc: {
            ar: "الباقة الأكثر طلباً وإنجازاً بمعدل 5 حصص أسبوعياً للحفظ المكثف وتأسيس كامل.",
            en: "Most Popular! Intensive 5 classes/week plan for maximum retention and full foundation."
        },
        sessionsPerWeek: 5,
        monthlySessions: 20,
        sessionDuration: { ar: "30 دقيقة للحصة", en: "30 mins / session" },
        price: {
            GBP: 100,
            USD: 130,
            EGP: 6200
        },
        features: [
            {
                ar: "القرآن الكريم: حفظ مكثف مع مراجعة شاملة وتثبيت كامل",
                en: "Quran: Intensive Memorization + Full Revision"
            },
            {
                ar: "التفسير: شرح وتدبر عميق للآيات القرآنية المحفوظة",
                en: "Tafseer: In-depth explanation & Tadabbur of memorized verses"
            },
            {
                ar: "دراسات إسلامية شاملة: عقيدة وفقه وسيرة نبوية وحديث شريف",
                en: "Islamic Studies: Complete Aqeedah, Fiqh, Seerah & Hadith"
            },
            {
                ar: "اللغة العربية: قراءة متقدمة وقواعد وتعبير وتأسيس لغوي شامل",
                en: "Arabic Language: Advanced Reading + Grammar + Expression + Full Foundation"
            }
        ],
        extendedFeatures: [
            { ar: "حصص فردية مباشرة 100% (شخص لشخص)", en: "100% Individual One-to-One live classes" },
            { ar: "معلمون للبنين ومعلمات للبنات", en: "Male teachers for boys & female teachers for girls" },
            { ar: "حصة تجريبية مجانية لتقييم المستوى", en: "Free Trial Class to assess the level" },
            { ar: "تقارير أسبوعية مفصلة لولي الأمر", en: "Detailed weekly progress reports for parents" }
        ]
    },

    // --- باقات 60 دقيقة ---
    {
        id: "plan-60m-8classes",
        isPopular: false,
        name: {
            ar: "باقة 8 حصص (60 دقيقة)",
            en: "8 Classes Plan (60 Mins)"
        },
        desc: {
            ar: "ساعة تدريبية كاملة لحصتين أسبوعياً تتيح وقتاً متكافئاً لحفظ القرآن ودراسة العربية والإسلاميك.",
            en: "Full 60-minute classes (2 classes/week) providing ample time for Quran, Arabic and Islamic studies."
        },
        sessionsPerWeek: 2,
        monthlySessions: 8,
        sessionDuration: { ar: "60 دقيقة للحصة", en: "60 mins / session" },
        price: {
            GBP: 80,
            USD: 105,
            EGP: 5000
        },
        features: [
            {
                ar: "القرآن الكريم: حفظ ومراجعة وتلاوة متأنية مع تصحيح المخارج",
                en: "Quran: Memorization + Revision + Recitation"
            },
            {
                ar: "التفسير: شرح معاني الآيات التي تم حفظها",
                en: "Tafseer: Explanation of the verses memorized"
            },
            {
                ar: "دراسات إسلامية: سيرة وفقه وعقيدة حسب السن والمستوى",
                en: "Islamic Studies: Seerah, Fiqh & Aqeedah tailored to age & level"
            },
            {
                ar: "اللغة العربية: تأسيس مهارات القراءة والكتابة والتهجي",
                en: "Arabic Language: Reading & Writing foundations"
            }
        ],
        extendedFeatures: [
            { ar: "حصص فردية مباشرة 100% (شخص لشخص)", en: "100% Individual One-to-One live classes" },
            { ar: "معلمون للبنين ومعلمات للبنات", en: "Male teachers for boys & female teachers for girls" },
            { ar: "حصة تجريبية مجانية لتقييم المستوى", en: "Free Trial Class to assess the level" },
            { ar: "تقارير أسبوعية مفصلة لولي الأمر", en: "Detailed weekly progress reports for parents" }
        ]
    },
    {
        id: "plan-60m-16classes",
        isPopular: false,
        name: {
            ar: "باقة 16 حصة (60 دقيقة)",
            en: "16 Classes Plan (60 Mins)"
        },
        desc: {
            ar: "خطة متقدمة بمعدل 4 حصص أسبوعياً مدة كل منها ساعة لإتقان القراءة واللغة العربية وحفظ السور.",
            en: "Advanced progress plan (4 classes/week, 60 mins each) for intensive language and memorization."
        },
        sessionsPerWeek: 4,
        monthlySessions: 16,
        sessionDuration: { ar: "60 دقيقة للحصة", en: "60 mins / session" },
        price: {
            GBP: 150,
            USD: 195,
            EGP: 9300
        },
        features: [
            {
                ar: "القرآن الكريم: حفظ جديد ومراجعة قوية مستمرة للمحفوظ السابق",
                en: "Quran: New Memorization + Strong Revision"
            },
            {
                ar: "التفسير: شرح مبسط لمعاني الآيات وتدبر الدروس المستفادة",
                en: "Tafseer: Simple explanation of memorized verses & life lessons"
            },
            {
                ar: "دراسات إسلامية: سيرة وفقه وتفسير مخصص لمستوى الطالب",
                en: "Islamic Studies: Seerah, Fiqh & Tafseer tailored to age & level"
            },
            {
                ar: "اللغة العربية: طلاقة القراءة وقواعد أساسية وكتابة ومحادثة",
                en: "Arabic Language: Reading fluency + Grammar basics + Writing"
            }
        ],
        extendedFeatures: [
            { ar: "حصص فردية مباشرة 100% (شخص لشخص)", en: "100% Individual One-to-One live classes" },
            { ar: "معلمون للبنين ومعلمات للبنات", en: "Male teachers for boys & female teachers for girls" },
            { ar: "حصة تجريبية مجانية لتقييم المستوى", en: "Free Trial Class to assess the level" },
            { ar: "تقارير أسبوعية مفصلة لولي الأمر", en: "Detailed weekly progress reports for parents" }
        ]
    },
    {
        id: "plan-60m-20classes",
        isPopular: false,
        name: {
            ar: "باقة 20 حصة (60 دقيقة)",
            en: "20 Classes Plan (60 Mins)"
        },
        desc: {
            ar: "البرنامج الأقوى والشامل بمعدل 5 حصص أسبوعياً (ساعة كاملة) لتحقيق أعلى معدلات الحفظ والإتقان.",
            en: "The ultimate comprehensive package (5 hours/week) for accelerated memorization and full mastery."
        },
        sessionsPerWeek: 5,
        monthlySessions: 20,
        sessionDuration: { ar: "60 دقيقة للحصة", en: "60 mins / session" },
        price: {
            GBP: 200,
            USD: 260,
            EGP: 12500
        },
        features: [
            {
                ar: "القرآن الكريم: حفظ مكثف مع مراجعة شاملة وتثبيت كامل للأجزاء",
                en: "Quran: Intensive Memorization + Full Revision"
            },
            {
                ar: "التفسير: شرح معمق وتدبر شامل لمعاني الآيات ودلالاتها",
                en: "Tafseer: In-depth explanation & Tadabbur of memorized verses"
            },
            {
                ar: "دراسات إسلامية متكاملة: عقيدة وفقه وسيرة نبوية وحديث شريف",
                en: "Islamic Studies: Complete Islamic Studies: Aqeedah, Fiqh, Seerah & Hadith"
            },
            {
                ar: "اللغة العربية: قراءة متقدمة وقواعد وتعبير وتأسيس لغوي كامل",
                en: "Arabic Language: Advanced Reading + Grammar + Expression + Full Foundation"
            }
        ],
        extendedFeatures: [
            { ar: "حصص فردية مباشرة 100% (شخص لشخص)", en: "100% Individual One-to-One live classes" },
            { ar: "معلمون للبنين ومعلمات للبنات", en: "Male teachers for boys & female teachers for girls" },
            { ar: "حصة تجريبية مجانية لتقييم المستوى", en: "Free Trial Class to assess the level" },
            { ar: "تقارير أسبوعية مفصلة لولي الأمر", en: "Detailed weekly progress reports for parents" }
        ]
    }
];

export const packagesComparisonData: ComparisonRow[] = [
    {
        featureTitle: { ar: "عدد الحصص الشهرية", en: "Monthly Classes" },
        starter: { ar: "8 حصص (حصتان/أسبوع)", en: "8 classes (2/week)" },
        standard: { ar: "16 حصة (4 حصص/أسبوع)", en: "16 classes (4/week)" },
        intensive: { ar: "20 حصة (5 حصص/أسبوع)", en: "20 classes (5/week)" },
        ijazah: { ar: "تخصيص كامل", en: "Custom Schedule" }
    },
    {
        featureTitle: { ar: "نظام التدريس", en: "Teaching System" },
        starter: { ar: "فردي 100% (1-on-1)", en: "100% 1-on-1 Private" },
        standard: { ar: "فردي 100% (1-on-1)", en: "100% 1-on-1 Private" },
        intensive: { ar: "فردي 100% (1-on-1)", en: "100% 1-on-1 Private" },
        ijazah: { ar: "فردي 100% (1-on-1)", en: "100% 1-on-1 Private" }
    },
    {
        featureTitle: { ar: "المعلمون والمعلمات", en: "Tutor Gender" },
        starter: { ar: "معلم للبنين / معلمة للبنات", en: "Male for boys / Female for girls" },
        standard: { ar: "معلم للبنين / معلمة للبنات", en: "Male for boys / Female for girls" },
        intensive: { ar: "معلم للبنين / معلمة للبنات", en: "Male for boys / Female for girls" },
        ijazah: { ar: "مقرئون معتمدون ومجازون", en: "Certified Sanad Scholars" }
    },
    {
        featureTitle: { ar: "المحتوى المشمول", en: "Included Curriculum" },
        starter: { ar: "قرآن + تفسير + إسلاميك + لغة عربية", en: "Quran + Tafseer + Islamic + Arabic" },
        standard: { ar: "قرآن + تفسير + إسلاميك + لغة عربية", en: "Quran + Tafseer + Islamic + Arabic" },
        intensive: { ar: "برنامج مكثف لكافة المواد", en: "Intensive Full Program" },
        ijazah: { ar: "ختم القرآن وتدبر وإجازة بالسند", en: "Full Khatmah & Sanad Pathway" }
    },
    {
        featureTitle: { ar: "تقارير المتابعة لولي الأمر", en: "Progress Reports" },
        starter: { ar: "تقارير متابعة أسبوعية", en: "Weekly Progress Reports" },
        standard: { ar: "تقارير متابعة أسبوعية", en: "Weekly Progress Reports" },
        intensive: { ar: "متابعة أسبوعية وتقييم دوري", en: "Weekly & Periodic Assessments" },
        ijazah: { ar: "تقييم مستمر لكل ربع ختمة", en: "Continuous Evaluation" }
    },
    {
        featureTitle: { ar: "حصة تقييم تجريبية", en: "Free Trial Class" },
        starter: { ar: "مجانية بالكامل لتقييم المستوى", en: "100% Free Trial Class" },
        standard: { ar: "مجانية بالكامل لتقييم المستوى", en: "100% Free Trial Class" },
        intensive: { ar: "مجانية بالكامل لتقييم المستوى", en: "100% Free Trial Class" },
        ijazah: { ar: "جلسة تحديد مستوى وتلاوة", en: "Initial Level Assessment Sitting" }
    }
];

export const packagesFaqData: PackageFaqItem[] = [
    {
        id: "trial-session",
        question: {
            ar: "كيف يمكنني حجز الحصة التجريبية المجانية؟",
            en: "How can I book the free trial class?"
        },
        answer: {
            ar: "يمكنك الضغط على زر 'احجز حصتك التجريبية المجانية' وملء بيانات الطالب، وسيقوم المشرف بالتواصل معك عبر واتساب لتحديد موعد مناسب واختيار المعلم أو المعلمة لتقييم المستوى بدون أي تكلفة.",
            en: "Click 'Book Your Free Trial Class', fill in the student details, and our coordinator will contact you via WhatsApp to arrange a suitable time with a male or female teacher to assess the level for free."
        }
    },
    {
        id: "one-on-one",
        question: {
            ar: "هل الحصص تكون جماعية أم فردية؟",
            en: "Are the classes group-based or individual?"
        },
        answer: {
            ar: "جميع حصص أكاديمية نور فردية بالكامل (100% One-to-One) لضمان تركيز المعلم التام مع الطالب والتقدم بحسب سرعته وقدرته الاستيعابية.",
            en: "All classes at Noor Academy are 100% individual one-on-one sessions, ensuring full instructor attention tailored to the student's personal pace."
        }
    },
    {
        id: "tutors-selection",
        question: {
            ar: "هل يمكن اختيار معلمة للطالبات ومعلم للبنين؟",
            en: "Can we request female teachers for girls and male teachers for boys?"
        },
        answer: {
            ar: "نعم، نلتزم في الأكاديمية بتوفير معلمات متخصصات للبنات ومعلمين متخصصين للبنين، وجميعهم معتمدون وذوو خبرة عالية في التدريس للأطفال والكبار.",
            en: "Yes, we assign dedicated female teachers for girls and male teachers for boys. All instructors are certified and highly experienced in teaching youth and adults."
        }
    },
    {
        id: "duration-choice",
        question: {
            ar: "كيف أختار بين حصة 30 دقيقة وحصة 60 دقيقة؟",
            en: "How do I choose between 30-minute and 60-minute classes?"
        },
        answer: {
            ar: "حصة 30 دقيقة مثالية للأطفال الأصغر سناً للمحافظة على تركيزهم، بينما حصة 60 دقيقة تناسب الطلاب الأكبر سناً أو من يريد تقسيم الوقت بين القرآن والعربية والإسلاميك في نفس الحصة.",
            en: "The 30-minute class is optimal for younger children to maintain focus, while the 60-minute class is ideal for older students combining Quran, Arabic, and Islamic Studies in one sitting."
        }
    },
    {
        id: "reports-followup",
        question: {
            ar: "كيف يتابع ولي الأمر تقدم ابنه في الحفظ والدراسة؟",
            en: "How do parents track their child's progress?"
        },
        answer: {
            ar: "يحصل ولي الأمر على تقرير أسبوعي منتظم يوضح ما تم إنجازه من حفظ ومراجعة وواجبات، بالإضافة إلى ملاحظات المعلم حول التفاعل والأداء.",
            en: "Parents receive regular weekly reports detailing covered verses, revision, homework, and tutor feedback on engagement and progress."
        }
    }
];