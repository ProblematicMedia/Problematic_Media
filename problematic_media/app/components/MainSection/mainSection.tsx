"use client"

import { useRef, useEffect, useState } from 'react';
import Image from "next/image";
import title from "../../../public/images/title.png"

import styles from "./mainSection.module.css";
import DynamicBackground from './binaryBackground';
import Header from '../Header/header';


// const MainSection: React.FC = () => {
//     const [binaryString, setBinaryString] = useState<string>('');

//     // Function to generate a random binary string of length 3500
//     const generateBinary = () => {

//         let str = '';
//         for (let i = 0; i < 106000; i++) {
//             str += Math.round(Math.random());
//         }
//         setBinaryString(str);
//     };

//     // Function to update a random character in the binary string
//     const updateBinary = () => {
//         const n = binaryString.length;
//         const r = Math.floor(Math.random() * n);
//         const newBinaryString = binaryString.substring(0, r) + Math.round(Math.random()) + binaryString.substring(r + 1);
//         setBinaryString(newBinaryString);
//     };

//     useEffect(() => {
//         // Generate initial binary string
//         generateBinary();

//         // Set up an interval to update the binary string every 5ms
//         // const intervalId = setInterval(updateBinary, 2000);

//         // Clean up interval on component unmount
//         // return () => clearInterval(intervalId);
//     }, []); // Dependency array to update when binaryString changes

//     return (
//         <div className={styles.main}>
//             {/* <div className={styles.bin}>{binaryString}</div> */}
//             <BinaryBackground />
//             <div className={styles.title}>
//        {/* <Image
//              src={title}
//             alt="Title"
//             width={1000}
            
//          /> */}

//         </div>
//         </div>
//     );
// };

// export default MainSection;



