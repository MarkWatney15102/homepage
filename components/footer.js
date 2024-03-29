import styles from '../styles/Footer.module.css'
import Link from "next/link";

function Footer () {
    return <>
        <div className={"footer"}>
            <Link href="/impressum" className={styles.footerLink}>Impressum</Link>
        </div>
    </>;
}

export default Footer
