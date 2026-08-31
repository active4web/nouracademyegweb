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
        ],
        extendedFeatures: [
            { ar: "تأسيس الحروف والمخارج ونور البيان", en: "Noor Al-Bayan & phonetics foundation" },
            { ar: "تحفيظ قصار السور مع التكرار التفاعلي", en: "Short Surahs memorization with repetition" },
            { ar: "حصة تعويضية واحدة شهرياً عند الإخطار", en: "1 monthly make-up session with notice" },
            { ar: "متابعة دورية عبر واتساب مع الإدارة", en: "Periodic WhatsApp admin follow-up" }
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
        ],
        extendedFeatures: [
            { ar: "شرح وتطبيق أحكام التجويد عملياً", en: "Practical Tajweed rules application" },
            { ar: "خطة مراجعة تثبيت للحفظ القديم", en: "Systematic retention revision plan" },
            { ar: "إمكانية تعويض حصتين شهرياً", en: "Up to 2 make-up classes monthly" },
            { ar: "تقرير تفصيلي لولي الأمر نهاية كل شهر", en: "Comprehensive end-of-month report" }
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
        ],
        extendedFeatures: [
            { ar: "حفظ جزء إلى جزء ونصف شهرياً", en: "1 to 1.5 Juz memorization target monthly" },
            { ar: "متابعة وتصحيح يومي عبر الرسائل الصوتية", en: "Daily voice notes review & correction" },
            { ar: "مرونة كاملة في تعويض الحصص المعتذر عنها", en: "Flexible make-up classes upon advance notice" },
            { ar: "اختبارات إتقان بعد كل 3 أجزاء", en: "Retention milestone tests every 3 Juz" }
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
        ],
        extendedFeatures: [
            { ar: "قراءة القرآن كاملاً غيباً بالسند المتصل", en: "Full Quran recitation from memory with Sanad" },
            { ar: "دراسة وضبط متون التجويد (تحفة / جزرية)", en: "Detailed study of Tuhfah & Jazariyyah texts" },
            { ar: "جدول مواعيد خاص ومرونة كاملة للتنسيق", en: "Dedicated premium slot flexibility" },
            { ar: "شهادة وسند معتمد وموثق بالسند للنبي ﷺ", en: "Authenticated continuous chain Sanad to Prophet ﷺ" }
        ]
    }
];

export const packagesComparisonData: ComparisonRow[] = [
    {
        featureTitle: { ar: "عدد الحصص الشهرية", en: "Monthly Sessions" },
        starter: { ar: "4 حصص (حصة/أسبوع)", en: "4 classes (1/week)" },
        standard: { ar: "8 حصص (حصتان/أسبوع)", en: "8 classes (2/week)" },
        intensive: { ar: "12 حصة (3 حصص/أسبوع)", en: "12 classes (3/week)" },
        ijazah: { ar: "16 حصة (4 حصص/أسبوع)", en: "16 classes (4/week)" }
    },
    {
        featureTitle: { ar: "زمن الجلسة الفردية", en: "Class Duration" },
        starter: { ar: "30 دقيقة", en: "30 Mins" },
        standard: { ar: "45 دقيقة", en: "45 Mins" },
        intensive: { ar: "45 دقيقة", en: "45 Mins" },
        ijazah: { ar: "60 دقيقة", en: "60 Mins" }
    },
    {
        featureTitle: { ar: "مستوى وتخصص المعلم", en: "Instructor Level" },
        starter: { ar: "معلم معتمد ومجاز", en: "Certified Tutor" },
        standard: { ar: "معلم أزهري متخصص", en: "Azhar Specialist" },
        intensive: { ar: "نخبة مقرئي الأزهر", en: "Elite Azhar Reciters" },
        ijazah: { ar: "مقرئ مجاز بأسانيد عالية", en: "High-Sanad Scholar" }
    },
    {
        featureTitle: { ar: "تقارير المتابعة لولي الأمر", en: "Progress Reports" },
        starter: { ar: "تقرير شهري ملخص", en: "Monthly Summary" },
        standard: { ar: "تقرير شهري تفصيلي", en: "Detailed Monthly Report" },
        intensive: { ar: "متابعة أسبوعية + شهري", en: "Weekly + Monthly Reports" },
        ijazah: { ar: "تقييم مباشر لكل ربع ختمة", en: "Continuous Evaluation" }
    },
    {
        featureTitle: { ar: "إمكانية تعويض الحصص", en: "Reschedule Policy" },
        starter: { ar: "حصة واحدة شهرياً", en: "1 Class / Month" },
        standard: { ar: "حصتان شهرياً", en: "2 Classes / Month" },
        intensive: { ar: "مرونة كاملة بإشعار مسبق", en: "Full Flexibility" },
        ijazah: { ar: "جدولة خاصة ومرنة", en: "Custom Scheduling" }
    },
    {
        featureTitle: { ar: "التسجيلات والملاحظات الصوتية", en: "Audio Reviews & Notes" },
        starter: { ar: "غير مشمولة", en: "Not Included" },
        standard: { ar: "ملاحظات وتصحيحات صوتية", en: "Included" },
        intensive: { ar: "متابعة وتسجيل يومي", en: "Daily Voice Review" },
        ijazah: { ar: "تسجيل جلسات الختم كاملة", en: "Full Session Recordings" }
    },
    {
        featureTitle: { ar: "الشهادات والإجازات", en: "Certificates & Ijazah" },
        starter: { ar: "شهادة إتمام مرحلة", en: "Milestone Certificate" },
        standard: { ar: "شهادة إتمام مرحلة", en: "Milestone Certificate" },
        intensive: { ar: "شهادة إتقان معتمدة", en: "Mastery Certificate" },
        ijazah: { ar: "إجازة وسند متصل بالنبي ﷺ", en: "Official Sanad & Ijazah" }
    }
];