const MainSection: React.FC = () => {
    // const canvasRef = useRef(null);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    // useEffect(() => {        

    //     if(canvasRef.current) {
    //         const canvas = canvasRef.current;
    //         const context = canvas.getContext('2d');

    //         if(context) {

    //             canvas.width = window.innerWidth;
    //             canvas.height = window.innerHeight - 158;
        
    //             let binary:string = "01";
    //             let binaryArray: string[] = binary.split('');
    //             let font_size = 20;
    //             let columns = canvas.width/font_size;
        
    //             const drops: any = Array.from({ length: columns }).fill(canvas.height);
    //             // const drops: number[] =  Array.from({ length: columns }, () => 1);

    //             // const drops = []

    //             // for( let x = 0; x < columns; x++ ) {
    //             //     drops[x] = 1;
    //             // }

    //             console.log(drops)
    
    //             const draw = () => {
    //                 // context.fillStyle = "tran";
    //                 // context.clearRect(0, 0, canvas.width, canvas.height);
    //                 context.fillStyle = 'rgba(0,0,0,0.05)';
    //                 context.fillRect(0, 0, canvas.width, canvas.height);
    //                 context.fillStyle = 'white';
    //                 // context.font = font_size + "px";
    //                 context.font = `${font_size}px`;

    //                 let text = binaryArray[Math.floor(Math.random()*binaryArray.length)];
                       
    //                     context.fillText(text, font_size, font_size);
        
    //                 // for(let i = 0; i < drops.length; i++) {
    //                 //     let text = binaryArray[Math.floor(Math.random()*binaryArray.length)];
                       
    //                 //     context.fillText(text, i*font_size, drops[i]*font_size);
    //                 //     // if(drops[i]*font_size > canvas.height && Math.random() > 0.975)
    //                 //     //     drops[i]=0;
    //                 //     //     drops[i]++;
    //                 // }
    //             }
    
    //          setInterval(draw, 200);
    
             
            
    //         }
    //     }
        

    //     // let drops = [];
    //     // for(let x=0;x< columns; x++) {
    //     //     drops[x]=1;
    //     // }
    //     // const gradient = context.createLinearGradient(0, 0, 0, canvas.height);
    //     // gradient.addColorStop(0, '#000'); // Start color
    //     // gradient.addColorStop(0.03, '#000'); // End color at 3%
    //     // gradient.addColorStop(1, 'rgba(0, 0, 0, 0.12)'); // End color at 100%

 
    //     // function draw() {
    //     //     // Clear the canvas with a transparent background
    //     //     // context.clearRect(0, 0, canvas.width, canvas.height);
    //     //      context.fillStyle = 'rgba(0,0,0,0.05)';
    //     //     context.fillRect(0, 0, canvas.width, canvas.height);

    //     //     // Draw the binary code
    //     //     context.fillStyle = 'rgba(255, 255, 255, 0.7)'; // White with 70% opacity
    //     //     context.font = `${font_size}px monospace`; // Use a monospaced font

    //     //     for (let i = 0; i < drops.length; i++) {
    //     //         let text = binary[Math.floor(Math.random() * binary.length)];
    //     //         context.fillText(text, i * font_size, drops[i] * font_size);
                
    //     //         // Move the drop down the screen
    //     //         if (drops[i] * font_size > canvas.height && Math.random() > 0.975) {
    //     //             drops[i] = 0;
    //     //         }
    //     //         drops[i]++;
    //     //     }
    //     // }

    //     // setInterval(draw, 150)

         
    // }, [])


    const [matrix, setMatrix] = useState([]);
    const [blinkState, setBlinkState] = useState({}); // Track blinking state
  
    const cellSize = 20;
    const blinkDuration = 3000; // Duration for blinking effect (5 seconds)
  
    // Function to create an initial matrix of random 0s and 1s
    const createInitialMatrix = (width, height) => {
      const cols = Math.floor(width / cellSize);
      const rows = Math.floor(height / cellSize);
      return Array.from({ length: rows }, () =>
        Array.from({ length: cols }, () => ({ value: Math.random() > 0.5 ? '1' : '0', isBlinking: false }))
      );
    };
  
    // Function to update blinking cells state
    const updateBlinkingMatrix = (matrix) => {
      return matrix.map((row, rowIndex) =>
        row.map((cell, colIndex) => {
          if (Math.random() > 0.997) { // 2% chance to blink
            setBlinkState(prevState => ({
              ...prevState,
              [`${rowIndex}-${colIndex}`]: Date.now()
            }));
            return {
              ...cell,
              value: Math.random() > 0.5 ? '1' : '0',
              isBlinking: true,
            };
          }
          // Check if the cell is still in the blinking phase
          const blinkStartTime = blinkState[`${rowIndex}-${colIndex}`];
          const isBlinkActive = blinkStartTime && (Date.now() - blinkStartTime) < blinkDuration;
          return {
            ...cell,
            isBlinking: isBlinkActive,
          };
        })
      );
    };
  
    // Function to draw the entire background (static matrix)
    const drawBackground = (ctx, width, height, matrix) => {
      const cols = Math.floor(width / cellSize);
      const rows = Math.floor(height / cellSize);
  
      ctx.clearRect(0, 0, width, height); // Clear the canvas for redrawing
  
      ctx.font = '16px Arial'; // Set font size and style
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
  
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const cell = matrix[row][col];
          const x = col * cellSize + cellSize / 2;
          const y = row * cellSize + cellSize / 2;
  
        ctx.fillStyle = cell.isBlinking ? 'white' : 'black'; // Color for blinking
          ctx.font = cell.isBlinking ? 'bold 16px Arial' : '16px Arial'; // Bold for blinking
  
          ctx.fillText(cell.value, x, y); // Draw the text
        }
      }
    };
  
    useEffect(() => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
  
      const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const initialMatrix = createInitialMatrix(canvas.width, canvas.height);
        setMatrix(initialMatrix);
        drawBackground(ctx, canvas.width, canvas.height, initialMatrix); // Draw static background
      };
  
      resizeCanvas(); // Initial draw
  
      const intervalId = setInterval(() => {
        setMatrix(prevMatrix => {
          const updatedMatrix = updateBlinkingMatrix(prevMatrix); // Update matrix with blinking cells
          drawBackground(ctx, canvas.width, canvas.height, updatedMatrix); // Redraw the updated matrix
          return updatedMatrix;
        });
      }, 1500); // Update every 500ms
  
      window.addEventListener('resize', resizeCanvas);
  
      return () => {
        clearInterval(intervalId);
        window.removeEventListener('resize', resizeCanvas);
      };
    }, []); // Re-run effect when blinkState changes

    
  return (
    <div className={styles.main}>
        {/* <Header /> */}
        {/* <div className={styles.background}>1</div> */}
        {/* <canvas ref={canvasRef} className={styles.canvas} /> */}
        <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, background: 'transparent' }} />
        {/* <DynamicBackground /> */}
        <div className={styles.title}>
        <Image
            src={title}
            alt="Title"
            width={1000}
            
        />

        </div>
    </div>
  );
}

export default MainSection;