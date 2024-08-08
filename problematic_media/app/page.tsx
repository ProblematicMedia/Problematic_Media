"use client"

import Image from "next/image";
import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
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
  const [tl, setTl] = useState<GSAPTimeline>();
  const [tlStrongPoints, setTlStrongPoints] = useState<GSAPTimeline>()
  const home = useRef(null);
  const about = useRef(null);
  const services = useRef(null);
  const container = useRef(null);
  const section = useRef(null);
  const sectionTwo = useRef(null);
  const points = useRef(null);
  const request = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const tl = gsap.timeline({});

    setTl(tl);

    tl.to(about.current, { xPercent: -100, delay: 0.1})

    ScrollTrigger.create({
      animation: tl,
      trigger: section.current,
      pin: true,
      // pinType: "fixed",
      // anticipatePin: 1,
      scrub: 1,
      start: "top top",
      end: `bottom+=${tl.duration() * 3000} bottom`
    })

    const tlStrongPoints: GSAPTimeline = gsap.timeline({});
    setTlStrongPoints(tlStrongPoints);

    tlStrongPoints.to(points.current, {
      yPercent: -110,
      delay: 2,
      scrollTrigger: {
        trigger: sectionTwo.current,
        start: "top top",
        end: "bottom 70%",
        // pin: true,
        scrub: 1
      }
    }, "+=10")
  });

  return (
    <main  className={styles.main}>
      <div  ref={home}>
        {/* <Header /> */}
        <MainSection 
        
        aboutRef={about}
        servicesRef={services}
        strongPointsRef={points}
        contactUsRef={request}
        section={section}
      />
     </div>
    <div ref={section} className={styles.section}>
      <section ref={about} className={styles.about}>
        <AboutSection />
      </section>
      <section ref={services} className={styles.services}>
        <ServicesSection timeline={tl}  />
      </section>
    </div>
    <div ref={sectionTwo} className={styles.sectionTwo}>
      <div ref={points} className={styles.points}><StrongPointsSection timeline={tlStrongPoints} /></div>
      <div className={styles.request}><RequestSection /></div>
    </div>
      <div ref={request}><Footer  /></div>
    </main>
  );
}
