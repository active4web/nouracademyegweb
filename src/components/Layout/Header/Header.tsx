"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
    Menu,
    X,
    Globe,
    Home,
    BookOpen,
    Users,
    Layers,
    Phone,
    Info,
    FileText,
    LogIn
} from "lucide-react";
import styles from "./Header.module.scss";

export default function Header() {
    const t = useTranslations("Header");
    const locale = useLocale();
    const pathname = usePathname();
    const router = useRouter();

    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    const handleClose = () => {
        setIsOpen(false);
    };

    const navLinks = [
        { href: "/", label: t("home"), icon: Home },
        { href: "/about", label: t("about"), icon: Info },
        { href: "/courses", label: t("courses"), icon: BookOpen },
        { href: "/packages", label: t("packages"), icon: Layers },
        { href: "/teachers", label: t("teachers"), icon: Users },
        { href: "/blog", label: t("blog"), icon: FileText },
        { href: "/contact", label: t("contact"), icon: Phone }
    ];

    const toggleLanguage = () => {
        const nextLocale = locale === "ar" ? "en" : "ar";
        router.replace(pathname, { locale: nextLocale });
    };

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
            <div className="container">
                <div className={styles.navbar}>
                    <Link href="/" className={styles.logo}>
                        <Image
                            src="/logo.png"
                            alt="Nour Academy"
                            width={82}
                            height={82}
                            priority
                            className={styles.logoImg}
                        />
                    </Link>

                    <nav className={styles.desktopNav}>
                        <ul className={styles.navList}>
                            {navLinks.map((link) => {
                                const isActive =
                                    link.href === "/"
                                        ? pathname === "/"
                                        : pathname === link.href || pathname.startsWith(`${link.href}/`);

                                return (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className={`${styles.navLink} ${isActive ? styles.active : ""
                                                }`}
                                        >
                                            {link.label}
                                            {isActive && (
                                                <motion.span
                                                    layoutId="navPill"
                                                    className={styles.activePill}
                                                    transition={{ type: "spring", stiffness: 350, damping: 28 }}
                                                />
                                            )}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>

                    <div className={styles.actions}>
                        <button
                            onClick={toggleLanguage}
                            className={styles.actionBtn}
                            aria-label="Change Language"
                        >
                            <Globe size={17} />
                            <span>{t("switchLang")}</span>
                        </button>

                        <Link href="/login" className={`${styles.actionBtn} ${styles.loginBtn}`}>
                            <LogIn size={17} />
                            <span>{t("login")}</span>
                        </Link>

                        <button
                            className={styles.menuToggle}
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label={isOpen ? t("close") : t("menu")}
                        >
                            {isOpen ? <X size={22} /> : <Menu size={22} />}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            className={styles.backdrop}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            onClick={handleClose}
                        />

                        <motion.div
                            className={styles.mobileDrawer}
                            initial={{ x: locale === "ar" ? "100%" : "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: locale === "ar" ? "100%" : "-100%" }}
                            transition={{ type: "tween", duration: 0.25, ease: "easeInOut" }}
                        >
                            <div className={styles.drawerHeader}>
                                <Image
                                    src="/logo.png"
                                    alt="Nour Academy"
                                    width={62}
                                    height={62}
                                    className={styles.drawerLogo}
                                />
                                <button className={styles.closeBtn} onClick={handleClose}>
                                    <X size={18} />
                                </button>
                            </div>

                            <div className={styles.drawerContent}>
                                <nav className={styles.appMenu}>
                                    {navLinks.map((link) => {
                                        const Icon = link.icon;
                                        const isActive =
                                            link.href === "/"
                                                ? pathname === "/"
                                                : pathname === link.href || pathname.startsWith(`${link.href}/`);

                                        return (
                                            <Link
                                                key={link.href}
                                                href={link.href}
                                                onClick={handleClose}
                                                className={`${styles.appMenuItem} ${isActive ? styles.activeItem : ""
                                                    }`}
                                            >
                                                <div className={styles.itemIcon}>
                                                    <Icon size={16} />
                                                </div>
                                                <span className={styles.itemLabel}>{link.label}</span>
                                            </Link>
                                        );
                                    })}
                                </nav>
                            </div>

                            <div className={styles.drawerFooter}>
                                <button onClick={toggleLanguage} className={styles.drawerActionBtn}>
                                    <Globe size={16} />
                                    <span>{t("switchLang")}</span>
                                </button>

                                <Link
                                    href="/login"
                                    onClick={handleClose}
                                    className={`${styles.drawerActionBtn} ${styles.drawerLoginBtn}`}
                                >
                                    <LogIn size={16} />
                                    <span>{t("login")}</span>
                                </Link>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
}