import { useState, useRef , useEffect} from "react";
import styles from "./strongPointsSection.module.css";

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import {Solutions} from "../../IconComponents/Solutions";
import { Team } from "../../IconComponents/Team";
import { Service } from "../../IconComponents/Service";
import { Technology } from "../../IconComponents/Technology";
import { Client } from "../../IconComponents/Client";

const cards = [
  {"title": "Tailored Solutions", "description": "Customised services that meet your specific needs and objectives", "icon": <Solutions styles={styles.puzzle} />},
  {"title": "Experienced Team", "description": "A dedicated team of professionals with expertise across various domains.", "icon": <Team styles={styles.team} />},
  {"title": "End-to-End Service", "description": "Comprehensive support from concept to execution and beyond.", "icon": <Service styles={styles.service} />},
  {"title": "Cutting-Edge Technology", "description": "Utilising the latest technologies and industry best practices.", "icon": <Technology styles={styles.tech} /> },
  {"title": "Customer-Centric Approach", "description": "Focused on delivering value and exceeding client expectations.", "icon": <Client styles={styles.approach} />},
  {"title": "Customer-Centric Approach", "description": "Focused on delivering value and exceeding client expectations.", "icon": <Client styles={styles.approach} />}
]

const StrongPointsSection = ({timeline} : { timeline?: GSAPTimeline }) => {
    const pointsRef = useRef<HTMLDivElement | null>(null);
    // const cardRef = useRef([]);
    const cardRef = useRef<(HTMLDivElement | null)[]>([]);

    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        timeline && timeline.from(cardRef.current, {
            stagger: 0.3,
            opacity: 0,
            yPercent: 100,
            scrollTrigger: {
              trigger:  pointsRef.current,
              start: "top 80%",
            end: "top 10%",
              toggleActions: "play none none reverse",
              scrub: true,
            },
          });
    }, [timeline]);

    return (
    <div className={styles.points} ref={pointsRef}>
        <div className={styles.container}>
            <div className={styles.title}>Our Strong Points</div>
            <div className={styles.cards}>
                {cards.map((card, i) => {
                    return <div className={styles.card} key={i} ref={el => {cardRef.current[i] = el}}>
                            <div className={styles.svg}>{card.icon}</div>
                            <div className={styles.cardTitle}>{card.title}</div>
                            <div>{card.description}</div>
                          </div>
                })}
            </div>
        </div>
    </div>
  );
}

export default StrongPointsSection;