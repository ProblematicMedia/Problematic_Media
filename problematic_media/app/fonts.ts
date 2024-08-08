import "./globals.css";
import { Inter, Allerta_Stencil, Roboto } from "next/font/google";
 
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: "--font-inter",
})
 
export const allerta = Allerta_Stencil({ 
    weight: "400", 
    subsets: ["latin"],
    variable: "--font-allerta",
});

export const roboto = Roboto({ 
    weight: "400", 
    subsets: ["latin"],
    variable: "--font-roboto",
});
