"use client"

import Image from "next/image";

import React, { useContext, useRef, createContext, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import about from "../../../public/images/about.png"
import styles from "./aboutSection.module.css";




export default function AboutSection() {
  return (
    <section className={styles.about}>
        <div className={styles.container} id="about">
            <div className={styles.title}>Who We Are</div>
            <div className={styles.aboutIntro}>
            <Image
                src={about}
                alt="About Problematic Media"
                />
            <p>
                At Problematic Media, we specialise in turning your challenges into innovative solutions. Our comprehensive range of services includes web development, website and app integration, video content production, photography and videography, and podcast production. We are dedicated to delivering exceptional results that enhance your digital presence and propel your business forward.
                Our experienced team blends creativity, technical expertise, and industry knowledge to create bespoke solutions tailored to your specific needs. Whether you're looking to build a new website, integrate complex systems, produce engaging multimedia content, or launch a podcast, we are here to bring your vision to life.
            </p>
            </div>
            </div>
    </section>
  );
}