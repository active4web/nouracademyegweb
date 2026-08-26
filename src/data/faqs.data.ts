export interface FaqItem {
    id: string;
    question: { ar: string; en: string };
    answer: { ar: string; en: string };
}

export const faqsData: FaqItem[] = [
    {
        id: "trial-session",
        question: {
            ar: "كيف يتم تحديد موعد الحصة التجريبية المجانية؟",
            en: "How is the free trial session scheduled?"
        },
        answer: {
            ar: "بمجرد ملء نموذج التسجيل البسيط، يتواصل معك المستشار التعليمي عبر واتساب في غضون دقائق لتحديد الوقت الأنسب لك وبدء الجلسة التقييمية الفردية مباشرة.",
            en: "Once you submit the short registration form, our academic advisor contacts you via WhatsApp within minutes to confirm your preferred timing and setup the live 1-on-1 assessment."
        }
    },
    {
        id: "female-tutors",
        question: {
            ar: "هل يمكن اختيار معلمة متخصصة للبنات والأطفال؟",
            en: "Can we request a female tutor for girls and children?"
        },
        answer: {
            ar: "نعم بكل تأكيد، نوفر كادراً متخصصاً من المعلمات الفضليات المجازات بالأزهر الشريف لتدريس الطالبات والفتيات والأطفال بخصوصية وأمان تامين.",
            en: "Absolutely. We have a dedicated team of certified Al-Azhar female scholars for tutoring female students and young children with complete privacy."
        }
    },
    {
        id: "payment-methods",
        question: {
            ar: "ما هي طرق ووسائل الدفع المتاحة داخل وخارج مصر؟",
            en: "What payment methods are available worldwide?"
        },
        answer: {
            ar: "نوفر بوابات دفع آمنة تشمل البطاقات البنكية الدولية (Visa / Mastercard)، التحويلات البنكية المباشرة، PayPal، بالإضافة إلى فودافون كاش والمحافظ الإلكترونية وInstaPay داخل مصر.",
            en: "We support secure international debit/credit cards (Visa / Mastercard), direct bank transfers, PayPal, as well as local electronic wallets and InstaPay for Egypt."
        }
    },
    {
        id: "session-duration",
        question: {
            ar: "ما هي مدة الحصة التعليمية وكيف تتم متابعة الحفظ؟",
            en: "What is the session duration and progress tracking system?"
        },
        answer: {
            ar: "تتراوح مدة الحصة بين 30 إلى 60 دقيقة حسب الباقة المختارة، ويحصل ولي الأمر والطالب على تقرير دوري أسبوعي وشهري يسجل نسبة الإنجاز والواجبات والملاحظات الصوتية.",
            en: "Sessions range between 30 to 60 minutes depending on the chosen plan. Parents receive weekly and monthly digital progress reports detailing recitation accuracy and homework."
        }
    },
    {
        id: "non-arabic-speakers",
        question: {
            ar: "هل تتوفر كورسات مخصصة لغير الناطقين باللغة العربية؟",
            en: "Are there tailored courses for non-Arabic speakers?"
        },
        answer: {
            ar: "نعم، لدينا مسارات تأسيسية متخصصة ومصممة بالكامل باللغة الإنجليزية للأطفال والكبار المغتربين والمسلمين الجدد لتعليم نطق الحروف والتجويد من الصفر حتى الإتقان.",
            en: "Yes, we provide specialized English-medium curriculums for diaspora children, adults, and new Muslims to master Arabic phonetics and Tajweed from the absolute basics."
        }
    },
    {
        id: "rescheduling-policy",
        question: {
            ar: "كيف يمكن تعديل أو تعويض مواعيد الحصص عند الاعتذار؟",
            en: "How can classes be rescheduled or compensated?"
        },
        answer: {
            ar: "نمنح مرونة كاملة في إعادة جدولة الحصة عند إشعار الإدارة مسبقاً قبل الموعد بـ 6 ساعات، مع تعويض الحصة الملغاة في موعد بديل يتوافق مع جدولك اليومي.",
            en: "We provide full rescheduling flexibility when notifying us at least 6 hours in advance, ensuring your missed class is easily made up at an alternative suitable slot."
        }
    }
];