"use client";

import { useState, useEffect, useRef, useSyncExternalStore } from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { motion } from "framer-motion";
import Cookies from "js-cookie";
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
  LogIn,
  LogOut,
  User,
  ChevronDown,
  Loader2,
} from "lucide-react";
import styles from "./Header.module.scss";
import {
  TOKEN_COOKIE_KEY,
  subscribeToAuth,
  getAuthSnapshot,
  getAuthServerSnapshot,
  notifyAuthChange,
} from "@/features/Auth/AuthStore";

type ProfileData = {
  name: string;
  image: string | null;
};

export default function Header() {
  const t = useTranslations("Header");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [profile, setProfile] = useState<ProfileData | null>(null);

  const profileMenuRef = useRef<HTMLDivElement>(null);

  const isLoggedIn = useSyncExternalStore(
    subscribeToAuth,
    getAuthSnapshot,
    getAuthServerSnapshot,
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
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

  useEffect(() => {
    if (!isLoggedIn) return;

    let cancelled = false;

    const fetchProfile = async () => {
      try {
        const base = process.env.NEXT_PUBLIC_API_BASE_URL;
        const token = Cookies.get(TOKEN_COOKIE_KEY);

        const res = await fetch(`${base}website/profile`, {
          headers: token ? { Authorization: `Bearer ${token}` } : undefined,
        });

        const json = await res.json().catch(() => null);

        if (!cancelled && res.ok && json?.status === "Success" && json?.data) {
          setProfile({
            name: json.data.name,
            image: json.data.image ?? null,
          });
        }
      } catch {
        // تجاهل فشل جلب البروفايل — هيفضل الزرار شغال بالـ fallback icon
      }
    };

    fetchProfile();

    return () => {
      cancelled = true;
    };
  }, [isLoggedIn]);

  const displayedProfile = isLoggedIn ? profile : null;

 
  useEffect(() => {
    if (!isProfileMenuOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (
        profileMenuRef.current &&
        !profileMenuRef.current.contains(e.target as Node)
      ) {
        setIsProfileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isProfileMenuOpen]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleLogout = async () => {
    setIsLoggingOut(true);
    setIsProfileMenuOpen(false);
    try {
      const base = process.env.NEXT_PUBLIC_API_BASE_URL;
      const token = Cookies.get(TOKEN_COOKIE_KEY);

      await fetch(`${base}website/logout`, {
        method: "POST",
        headers: token ? { Authorization: `Bearer ${token}` } : undefined,
      });
    } catch {
      // نتجاهل فشل النداء نفسه — المهم إن الجلسة تتقفل محليًا في كل الحالات
    } finally {
      Cookies.remove(TOKEN_COOKIE_KEY);
      notifyAuthChange();
      setIsLoggingOut(false);
      handleClose();
      router.push("/");
      router.refresh();
    }
  };

  const navLinks = [
    { href: "/", label: t("home"), icon: Home },
    { href: "/about", label: t("about"), icon: Info },
    { href: "/courses", label: t("courses"), icon: BookOpen },
    { href: "/packages", label: t("packages"), icon: Layers },
    { href: "/teachers", label: t("teachers"), icon: Users },
    { href: "/blog", label: t("blog"), icon: FileText },
    { href: "/contact", label: t("contact"), icon: Phone },
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
                    : pathname === link.href ||
                      pathname.startsWith(`${link.href}/`);

                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`${styles.navLink} ${
                        isActive ? styles.active : ""
                      }`}
                    >
                      {link.label}
                      {isActive && (
                        <motion.span
                          layoutId="navPill"
                          className={styles.activePill}
                          transition={{
                            type: "spring",
                            stiffness: 350,
                            damping: 28,
                          }}
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

            {isLoggedIn ? (
              <div className={styles.profileMenu} ref={profileMenuRef}>
                <button
                  onClick={() => setIsProfileMenuOpen((prev) => !prev)}
                  className={styles.profileTrigger}
                  aria-haspopup="menu"
                  aria-expanded={isProfileMenuOpen}
                >
                  {displayedProfile?.image ? (
                    <Image
                      src={displayedProfile.image}
                      alt={displayedProfile.name || "Profile"}
                      width={34}
                      height={34}
                      className={styles.profileAvatar}
                    />
                  ) : (
                    <span className={styles.profileAvatarFallback}>
                      <User size={16} />
                    </span>
                  )}
                  <ChevronDown
                    size={14}
                    className={`${styles.chevron} ${
                      isProfileMenuOpen ? styles.chevronOpen : ""
                    }`}
                  />
                </button>

                {isProfileMenuOpen && (
                  <div className={styles.profileDropdown} role="menu">
                    <Link
                      href="/profile"
                      onClick={() => setIsProfileMenuOpen(false)}
                      className={styles.profileDropdownItem}
                      role="menuitem"
                    >
                      <User size={16} />
                      <span>{t("profile")}</span>
                    </Link>
                    <button
                      onClick={handleLogout}
                      disabled={isLoggingOut}
                      className={`${styles.profileDropdownItem} ${styles.profileDropdownDanger}`}
                      role="menuitem"
                    >
                      {isLoggingOut ? (
                        <Loader2 size={16} className={styles.spinnerIcon} />
                      ) : (
                        <LogOut size={16} />
                      )}
                      <span>
                        {isLoggingOut ? t("loggingOut") : t("logout")}
                      </span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                href="/login"
                className={`${styles.actionBtn} ${styles.loginBtn}`}
              >
                <LogIn size={17} />
                <span>{t("login")}</span>
              </Link>
            )}

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

      {/* Backdrop بتقنية CSS Transitions */}
      <div
        className={`${styles.backdrop} ${isOpen ? styles.backdropOpen : ""}`}
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Mobile Drawer بتقنية CSS Transforms المباشرة على كارت الشاشة */}
      <aside
        className={`${styles.mobileDrawer} ${isOpen ? styles.drawerOpen : ""}`}
        aria-hidden={!isOpen}
      >
        <div className={styles.drawerHeader}>
          <Image
            src="/logo.png"
            alt="Nour Academy"
            width={62}
            height={62}
            className={styles.drawerLogo}
          />
          <button
            className={styles.closeBtn}
            onClick={handleClose}
            aria-label="Close menu"
          >
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
                  : pathname === link.href ||
                    pathname.startsWith(`${link.href}/`);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={handleClose}
                  className={`${styles.appMenuItem} ${
                    isActive ? styles.activeItem : ""
                  }`}
                >
                  <div className={styles.itemIcon}>
                    <Icon size={16} />
                  </div>
                  <span className={styles.itemLabel}>{link.label}</span>
                </Link>
              );
            })}

            {isLoggedIn && (
              <Link
                href="/profile"
                onClick={handleClose}
                className={`${styles.appMenuItem} ${
                  pathname === "/profile" ? styles.activeItem : ""
                }`}
              >
                <div className={styles.itemIcon}>
                  <User size={16} />
                </div>
                <span className={styles.itemLabel}>{t("profile")}</span>
              </Link>
            )}
          </nav>
        </div>

        <div className={styles.drawerFooter}>
          <button onClick={toggleLanguage} className={styles.drawerActionBtn}>
            <Globe size={16} />
            <span>{t("switchLang")}</span>
          </button>

          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              disabled={isLoggingOut}
              className={`${styles.drawerActionBtn} ${styles.drawerLoginBtn}`}
            >
              {isLoggingOut ? (
                <Loader2 size={16} className={styles.spinnerIcon} />
              ) : (
                <LogOut size={16} />
              )}
              <span>{isLoggingOut ? t("loggingOut") : t("logout")}</span>
            </button>
          ) : (
            <Link
              href="/login"
              onClick={handleClose}
              className={`${styles.drawerActionBtn} ${styles.drawerLoginBtn}`}
            >
              <LogIn size={16} />
              <span>{t("login")}</span>
            </Link>
          )}
        </div>
      </aside>
    </header>
  );
}
