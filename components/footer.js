import styles from '../styles/Footer.module.css'
import Link from "next/link";

function Footer () {
    return <>
        <div className={"footer"}>
            <Link href="/impressum"><a className={styles.footerLink}>Impressum</a></Link>
        </div>
    </>;
}

export default Footer
