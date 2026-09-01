export interface TeacherQualification {
    title: { ar: string; en: string };
    institution: { ar: string; en: string };
    year?: string;
}

export interface TeacherReview {
    id: string;
    studentName: { ar: string; en: string };
    country: { ar: string; en: string };
    rating: number;
    date: string;
    comment: { ar: string; en: string };
}

export interface Teacher {
    id: string;
    name: { ar: string; en: string };
    role: { ar: string; en: string };
    category: { ar: string; en: string };
    experienceYears: number;
    studentsCount: number;
    rating: number;
    reviewsCount: number;
    ijazah: { ar: string; en: string };
    fullIjazahList?: { ar: string; en: string }[];
    bio: { ar: string; en: string };
    about: { ar: string; en: string };
    image: string;
    qualifications: TeacherQualification[];
    specialties: { ar: string; en: string }[];
    reviews: TeacherReview[];
}

export const featuredTeachers: Teacher[] = [
    {
        id: "sheikh-ahmed-mansour",
        name: { ar: "الشيخ أحمد منصور", en: "Sheikh Ahmed Mansour" },
        role: { ar: "مقرئ بالقراءات العشر الصغرى والكبرى", en: "Scholar of 10 Minor & Major Qira'at" },
        category: { ar: "قرآن وقراءات", en: "Quran & Qira'at" },
        experienceYears: 12,
        studentsCount: 420,
        rating: 4.9,
        reviewsCount: 128,
        ijazah: {
            ar: "إجازة بالسند المتصل برواية حفص وشعبة وعاصم",
            en: "Connected Sanad in Hafs, Shu'bah & Asim"
        },
        fullIjazahList: [
            {
                ar: "إجازة بالسند المتصل إلى النبي ﷺ برواية حفص عن عاصم من طريق الشاطبية",
                en: "Connected Sanad in Hafs from Asim via Shatibiyyah"
            },
            {
                ar: "إجازة في قراءة الإمام عاصم براوييه (شعبة وحفص)",
                en: "License in the recitation of Imam Asim (Shu'bah & Hafs)"
            },
            {
                ar: "إجازة وضبط متني تحفة الأطفال والمقدمة الجزرية",
                en: "Certified in Tuhfat Al-Atfal and Al-Jazariyyah texts"
            }
        ],
        bio: {
            ar: "خريج كلية القرآن الكريم بطنطا، باحث في علوم القراءات والتجويد التطبيقي.",
            en: "Graduate of the Faculty of Quranic Studies, researcher in applied Tajweed."
        },
        about: {
            ar: "باحث متخصص ومقرئ بالأزهر الشريف، أمتلك خبرة تتجاوز 12 عاماً في تعليم وتدريس أحكام التجويد للناطقين بالعربية والمغتربين مع التركيز على التصحيح الدقيق لمخارج الحروف والتدرج في منح الإجازات القرآنية بالسند المتصل.",
            en: "Specialized Al-Azhar scholar with over 12 years of experience in teaching Tajweed for native and non-native speakers, focusing on precise articulation and authentic Sanad certifications."
        },
        image: "/image-default.png",
        qualifications: [
            {
                title: { ar: "ليسانس علوم القرآن والقراءات", en: "Bachelor of Quranic Studies & Recitations" },
                institution: { ar: "جامعة الأزهر الشريف - كلية القرآن الكريم", en: "Al-Azhar University" },
                year: "2014"
            },
            {
                title: { ar: "دبلوم الدراسات العليا في التجويد والقراءات", en: "Postgraduate Diploma in Tajweed" },
                institution: { ar: "جامعة الأزهر", en: "Al-Azhar University" },
                year: "2017"
            }
        ],
        specialties: [
            { ar: "الإقراء ومنح الإجازات بالسند", en: "Sanad Certification & Recitation" },
            { ar: "تصحيح التلاوة والمخارج الدقيقة", en: "Articulation & Recitation Correction" },
            { ar: "شرح متون التجويد (الجزرية والتحفة)", en: "Tajweed Texts Explanation" }
        ],
        reviews: [
            {
                id: "rev-1",
                studentName: { ar: "عمر الفاروق", en: "Omar Al-Farooq" },
                country: { ar: "المملكة المتحدة", en: "United Kingdom" },
                rating: 5,
                date: "2026-07-15",
                comment: {
                    ar: "الشيخ صبور جداً ودقيق في مخارج الحروف، استفدت منه كثيراً في تصحيح تلاوة سورة البقرة.",
                    en: "The Sheikh is extremely patient and precise in articulation. Highly recommended!"
                }
            },
            {
                id: "rev-2",
                studentName: { ar: "أحمد عبد الله", en: "Ahmed Abdullah" },
                country: { ar: "كندا", en: "Canada" },
                rating: 5,
                date: "2026-06-20",
                comment: {
                    ar: "منهجية واضحة ومتابعة مستمرة، حصلت معه على إجازة تحفة الأطفال بفضل الله.",
                    en: "Structured methodology and continuous follow-up. Completed my Tuhfah license with him."
                }
            }
        ]
    },
    {
        id: "sheikha-fatima-hassan",
        name: { ar: "أ. فاطمة حسن الأزهري", en: "Ustatha Fatima Hassan" },
        role: { ar: "معلمة تجويد وتأسيس أطفال وناطقين بغير العربية", en: "Tajweed & Non-Arabic Specialist" },
        category: { ar: "تجويد وتأسيس", en: "Tajweed & Foundation" },
        experienceYears: 9,
        studentsCount: 360,
        rating: 4.95,
        reviewsCount: 94,
        ijazah: {
            ar: "إجازة في تحفة الأطفال والمقدمة الجزرية",
            en: "Licensed in Tuhfat Al-Atfal & Al-Jazariyyah"
        },
        fullIjazahList: [
            {
                ar: "إجازة في متني التحفة والجزرية بالسند",
                en: "Licensed in Tuhfah & Jazariyyah with Sanad"
            },
            {
                ar: "شهادة اعتماد تدريس القاعدة النورانية",
                en: "Certified Noorani Qaida Instructor"
            }
        ],
        bio: {
            ar: "معلمة معتمدة لتعليم القاعدة النورانية وتأسيس الحروف بدقة وصبر عاليين.",
            en: "Certified Noorani Qaida tutor with deep experience in children's articulation."
        },
        about: {
            ar: "معلمة متخصصة في تأسيس الأطفال والناطقين بغير العربية من الصفر عبر أساليب تعليمية تفاعلية حديثة تحبب النشء في تلاوة كتاب الله.",
            en: "Specialist tutor focusing on foundational Quran learning for kids and non-Arabic speakers through engaging interactive methods."
        },
        image: "/image-default.png",
        qualifications: [
            {
                title: { ar: "ليسانس الدراسات الإسلامية والعربية", en: "Bachelor of Islamic & Arabic Studies" },
                institution: { ar: "جامعة الأزهر", en: "Al-Azhar University" },
                year: "2017"
            }
        ],
        specialties: [
            { ar: "تأسيس الأطفال بالقاعدة النورانية", en: "Noorani Qaida for Children" },
            { ar: "تجويد للمبتدئين والمغتربين", en: "Beginners & Non-Arabic Tajweed" },
            { ar: "تحفيظ جزء عمّ والأذكار", en: "Juz Amma Memorization" }
        ],
        reviews: [
            {
                id: "rev-3",
                studentName: { ar: "مريم العتيبي (ولي أمر)", en: "Maryam (Parent)" },
                country: { ar: "الكويت", en: "Kuwait" },
                rating: 5,
                date: "2026-08-01",
                comment: {
                    ar: "أسلوب المعلمة رائع جداً مع ابنتي، أصبحت تحب الحصة وتنتظرها بشغف.",
                    en: "Wonderful teaching style with my daughter. She now eagerly looks forward to each session."
                }
            }
        ]
    },
    {
        id: "dr-mahmoud-abdelaziz",
        name: { ar: "د. محمود عبد العزيز", en: "Dr. Mahmoud Abdelaziz" },
        role: { ar: "أستاذ النحو واللغة العربية بجامعة الأزهر", en: "Arabic Syntax & Linguistics Professor" },
        category: { ar: "لغة عربية ونحو", en: "Arabic & Grammar" },
        experienceYears: 15,
        studentsCount: 510,
        rating: 4.88,
        reviewsCount: 142,
        ijazah: {
            ar: "دكتوراه في اللغويات والتراكيب القرآنية",
            en: "Ph.D. in Quranic Syntax & Linguistics"
        },
        fullIjazahList: [
            {
                ar: "إجازة في شرح الآجرومية وقطر الندى",
                en: "Certified in Ajrumiyyah & Qatr Al-Nada"
            }
        ],
        bio: {
            ar: "خبرة واسعة في تدريس النحو التطبيقي، الإعراب، وتذوق البلاغة القرآنية.",
            en: "Extensive background in applied Arabic grammar, syntax analysis, and rhetoric."
        },
        about: {
            ar: "دكتور في اللغويات بجامعة الأزهر الشريف، أساعد الطلاب على فهم تراكيب لغة القرآن وتذوق جماليات البلاغة والنحو بطرق ميسرة وتطبيقية.",
            en: "Ph.D. scholar in Arabic Linguistics at Al-Azhar University, helping students grasp Quranic grammar and rhetoric through simplified practical methods."
        },
        image: "/image-default.png",
        qualifications: [
            {
                title: { ar: "دكتوراه في اللغويات العربية", en: "Ph.D. in Arabic Linguistics" },
                institution: { ar: "جامعة الأزهر", en: "Al-Azhar University" },
                year: "2016"
            },
            {
                title: { ar: "ماجستير في النحو والصرف", en: "Master in Arabic Syntax & Morphology" },
                institution: { ar: "جامعة الأزهر", en: "Al-Azhar University" },
                year: "2012"
            }
        ],
        specialties: [
            { ar: "النحو التطبيقي وإعراب القرآن", en: "Applied Grammar & Quranic Syntax" },
            { ar: "البلاغة والبيان القرآني", en: "Quranic Rhetoric" },
            { ar: "المحادثة الفصحى لغير الناطقين", en: "Classical Arabic Conversation" }
        ],
        reviews: [
            {
                id: "rev-4",
                studentName: { ar: "يوسف المهدي", en: "Youssef El-Mahdy" },
                country: { ar: "ألمانيا", en: "Germany" },
                rating: 5,
                date: "2026-07-22",
                comment: {
                    ar: "شرح عميق ومبسط جداً لقواعد النحو، فتح لي آفاقاً واسعة في فهم آيات القرآن.",
                    en: "Insightful and simplified explanation of Arabic grammar. Greatly enhanced my Quranic understanding."
                }
            }
        ]
    },
    {
        id: "sheikh-khalid-ibrahim",
        name: { ar: "الشيخ خالد إبراهيم", en: "Sheikh Khalid Ibrahim" },
        role: { ar: "مشرف مسار الحفظ والتثبيت والإقراء", en: "Head of Quran Memorization Track" },
        category: { ar: "حفظ وإقراء", en: "Memorization & Sanad" },
        experienceYears: 11,
        studentsCount: 390,
        rating: 4.92,
        reviewsCount: 110,
        ijazah: {
            ar: "إجازة بروايتي قالون وورش عن نافع",
            en: "Licensed in Qalun & Warsh 'an Nafi'"
        },
        fullIjazahList: [
            {
                ar: "إجازة بالسند المتصل بروايتي قالون وورش عن نافع المدني",
                en: "Connected Sanad in Qalun & Warsh from Nafi'"
            }
        ],
        bio: {
            ar: "متخصص في نظم مراجعة المتون وتثبيت حفظ الأجزاء بجلسات إقراء فردية.",
            en: "Specialist in Matn retention and rigorous individual recitation monitoring."
        },
        about: {
            ar: "مشرف تحفيظ وإقراء بالأزهر، أعتمد على خطط مدروسة للتثبيت طويل المدى وتصحيح المتشابهات اللفظية للطلاب الخاتمين والمتقدمين.",
            en: "Quran memorization supervisor at Al-Azhar, applying structured long-term retention roadmaps and Mutashabihat mastery for advanced students."
        },
        image: "/image-default.png",
        qualifications: [
            {
                title: { ar: "ليسانس أصول الدين والدعوة", en: "Bachelor of Islamic Theology & Da'wah" },
                institution: { ar: "جامعة الأزهر", en: "Al-Azhar University" },
                year: "2015"
            }
        ],
        specialties: [
            { ar: "تثبيت وضبط المتشابهات اللفظية", en: "Mutashabihat & Quranic Retention" },
            { ar: "الإقراء بروايتي ورش وقالون", en: "Warsh & Qalun Recitation" },
            { ar: "جلسات المراجعة المكثفة للخاتمين", en: "Intensive Memorization Review" }
        ],
        reviews: [
            {
                id: "rev-5",
                studentName: { ar: "سعد الدين المصري", en: "Saad El-Din" },
                country: { ar: "قطر", en: "Qatar" },
                rating: 5,
                date: "2026-08-10",
                comment: {
                    ar: "متابعة دقيقة ونظام مراجعة ساعدني على ضبط الحفظ والتخلص من التردد تماماً.",
                    en: "Meticulous follow-up system that helped me eliminate hesitation in my recitation."
                }
            }
        ]
    }
];