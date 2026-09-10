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
    fullIjazahList?: { ar: string; en: string }[];
    bio: { ar: string; en: string };
    about: { ar: string; en: string };
    image: string;
    featured?: boolean;
    qualifications: TeacherQualification[];
    specialties: { ar: string; en: string }[];
    reviews: TeacherReview[];
}

export const allTeachersData: Teacher[] = [
    {
        id: "hazem-ramadan",
        name: { ar: "حازم رمضان", en: "Hazem Ramadan" },
        role: { ar: "معلم قرآن وقراءات ومجاز بالسند المتصل", en: "Quran & Recitation Scholar" },
        category: { ar: "قرآن وقراءات", en: "Quran & Qira'at" },
        experienceYears: 8,
        studentsCount: 280,
        rating: 4.95,
        reviewsCount: 74,
        fullIjazahList: [
            {
                ar: "إجازة بالسند المتصل برواية حفص عن عاصم من طريق الشاطبية",
                en: "Connected Sanad in Hafs via Shatibiyyah"
            },
            {
                ar: "إجازة في متن تحفة الأطفال للمبتدئين",
                en: "Certified in Tuhfat Al-Atfal"
            }
        ],
        bio: {
            ar: "خريج جامعة الأزهر، متخصص في تدريب الطلاب على إتقان التلاوة وتصحيح مخارج الحروف.",
            en: "Al-Azhar graduate specializing in recitation precision and articulation points."
        },
        about: {
            ar: "معلم بالأزهر الشريف أركز على تصحيح التلاوة خطوة بخطوة مع الطلاب ومساعدتهم على تطبيق أحكام التجويد عملياً بيسر وسهولة.",
            en: "Al-Azhar tutor focusing on step-by-step recitation correction and accessible Tajweed application."
        },
        image: "/image-default.png",
        featured: true,
        qualifications: [
            {
                title: { ar: "ليسانس الدراسات الإسلامية والعربية", en: "Bachelor of Islamic & Arabic Studies" },
                institution: { ar: "جامعة الأزهر", en: "Al-Azhar University" },
                year: "2018"
            }
        ],
        specialties: [
            { ar: "تصحيح التلاوة والمخارج", en: "Recitation & Articulation" },
            { ar: "تجويد عملي للمبتدئين", en: "Practical Tajweed" }
        ],
        reviews: [
            {
                id: "rev-hr-1",
                studentName: { ar: "أحمد منصور", en: "Ahmed Mansour" },
                country: { ar: "السعودية", en: "Saudi Arabia" },
                rating: 5,
                date: "2026-07-12",
                comment: {
                    ar: "أسلوب المعلم هادئ وصبور جداً في تصحيح مخارج الحروف.",
                    en: "Very patient and clear in correcting pronunciation."
                }
            }
        ]
    },
    {
        id: "yasmin-ahmed-salah",
        name: { ar: "ياسمين أحمد صلاح", en: "Yasmin Ahmed Salah" },
        role: { ar: "معلمة تجويد وتأسيس أطفال وقاعدة نورانية", en: "Noorani Qaida & Kids Tutor" },
        category: { ar: "تجويد وتأسيس", en: "Tajweed & Foundation" },
        experienceYears: 6,
        studentsCount: 220,
        rating: 4.9,
        reviewsCount: 62,
        fullIjazahList: [
            {
                ar: "شهادة معتمدة في تدريس القاعدة النورانية المطورة",
                en: "Certified in Noorani Qaida Methodology"
            }
        ],
        bio: {
            ar: "متخصصة في تعليم الأطفال القراءة السليمة من المصحف بأساليب تفاعلية مشجعة.",
            en: "Specialist in interactive foundational Quran reading for young learners."
        },
        about: {
            ar: "أعتمد على تبسيط القراءة بالحركات والمخارج للأطفال والمبتدئين وبناء حب تلاوة القرآن في نفوسهم.",
            en: "Dedicated to simplifying Arabic vowels and articulation for children with positive encouragement."
        },
        image: "/image-default.png",
        qualifications: [
            {
                title: { ar: "ليسانس لغات وترجمة - دراسات إسلامية", en: "Bachelor of Islamic Studies" },
                institution: { ar: "جامعة الأزهر", en: "Al-Azhar University" },
                year: "2020"
            }
        ],
        specialties: [
            { ar: "تأسيس القاعدة النورانية", en: "Noorani Qaida Foundation" },
            { ar: "تحفيظ قصار السور للأطفال", en: "Short Surahs for Kids" }
        ],
        reviews: [
            {
                id: "rev-ys-1",
                studentName: { ar: "سارة إبراهيم (ولي أمر)", en: "Sarah Ibrahim (Parent)" },
                country: { ar: "الإمارات", en: "UAE" },
                rating: 5,
                date: "2026-08-05",
                comment: {
                    ar: "ابني أصبح يتهجى الكلمات ويقرأ في المصحف بمفرده بفضل الله ثم المعلمة.",
                    en: "My son can now read directly from the Mushaf with confidence."
                }
            }
        ]
    },
    {
        id: "ola-ismail-elbeshbishi",
        name: { ar: "علا إسماعيل البشبيشي", en: "Ola El-Beshbishi" },
        role: { ar: "معلمة قرآن وتجويد للناطقين بغير العربية", en: "Quran & Tajweed for Non-Arabs" },
        category: { ar: "تجويد وتأسيس", en: "Tajweed & Foundation" },
        experienceYears: 7,
        studentsCount: 250,
        rating: 4.92,
        reviewsCount: 58,
        bio: {
            ar: "خبرة واسعة في تدريس التجويد النظري والتطبيقي باللغتين العربية والإنجليزية.",
            en: "Extensive background in bilingual Tajweed instruction."
        },
        about: {
            ar: "أساعد الطالبات والناطقين بغير العربية على نطق الحروف العربية بصورة سليمة وفهم أحكام التجويد بسلاسة.",
            en: "Helping sisters and non-native speakers master Arabic phonetics and Tajweed seamlessly."
        },
        image: "/image-default.png",
        qualifications: [
            {
                title: { ar: "ليسانس دراسات إسلامية باللغة الإنجليزية", en: "BA in Islamic Studies in English" },
                institution: { ar: "جامعة الأزهر", en: "Al-Azhar University" },
                year: "2019"
            }
        ],
        specialties: [
            { ar: "تعليم الناطقين بغير العربية", en: "Non-Arabic Speakers" },
            { ar: "شرح أحكام التجويد", en: "Applied Tajweed" }
        ],
        reviews: [
            {
                id: "rev-oe-1",
                studentName: { ar: "زينب خان", en: "Zainab Khan" },
                country: { ar: "المملكة المتحدة", en: "UK" },
                rating: 5,
                date: "2026-07-28",
                comment: {
                    ar: "معلمة ممتازة وتشرح بالإنجليزية بطريقة واضحة جداً وميسرة.",
                    en: "Excellent teacher with very clear English explanations."
                }
            }
        ]
    },
    {
        id: "asmaa-younis-elmoqadem",
        name: { ar: "أسماء يونس المقدم", en: "Asmaa El-Moqadem" },
        role: { ar: "مشرفة تحفيظ وتثبيت القرآن الكريم", en: "Quran Memorization Specialist" },
        category: { ar: "حفظ ومراجعة", en: "Memorization" },
        experienceYears: 9,
        studentsCount: 310,
        rating: 4.88,
        reviewsCount: 82,
        bio: {
            ar: "متخصصة في وضع جداول الحفظ والمراجعة الدورية وتثبيت الأجزاء وضبط المتشابهات.",
            en: "Specialist in retention roadmaps, periodic revision, and Mutashabihat."
        },
        about: {
            ar: "أهتم بمتابعة الحفظ اليومي وتثبيت ما تم حفظه حتى لا يتفلت، مع التركيز على فهم معاني الآيات.",
            en: "Focusing on consistent daily retention and understanding verse meanings to avoid forgetfulness."
        },
        image: "/image-default.png",
        featured: true,
        qualifications: [
            {
                title: { ar: "ليسانس كلية القرآن الكريم للقراءات", en: "Bachelor of Quranic Studies" },
                institution: { ar: "جامعة الأزهر", en: "Al-Azhar University" },
                year: "2017"
            }
        ],
        specialties: [
            { ar: "حفظ وتثبيت القرآن", en: "Quran Retention" },
            { ar: "مراجعة المتشابهات اللفظية", en: "Similar Verses Revision" }
        ],
        reviews: [
            {
                id: "rev-ay-1",
                studentName: { ar: "نادية محمود", en: "Nadia Mahmoud" },
                country: { ar: "مصر", en: "Egypt" },
                rating: 5,
                date: "2026-08-11",
                comment: {
                    ar: "نظام المراجعة مع المعلمة ساعدني جداً في تثبيت سورتي البقرة وآل عمران.",
                    en: "Her revision system solidified my memorization of long Surahs."
                }
            }
        ]
    },
    {
        id: "mai-farag-mohamed",
        name: { ar: "مي فراج محمد", en: "Mai Farag Mohamed" },
        role: { ar: "معلمة تجويد وقراءة وتأسيس", en: "Tajweed & Reading Instructor" },
        category: { ar: "تجويد وتأسيس", en: "Tajweed & Foundation" },
        experienceYears: 5,
        studentsCount: 190,
        rating: 4.9,
        reviewsCount: 45,
        bio: {
            ar: "شرح مبسط لأحكام النون والميم الساكنة والمدود مع التدريب العملي المباشر.",
            en: "Simplified breakdown of Noon/Meem Sakinah and practical recitation."
        },
        about: {
            ar: "هدفي هو إتقان الطالب لقراءة القرآن الكريم بالشكل الصحيح دون صعوبة أو تعقيد.",
            en: "My goal is empowering students to recite the Holy Quran with clarity and ease."
        },
        image: "/image-default.png",
        qualifications: [
            {
                title: { ar: "ليسانس دراسات إسلامية", en: "BA in Islamic Studies" },
                institution: { ar: "جامعة الأزهر", en: "Al-Azhar University" },
                year: "2021"
            }
        ],
        specialties: [
            { ar: "تجويد عملي", en: "Practical Tajweed" },
            { ar: "تصحيح القراءة", en: "Reading Correction" }
        ],
        reviews: [
            {
                id: "rev-mf-1",
                studentName: { ar: "هدى خالد", en: "Hoda Khaled" },
                country: { ar: "الكويت", en: "Kuwait" },
                rating: 5,
                date: "2026-06-30",
                comment: {
                    ar: "شرح الأحكام واضح جداً ومناسب للمبتدئين.",
                    en: "Very straightforward and beginner-friendly explanations."
                }
            }
        ]
    },
    {
        id: "shaimaa-mohamed",
        name: { ar: "شيماء محمد", en: "Shaimaa Mohamed" },
        role: { ar: "معلمة قرآن كريم وأخلاق إسلامية للأطفال", en: "Kids Quran & Ethics Tutor" },
        category: { ar: "تجويد وتأسيس", en: "Tajweed & Foundation" },
        experienceYears: 6,
        studentsCount: 210,
        rating: 4.94,
        reviewsCount: 52,
        bio: {
            ar: "متخصصة في غرس حب القرآن والآداب الإسلامية لدى البراعم عبر حصص تفاعلية.",
            en: "Specializing in Quranic manners and child-friendly recitation sessions."
        },
        about: {
            ar: "أركز على التلقين السليم والتحفيظ بأسلوب التكرار المحبب والمتابعة اليومية مع أولياء الأمور.",
            en: "Focusing on repetitive retention techniques and regular parental follow-ups."
        },
        image: "/image-default.png",
        qualifications: [
            {
                title: { ar: "ليسانس تربية ودراسات إسلامية", en: "Bachelor of Education & Islamic Studies" },
                institution: { ar: "جامعة الأزهر", en: "Al-Azhar University" },
                year: "2020"
            }
        ],
        specialties: [
            { ar: "تلقين الأطفال وتحفيظهم", en: "Child Memorization" },
            { ar: "الأذكار والآداب اليومية", en: "Daily Islamic Manners" }
        ],
        reviews: [
            {
                id: "rev-sm-1",
                studentName: { ar: "منى عبد العزيز (ولي أمر)", en: "Mona Abdelaziz (Parent)" },
                country: { ar: "قطر", en: "Qatar" },
                rating: 5,
                date: "2026-08-14",
                comment: {
                    ar: "ابنتي تحب الحصة جداً بفضل تعامل المعلمة اللطيف وتشجيعها المستمر.",
                    en: "My daughter loves every class thanks to her kind and encouraging approach."
                }
            }
        ]
    },
    {
        id: "ashraqat-ali",
        name: { ar: "أشرقت علي", en: "Ashraqat Ali" },
        role: { ar: "معلمة لغة عربية وقراءة وقرآن", en: "Arabic & Quran Tutor" },
        category: { ar: "لغة عربية ونحو", en: "Arabic & Grammar" },
        experienceYears: 5,
        studentsCount: 175,
        rating: 4.89,
        reviewsCount: 39,
        bio: {
            ar: "تعليم التهجي السليم وتراكيب الجمل العربية وتصحيح نطق الآيات القرآنية.",
            en: "Teaching sound Arabic spelling and Quranic pronunciation."
        },
        about: {
            ar: "أهتم بالربط بين فهم قواعد اللغة العربية وجمال قراءة القرآن الكريم بطريقة تطبيقية سهلة.",
            en: "Bridging the gap between foundational Arabic and Quranic recitation in an applicable way."
        },
        image: "/image-default.png",
        qualifications: [
            {
                title: { ar: "ليسانس اللغة العربية والعلوم الإسلامية", en: "Bachelor of Arabic Language" },
                institution: { ar: "جامعة القاهرة - دار العلوم", en: "Cairo University" },
                year: "2021"
            }
        ],
        specialties: [
            { ar: "تأسيس القراءة والكتابة", en: "Reading & Writing Foundation" },
            { ar: "تصحيح تلاوة القرآن", en: "Recitation Correction" }
        ],
        reviews: [
            {
                id: "rev-aa-1",
                studentName: { ar: "ياسمين الشريف", en: "Yasmin El-Sherif" },
                country: { ar: "مصر", en: "Egypt" },
                rating: 5,
                date: "2026-07-09",
                comment: {
                    ar: "طريقة متميزة في التبسيط والتطبيق العملي للقراءة.",
                    en: "Great approach to simplifying practical reading."
                }
            }
        ]
    },
    {
        id: "mohamed-ahmed-saeed",
        name: { ar: "محمد أحمد سعيد", en: "Mohamed Ahmed Saeed" },
        role: { ar: "مقرئ ومجاز بالقراءات السبع", en: "Seven Qira'at Scholar" },
        category: { ar: "قرآن وقراءات", en: "Quran & Qira'at" },
        experienceYears: 10,
        studentsCount: 340,
        rating: 4.96,
        reviewsCount: 95,
        bio: {
            ar: "إقراء بالسند المتصل وتدريب متقدم على أصول وفرش القراءات القرآنية.",
            en: "Sanad recitation and advanced training in Quranic recitations."
        },
        about: {
            ar: "متفرغ للإقراء ومنح الإجازات القرآنية بالسند المتصل إلى رسول الله ﷺ للطلاب المتقنين والخاتمين.",
            en: "Dedicated to granting connected Sanad Ijazahs for advanced students and Huffaz."
        },
        image: "/image-default.png",
        featured: true,
        qualifications: [
            {
                title: { ar: "ليسانس القراءات وعلوم القرآن", en: "Bachelor of Recitation Studies" },
                institution: { ar: "جامعة الأزهر", en: "Al-Azhar University" },
                year: "2016"
            }
        ],
        specialties: [
            { ar: "الإقراء ومنح الإجازات", en: "Sanad Recitation" },
            { ar: "علم القراءات والتجويد", en: "Qira'at Studies" }
        ],
        reviews: [
            {
                id: "rev-ms-1",
                studentName: { ar: "إبراهيم الدسوقي", en: "Ibrahim El-Desouky" },
                country: { ar: "السعودية", en: "Saudi Arabia" },
                rating: 5,
                date: "2026-08-01",
                comment: {
                    ar: "معلم متقن ومتمكن جداً في ضبط أوجه القراءات والتجويد.",
                    en: "Master scholar in reciting and tuning Qira'at variations."
                }
            }
        ]
    },
    {
        id: "amr-abdelhamid-saber",
        name: { ar: "عمرو عبد الحميد صابر", en: "Amr Abdelhamid Saber" },
        role: { ar: "معلم تحفيظ وتثبيت القرآن الكريم", en: "Quran Memorization Tutor" },
        category: { ar: "حفظ وإقراء", en: "Memorization & Sanad" },
        experienceYears: 8,
        studentsCount: 290,
        rating: 4.91,
        reviewsCount: 71,
        bio: {
            ar: "متابعة فردية مكثفة للطلاب لمساعدتهم على حفظ ومراجعة القرآن الكريم بانتظام.",
            en: "Structured 1-on-1 memorization and disciplined revision sessions."
        },
        about: {
            ar: "أعمل مع الطالب على خطة أسبوعية تتناسب مع وقته لضمان إتمام الحفظ مع المراجعة المستمرة دون تراكم.",
            en: "Customizing practical weekly quotas matching each student's availability to ensure retention."
        },
        image: "/image-default.png",
        qualifications: [
            {
                title: { ar: "ليسانس أصول الدين والدعوة", en: "BA in Theology & Da'wah" },
                institution: { ar: "جامعة الأزهر", en: "Al-Azhar University" },
                year: "2018"
            }
        ],
        specialties: [
            { ar: "حفظ القرآن الكريم", en: "Quran Memorization" },
            { ar: "خطط المراجعة الدورية", en: "Systematic Review" }
        ],
        reviews: [
            {
                id: "rev-as-1",
                studentName: { ar: "خالد بن فهد", en: "Khaled Bin Fahad" },
                country: { ar: "عمان", en: "Oman" },
                rating: 5,
                date: "2026-07-19",
                comment: {
                    ar: "متابعة مستمرة وجدول واضح ساعدني على تنظيم وردي اليومي.",
                    en: "Consistent follow-up and a practical daily routine."
                }
            }
        ]
    },
    {
        id: "ammar-sameh-badr",
        name: { ar: "عمار سامح بدر", en: "Ammar Sameh Badr" },
        role: { ar: "معلم تجويد وتأسيس لغة عربية", en: "Tajweed & Arabic Instructor" },
        category: { ar: "لغة عربية ونحو", en: "Arabic & Grammar" },
        experienceYears: 6,
        studentsCount: 230,
        rating: 4.93,
        reviewsCount: 54,
        bio: {
            ar: "متخصص في تأسيس القراءة الصحيحة وشرح مبادئ النحو العربي والتجويد التطبيقي.",
            en: "Specialist in reading foundations, basic Arabic syntax, and applied Tajweed."
        },
        about: {
            ar: "أركز على تبسيط قواعد التجويد والنحو وتطبيقها العملي مباشرة على الآيات القرآنية بأسلوب سهل.",
            en: "Simplifying Tajweed and grammar rules with instant application on Quranic verses."
        },
        image: "/image-default.png",
        qualifications: [
            {
                title: { ar: "ليسانس اللغة العربية وآدابها", en: "Bachelor of Arabic Language" },
                institution: { ar: "جامعة الأزهر", en: "Al-Azhar University" },
                year: "2020"
            }
        ],
        specialties: [
            { ar: "النحو التطبيقي", en: "Applied Arabic Grammar" },
            { ar: "أحكام التجويد", en: "Tajweed Rules" }
        ],
        reviews: [
            {
                id: "rev-ab-1",
                studentName: { ar: "ماجد العتيبي", en: "Majed Al-Otaibi" },
                country: { ar: "السعودية", en: "Saudi Arabia" },
                rating: 5,
                date: "2026-08-08",
                comment: {
                    ar: "طريقة ممتازة في شرح أحكام التجويد وربطها باللغة.",
                    en: "Terrific explanation connecting Tajweed with Arabic structure."
                }
            }
        ]
    },
    {
        id: "abdelrahman-abdelazim",
        name: { ar: "عبد الرحمن عبد العظيم", en: "Abdelrahman Abdelazim" },
        role: { ar: "مقرئ بالأزهر الشريف ومجاز برواية ورش وحفص", en: "Scholar in Warsh & Hafs Recitations" },
        category: { ar: "حفظ وإقراء", en: "Memorization & Sanad" },
        experienceYears: 9,
        studentsCount: 310,
        rating: 4.94,
        reviewsCount: 78,
        bio: {
            ar: "خبرة واسعة في جلسات الإقراء الفردية وتصحيح التلاوة بدقة وفق الروايات المعتمدة.",
            en: "Specialized in 1-on-1 recitation correction across authorized narrations."
        },
        about: {
            ar: "أساعد الطلاب على الوصول لأعلى درجات الضبط والخشوع في التلاوة مع الإجازة بالسند المتصل لمن أتم الختمة.",
            en: "Guiding students toward optimal recitation mastery and awarding Sanad to those completing the Khatmah."
        },
        image: "/image-default.png",
        featured: true,
        qualifications: [
            {
                title: { ar: "ليسانس كلية القرآن الكريم بطنطا", en: "Faculty of Quranic Studies" },
                institution: { ar: "جامعة الأزهر", en: "Al-Azhar University" },
                year: "2017"
            }
        ],
        specialties: [
            { ar: "الإقراء بروايتي حفص وورش", en: "Hafs & Warsh Recitation" },
            { ar: "تصحيح وضبط التلاوة", en: "Recitation Precision" }
        ],
        reviews: [
            {
                id: "rev-ra-1",
                studentName: { ar: "عبد الله البلوشي", en: "Abdullah Al-Balushi" },
                country: { ar: "الإمارات", en: "UAE" },
                rating: 5,
                date: "2026-07-25",
                comment: {
                    ar: "المعلم دقيق جداً في التوجيه والصوت خاشع ومريح.",
                    en: "Very precise guidance with a serene recitation atmosphere."
                }
            }
        ]
    }
];

export const featuredTeachers: Teacher[] = allTeachersData.filter((t) => t.featured);