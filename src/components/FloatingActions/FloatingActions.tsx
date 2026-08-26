"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import styles from "./FloatingActions.module.scss";

export default function FloatingActions() {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <aside className={styles.floatingContainer} aria-label="Floating Shortcuts">
            {/* Scroll to Top Button */}
            <button
                type="button"
                className={`${styles.scrollTopBtn} ${showScrollTop ? styles.visible : ""}`}
                onClick={scrollToTop}
                aria-label="Scroll to top"
            >
                <ChevronUp size={22} strokeWidth={2.5} />
            </button>

            {/* WhatsApp Button */}
            <a
                href="https://wa.me/201000000000"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsappBtn}
                aria-label="Chat on WhatsApp"
            >
                <div className={styles.pulseRing} />
                <svg
                    viewBox="0 0 24 24"
                    width="23"
                    height="23"
                    fill="currentColor"
                    className={styles.whatsappSvg}
                >
                    <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.275-.1-.476-.15-.677.15-.2.301-.777.979-.953 1.18-.175.2-.351.226-.652.075-.3-.15-1.267-.467-2.414-1.489-.893-.796-1.496-1.78-1.672-2.08-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.175.2-.301.301-.502.1-.2.05-.376-.025-.527-.075-.15-.677-1.632-.928-2.235-.245-.588-.494-.508-.677-.518-.175-.008-.376-.01-.577-.01-.2 0-.527.075-.803.376s-1.054 1.03-1.054 2.511c0 1.482 1.079 2.911 1.23 3.112.15.2 2.122 3.24 5.141 4.544.718.31 1.279.495 1.716.634.722.23 1.378.197 1.9.12.581-.087 1.78-.727 2.03-1.43.25-.703.25-1.305.176-1.43-.075-.126-.276-.201-.577-.352z" />
                    <path d="M12.004 0C5.372 0 0 5.372 0 12.004c0 2.115.549 4.103 1.512 5.827L.068 23.473a.855.855 0 0 0 .248.877.854.854 0 0 0 .807.195l5.803-1.408c1.666.908 3.578 1.417 5.61 1.417 6.632 0 12.004-5.372 12.004-12.004C24.54 5.372 19.168 0 12.004 0zm0 22.257c-1.872 0-3.642-.51-5.173-1.401a.857.857 0 0 0-.573-.089l-4.225 1.025 1.053-4.084a.858.858 0 0 0-.074-.632A10.198 10.198 0 0 1 1.75 12.004C1.75 6.35 6.35 1.75 12.004 1.75c5.655 0 10.254 4.6 10.254 10.254 0 5.655-4.599 10.253-10.254 10.253z" />
                </svg>
            </a>
        </aside>
    );
}