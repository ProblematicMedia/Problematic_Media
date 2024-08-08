import Image from "next/image";

import logo from "../../../public/icons/Logo.svg"
import linkedIn from "../../../public/icons/linkedIn.svg";
import facebook from "../../../public/icons/facebook.svg";
import instagram from "../../../public/icons/instagram.svg";
import x from "../../../public/icons/x.svg";
import styles from "./footer.module.css";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.wrapper}>
                <Image
                    src={logo}
                    alt="Logo"
                    width={200}
                />
                <div>
                    <div className={styles.email}>admin@problematic.com.au</div>
                    <div className={styles.media}>
                        <a>
                            <Image
                            src={linkedIn}
                            alt="LinkedIn Problematic media"
                            width={25}
                            height={25}
                            />
                        </a>
                        <a>
                    <Image
                        src={facebook}
                        alt="Facebook Problematic media"
                        width={25}
                        height={25}
                    />
                    </a>
                    <a>
                    <Image
                        src={instagram}
                        alt="Instagram Problematic media"
                        width={25}
                        height={25}
                    />
                    </a>
                    <a>
                    <Image
                        src={x}
                        alt="X Problematic media"
                        width={25}
                        height={25}
                    />
                    </a>
                    </div>
                </div>
            </div>
        <div className={styles.copyright}>Copyright © Problematic Media</div>
    </div>
    )
}

export default Footer;
