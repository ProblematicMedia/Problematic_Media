"use client"

import Image from "next/image";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Header from "./components/Header/header";
import MainSection from "./components/MainSection/mainSection";
import AboutSection from "./components/AboutSection/aboutSection";

import styles from "./page.module.css";
import ServicesSection from "./components/ServicesSection/servicesSection";
import StrongPointsSection from "./components/StrongPointsSection/strongPointsSection";
import RequestSection from "./components/RequestSection/requestSection";
import Footer from "./components/Footer/footer";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const home = useRef<HTMLDivElement>(null);

  return (
    <main  className={styles.main} ref={home}>
     <Header />
      <MainSection />
      <AboutSection />
      <ServicesSection />
      <StrongPointsSection />
      <RequestSection />
      <Footer />
     
    </main>
  );
}
