"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Play } from "lucide-react";
import styles from "./CourseVideoPlayer.module.scss";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

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
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <div className={styles.videoPlayerWrapper}>
            {!isPlaying ? (
                <div
                    className={styles.posterWrapper}
                    onClick={() => setIsPlaying(true)}
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
                    {isMounted && (
                        <ReactPlayer
                            url={videoUrl}
                            width="100%"
                            height="100%"
                            playing={isPlaying}
                            controls={true}
                            className={styles.reactPlayer}
                        />
                    )}
                </div>
            )}
        </div>
    );
}