import Image from "next/image";

import logo from "../../../public/icons/Logo.svg"
import styles from "./footer.module.css";

const Footer = () => {
    return (
        <div className={styles.footer}>
        <Image
      src={logo}
      alt="Logo"
      width={200}
    />


     
    </div>
    )
}

export default Footer;
