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
    categoryKey: "quran" | "tajweed" | "islamic" | "english" | "school-subjects" | "ijazah";
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
    { key: "quran", label: { ar: "مسار القرآن الكريم", en: "Quran Track" } },
    { key: "tajweed", label: { ar: "مسار التجويد", en: "Tajweed Track" } },
    { key: "islamic", label: { ar: "العلوم الشرعية", en: "Islamic Studies" } },
    { key: "english", label: { ar: "اللغة الإنجليزية", en: "English Language" } },
    { key: "school-subjects", label: { ar: "المواد الدراسية", en: "School Subjects" } },
    { key: "ijazah", label: { ar: "الإجازات القرآنية", en: "Quranic Ijazah" } }
] as const;

export const allCoursesData: Course[] = [
    // 1- مسار تعليم القرآن الكريم
    {
        id: "quran-track",
        categoryKey: "quran",
        category: { ar: "مسار القرآن الكريم", en: "Quran Track" },
        title: {
            ar: "مسار تعليم القرآن الكريم للأطفال",
            en: "Comprehensive Quran Learning Track for Kids"
        },
        desc: {
            ar: "مسار متكامل لتعليم القرآن الكريم من الصفر حتى الإتقان من خلال حصص فردية 100% ومناهج تفاعلية مخصصة.",
            en: "A comprehensive track teaching Quran from scratch to mastery through 100% 1-on-1 personalized classes."
        },
        longDescription: {
            ar: "مسار متكامل لتعليم أبنائنا القرآن الكريم من الصفر حتى الإتقان، من خلال حصص فردية 100% ومناهج مصممة خصيصاً للأطفال تناسب كل مستوى وكل عمر. مع مدرسة قرآنية أونلاين داخل بيتك بيئة آمنة ومتابعة مستمرة ونتيجة ملموسة تضمن قراءة الطفل للمصحف في أقل من 6 شهور.",
            en: "A comprehensive journey teaching children the Holy Quran from basic letters to complete fluency with tailored 1-on-1 private lessons. An online Quran school at home with weekly and monthly progress tracking."
        },
        targetAudience: { ar: "الأطفال من سن 4 سنوات والناشئة", en: "Kids aged 4+ and Youth" },
        duration: { ar: "مستمر حسب باقة الاشتراك", en: "Flexible / Monthly Plans" },
        totalHours: { ar: "8 إلى 20 حصة شهرياً", en: "8 to 20 Sessions / Month" },
        level: { ar: "من الصفر حتى الإتقان", en: "Beginner to Advanced" },
        language: { ar: "العربية / الإنجليزية", en: "Arabic / English" },
        certificate: { ar: "شهادة إتمام واجتياز معتمدة", en: "Official Completion Certificate" },
        image: "https://images.unsplash.com/photo-1585036156171-384164a8c675?auto=format&fit=crop&w=700&q=80",
        introVideoUrl: "https://vjs.zencdn.net/v/oceans.mp4",
        featured: true,
        learningOutcomes: {
            ar: [
                "القراءة المباشرة من المصحف الشريف بالتجويد في أقل من 6 شهور.",
                "حفظ ومراجعة السور القرآنية بالتكرار والتلقين المتقن.",
                "فهم التفسير المبسط لكل آية يحفظها الطفل بما يلائم سنه.",
                "تعلم أساسيات الدين (فقه العبادات، سيرة النبي ﷺ، وقصص الأنبياء).",
                "التحلي بآداب التعامل مع القرآن وغرس أخلاق أهل القرآن."
            ],
            en: [
                "Read directly from the Mushaf with Tajweed in less than 6 months.",
                "Memorize and review Quranic verses with interactive repetition.",
                "Comprehend simplified Tafseer tailored to child's age.",
                "Learn essential Islamic foundations (Fiqh of worship, Seerah & stories of Prophets).",
                "Embody Quranic morals and manners in daily life."
            ]
        },
        prerequisites: {
            ar: ["تحديد مستوى مجاني عند التسجيل لمعرفة نقطة البداية."],
            en: ["Free level assessment session upon enrollment."]
        },
        features: [
            {
                title: { ar: "حصص فردية 100%", en: "100% 1-on-1 Private" },
                desc: { ar: "معلم أو معلمة متفرغة بالكامل لطفلك لضمان أقصى تركيز.", en: "Dedicated male/female instructor focusing only on your child." }
            },
            {
                title: { ar: "تقارير متابعة أسبوعية وشهرية", en: "Weekly & Monthly Reports" },
                desc: { ar: "تقارير تفصيلية دورية لولي الأمر لمتابعة التقدم والإنجازات.", en: "Regular comprehensive reports tracking milestones." }
            },
            {
                title: { ar: "معلمون متخصصون للأطفال", en: "Certified Child Specialists" },
                desc: { ar: "نخبة من المتخصصين في تعليم الأطفال وتحبيبهم في القرآن.", en: "Experienced teachers skilled at encouraging young learners." }
            }
        ],
        curriculum: [
            {
                unitNumber: 1,
                title: { ar: "التأسيس وتهجي المصحف", en: "Reading & Phonetics Foundation" },
                desc: { ar: "تأسيس القراءة من المصحف حتى لو كان الطفل لا يعرف الحروف.", en: "Learning correct letter articulation and fluent Quranic reading." },
                lessons: [
                    { title: { ar: "تأسيس مخارج الحروف والتهجي السليم", en: "Letter Articulation & Spelling" }, duration: { ar: "30-60 دقيقة", en: "30-60 Mins" }, type: "live" },
                    { title: { ar: "الانتقال للقراءة المباشرة من المصحف", en: "Direct Mushaf Reading Practice" }, duration: { ar: "30-60 دقيقة", en: "30-60 Mins" }, type: "live" }
                ]
            },
            {
                unitNumber: 2,
                title: { ar: "الحفظ والتفسير وأساسيات الدين", en: "Memorization, Tafseer & Islamic Basics" },
                desc: { ar: "الحفظ بالتلقين مع شرح المعاني وقصص السيرة النبوية.", en: "Memorization paired with simplified meanings and Seerah." },
                lessons: [
                    { title: { ar: "الحفظ والمراجعة الدورية بالتكرار", en: "Repetitive Memorization & Revision" }, duration: { ar: "30-60 دقيقة", en: "30-60 Mins" }, type: "live" },
                    { title: { ar: "تفسير الآيات وقصص السيرة والأخلاق", en: "Tafseer, Seerah & Manners" }, duration: { ar: "30-60 دقيقة", en: "30-60 Mins" }, type: "live" }
                ]
            }
        ]
    },

    // 2- مسار التجويد
    {
        id: "tajweed-track",
        categoryKey: "tajweed",
        category: { ar: "مسار التجويد", en: "Tajweed Track" },
        title: {
            ar: "مسار إتقان التجويد العملي والنظري",
            en: "Complete Tajweed Mastery Track"
        },
        desc: {
            ar: "مسار متخصص لتعليم أحكام التجويد خطوة بخطوة من الصفر حتى الإتقان وقراءة القرآن كما أُنزل.",
            en: "Step-by-step specialized track teaching Tajweed from basics to mastery for flawless recitation."
        },
        longDescription: {
            ar: "مسار متخصص لتعليم أحكام التجويد خطوة بخطوة من الصفر حتى الإتقان. بنعلمك إزاي تخرج كل حرف من مخرجه الصحيح وتديه حقه ومستحقه، عشان تقرأ القرآن قراءة صحيحة ترضي ربنا. يشمل تصحيح تلاوة فردي 100% وشرحاً مبسطاً لجميع الأحكام والصفات.",
            en: "Master Tajweed rules systematically with verified scholars. Learn precise letter exits, intrinsic attributes, rules of Noon/Meem Sakinah, Madd, Waqf and Ibtida with 100% personalized live correction."
        },
        targetAudience: { ar: "الكبار، الأطفال من 7 سنوات، والمعلمات", en: "Adults, Kids aged 7+, & Quran Teachers" },
        duration: { ar: "3 مستويات (حسب الخطة)", en: "3 Progressive Levels" },
        totalHours: { ar: "8 إلى 20 حصة شهرياً", en: "8 to 20 Sessions / Month" },
        level: { ar: "مبتدئ إلى متقدم", en: "Beginner to Advanced" },
        language: { ar: "العربية / الإنجليزية", en: "Arabic / English" },
        certificate: { ar: "شهادة إتقان تجويد معتمدة", en: "Tajweed Mastery Certificate" },
        image: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=700&q=80",
        introVideoUrl: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4",
        featured: true,
        learningOutcomes: {
            ar: [
                "إخراج كل حرف من مخرجه الدقيق وإعطاؤه حقه ومستحقه من الصفات.",
                "إتقان أحكام النون الساكنة والتنوين والميم الساكنة والمشددة.",
                "ضبط مقادير وأنواع المدود (طبيعي، متصل، منفصل، عارض، لازم).",
                "معرفة أحكام اللام والراء، القلقلة، والوقف والابتداء.",
                "قراءة أي صفحة من المصحف بدون أخطاء مع فهم أسباب كل حكم."
            ],
            en: [
                "Articulate letters from exact exit points with intrinsic qualities.",
                "Master rules of Noon Sakinah, Tanween, and Meem Sakinah.",
                "Accurately apply all Madd durations and types.",
                "Comprehend rules of Lam, Ra, Qalqalah, and proper Waqf & Ibtida.",
                "Recite any page from the Holy Quran fluently without mistakes."
            ]
        },
        prerequisites: {
            ar: ["تحديد مستوى مجاني لتقسيم الطلاب حسب المستوى والهدف."],
            en: ["Free initial level assessment."]
        },
        features: [
            {
                title: { ar: "معلمون ومعلمات مجازون", en: "Certified Sanad Tutors" },
                desc: { ar: "كوادر مجازة برواية حفص عن عاصم من الأزهر الشريف.", en: "Instructors certified in Hafs 'an 'Asim recitation." }
            },
            {
                title: { ar: "تصحيح فردي حرفاً بحرف", en: "1-on-1 Recitation Correction" },
                desc: { ar: "المعلم يستمع لك ويصحح أدق التفاصيل الصوتية مباشرة.", en: "Live private feedback refining every vowel and rule." }
            }
        ],
        curriculum: [
            {
                unitNumber: 1,
                title: { ar: "المستوى الأول: التأسيس (شهرين)", en: "Level 1: Foundation (2 Months)" },
                desc: { ar: "مخارج الحروف وصفاتها وأحكام النون الساكنة والتنوين والميم.", en: "Letter articulation points, attributes, and Noon/Meem Sakinah." },
                lessons: [
                    { title: { ar: "مخارج الحروف وصفاتها (الهمس، القلقلة، الرخاوة)", en: "Letter Articulation & Attributes" }, duration: { ar: "45 دقيقة", en: "45 Mins" }, type: "live" },
                    { title: { ar: "أحكام النون الساكنة والتنوين والميم الساكنة", en: "Noon & Meem Sakinah Rules" }, duration: { ar: "45 دقيقة", en: "45 Mins" }, type: "live" }
                ]
            },
            {
                unitNumber: 2,
                title: { ar: "المستوى الثاني: الإتقان (3 شهور)", en: "Level 2: Mastery (3 Months)" },
                desc: { ar: "أحكام المدود، اللام والراء، وقواعد الوقف والابتداء.", en: "Madd categories, Lam & Ra rules, and Waqf & Ibtida." },
                lessons: [
                    { title: { ar: "أنواع المدود وأحكام اللامات والراءات", en: "Madd Rules, Lam & Ra Rules" }, duration: { ar: "45 دقيقة", en: "45 Mins" }, type: "live" },
                    { title: { ar: "أحكام الوقف والابتداء وتطبيقات جزء عم", en: "Waqf & Ibtida with Practical Drills" }, duration: { ar: "45 دقيقة", en: "45 Mins" }, type: "live" }
                ]
            },
            {
                unitNumber: 3,
                title: { ar: "المستوى الثالث: التطبيق والختمة", en: "Level 3: Full Recitation Application" },
                desc: { ar: "ختمة تصحيح تلاوة كاملة ومباشرة على المصحف الشريف.", en: "Complete full Mushaf recitation correction." },
                lessons: [
                    { title: { ar: "جلسات تصحيح التلاوة المباشرة للمصحف كاملاً", en: "Full Mushaf Recitation Correction Sittings" }, duration: { ar: "60 دقيقة", en: "60 Mins" }, type: "live" }
                ]
            }
        ]
    },

    // 3- مسار العلوم الشرعية
    {
        id: "islamic-studies-track",
        categoryKey: "islamic",
        category: { ar: "العلوم الشرعية", en: "Islamic Studies" },
        title: {
            ar: "مسار العلوم الشرعية (منهج الأزهر الشريف المبسط)",
            en: "Islamic Studies Track (Simplified Al-Azhar Curriculum)"
        },
        desc: {
            ar: "نبني عقيدة صحيحة ونفهم ديننا فهماً واعياً من خلال العقيدة، الفقه، السيرة، التفسير، والحديث.",
            en: "Cultivating authentic Aqeedah, Fiqh, Seerah, Tafseer, and Hadith based on Al-Azhar methodology."
        },
        longDescription: {
            ar: "مسار متكامل لتعليم العلوم الشرعية الأساسية للأطفال والكبار، بنمشي فيه على منهج الأزهر الشريف المبسط، عشان نطلع جيل فاهم دينه، عارف عقيدته، ومطبق لأحكام فقهه في حياته اليومية. نهدف إلى بناء طالب (مسلم فاهم) يعرف ربه ونبيه ويعيش بدينه.",
            en: "A comprehensive journey covering foundational Islamic Sciences for kids and adults based on Al-Azhar's moderate curriculum. Building practicing Muslims who understand Aqeedah, perform worship correctly, and emulate Prophetic character."
        },
        targetAudience: { ar: "التأسيس (5-9 سنوات)، المتوسطة (10-14 سنة)، والكبار", en: "Ages 5-9, 10-14, and Adults 15+" },
        duration: { ar: "مناهج فصلية مستمرة", en: "Continuous Modular Track" },
        totalHours: { ar: "8 إلى 20 حصة شهرياً", en: "8 to 20 Sessions / Month" },
        level: { ar: "متدرج حسب المرحلة العمرية", en: "Graded by Age Group" },
        language: { ar: "العربية / الإنجليزية", en: "Arabic / English" },
        certificate: { ar: "شهادات اجتياز بعد إتمام كل مادة", en: "Accredited Subject Certificates" },
        image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=700&q=80",
        introVideoUrl: "https://vjs.zencdn.net/v/oceans.mp4",
        featured: true,
        learningOutcomes: {
            ar: [
                "بناء العقيدة السليمة على الفطرة (أركان الإيمان، أسماء الله الحسنى).",
                "فهم وتطبيق فقه العبادات (الطهارة، الصلاة، الصيام، والزكاة).",
                "دراسة السيرة النبوية العطرة واستخراج الدروس والعبر الحياتية.",
                "حفظ وشرح الأربعين النووية وتطبيق التوجيهات النبوية في الواقع.",
                "التخلق بالأخلاق والآداب الإسلامية وبر الوالدين وحسن التعامل."
            ],
            en: [
                "Establish solid faith based on Quran and Sunnah (Pillars of Iman, Asma' Allah).",
                "Learn practical Fiqh of worship (Wudu, Salah, Sawm, Zakah).",
                "Study Prophetic biography (Seerah) and apply life lessons.",
                "Memorize and comprehend the 40 Hadith of Imam An-Nawawi.",
                "Internalize Islamic ethics, filial piety, and community manners."
            ]
        },
        prerequisites: {
            ar: ["تحديد مستوى مجاني وتقسيم الطلاب حسب السن والاستيعاب."],
            en: ["Free level assessment to assign appropriate age group."]
        },
        features: [
            {
                title: { ar: "خريجو الأزهر الشريف", en: "Al-Azhar Graduates" },
                desc: { ar: "معلمون ومعلمات أزهريون متخصصون في تبسيط العلوم الشرعية.", en: "Specialized teachers skilled in making Islamic concepts simple." }
            },
            {
                title: { ar: "أسلوب قصصي وتطبيقي", en: "Storytelling & Practical Life" },
                desc: { ar: "ربط كل مفهوم شرعي بالحياة اليومية وسلوك الطالب.", en: "Connecting textbook knowledge with daily Muslim practices." }
            }
        ],
        curriculum: [
            {
                unitNumber: 1,
                title: { ar: "العقيدة والفقه الميسر", en: "Aqeedah & Practical Fiqh" },
                desc: { ar: "أركان الإيمان، أسماء الله الحسنى، وفقه الطهارة والصلاة.", en: "Pillars of Faith, Divine Names, and Fiqh of Prayer." },
                lessons: [
                    { title: { ar: "العقيدة: أركان الإيمان وأسماء الله الحسنى", en: "Aqeedah: Pillars of Iman & Allah's Names" }, duration: { ar: "45 دقيقة", en: "45 Mins" }, type: "live" },
                    { title: { ar: "الفقه: إزاي أعبد ربنا صح (الطهارة والصلاة)", en: "Fiqh: Worshiping Correctly (Purity & Salah)" }, duration: { ar: "45 دقيقة", en: "45 Mins" }, type: "live" }
                ]
            },
            {
                unitNumber: 2,
                title: { ar: "السيرة والحديث والتفسير والأخلاق", en: "Seerah, Hadith, Tafseer & Manners" },
                desc: { ar: "سيرة النبي ﷺ، الأربعين النووية، وقصص الأنبياء والصحابة.", en: "Prophetic Seerah, 40 Nawawi Hadith, and Islamic manners." },
                lessons: [
                    { title: { ar: "السيرة النبوية العطرة وقصص الأنبياء", en: "Prophetic Biography & Stories of Prophets" }, duration: { ar: "45 دقيقة", en: "45 Mins" }, type: "live" },
                    { title: { ar: "الأربعين النووية وتفسير الآيات والآداب", en: "40 Hadith, Quranic Tafseer & Ethics" }, duration: { ar: "45 دقيقة", en: "45 Mins" }, type: "live" }
                ]
            }
        ]
    },

    // 4- مسار اللغة الإنجليزية
    {
        id: "english-track",
        categoryKey: "english",
        category: { ar: "اللغة الإنجليزية", en: "English Language" },
        title: {
            ar: "مسار اللغة الإنجليزية (تأسيس، مناهج، ومحادثة)",
            en: "English Track: Phonics, School Curricula & Fluency"
        },
        desc: {
            ar: "من الحروف حتى الطلاقة؛ تأسيس فونكس، مهارات القراءة والكتابة، شرح المناهج المدرسية، والمحادثة بثقة.",
            en: "From alphabet to fluency: Phonics foundation, 4 skills, school curricula (Connect, Oxford, IG), and speaking."
        },
        longDescription: {
            ar: "مسار متكامل لتأسيس وتعليم اللغة الإنجليزية لجميع الأعمار والمستويات. بنبدأ من الصفر لحد ما الطالب يتكلم ويفهم ويكتب ويحل أي امتحان بثقة. نغطي مناهج المدارس الحكومية، اللغات، والإنترناشونال (Connect, Connect Plus, Oxford, Cambridge, American) بالإضافة إلى كورس محادثة وطلاقة شامل.",
            en: "Comprehensive English program covering Phonics, Grammar, the 4 core skills (Listening, Speaking, Reading, Writing), school curricula revision, and daily conversation practice with 1-on-1 certified instructors."
        },
        targetAudience: { ar: "التأسيس من 4 سنوات، طلاب المدارس (ابتدائي/إعدادي/ثانوي/IG)، والكبار", en: "Kids aged 4+, School Students (National/IG/American), & Adults" },
        duration: { ar: "5 مستويات متدرجة", en: "5 Progressive Levels" },
        totalHours: { ar: "8 إلى 20 حصة شهرياً", en: "8 to 20 Sessions / Month" },
        level: { ar: "من الصفر حتى الطلاقة", en: "Zero to Fluent" },
        language: { ar: "English / العربية", en: "English / Arabic" },
        certificate: { ar: "شهادة كفاءة لغوية معتمدة", en: "English Proficiency Certificate" },
        image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=700&q=80",
        introVideoUrl: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4",
        featured: true,
        learningOutcomes: {
            ar: [
                "إتقان أصوات الحروف والدمج الصوتي (Phonics) والقراءة في 3 شهور.",
                "بناء الجمل السليمة وضبط الأزمنة والقواعد النحوية (Grammar).",
                "إتقان المهارات الأربع (الاستماع، التحدث، القراءة، والكتابة).",
                "شرح وتقفيل درجات المناهج الدراسية وحل الشيتات والامتحانات.",
                "كسر حاجز الخوف والتحدث بالإنجليزية بطلاقة وثقة تامة."
            ],
            en: [
                "Master Phonics, letter blends (CVC), and read words in 3 months.",
                "Build grammatically sound sentences and master all tenses.",
                "Develop the 4 core language skills (Listening, Speaking, Reading, Writing).",
                "Excel in school exams (Connect, Connect Plus, Oxford, Cambridge, IG).",
                "Overcome hesitation and speak English fluently with confidence."
            ]
        },
        prerequisites: {
            ar: ["تحديد مستوى مجاني (Listening, Speaking, Reading, Writing)."],
            en: ["Free comprehensive 4-skills assessment test."]
        },
        features: [
            {
                title: { ar: "تأسيس ومناهج ومحادثة", en: "Curricula & Conversation" },
                desc: { ar: "تغطية كاملة للمقررات المدرسية مع كسر حاجز الحديث.", en: "Full coverage of school coursework alongside active speaking." }
            },
            {
                title: { ar: "حصص تفاعلية فردية 100%", en: "100% 1-on-1 Interactive" },
                desc: { ar: "ألعاب وقصص للأطفال، وشيتات وامتحانات للطلاب، ومحادثة للكبار.", en: "Tailored activities for kids, exams for youth, speaking for adults." }
            }
        ],
        curriculum: [
            {
                unitNumber: 1,
                title: { ar: "المستوى 1 و 2: التأسيس Phonics والجرامر الأساسي", en: "Levels 1 & 2: Phonics & Basic Grammar" },
                desc: { ar: "أصوات الحروف، دمج الأصوات، والضمائر والأزمنة البسيطة.", en: "Letter sounds, CVC blending, sight words, pronouns, and verbs." },
                lessons: [
                    { title: { ar: "فونكس: أصوات الحروف والدمج CVC و Sight Words", en: "Phonics: Letter Sounds & CVC Blending" }, duration: { ar: "45 دقيقة", en: "45 Mins" }, type: "live" },
                    { title: { ar: "الجرامر الأساسي وتكوين جملة إنجليزية صحيحة", en: "Basic Grammar & Sentence Structure" }, duration: { ar: "45 دقيقة", en: "45 Mins" }, type: "live" }
                ]
            },
            {
                unitNumber: 2,
                title: { ar: "المستوى 3 و 4 و 5: المهارات الأربع والمناهج والطلاقة", en: "Levels 3, 4 & 5: Core Skills, Curricula & Fluency" },
                desc: { ar: "تغطية المناهج الدراسية، كتابة البراجراف، والمحادثة اليومية.", en: "School curricula, essay writing, and daily spoken fluency." },
                lessons: [
                    { title: { ar: "تدريبات المناهج المدرسية وحل الشيتات والامتحانات", en: "School Curriculum Drills & Exam Reviews" }, duration: { ar: "45 دقيقة", en: "45 Mins" }, type: "live" },
                    { title: { ar: "المحادثة والطلاقة والتعبير الشفهي بثقة", en: "Conversational Fluency & Speaking Practice" }, duration: { ar: "45 دقيقة", en: "45 Mins" }, type: "live" }
                ]
            }
        ]
    },

    // 5- مسار تدريس جميع المواد الدراسية
    {
        id: "school-subjects-track",
        categoryKey: "school-subjects",
        category: { ar: "المواد الدراسية", en: "School Subjects" },
        title: {
            ar: "مسار تدريس جميع المواد الدراسية لجميع المراحل",
            en: "All School Subjects & Tutoring Track"
        },
        desc: {
            ar: "دروس تقوية وتأسيس ومتابعة في جميع المواد: عربي، إنجليزي، ماث، ساينس، ودراسات مع نخبة المعلمين.",
            en: "Private tutoring across all school subjects: Math, Science, Arabic, English & Social Studies."
        },
        longDescription: {
            ar: "نقدم دروساً متكاملة في جميع المواد الدراسية لجميع المراحل التعليمية مع نخبة من المعلمين المتخصصين. نركز على تبسيط المناهج، تقوية نقاط الضعف، وبناء أساس قوي يساعد الطالب على التفوق وتحقيق أعلى الدرجات. بنشرح خطوة بخطوة، بنتابع الواجبات، وبنحل امتحانات دورية، لهدف واضح: طالب فاهم مش حافظ وبس.",
            en: "Comprehensive tutoring covering all curricula worldwide: Mathematics, Science, Arabic Language, English, and Social Studies. Tailored 1-on-1 plans focused on deep comprehension, homework follow-up, and top exam grades."
        },
        targetAudience: { ar: "طلاب جميع المراحل (ابتدائي، إعدادي، ثانوي) بمختلف المناهج", en: "Primary, Middle & High School Students Worldwide" },
        duration: { ar: "مستمر على مدار العام الدراسي", en: "Full Academic Year" },
        totalHours: { ar: "حسب الخطة والمواد المطلوبة", en: "Customized to Selected Subjects" },
        level: { ar: "تأسيس + مناهج + مراجعات نهائية", en: "Remedial, Core & Exam Prep" },
        language: { ar: "العربية / اللغات (English)", en: "Arabic / English (National & International)" },
        certificate: { ar: "تقارير أسبوعية وشهادات تفوق", en: "Progress Reports & Excellence Certificates" },
        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=700&q=80",
        introVideoUrl: "https://vjs.zencdn.net/v/oceans.mp4",
        featured: true,
        learningOutcomes: {
            ar: [
                "فهم واستيعاب الدروس والمفاهيم العلمية بأسلوب مبسط بدون تعقيد.",
                "تقوية نقاط الضعف التراكمية في المواد الأساسية (الماث، العربي، الساينس).",
                "المتابعة اليومية والأسبوعية للواجبات والمهام المدرسية.",
                "حل النماذج الامتحانية والتدريب على نمط الأسئلة النهائية.",
                "تحقيق أعلى الدرجات والتفوق الدراسي المستمر."
            ],
            en: [
                "Understand complex concepts through simplified explanations.",
                "Strengthen foundation gaps in core subjects (Math, Science, Languages).",
                "Consistent weekly assistance with homework and school projects.",
                "Practice past exam papers and score-boosting techniques.",
                "Achieve top academic performance and continuous confidence."
            ]
        },
        prerequisites: {
            ar: ["تحديد المنهج والمرحلة الدراسية والمواد المراد دراستها."],
            en: ["Specifying grade level, curriculum, and targeted subjects."]
        },
        features: [
            {
                title: { ar: "خطط فردية ومتابعة أسبوعية", en: "Individual Plans & Weekly Follow-up" },
                desc: { ar: "خطة مخصصة لكل طالب مع تقارير تفصيلية لولي الأمر.", en: "Customized schedule with weekly progress reports for parents." }
            },
            {
                title: { ar: "عروض خاصة للأخوة", en: "Sibling Discounts" },
                desc: { ar: "باقات وأسعار مناسبة مع خصومات خاصة للعائلات والأخوة.", en: "Affordable family packages with sibling discounts." }
            }
        ],
        curriculum: [
            {
                unitNumber: 1,
                title: { ar: "شرح المناهج الدراسية والتأسيس", en: "Curriculum Explanation & Foundation" },
                desc: { ar: "تغطية موضوعات المواد وشرح القوانين والمفاهيم خطوة بخطوة.", en: "In-depth teaching of subject chapters and core concepts." },
                lessons: [
                    { title: { ar: "شرح الدروس والتدريب التفاعلي على المسائل", en: "Interactive Lesson Explanation & Practice" }, duration: { ar: "60 دقيقة", en: "60 Mins" }, type: "live" },
                    { title: { ar: "متابعة الواجبات المدرسية وحل تدريبات الدروس", en: "Homework Review & Exercises" }, duration: { ar: "60 دقيقة", en: "60 Mins" }, type: "live" }
                ]
            },
            {
                unitNumber: 2,
                title: { ar: "بنك الأسئلة والمراجعات الامتحانية", en: "Question Banks & Exam Revisions" },
                desc: { ar: "حل امتحانات السنوات السابقة والتركيز على الأسئلة المتوقعة.", en: "Past papers drills, mock exams, and revision sheets." },
                lessons: [
                    { title: { ar: "حل الشيتات والاختبارات الدورية", en: "Worksheet Drills & Periodic Tests" }, duration: { ar: "60 دقيقة", en: "60 Mins" }, type: "live" },
                    { title: { ar: "المراجعة النهائية ليلة الامتحان وتوقعات الأسئلة", en: "Final Exam Preparation Sittings" }, duration: { ar: "60 دقيقة", en: "60 Mins" }, type: "exam" }
                ]
            }
        ]
    },

    // 6- مسار الإجازات القرآنية
    {
        id: "ijazah-track",
        categoryKey: "ijazah",
        category: { ar: "الإجازات القرآنية", en: "Quranic Ijazah" },
        title: {
            ar: "مسار الإجازات القرآنية بالسند المتصل إلى رسول الله ﷺ",
            en: "Quranic Ijazah with Continuous Sanad to the Prophet ﷺ"
        },
        desc: {
            ar: "خذ سندك المتصل في رواية حفص عن عاصم مع نخبة المشايخ المجازين وخريجي الأزهر الشريف.",
            en: "Attain your connected chain (Sanad) in Hafs 'an 'Asim under Al-Azhar certified scholars."
        },
        longDescription: {
            ar: "مسار متخصص لمن أراد إتقان التلاوة وأخذ إجازة بسند متصل في رواية حفص عن عاصم. مع معلمين ومعلمات مجازين وخريجي الأزهر الشريف، بنمشي معاك خطوة بخطوة حتى تستحق السند. نوفر إجازة تلاوة (قراءة من المصحف مدتها شهر)، إجازة حفظ (ختمة مراجعة بسند من شهر إلى 3 شهور)، وإجازة تصحيح تلاوة (شهرين مع التركيز على المخارج والصفات).",
            en: "Specialized path for memorizers and reciters to achieve an authentic continuous chain of transmission (Sanad) to Prophet Muhammad ﷺ in Hafs 'an 'Asim. 1-on-1 private sessions reciting the full Quran with full rules and Matn study."
        },
        targetAudience: { ar: "الخاتمون لكتاب الله والقراء الراغبون في السند", en: "Quran Huffaz & Advanced Reciters" },
        duration: { ar: "من شهر إلى 3 أشهر (حسب نوع الإجازة ومقدرة الطالب)", en: "1 to 3 Months (Based on chosen track)" },
        totalHours: { ar: "ختمة قرآنية كاملة", en: "Complete Quran Recitation Sittings" },
        level: { ar: "متقدم (خاتم للقرآن أو متقن للتلاوة)", en: "Advanced / Memorizer" },
        language: { ar: "العربية", en: "Arabic" },
        certificate: { ar: "إجازة وسند متصل معتمد مكتوب باسم الشيخ المجيز", en: "Authenticated Written Sanad Chain Certificate" },
        image: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=700&q=80",
        introVideoUrl: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4",
        featured: true,
        learningOutcomes: {
            ar: [
                "الحصول على سند متصل ومكتوب إلى رسول الله ﷺ برواية حفص عن عاصم.",
                "ختم القرآن الكريم كاملاً غيباً أو نظراً بأعلى درجات الإتقان والضبط.",
                "دراسة وفهم وضبط المتون التجويدية المعتمدة (تحفة الأطفال والجزرية).",
                "التأهل لنقل السند والإقراء ومنح الإجازات للأجيال القادمة.",
                "التمكن من دقائق أحكام التلاوة والوقف والابتداء ورسم المصحف."
            ],
            en: [
                "Obtain a written, authenticated Sanad chain connected to the Prophet ﷺ.",
                "Recite the complete Quran by heart or looking with pristine precision.",
                "Master classical Tajweed texts (Tuhfat Al-Atfal & Al-Jazariyyah).",
                "Become officially qualified to teach and grant Ijazah to others.",
                "Deepen expertise in nuanced Tajweed rules, Waqf, and Quranic script."
            ]
        },
        prerequisites: {
            ar: [
                "إتقان التلاوة وحفظ القدر المطلوب للإجازة.",
                "تحديد مستوى + اختبار قبول مجاني لمعرفة مدى الجاهزية.",
                "الالتزام الكامل بالجدية والمواعيد."
            ],
            en: [
                "Fluent recitation and required Quranic memorization.",
                "Free level assessment and acceptance recitation test.",
                "Strict commitment to attendance and preparation."
            ]
        },
        features: [
            {
                title: { ar: "سند متصل معتمد من مشايخ الأزهر", en: "Authentic Al-Azhar Sanad" },
                desc: { ar: "مشايخ مجازون بأعلى الأسانيد الصحيحة المتصلة.", en: "Scholars holding verified authentic continuous chains." }
            },
            {
                title: { ar: "فصل تام بين الرجال والنساء", en: "Male & Female Separation" },
                desc: { ar: "مشايخ للرجال ومعلمات مجازات للنساء التزاماً بالضوابط الشرعية.", en: "Male scholars for men and certified female scholars for women." }
            }
        ],
        curriculum: [
            {
                unitNumber: 1,
                title: { ar: "شرح المتون واختبار القبول", en: "Matn Study & Foundation Test" },
                desc: { ar: "دراسة تحفة الأطفال والجزرية وضبط الأصول والرواية.", en: "Review of Tuhfah and Jazariyyah before starting the recitation." },
                lessons: [
                    { title: { ar: "شرح متني تحفة الأطفال والجزرية نظرياً وعملياً", en: "Theoretical & Practical Study of Tajweed Matns" }, duration: { ar: "60 دقيقة", en: "60 Mins" }, type: "live" },
                    { title: { ar: "جلسة اختبار القبول وضبط الرواية والأصول", en: "Acceptance Audition & Usul Verification" }, duration: { ar: "60 دقيقة", en: "60 Mins" }, type: "exam" }
                ]
            },
            {
                unitNumber: 2,
                title: { ar: "جلسات الختمة الكاملة ومنح السند", en: "Full Khatmah Sessions & Sanad Award" },
                desc: { ar: "قراءة المصحف كاملاً من الفاتحة إلى الناس ومنح الإجازة.", en: "Reciting from Al-Fatihah to An-Nas leading to the Sanad award." },
                lessons: [
                    { title: { ar: "جلسات الإقراء الفردية المباشرة (ختمة كاملة)", en: "1-on-1 Full Quran Recitation Sittings" }, duration: { ar: "60-90 دقيقة", en: "60-90 Mins" }, type: "live" },
                    { title: { ar: "مجلس الختم ومنح الإجازة بالسند المتصل", en: "Final Khatm Assembly & Sanad Award" }, duration: { ar: "60 دقيقة", en: "60 Mins" }, type: "live" }
                ]
            }
        ]
    }
];

export const featuredCourses = allCoursesData.filter((c) => c.featured);