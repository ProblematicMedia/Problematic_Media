"use client"

import { useRef, useEffect, useState } from 'react';
import Image from "next/image";
import title from "../../../public/images/title.png"

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import TextPlugin from 'gsap/TextPlugin';

import styles from "./mainSection.module.css";
import Header from '../Header/header';


interface MainSectionPropsType {
  aboutRef: React.RefObject<HTMLDivElement>;
  servicesRef: React.RefObject<HTMLDivElement>;
  strongPointsRef: React.RefObject<HTMLDivElement>;
  contactUsRef: React.RefObject<HTMLDivElement>;
  section: React.RefObject<HTMLDivElement>;
}

gsap.registerPlugin(TextPlugin);

const MainSection = ({aboutRef,
  servicesRef,
  strongPointsRef,
  contactUsRef,
  section
} : MainSectionPropsType) => {
    const [binaryArray, setBinaryArray] = useState<string[][]>([]);
    const binaryRefs = useRef<Array<HTMLSpanElement | null>>([]);
    const textRef = useRef(null);
    const solutionRef = useRef(null);

    useEffect(() => {
        const generateBinaryArray = () => {
            const containerHeight = window.innerHeight;
            // const numberOfRows = Math.floor((containerHeight - 159) / 20);
            const numberOfRows = Math.floor(containerHeight / 20);
            const numberOfColumns = Math.floor(window.innerWidth / 20);
            const binaryArray = [];

            for(let i = 0; i < numberOfRows; i++) {
                const row = [];
                for(let j = 0; j < numberOfColumns; j++){
                 row.push(Math.random() > 0.5 ? '1' : '0');
                }
                binaryArray.push(row)
            }
            setBinaryArray(binaryArray)
        }

        generateBinaryArray();

        window.addEventListener('resize', generateBinaryArray);

        return () => window.removeEventListener('resize', generateBinaryArray);
    }, []);

    useEffect(() => {
        const totalNumbers = binaryArray.length * (binaryArray[0]?.length || 0);
    
        const highlightRandomNumbers = () => {
          const numberOfHighlights = Math.ceil(totalNumbers * 0.001);
          const randomIndices = new Set<number>();
    
          while (randomIndices.size < numberOfHighlights) {
            const randomIndex = Math.floor(Math.random() * totalNumbers);
            randomIndices.add(randomIndex);
          }
    
          randomIndices.forEach((index)=> {
            const rowIndex = Math.floor(index / binaryArray[0].length);
            const colIndex = index % binaryArray[0].length;
            const refIndex = rowIndex * binaryArray[0].length + colIndex;
    
            if (binaryRefs.current[refIndex]) {
              binaryRefs.current[refIndex].classList.add(styles.highlighted);
    
              setTimeout(() => {
                binaryRefs.current[refIndex]?.classList.remove(styles.highlighted);
              }, Math.random() * 4000 + 2000);
            }
          });
        };
    
        const intervalId = setInterval(highlightRandomNumbers, 500);
    
        return () => clearInterval(intervalId);
      }, [binaryArray]);


      // useGSAP(() => {
      //   const tlText = gsap.timeline();
      //   tlText
      //     .to(textRef.current, {
      //       duration: 3,
      //       text:"Where Problems Find ", 
      //       ease :  'power1.in'
      //     })
      //     .to(solutionRef.current, {
      //       duration: 3,
      //       text:"Solutions", 
      //       ease :  'power1.in'
      //     }, "+=1")


      // }, [])

      useGSAP(() => {
        gsap.fromTo(textRef.current, 
          {fontSize: 0},
          {fontSize: 72, delay: 1, duration: 2, ease: "power1.out" }
      )}, [])

    
  return (
  <div className={styles.main}>
    <div className={styles.layer}>

    </div>
        <div className={styles.binaryBackground}>
        {binaryArray && binaryArray.map((row, rowIndex) => {
            return <div className={styles.binaryRow} key={rowIndex}>
                {row.map((num, colIndex) => {
                    return <span className={`${styles.binaryNum}`} key={colIndex} 
                    ref={(el: HTMLSpanElement | null) => {
                        if (el) {
                          binaryRefs.current[rowIndex * binaryArray[0].length + colIndex] = el;
                        }
                      }}
>
                        {num}
                    </span>
                })}

            </div>
        })}
        </div>
        <div className={styles.header}>
          <Header 
            aboutRef={aboutRef}
            servicesRef={servicesRef}
            strongPointsRef={strongPointsRef}
            contactUsRef={contactUsRef} 
            section={section}
          />
        </div>

        <div className={styles.content}>
          {/*KEYBOARD ANIMATION */}
            {/* <span className={`${styles.title}`} ref={textRef}></span>
            <span className={`${styles.title}`} ref={solutionRef}>   </span>
            <span className={styles.cursor}>  {" "}</span> */}
            <div className={`${styles.title}`} ref={textRef}>Where Problems Find Solutions</div>
        </div>
    </div>
  );
}

export default MainSection;