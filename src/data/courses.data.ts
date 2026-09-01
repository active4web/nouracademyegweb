export interface CourseLesson {
    title: { ar: string; en: string };
    duration: { ar: string; en: string };
    type: "video" | "live" | "interactive" | "exam";
}

export interface CourseCurriculumUnit {
    unitNumber: number;
    title: { ar: string; en: string };
    desc: { ar: string; en: string };
    lessons: CourseLesson[];
}

export interface CourseFeature {
    title: { ar: string; en: string };
    desc: { ar: string; en: string };
}

export interface Course {
    id: string;
    categoryKey: "foundation" | "tajweed" | "memorization" | "arabic" | "islamic" | "ijazah";
    category: { ar: string; en: string };
    title: { ar: string; en: string };
    desc: { ar: string; en: string };
    longDescription: { ar: string; en: string };
    targetAudience: { ar: string; en: string };
    duration: { ar: string; en: string };
    totalHours: { ar: string; en: string };
    level: { ar: string; en: string };
    language: { ar: string; en: string };
    certificate: { ar: string; en: string };
    image: string;
    introVideoUrl: string;
    featured?: boolean;
    learningOutcomes: { ar: string[]; en: string[] };
    prerequisites: { ar: string[]; en: string[] };
    features: CourseFeature[];
    curriculum: CourseCurriculumUnit[];
}

export const courseCategories = [
    { key: "all", label: { ar: "جميع المسارات", en: "All Tracks" } },
    { key: "memorization", label: { ar: "حفظ القرآن الكريم", en: "Quran Memorization" } },
    { key: "tajweed", label: { ar: "التجويد والقراءات", en: "Tajweed & Recitation" } },
    { key: "foundation", label: { ar: "تأسيس وقراءة", en: "Foundation & Reading" } },
    { key: "arabic", label: { ar: "اللغة العربية", en: "Arabic Language" } },
    { key: "islamic", label: { ar: "الدراسات الإسلامية", en: "Islamic Studies" } },
    { key: "ijazah", label: { ar: "الإجازة بالسند", en: "Sanad & Ijazah" } }
] as const;

