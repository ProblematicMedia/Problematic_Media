import Image from "next/image";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { gsap } from "gsap";

import logo from "../../../public/icons/Logo.svg"
import styles from "./header.module.css";

interface HeaderPropsType {
  aboutRef: React.RefObject<HTMLDivElement>;
  servicesRef: React.RefObject<HTMLDivElement>;
  strongPointsRef: React.RefObject<HTMLDivElement>;
  contactUsRef: React.RefObject<HTMLDivElement>;
  section: React.RefObject<HTMLDivElement>;
}

gsap.registerPlugin(ScrollToPlugin);

export default function Header({
    aboutRef,
    servicesRef,
    strongPointsRef,
    contactUsRef,
    section
} : HeaderPropsType) {
  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
    if (sectionRef.current) {
      gsap.to(window, {
        scrollTo: sectionRef.current,
        duration: 1,
        ease: 'power2.out'
    });
    }
};

const scrollToSectionTwo = (sectionRef: React.RefObject<HTMLDivElement>) => {

  if(sectionRef.current) {
    let y = Math.round(sectionRef.current.scrollHeight + (sectionRef.current.scrollWidth / 2));
      console.log("y", y)
      gsap.to(window, {
        scrollTo: {y: y},
        duration: 1,
      });
  }
  
};

  return (
    <div className={styles.header}>
        <Image
          src={logo}
          alt="Logo"
          width={341}
          height={155}
          />
      <div className={styles.menu}>
        <span onClick={() => scrollToSection(aboutRef)}>About Us</span>
        <span  onClick={() => scrollToSectionTwo(servicesRef)}>Our Services</span>
        <span onClick={() => scrollToSection(contactUsRef)}>Contact Us</span>
      </div>
    </div>
  );
}