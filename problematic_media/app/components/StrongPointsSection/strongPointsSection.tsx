import { useState } from "react";

import Image from "next/image";
import client from "../../../public/icons/client.svg"

import styles from "./strongPointsSection.module.css";

const strongPoints = [
    {title: "Tailored Solutions", description: "Customised services that meet your specific needs and objectives", icon: "../../../icons/solution.svg"},
    {title: "Experienced Team", description: "A dedicated team of professionals with expertise across various domains.", icon: "../../../icons/team.svg"},
    {title: "End-to-End Service", description: "Comprehensive support from concept to execution and beyond.", icon: "../../../icons/end-to-end.svg"},
    {title: "Cutting-Edge Technology", description: "Utilising the latest technologies and industry best practices.", icon: "../../../icons/technology.svg"},
    {title: "Customer-Centric Approach", description: "Focused on delivering value and exceeding client expectations.", icon: "../../../icons/client.svg"},

]

const StrongPointsSection = () => {

  return (
    <div className={styles.points}>
        <div className={styles.container}>
            <div className={styles.title}>Our Strong Points</div>
            <div className={styles.cards}>
                {strongPoints.map(card => {
                    return <div className={styles.card}>
                <div className={styles.img}>
                    <Image
                    src={card.icon}
                    alt={card.title}
                    width={100}
                    height={110}
                    />
                </div>
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