import Image from "next/image";

import logo from "../../../public/icons/Logo.svg"
import styles from "./header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
        <Image
      src={logo}
      alt="Logo"
      width={341}
      height={155}
    />


     
    </div>
  );
}