export const allCoursesData: Course[] = [
    {
        id: "nourania-foundation",
        categoryKey: "foundation",
        category: { ar: "تأسيس وقراءة", en: "Foundation" },
        title: {
            ar: "القاعدة النورانية وتأسيس القراءة السليمة",
            en: "Noorani Qaida & Sound Reading Foundation"
        },
        desc: {
            ar: "منهج تطبيقي لضبط مخارج الحروف الهجائية والتهجي الصحيح من الصفر حتى طلاقة القراءة.",
            en: "A structured practical foundation for Arabic phonetics, articulation points, and fluent Quranic reading."
        },
        longDescription: {
            ar: "دورة متكاملة مخصصة لتمكين الأطفال والناطقين بغير العربية والمبتدئين من إتقان النطق العربي الأصيل وضبط مخارج الحروف وصفاتها وفق منهج القاعدة النورانية المعتمد، مع تدريبات عملية مباشرة على قراءة الآيات القرآنية بطلاقة تامة.",
            en: "A comprehensive course designed to empower children, non-native speakers, and beginners in mastering authentic Arabic pronunciation and letter articulation points based on the accredited Noorani Qaida method."
        },
        targetAudience: { ar: "الأطفال والمبتدئون", en: "Kids & Beginners" },
        duration: { ar: "3 - 6 أشهر", en: "3 - 6 Months" },
        totalHours: { ar: "48 ساعة تدريبية", en: "48 Training Hours" },
        level: { ar: "مبتدئ", en: "Beginner" },
        language: { ar: "العربية / الإنجليزية", en: "Arabic / English" },
        certificate: { ar: "شهادة إتمام معتمدة", en: "Accredited Completion Certificate" },
        image: "https://images.unsplash.com/photo-1585036156171-384164a8c675?auto=format&fit=crop&w=700&q=80",
        introVideoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        featured: true,
        learningOutcomes: {
            ar: [
                "التعرف الدقيق على الحروف الهجائية وأشكالها ومخارجها الصحيحة.",
                "إتقان الحركات القصيرة (الفتحة، الضمة، الكسرة) والحركات الطويلة (المدود).",
                "ضبط التنوين، السكون، والشدة ونطقها في الكلمات القرآنية.",
                "القراءة المباشرة من المصحف الشريف بطلاقة وبدون تلعثم."
            ],
            en: [
                "Accurately recognize Arabic letters, shapes, and correct phonetics.",
                "Master short vowels (Harakat) and long vowels (Madd).",
                "Perfect Tanween, Sukoon, and Shaddah in Quranic words.",
                "Read directly and fluently from the Holy Quran without hesitation."
            ]
        },
        prerequisites: {
            ar: ["لا يشترط وجود أي معرفة سابقة بالحروف."],
            en: ["No prior knowledge of Arabic letters is required."]
        },
        features: [
            {
                title: { ar: "تعليم فردي مباشر", en: "Live Sessions" },
                desc: { ar: "تركيز كامل من المعلم مع الطالب لتصحيح النطق لحظياً.", en: "Full focus from certified tutor with real-time pronunciation correction." }
            },
            {
                title: { ar: "تقارير أسبوعية تفاعلية", en: "Weekly Progress Reports" },
                desc: { ar: "متابعة مستمرة لولي الأمر بمستوى تقدم وإنجاز الطالب.", en: "Continuous updates for parents on student milestones and homework." }
            },
            {
                title: { ar: "تمارين وتطبيقات عملية", en: "Practical Worksheets" },
                desc: { ar: "أوراق عمل ومواد مساعدة لتثبيت شكل الحرف وصوته.", en: "Worksheets and multimedia aids to reinforce phonetic memory." }
            }
        ],
        curriculum: [
            {
                unitNumber: 1,
                title: { ar: "الحروف المفردة والمركبة", en: "Single & Compound Letters" },
                desc: { ar: "التعرف على أصوات الحروف ومخارجها الفردية وتركيب الكلمات الأولية.", en: "Identifying phonetic points and letter combinations." },
                lessons: [
                    { title: { ar: "حروف الهجاء المفردة", en: "Individual Alphabet" }, duration: { ar: "45 دقيقة", en: "45 Mins" }, type: "video" },
                    { title: { ar: "الحروف المركبة وأشكالها", en: "Compound Letters & Shapes" }, duration: { ar: "45 دقيقة", en: "45 Mins" }, type: "video" },
                    { title: { ar: "الحروف المقطعة في أوائل السور", en: "Muqatta'at Letters" }, duration: { ar: "30 دقيقة", en: "30 Mins" }, type: "exam" }
                ]
            },
            {
                unitNumber: 2,
                title: { ar: "الحركات القصيرة والتنوين", en: "Short Vowels & Tanween" },
                desc: { ar: "تدريبات التهجي الصوتي للفتحة والكسرة والضمة والتنوين.", en: "Phonetic drills for Fatha, Kasra, Damma, and Tanween." },
                lessons: [
                    { title: { ar: "الحركات الثلاث وطريقة وزن الصوت", en: "The 3 Short Vowels" }, duration: { ar: "45 دقيقة", en: "45 Mins" }, type: "video" },
                    { title: { ar: "التنوين بالفتح والضم والكسر", en: "Tanween Pronunciation" }, duration: { ar: "45 دقيقة", en: "45 Mins" }, type: "video" },
                    { title: { ar: "اختبار قياس سرعة التهجي", en: "Spelling Speed Assessment" }, duration: { ar: "30 دقيقة", en: "30 Mins" }, type: "exam" }
                ]
            },
            {
                unitNumber: 3,
                title: { ar: "المدود والسكون والشدة", en: "Madd, Sukoon & Shaddah" },
                desc: { ar: "الانتقال إلى قراءة الكلمات المعقدة والآيات القرآنية الكاملة.", en: "Transitioning to complex Quranic words and full verses." },
                lessons: [
                    { title: { ar: "حروف المد الطبيعي واللين", en: "Natural Madd & Leen" }, duration: { ar: "45 دقيقة", en: "45 Mins" }, type: "video" },
                    { title: { ar: "السكون وأحكام القلقلة الخفيفة", en: "Sukoon & Intro to Qalqalah" }, duration: { ar: "45 دقيقة", en: "45 Mins" }, type: "video" },
                    { title: { ar: "الشدة وتطبيقاتها في المصحف", en: "Shaddah & Quranic Drills" }, duration: { ar: "45 دقيقة", en: "45 Mins" }, type: "video" }
                ]
            }
        ]
    },
    {
        id: "tajweed-mastery",
        categoryKey: "tajweed",
        category: { ar: "تجويد وتلاوة", en: "Tajweed" },
        title: {
            ar: "إتقان التلاوة وأحكام التجويد العملي",
            en: "Practical Tajweed & Recitation Mastery"
        },
        desc: {
            ar: "دراسة وتطبيق أحكام النون والميم الساكنة والمدود مع التدريب الصوتي المباشر والتقييم الفوري.",
            en: "Comprehensive practical study of Tajweed rules, Noon/Meem Sakinah, and Madd with direct live tutoring."
        },
        longDescription: {
            ar: "مسار متخصص يهدف إلى ترتيل القرآن الكريم كما أُنزل على النبي ﷺ من خلال شرح نظري مبسط وتدريب عملي مكثف على كافة أحكام التجويد من أحكام النون والميم والمدود والصفات والمخارج والوقف والابتداء.",
            en: "A specialized track aimed at perfecting Quranic recitation as revealed to Prophet Muhammad ﷺ through concise theory and extensive practical application of all Tajweed rules."
        },
        targetAudience: { ar: "كافة المستويات", en: "All Levels" },
        duration: { ar: "6 أشهر", en: "6 Months" },
        totalHours: { ar: "72 ساعة تدريبية", en: "72 Training Hours" },
        level: { ar: "متوسط إلى متقدم", en: "Intermediate to Advanced" },
        language: { ar: "العربية / الإنجليزية", en: "Arabic / English" },
        certificate: { ar: "إجازة دراية بشهادة معتمدة", en: "Certified Tajweed Diploma" },
        image: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=700&q=80",
        introVideoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        featured: true,
        learningOutcomes: {
            ar: [
                "تطبيق أحكام النون الساكنة والتنوين والميم الساكنة عملياً بدقة.",
                "ضبط مقادير المدود المختلفة (طبيعي، متصل، منفصل، لازم).",
                "معرفة وتطبيق مخارج الحروف وصفاتها الذاتية والعارضة.",
                "إتقان قواعد الوقف والابتداء وعلامات المصحف الشريف."
            ],
            en: [
                "Apply Noon Sakinah, Tanween, and Meem Sakinah rules practically.",
                "Control the exact counts/durations for all types of Madd.",
                "Understand and apply intrinsic and conditional letter attributes (Sifaat).",
                "Master stopping and starting rules (Waqf & Ibtidaa)."
            ]
        },
        prerequisites: {
            ar: ["القدرة على قراءة الحروف والكلمات العربية من المصحف."],
            en: ["Ability to read Arabic words from the Quran."]
        },
        features: [
            {
                title: { ar: "تصحيح صوتي لحظي", en: "Live Phonetic Corrections" },
                desc: { ar: "تقييم مباشر ودقيق لمخارج الحروف ونبرة التلاوة.", en: "Direct feedback on sound frequencies and articulation precision." }
            },
            {
                title: { ar: "دراسة متن تحفة الأطفال / الجزرية", en: "Classical Matn Study" },
                desc: { ar: "شرح المنظومات التجويدية المعتمدة وتطبيقاتها.", en: "Structured explanation of Tuhfat Al-Atfal or Al-Jazariyyah." }
            }
        ],
        curriculum: [
            {
                unitNumber: 1,
                title: { ar: "أحكام النون الساكنة والتنوين والميم", en: "Noon & Meem Sakinah Rules" },
                desc: { ar: "الإظهار، الإدغام، الإقلاب، والإخفاء مع التدريب على الأمثلة القرآنية.", en: "Izhar, Idgham, Iqlab, and Ikhfa with live verse recitations." },
                lessons: [
                    { title: { ar: "الإظهار الحلقي وحروفه", en: "Izhar Halqi" }, duration: { ar: "50 دقيقة", en: "50 Mins" }, type: "video" },
                    { title: { ar: "الإدغام بغنة وبغير غنة", en: "Idgham with & without Ghunnah" }, duration: { ar: "50 دقيقة", en: "50 Mins" }, type: "video" },
                    { title: { ar: "الإقلاب والإخفاء الحقيقي", en: "Iqlab & Ikhfa Haqiqi" }, duration: { ar: "50 دقيقة", en: "50 Mins" }, type: "video" },
                    { title: { ar: "أحكام الميم الساكنة والنون والميم المشددتين", en: "Meem Sakinah & Mushaddad" }, duration: { ar: "45 دقيقة", en: "45 Mins" }, type: "video" }
                ]
            },
            {
                unitNumber: 2,
                title: { ar: "أحكام المدود وتصنيفاتها", en: "Rules of Madd" },
                desc: { ar: "المد الأصلي والفرعي وأسباب المد من همز وسكون.", en: "Original vs secondary Madd, causes of Madd (Hamz & Sukoon)." },
                lessons: [
                    { title: { ar: "المد الطبيعي وملحقاته (العوض، الصلة، التمكين)", en: "Natural Madd & Attachments" }, duration: { ar: "50 دقيقة", en: "50 Mins" }, type: "video" },
                    { title: { ar: "المد المتصل والمنفصل والبدل", en: "Muttasil, Munfasil & Badal" }, duration: { ar: "50 دقيقة", en: "50 Mins" }, type: "video" },
                    { title: { ar: "المد العارض للسكون والمد اللازم بأنواعه", en: "Aridh Lil-Sukoon & Madd Lazim" }, duration: { ar: "50 دقيقة", en: "50 Mins" }, type: "video" }
                ]
            }
        ]
    },
    {
        id: "quran-memorization",
        categoryKey: "memorization",
        category: { ar: "حفظ ومراجعة", en: "Memorization" },
        title: {
            ar: "حفظ ومراجعة القرآن الكريم بالقراءات",
            en: "Quran Memorization & Qira'at Revision"
        },
        desc: {
            ar: "خطة حفظ متدرجة مع نظام مراجعة مكثف وتثبيت الحفظ بإشراف معلمين مجازين بالسند المتصل.",
            en: "Structured memorization roadmap with systematic retention review under Al-Azhar certified scholars."
        },
        longDescription: {
            ar: "برنامج حفظ منهجي مصمم خصيصاً ليناسب وقت الطالب وطاقته الاستيعابية، يعتمد على الجمع بين الحفظ الجديد اليومي، والمراجعة القريبة لتثبيت الأجزاء الأخيرة، والمراجعة البعيدة للمصحف كاملاً مع ضبط المتشابهات.",
            en: "A structured Hifz program tailored to the student's schedule and capacity, combining new daily lessons, near revision for retention, and continuous far revision of previous Juzs."
        },
        targetAudience: { ar: "الراغبون في الحفظ والإتقان", en: "Aspiring Hafiz & Adults" },
        duration: { ar: "حسب الخطة الفردية", en: "Flexible / Tailored" },
        totalHours: { ar: "حسب الهدف الفردي", en: "Customized" },
        level: { ar: "كافة المستويات", en: "All Levels" },
        language: { ar: "العربية / الإنجليزية", en: "Arabic / English" },
        certificate: { ar: "شهادة إتقان أجزاء / حفظ كامل", en: "Hifz Completion Certificate" },
        image: "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?auto=format&fit=crop&w=700&q=80",
        introVideoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        featured: true,
        learningOutcomes: {
            ar: [
                "حفظ آيات وسور القرآن الكريم عن ظهر قلب بإتقان تام.",
                "امتلاك خطة مراجعة متكاملة تمنع تفلت وتناسي المحفوظ.",
                "ضبط المتشابهات اللفظية وفهم معاني الآيات وأسباب النزول.",
                "تلاوة الحفظ بالأحكام والتغني بالقرآن بصوت خاشع."
            ],
            en: [
                "Memorize Quranic Surahs by heart with strong retention.",
                "Establish a personalized daily routine to maintain memorization.",
                "Master similar verses (Mutashabihat) and comprehend core meanings.",
                "Recite memorized portions with proper Tajweed and melodious tone."
            ]
        },
        prerequisites: {
            ar: ["القراءة السليمة من المصحف بأحكام التجويد الأساسية."],
            en: ["Fluent reading from the Mushaf with basic Tajweed."]
        },
        features: [
            {
                title: { ar: "جدول حفظ ومراجعة مخصص", en: "Tailored Hifz Schedule" },
                desc: { ar: "تحديد مقدار الورد اليومي المناسب للقدرات الفردية.", en: "Customized daily quota matching your memorization pace." }
            },
            {
                title: { ar: "تسميع مباشر وسرد أجزاء", en: "Live Recitation & Juz Runs" },
                desc: { ar: "سرد أجزاء كاملة غيباً لضمان رسوخ الحفظ التام.", en: "Full Juz recitation sessions to ensure solid retention." }
            }
        ],
        curriculum: [
            {
                unitNumber: 1,
                title: { ar: "مرحلة التأسيس وضبط الحفظ (جزء عم وتبارك)", en: "Foundation Stage (Juz Amma & Tabarak)" },
                desc: { ar: "بناء ملكة الحفظ اليومي وتثبيت قصار السور مع الفهم.", en: "Building daily memorization habits with short surahs." },
                lessons: [
                    { title: { ar: "تسميع وضبط جزء عم كاملاً", en: "Juz Amma Recitation & Review" }, duration: { ar: "60 دقيقة", en: "60 Mins" }, type: "video" },
                    { title: { ar: "تسميع وضبط جزء تبارك كاملاً", en: "Juz Tabarak Recitation & Review" }, duration: { ar: "60 دقيقة", en: "60 Mins" }, type: "video" },
                    { title: { ar: "اختبار سرد الجزئين غيباً", en: "Oral Exam on Juz 29 & 30" }, duration: { ar: "45 دقيقة", en: "45 Mins" }, type: "exam" }
                ]
            }
        ]
    },
    {
        id: "arabic-grammar",
        categoryKey: "arabic",
        category: { ar: "لغة عربية", en: "Arabic Language" },
        title: {
            ar: "النحو التطبيقي وقواعد اللغة العربية",
            en: "Applied Arabic Grammar & Linguistics"
        },
        desc: {
            ar: "فهم تراكيب الجمل والإعراب ودلالات الألفاظ مع تطبيقات قرآنية وأدبية منتقاة.",
            en: "Mastering Arabic syntax, grammatical analysis (I'rab), and linguistic comprehension using Quranic texts."
        },
        longDescription: {
            ar: "دورة تهدف إلى تبسيط علم النحو وقواعد الإعراب وتحويلها من نظريات جافة إلى مهارة عملية تطبيقية من خلال التدريب على إعراب آيات القرآن الكريم والنصوص الفصيحة وبناء الجمل العربية السليمة.",
            en: "A comprehensive course that simplifies Arabic syntax and parsing (I'rab) through direct practical exercises on Quranic verses and classical texts."
        },
        targetAudience: { ar: "الناطقون بالعربية وبغيرها", en: "Native & Non-Native Speakers" },
        duration: { ar: "4 - 8 أشهر", en: "4 - 8 Months" },
        totalHours: { ar: "60 ساعة تدريبية", en: "60 Training Hours" },
        level: { ar: "متوسط", en: "Intermediate" },
        language: { ar: "العربية", en: "Arabic" },
        certificate: { ar: "شهادة إتمام معتمدة في النحو", en: "Certified Arabic Grammar Certificate" },
        image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=700&q=80",
        introVideoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        featured: true,
        learningOutcomes: {
            ar: [
                "التمييز بين أقسام الكلمة (اسم، فعل، حرف) وعلامات كل قسم.",
                "إعراب الجملة الاسمية والجملة الفعلية ومكملاتهما بثقة.",
                "فهم علامات الإعراب الأصلية والفرعية وتطبيقاتها في القرآن.",
                "التحدث والكتابة بلغة عربية فصيحة خالية من اللحن والخطأ."
            ],
            en: [
                "Differentiate word types (Noun, Verb, Particle) and their indicators.",
                "Confidently parse nominal and verbal sentence structures.",
                "Master primary and secondary grammatical case markers in Quranic texts.",
                "Speak and write accurate Arabic without grammatical errors."
            ]
        },
        prerequisites: {
            ar: ["معرفة القراءة والكتابة باللغة العربية."],
            en: ["Basic Arabic reading and writing skills."]
        },
        features: [
            {
                title: { ar: "إعراب قرآني تطبيقي", en: "Quranic Syntax Analysis" },
                desc: { ar: "ربط كل قاعدة نحوية بآيات من القرآن الكريم مباشرة.", en: "Direct connection between grammar rules and Quranic verses." }
            }
        ],
        curriculum: [
            {
                unitNumber: 1,
                title: { ar: "بنية الكلمة والجملة الأساسية", en: "Word & Basic Sentence Structure" },
                desc: { ar: "أقسام الكلمة، المعرب والمبني، والمبتدأ والخبر.", en: "Parts of speech, Mabni vs Mu'rab, Subject and Predicate." },
                lessons: [
                    { title: { ar: "أقسام الكلام وعلامات الاسم والفعل", en: "Parts of Speech & Markers" }, duration: { ar: "50 دقيقة", en: "50 Mins" }, type: "video" },
                    { title: { ar: "الجملة الاسمية ونواسخها (كان وإن)", en: "Nominal Sentence & Modifiers" }, duration: { ar: "50 دقيقة", en: "50 Mins" }, type: "video" },
                    { title: { ar: "الجملة الفعلية (الفاعل ونائبه والمفاعيل)", en: "Verbal Sentence & Objects" }, duration: { ar: "50 دقيقة", en: "50 Mins" }, type: "video" }
                ]
            }
        ]
    },
    {
        id: "sanad-ijazah",
        categoryKey: "ijazah",
        category: { ar: "الإجازة بالسند", en: "Sanad & Ijazah" },
        title: {
            ar: "برنامج الإجازة بالسند المتصل برواية حفص والعشر",
            en: "Sanad Ijazah Program in Hafs & 10 Qira'at"
        },
        desc: {
            ar: "ختمة كاملة متقنة غيباً أو نظراً مع مشايخ معتمدين للحصول على إجازة متصلة السند بالنبي ﷺ.",
            en: "Complete recitation under verified scholars to achieve an authentic connected Sanad chain."
        },
        longDescription: {
            ar: "أعلى المراتب العلمية في تلاوة كتاب الله؛ حيث يقوم الطالب بقراءة ختمة كاملة من أول الفاتحة إلى آخر الناس غيباً على شيخ مجاز بالسند المتصل إلى رسول الله ﷺ، ليتوج بعد اجتياز الختمة بالإجازة والشهادة المسندة.",
            en: "The pinnacle of Quranic recitation scholarship; students recite the entire Quran from memory to a certified Sheikh with a continuous chain reaching Prophet Muhammad ﷺ."
        },
        targetAudience: { ar: "المتقنون والخاتمون", en: "Advanced Students" },
        duration: { ar: "حسب مقدار الإنجاز", en: "Milestone Based" },
        totalHours: { ar: "ختمة كاملة (100+ ساعة)", en: "Full Khatmah (100+ Hours)" },
        level: { ar: "متقدم جداً", en: "Advanced / Expert" },
        language: { ar: "العربية", en: "Arabic" },
        certificate: { ar: "إجازة بالسند المتصل إلى النبي ﷺ", en: "Continuous Sanad Ijazah to Prophet ﷺ" },
        image: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=700&q=80",
        introVideoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        featured: true,
        learningOutcomes: {
            ar: [
                "قراءة ختمة كاملة بأعلى درجات الضبط والتحقيق والترتيل.",
                "الحصول على سند متصل إلى رسول الله ﷺ برواية معتمدة.",
                "التأهل لتعليم القرآن والإقراء ومنح الإجازات للأجيال القادمة.",
                "فهم دقائق علم التجويد وعلل القراءات وتوجيهها."
            ],
            en: [
                "Recite the entire Quran with the highest precision and mastery.",
                "Obtain an authentic connected chain of transmission to the Prophet ﷺ.",
                "Become qualified to teach and grant Ijazah to future generations.",
                "Master deep subtleties and linguistic rationale of Qira'at."
            ]
        },
        prerequisites: {
            ar: ["حفظ القرآن الكريم كاملاً مع إتقان نظري وعملي لأحكام التجويد."],
            en: ["Complete memorization of the Quran with practical Tajweed mastery."]
        },
        features: [
            {
                title: { ar: "سند أزهري معتمد ومتصل", en: "Authentic Al-Azhar Sanad" },
                desc: { ar: "شيوخ حاصلون على أعلى الأسانيد المتصلة.", en: "Scholars holding verified highest authentic chains." }
            },
            {
                title: { ar: "جلسات إقراء فردية مغلقة", en: "Private 1-on-1 Recitation" },
                desc: { ar: "تدقيق كامل لكل حرف وحركة وعلامة وقف.", en: "Meticulous verification of every single letter and pause." }
            }
        ],
        curriculum: [
            {
                unitNumber: 1,
                title: { ar: "الربع الأول من القرآن الكريم (الفاتحة - الأنعام)", en: "First Quarter of the Quran" },
                desc: { ar: "ضبط مخارج الحروف وترسيخ نبرة الرواية المختارة.", en: "Phonetic verification and establishing the chosen Qira'ah rhythm." },
                lessons: [
                    { title: { ar: "تسميع سورة الفاتحة وسورة البقرة", en: "Recitation: Al-Fatihah & Al-Baqarah" }, duration: { ar: "90 دقيقة", en: "90 Mins" }, type: "video" },
                    { title: { ar: "تسميع سورة آل عمران والنساء", en: "Recitation: Ali 'Imran & An-Nisa" }, duration: { ar: "90 دقيقة", en: "90 Mins" }, type: "video" },
                    { title: { ar: "تسميع سورة المائدة والأنعام", en: "Recitation: Al-Ma'idah & Al-An'am" }, duration: { ar: "90 دقيقة", en: "90 Mins" }, type: "video" }
                ]
            }
        ]
    },
    {
        id: "islamic-studies-youth",
        categoryKey: "islamic",
        category: { ar: "دراسات إسلامية", en: "Islamic Studies" },
        title: {
            ar: "الفقه والعقيدة والسيرة النبوية للناشئة",
            en: "Islamic Studies, Fiqh & Seerah for Youth"
        },
        desc: {
            ar: "دروس تفاعلية مبسطة تشرح أركان الإيمان، السيرة العطرة، والأخلاق والآداب الإسلامية اليومية.",
            en: "Simplified interactive lessons explaining faith pillars, Prophetic biography, and Islamic ethics."
        },
        longDescription: {
            ar: "برنامج تربوي شامل يبني الهوية الإسلامية لدى الأطفال والشباب، يتعلم الطالب من خلاله أركان الإسلام والإيمان، كيفية الصلاة والطهارة، وسيرة النبي ﷺ والصحابة الكرام، مع غرس القيم والأخلاق الإسلامية المعاملاتية.",
            en: "A comprehensive educational program cultivating Islamic identity in children and youth, covering faith pillars, prayer, purity, Prophetic biography (Seerah), and practical daily ethics."
        },
        targetAudience: { ar: "الأطفال والناشئة", en: "Kids & Youth" },
        duration: { ar: "3 - 6 أشهر", en: "3 - 6 Months" },
        totalHours: { ar: "36 ساعة تدريبية", en: "36 Training Hours" },
        level: { ar: "مبتدئ / عام", en: "Beginner / General" },
        language: { ar: "العربية / الإنجليزية", en: "Arabic / English" },
        certificate: { ar: "شهادة إتمام معتمدة", en: "Completion Certificate" },
        image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=700&q=80",
        introVideoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4",
        featured: true,
        learningOutcomes: {
            ar: [
                "فهم أركان الإيمان والإسلام وتطبيقها بيقين.",
                "إتقان صفة الوضوء والصلاة والسنن اليومية عملياً.",
                "التعرف على أهم محطات السيرة النبوية والاقتداء بخلق النبي ﷺ.",
                "اكتساب الآداب والأخلاق الإسلامية (بر الوالدين، الصدق، الأمانة)."
            ],
            en: [
                "Understand and embrace the pillars of Islam and Iman.",
                "Master the practical method of Wudu, Salah, and daily Sunnahs.",
                "Learn key milestones from the Seerah and emulate the Prophet's character.",
                "Embody Islamic morals (Honoring parents, truthfulness, integrity)."
            ]
        },
        prerequisites: {
            ar: ["مناسب لجميع الأعمار ولا يتطلب خلفية سابقة."],
            en: ["Suitable for all ages with no prerequisites."]
        },
        features: [
            {
                title: { ar: "أسلوب قصصي تفاعلي", en: "Storytelling & Visual Aids" },
                desc: { ar: "عرض قصص الأنبياء والسيرة بأسلوب شيق وجذاب للناشئة.", en: "Engaging storytelling and multimedia presentations for kids." }
            },
            {
                title: { ar: "مسابقات وتطبيقات عملية", en: "Quizzes & Daily Trackers" },
                desc: { ar: "جداول متابعة للصلاة والآداب اليومية في المنزل.", en: "Daily prayer and good manners habit trackers." }
            }
        ],
        curriculum: [
            {
                unitNumber: 1,
                title: { ar: "العقيدة وأركان الإيمان", en: "Aqeedah & Pillars of Iman" },
                desc: { ar: "معرفة الله تعالى وأسمائه الحسنى والإيمان بالرسل والملائكة واليوم الآخر.", en: "Knowing Allah, His beautiful names, Angels, Prophets, and the Hereafter." },
                lessons: [
                    { title: { ar: "من هو الله وما هي أسماؤه الحسنى؟", en: "Who is Allah & His Names" }, duration: { ar: "40 دقيقة", en: "40 Mins" }, type: "video" },
                    { title: { ar: "أركان الإيمان الستة", en: "The 6 Pillars of Iman" }, duration: { ar: "40 دقيقة", en: "40 Mins" }, type: "video" },
                    { title: { ar: "قصة خلق آدم وبداية البشرية", en: "Story of Creation" }, duration: { ar: "40 دقيقة", en: "40 Mins" }, type: "exam" }
                ]
            },
            {
                unitNumber: 2,
                title: { ar: "فقه العبادات اليومية", en: "Fiqh of Daily Worship" },
                desc: { ar: "الطهارة، الوضوء العملي، وأداء الصلوات الخمس.", en: "Purity, practical Wudu, and the five daily prayers." },
                lessons: [
                    { title: { ar: "خطوات الوضوء السليم ونواقضه", en: "Wudu Steps & Nullifiers" }, duration: { ar: "45 دقيقة", en: "45 Mins" }, type: "video" },
                    { title: { ar: "صفة الصلاة خطوة بخطوة بالصور التوضيحية", en: "Step-by-step Salah Guide" }, duration: { ar: "45 دقيقة", en: "45 Mins" }, type: "video" },
                    { title: { ar: "أذكار الصباح والمساء وأدعية اليوم والليلة", en: "Daily Adhkar & Duas" }, duration: { ar: "30 دقيقة", en: "30 Mins" }, type: "exam" }
                ]
            }
        ]
    }
];

export const featuredCourses = allCoursesData.filter((c) => c.featured);