export const packagesFaqData: PackageFaqItem[] = [
    {
        id: "payment-methods",
        question: {
            ar: "ما هي وسائل الدفع الإلكترونية المتاحة للاشتراك؟",
            en: "What payment methods are supported for subscription?"
        },
        answer: {
            ar: "نوفر وسائل دفع آمنة تشمل البطاقات البنكية (Visa / MasterCard)، فودافون كاش والمحافظ الإلكترونية، InstaPay داخل مصر، بالإضافة إلى التحويلات البنكية الدولية وPayPal للمشتركين خارج مصر.",
            en: "We accept Credit/Debit Cards (Visa/MasterCard), Vodafone Cash, InstaPay (within Egypt), as well as international bank transfers and PayPal for students abroad."
        }
    },
    {
        id: "rescheduling-policy",
        question: {
            ar: "كيف يتم التعامل مع الحصص في حالة الاعتذار أو الرغبة في تعويضها؟",
            en: "What is the policy for rescheduling missed classes?"
        },
        answer: {
            ar: "يمكنك إخطار الإدارة أو المعلم قبل موعد الحصة بـ 4 ساعات على الأقل ليتم إعادة جدولة الحصة في موعد بديل مناسب دون احتسابها كحصة ملغاة، وذلك وفق سعة التعويض المحددة في باقتك.",
            en: "You can notify the administration or tutor at least 4 hours prior to class time to reschedule into a convenient slot, in accordance with your package's compensation limit."
        }
    },
    {
        id: "freeze-subscription",
        question: {
            ar: "هل يمكنني تجميد الاشتراك مؤقتاً أثناء الامتحانات أو السفر؟",
            en: "Can I temporarily freeze my active subscription?"
        },
        answer: {
            ar: "نعم، نتيح ميزة تجميد الاشتراك لمدة تصل إلى 14 يوماً متواصلة خلال فترة الامتحانات أو الظروف الطارئة دون فقدان رصيدك من الحصص المتبقية أو تغيير المعلم.",
            en: "Yes, you can pause your subscription for up to 14 consecutive days during travel or exam seasons without losing your remaining sessions or dedicated tutor."
        }
    },
    {
        id: "change-instructor",
        question: {
            ar: "هل يحق لي تغيير المعلم أو تعديل مواعيد الجلسات بعد البدء؟",
            en: "Can I request a different instructor or change timings later?"
        },
        answer: {
            ar: "بكل تأكيد. يمكنك التواصل مع المشرف التعليمي الخاص بك في أي وقت لتغيير المعلم (معلم/معلمة) أو تنسيق جدول مواعيد جديد يتناسب مع جدولك اليومي بكل مرونة.",
            en: "Absolutely. You may reach out to your academic supervisor at any time to switch tutors (male/female) or adjust your weekly schedule to fit your lifestyle."
        }
    },
    {
        id: "refund-guarantee",
        question: {
            ar: "ما هي سياسة الاسترجاع والضمان المالي في أكاديمية نور؟",
            en: "What is your refund and satisfaction guarantee policy?"
        },
        answer: {
            ar: "بعد الحصة التجريبية المجانية، وفي حال اشتركت ولم ترغب في الاستمرار خلال أول أسبوعين، يمكنك استرداد كامل المبلغ المتبقي عن الحصص غير المستهلكة دون أي تعقيدات.",
            en: "After the free trial, if you subscribe and decide not to continue within the first 14 days, you are eligible for a prompt refund of all unused sessions."
        }
    }
];