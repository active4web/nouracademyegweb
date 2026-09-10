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

function getEmbedInfo(url: string) {
    if (!url) return { type: "unknown", embedUrl: "" };

    const ytMatch = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
    if (ytMatch && ytMatch[1]) {
        return {
            type: "youtube",
            embedUrl: `https://www.youtube.com/embed/${ytMatch[1]}?autoplay=1&rel=0`
        };
    }

    const vimeoMatch = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
    if (vimeoMatch && vimeoMatch[1]) {
        return {
            type: "vimeo",
            embedUrl: `https://player.vimeo.com/video/${vimeoMatch[1]}?autoplay=1`
        };
    }

    const isDirect =
        /\.(mp4|webm|ogg|ogv|mov|m4v)(\?.*)?$/i.test(url) ||
        url.includes("zencdn.net") ||
        url.includes("plyr.io") ||
        url.includes("commondatastorage.googleapis.com");

    if (isDirect) {
        return { type: "direct", embedUrl: url };
    }

    return { type: "other", embedUrl: url };
}

export default function CourseVideoPlayer({
    videoUrl,
    posterImage,
    title,
    badgeText = "مقدمة الدورة التعريفية"
}: CourseVideoPlayerProps) {
    const [isPlaying, setIsPlaying] = useState(false);

    const videoInfo = getEmbedInfo(videoUrl);

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
                    {videoInfo.type === "youtube" || videoInfo.type === "vimeo" ? (
                        <iframe
                            src={videoInfo.embedUrl}
                            title={title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            style={{ width: "100%", height: "100%", border: "none" }}
                        />
                    ) : videoInfo.type === "direct" ? (
                        <video
                            src={videoUrl}
                            poster={posterImage}
                            controls
                            autoPlay
                            playsInline
                            className={styles.player}
                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        >
                            <track kind="captions" />
                            متصفحك لا يدعم تشغيل هذا الفيديو.
                        </video>
                    ) : (
                        <ReactPlayer
                            url={videoUrl}
                            width="100%"
                            height="100%"
                            playing={true}
                            controls={true}
                            className={styles.player}
                        />
                    )}
                </div>
            )}
        </div>
    );
}