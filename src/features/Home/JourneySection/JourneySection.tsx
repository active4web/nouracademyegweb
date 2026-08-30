"use client";

import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import {
    ClipboardCheck,
    UserCheck2,
    CalendarCheck2,
    GraduationCap,
    ArrowRight
} from "lucide-react";
import styles from "./JourneySection.module.scss";

interface JourneyStep {
    id: string;
    stepNumber: number;
    icon: typeof ClipboardCheck;
    title: { ar: string; en: string };
    desc: { ar: string; en: string };
}

const journeySteps: JourneyStep[] = [
    {
        id: "step-1",
        stepNumber: 1,
        icon: ClipboardCheck,
        title: {
            ar: "تسجيل طلب الحصة التجريبية المجانية",
            en: "Register for Your Free Trial"
        },
        desc: {
            ar: "املأ نموذج التسجيل السريع باختيار المسار المناسب لك أو لأطفالك وتحديد الوقت المفضل.",
            en: "Fill out a brief registration form selecting your preferred course track and convenient timing."
        }
    },
    {
        id: "step-2",
        stepNumber: 2,
        icon: UserCheck2,
        title: {
            ar: "جلسة التقييم وتحديد المستوى والمعلم",
            en: "Live Assessment & Tutor Matching"
        },
        desc: {
            ar: "جلسة فردية مباشرة 1-on-1 لتحديد المستوى الدراسي بدقة واختيار المعلم أو المعلمة الأنسب.",
            en: "A 1-on-1 direct session to evaluate current level and assign the ideal certified scholar."
        }
    },
    {
        id: "step-3",
        stepNumber: 3,
        icon: CalendarCheck2,
        title: {
            ar: "اختيار الخطة الدراسية والمواعيد",
            en: "Choose Plan & Flexible Schedule"
        },
        desc: {
            ar: "تحديد عدد الحصص الأسبوعية المناسبة لجدولك اليومي وتأكيد المواعيد المنتظمة.",
            en: "Select the weekly class frequency tailored to your routine and lock in your regular hours."
        }
    },
    {
        id: "step-4",
        stepNumber: 4,
        icon: GraduationCap,
        title: {
            ar: "بدء الحلقات ومتابعة الإنجاز والتقييم",
            en: "Start Learning & Track Progress"
        },
        desc: {
            ar: "الانطلاق في الحصص التفاعلية واستلام تقارير دورية لمتابعة الحفظ والتجويد خطوة بخطوة.",
            en: "Begin live classes with continuous performance reports and weekly progress updates."
        }
    }
];

export default function JourneySection() {
    const t = useTranslations("Journey");
    const locale = useLocale() as "ar" | "en";

    return (
        <section className={styles.journeySection}>
            <div className="container">
                <div className={styles.headerWrapper}>
                    <div className={styles.sectionBadge}>
                        <span>{t("sectionBadge")}</span>
                    </div>
                    <h2 className={styles.sectionTitle}>{t("sectionTitle")}</h2>
                    <p className={styles.sectionDesc}>{t("sectionDesc")}</p>
                </div>

                <div className={styles.timelineGrid}>
                    {journeySteps.map((step) => {
                        const Icon = step.icon;
                        return (
                            <div
                                key={step.id}
                                className={styles.stepCard}
                            >
                                <div className={styles.nodeWrapper}>
                                    <div className={styles.numberBadge}>{step.stepNumber}</div>
                                    <div className={styles.iconNode}>
                                        <Icon size={22} />
                                    </div>
                                </div>

                                <div className={styles.cardBody}>
                                    <span className={styles.stepCounter}>
                                        {t("stepLabel")} 0{step.stepNumber}
                                    </span>
                                    <h3 className={styles.stepTitle}>
                                        {step.title[locale] || step.title.ar}
                                    </h3>
                                    <p className={styles.stepDesc}>
                                        {step.desc[locale] || step.desc.ar}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className={styles.actionWrapper}>
                    <Link href="/free-trial" className={styles.primaryCta}>
                        <span>{t("startTrialBtn")}</span>
                        <ArrowRight size={16} className={styles.arrowIcon} />
                    </Link>
                </div>
            </div>
        </section>
    );
}