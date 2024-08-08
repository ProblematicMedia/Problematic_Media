import { useState, useRef, useEffect } from "react";

import Image from "next/image";
import arrow from "../../../public/icons/arrowInCircle.svg"

import styles from "./servicesSection.module.css";
import { useGSAP } from "@gsap/react";
import { gsap  } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
    {title: "Web Development", description: "We design and develop responsive websites and web applications tailored to meet your business objectives. Our solutions are built with the latest technologies to ensure optimal performance and user experience."},
    {title: "Website and App Integration", description: "Seamlessly integrate your website with various applications and platforms. Our expertise ensures smooth functionality and enhances user engagement across all digital touchpoints."},
    {title: "Video Content Production", description: "Create compelling video content that captures the essence of your brand. From promotional videos to explainer animations, we produce high-quality videos that resonate with your audience."},
    {title: "Photography and Videography Studio", description: "Our in-house studio offers professional photography and videography services. Whether you need product shots, corporate imagery, or event coverage, we provide stunning visuals that elevate your brand."},
    {title: "Podcast Production", description: "Launch and produce engaging podcasts with our expert guidance. We handle everything from recording and editing to publishing and promotion, ensuring your podcast reaches and resonates with your target audience."}
]

const ServicesSection = ({ timeline } : { timeline?: GSAPTimeline } ) => {
const [currentIndex, setCurrentIndex] = useState(-1);
const servicesRef = useRef<(HTMLDivElement | null)[]>([]);

const handleToggle = (index: number) => {
    setCurrentIndex(prevIndex => prevIndex === index ? -1 : index);
};

useGSAP(() => {
    servicesRef.current?.map((el, index) => {
        gsap.set(el, {
            xPercent: 100 + ((index + 1) * 10)
        })

        timeline && timeline.to(el, {
            xPercent: 0,
        }, "<")


    })

    // const tlServices = gsap.timeline({
    //     paused: true
    // });

}, [timeline]);

useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                setCurrentIndex(-1);
            }
        });
    }, { threshold: 0.1 });

    servicesRef.current?.forEach(el => {
        if (el) observer.observe(el);
    });

    return () => {
        servicesRef.current?.forEach(el => {
            if (el) observer.unobserve(el);
        });
    };
}, []);

  return (
    <div className={styles.services}>
        <div className={styles.container}>
            <div className={styles.title}>Our Services</div>
            <div>
                {services.map((service, index) => {
                    return <div className={styles.accordeonItem} key={index}  ref={el => {servicesRef.current[index] = el}} >
                    <div className={styles.service} onClick={() => handleToggle(index)}>
                    <div>0{index+1}</div>
                    <div className={styles.name}>{service.title}</div>
                    <div className={currentIndex === index ? styles.rotate : ''} >
                        <Image
                        src={arrow}
                        alt="arrow"
                        width={30}
                        height={30}
                        />
                    </div>
                    </div>
                   <div  className={`${styles.description} ${currentIndex === index ? styles.show : ''}`}>
                        <div className={styles.text}>{service.description}</div>
                    </div>
                </div>
                })}
            </div>
        </div>
    </div>
  );
}

export default ServicesSection;