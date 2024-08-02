"use client"

import Image from "next/image";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Header from "./components/Header/header";
import AboutSection from "./components/AboutSection/aboutSection";

import styles from "./page.module.css";
import ServicesSection from "./components/ServicesSection/servicesSection";
import StrongPointsSection from "./components/StrongPointsSection/strongPointsSection";
import RequestSection from "./components/RequestSection/requestSection";
import Footer from "./components/Footer/footer";
import MainSection from "./components/MainSection/mainSection";


import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const home = useRef(null);
  const about = useRef(null);
  const services = useRef(null);
  const container = useRef(null)

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
      gsap.to(about.current, {
      yPercent: -100,

      // background: "green",
      scrollTrigger: {
        trigger: home.current,
        start: "top top",
        end : "bottom+=80%",
        scrub: 1,
        markers: true,
        pin: true,
      }
    })

    const tlTraining = gsap.timeline({ paused: true });

      gsap.to(services.current, {
        xPercent: -100,
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          scrub: 1,
          markers: true,
          pin: true,
        }
    })
  })

  return (
    <main  className={styles.main}>
      <div ref={home}>
        <Header />
        <MainSection />
     </div>
    
      <div  ref={about}><AboutSection /></div>
      <div ref={container}>
        <div  ref={services}><ServicesSection /></div>
     </div>
      
      <StrongPointsSection />
      <RequestSection />
      <Footer />
    </main>
  );
}
