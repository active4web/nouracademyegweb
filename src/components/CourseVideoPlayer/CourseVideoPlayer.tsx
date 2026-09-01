"use client";

import { useState, type ComponentType } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Play } from "lucide-react";
import styles from "./CourseVideoPlayer.module.scss";

// تعريف الـ Props لتجنب مشاكل TypeScript مع dynamic import
interface ReactPlayerCustomProps {
    url: string;
    width?: string | number;
    height?: string | number;
    playing?: boolean;
    controls?: boolean;
    className?: string;
}

const ReactPlayer = dynamic(
    () => import("react-player"),
    { ssr: false }
) as ComponentType<ReactPlayerCustomProps>;

interface CourseVideoPlayerProps {
    videoUrl: string;
    posterImage: string;
    title: string;
    badgeText?: string;
}

export default function CourseVideoPlayer({
    videoUrl,
    posterImage,
    title,
    badgeText = "مقدمة الدورة التعريفية"
}: CourseVideoPlayerProps) {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <div className={styles.videoPlayerWrapper}>
            {!isPlaying ? (
                <div
                    className={styles.posterWrapper}
                    onClick={() => setIsPlaying(true)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                            setIsPlaying(true);
                        }
                    }}
                    role="button"
                    tabIndex={0}
                    aria-label={`تشغيل فيديو ${title}`}
                >
                    <Image
                        src={posterImage}
                        alt={title}
                        fill
                        priority
                        sizes="(max-width: 1024px) 100vw, 480px"
                        className={styles.posterImg}
                    />
                    <div className={styles.overlay} />
                    <button
                        type="button"
                        className={styles.playButton}
                        aria-label="تشغيل الفيديو"
                    >
                        <div className={styles.playPulse} />
                        <Play size={24} fill="currentColor" />
                    </button>
                    {badgeText && <span className={styles.videoBadge}>{badgeText}</span>}
                </div>
            ) : (
                <div className={styles.playerContainer}>
                    <ReactPlayer
                        url={videoUrl}
                        width="100%"
                        height="100%"
                        playing={true}
                        controls={true}
                        className={styles.player}
                    />
                </div>
            )}
        </div>
    );
}