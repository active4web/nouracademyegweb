import Image from "next/image";
import styles from "./loading.module.scss";

export default function Loading() {
    return (
        <div className={styles.loadingWrapper}>
            <div className={styles.loadingCard}>
                <div className={styles.logoContainer}>
                    <Image
                        src="/logo.png"
                        alt="Nour Academy"
                        width={75}
                        height={75}
                        priority
                        className={styles.logoImg}
                    />
                    <div className={styles.spinnerRing} />
                </div>
            </div>
        </div>
    );
}