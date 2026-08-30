"use client";

import { useTranslations, useLocale } from "next-intl";
import {
    GraduationCap,
    Video,
    Route,
    Globe2,
    CheckCircle2,
    Clock
} from "lucide-react";
import styles from "./FeaturesSection.module.scss";

interface FeatureCardData {
    id: string;
    type: "teachers" | "individual" | "curriculum" | "timing";
    badge: { ar: string; en: string };
    title: { ar: string; en: string };
    desc: { ar: string; en: string };
    tags?: { ar: string; en: string }[];
    visualText?: { ar: string; en: string };
    steps?: { ar: string; en: string }[];
}

const featuresData: FeatureCardData[] = [
    {
        id: "teachers",
        type: "teachers",
        badge: { ar: "السند والإتقان", en: "Authenticity" },
        title: { ar: "نخبة من المعلمين والمعلمات المجازين", en: "Certified & Licensed Quran Scholars" },
        desc: {
            ar: "كوادر أزهرية متخصصة ومجازة بالقراءات السبع والعشر، خاضعة لأعلى اختبارات الكفاءة والتمكن التربوي.",
            en: "Al-Azhar certified tutors holding authentic chains of narration (Sanad) in the 10 Qira'at."
        },
        tags: [
            { ar: "إسناد متصل", en: "Connected Sanad" },
            { ar: "معلمون ومعلمات", en: "Male & Female Tutors" },
            { ar: "تزكية واعتماد", en: "Verified Credentials" }
        ]
    },
    {
        id: "individual",
        type: "individual",
        badge: { ar: "تركيز كامل", en: "Focused Learning" },
        title: { ar: "حلقات فردية مباشرة 1-on-1", en: "Live 1-on-1 Personalized Classes" },
        desc: {
            ar: "حصة تفاعلية خاصة بين المعلم والطالب لضبط مخارج الحروف وأحكام التجويد بأعلى دقة.",
            en: "Private live sessions ensuring accurate Tajweed pronunciation and dedicated mentorship."
        },
        visualText: { ar: "جلسة حية مباشرة ومرنة", en: "Live 1-on-1 Interactive Class" }
    },
    {
        id: "curriculum",
        type: "curriculum",
        badge: { ar: "مسارات تعليمية", en: "Curriculum" },
        title: { ar: "مناهج متدرجة لكافة الأعمار", en: "Progressive Learning Pathways" },
        desc: {
            ar: "خطط مخصصة للأطفال، الكبار، والمبتدئين، مع مسار خاص للناطقين بغير اللغة العربية.",
            en: "Customized curriculums for kids, adults, beginners, and non-Arabic speakers."
        },
        steps: [
            { ar: "تأسيس", en: "Foundation" },
            { ar: "تجويد", en: "Tajweed" },
            { ar: "إتقان وإجازة", en: "Ijazah" }
        ]
    },
    {
        id: "timing",
        type: "timing",
        badge: { ar: "مرونة تامة", en: "24/7 Availability" },
        title: { ar: "مواعيد على مدار 24 ساعة", en: "Flexible Round-the-Clock Schedule" },
        desc: {
            ar: "فصول مرنة تناسب جميع المناطق الزمنية حول العالم مع إمكانية إعادة الجدولة بسهولة.",
            en: "Seamless scheduling accommodating all global time zones with simple rescheduling."
        },
        visualText: { ar: "متاح على مدار 24 ساعة لجميع الدول", en: "Available 24/7 for all countries" }
    }
];

export default function FeaturesSection() {
    const t = useTranslations("Features");
    const locale = useLocale() as "ar" | "en";

    return (
        <section className={styles.featuresSection}>
            <div className="container">
                <div className={styles.headerWrapper}>
                    <div className={styles.sectionBadge}>
                        <span>{t("sectionBadge")}</span>
                    </div>
                    <h2 className={styles.sectionTitle}>{t("sectionTitle")}</h2>
                    <p className={styles.sectionDesc}>{t("sectionDesc")}</p>
                </div>

                <div className={styles.bentoGrid}>
                    {featuresData.map((item) => {
                        const isTeachers = item.type === "teachers";
                        const isIndividual = item.type === "individual";
                        const isCurriculum = item.type === "curriculum";
                        const isTiming = item.type === "timing";

                        const cardClass = isTeachers
                            ? styles.teachersCard
                            : isIndividual
                                ? styles.individualCard
                                : isCurriculum
                                    ? styles.curriculumCard
                                    : styles.timingCard;

                        return (
                            <div
                                key={item.id}
                                className={`${styles.bentoCard} ${cardClass}`}
                            >
                                <div className={styles.cardHeader}>
                                    <div className={styles.tagBadge}>
                                        {isTeachers && <GraduationCap size={15} />}
                                        {isIndividual && <Video size={15} />}
                                        {isCurriculum && <Route size={15} />}
                                        {isTiming && <Globe2 size={15} />}
                                        <span>{item.badge[locale] || item.badge.ar}</span>
                                    </div>
                                </div>

                                <div className={styles.cardContent}>
                                    <h3 className={styles.cardTitle}>{item.title[locale] || item.title.ar}</h3>
                                    <p className={styles.cardDesc}>{item.desc[locale] || item.desc.ar}</p>
                                </div>

                                {isTeachers && item.tags && (
                                    <div className={styles.tagsRow}>
                                        {item.tags.map((tag, idx) => (
                                            <span key={idx} className={styles.pillTag}>
                                                <CheckCircle2 size={13} />
                                                {tag[locale] || tag.ar}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                {isIndividual && item.visualText && (
                                    <div className={styles.miniVisual}>
                                        <div className={styles.pulseDot} />
                                        <span>{item.visualText[locale] || item.visualText.ar}</span>
                                    </div>
                                )}

                                {isCurriculum && item.steps && (
                                    <div className={styles.stepTrack}>
                                        {item.steps.map((step, idx) => (
                                            <div key={idx} className={styles.stepGroup}>
                                                <div className={styles.stepItem}>
                                                    <span className={styles.stepNum}>{idx + 1}</span>
                                                    <span>{step[locale] || step.ar}</span>
                                                </div>
                                                {idx < item.steps!.length - 1 && <div className={styles.stepLine} />}
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {isTiming && item.visualText && (
                                    <div className={styles.timeBadge}>
                                        <Clock size={16} />
                                        <span>{item.visualText[locale] || item.visualText.ar}</span>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}