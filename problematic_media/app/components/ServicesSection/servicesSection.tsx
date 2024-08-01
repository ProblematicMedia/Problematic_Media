import { useState } from "react";

import Image from "next/image";
import arrow from "../../../public/icons/arrowInCircle.svg"

import styles from "./servicesSection.module.css";

const services = [
    {title: "Web Development", description: "We design and develop responsive websites and web applications tailored to meet your business objectives. Our solutions are built with the latest technologies to ensure optimal performance and user experience."},
    {title: "Website and App Integration", description: "Seamlessly integrate your website with various applications and platforms. Our expertise ensures smooth functionality and enhances user engagement across all digital touchpoints."},
    {title: "Video Content Production", description: "Create compelling video content that captures the essence of your brand. From promotional videos to explainer animations, we produce high-quality videos that resonate with your audience."},
    {title: "Photography and Videography Studio", description: "Our in-house studio offers professional photography and videography services. Whether you need product shots, corporate imagery, or event coverage, we provide stunning visuals that elevate your brand."},
    {title: "Podcast Production", description: "Launch and produce engaging podcasts with our expert guidance. We handle everything from recording and editing to publishing and promotion, ensuring your podcast reaches and resonates with your target audience."},

]

const ServicesSection = () => {
const [currentIndex, setCurrentIndex] = useState(-1)
    

  return (
    <div className={styles.services}>
        <div className={styles.container}>
            <div className={styles.title}>Our Services</div>
            <div>
                {services.map((service, index) => {
                    return <div className={styles.accordeonItem}>
                    <div className={styles.service} onClick={() => setCurrentIndex(index)}>
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