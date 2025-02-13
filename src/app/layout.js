import { Kanit } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/Navbar';
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import NextTopLoader from 'nextjs-toploader';



const kanitFont = Kanit({
  variable: "Kanit",
  subsets: ["latin"],
  weight: "400"
});

export const metadata = {
  title: "รับทำเว็บไซต์ ออกแบบเว็บไซต์ รับออกแบบครบวงจร สร้าง Branding เริ่มต้นสร้างผลลัพธ์ให้ธุรกิจคุณ | Muffy Design",
  description: "รับทำเว็บไซต์ ออกแบบเว็บไซต์ สร้างร้านค้าออนไลน์ของคุณ ระบบใช้งานง่าย หน้าตาดูทันสมัย ออกแบบครบวงจร เหมาะสำหรับทุกธุรกิจ ให้คำปรึกษาฟรี! โทร 094-303-0401",
  keywords: "รับทำเว็บไซต์,ออกแบบเว็บไซต์,สร้างเว็บไซต์,เว็บไซต์สำเร็จรูป,พัฒนาเว็บไซต์,ร้านค้าออนไลน์,เว็บแอปพลิเคชัน,พัฒนาเว็บไซต์มือถือ,WordPress,React,Next.js,รับทำเว็บไซต์ราคาถูก,ออกแบบเว็บไซต์สวยงาม,จ้างทำเว็บไซต์,เว็บไซต์ responsive,เว็บไซต์ one page,ปรึกษาฟรี,เว็บไซต์ e-commerce",
  og: {
    title: "รับทำเว็บไซต์ ออกแบบเว็บไซต์ รับออกแบบครบวงจร สร้าง Branding เริ่มต้นสร้างผลลัพธ์ให้ธุรกิจคุณ | Muffy Design",
    description: "รับทำเว็บไซต์ ออกแบบเว็บไซต์ สร้างร้านค้าออนไลน์ของคุณ ระบบใช้งานง่าย หน้าตาดูทันสมัย ออกแบบครบวงจร เหมาะสำหรับทุกธุรกิจ ให้คำปรึกษาฟรี! โทร 094-303-0401",
    image: "/images/og-image.jpg",
    url: "https://yourwebsite.com"
  },
  twitter: {
    card: "summary_large_image",
    title: "รับทำเว็บไซต์ ออกแบบเว็บไซต์ รับออกแบบครบวงจร สร้าง Branding เริ่มต้นสร้างผลลัพธ์ให้ธุรกิจคุณ | Muffy Design",
    description: "รับทำเว็บไซต์ ออกแบบเว็บไซต์ สร้างร้านค้าออนไลน์ของคุณ ระบบใช้งานง่าย หน้าตาดูทันสมัย ออกแบบครบวงจร เหมาะสำหรับทุกธุรกิจ ให้คำปรึกษาฟรี! โทร 094-303-0401",
    image: "https://yourwebsite.com/your-image.jpg"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${kanitFont.variable} ${kanitFont.variable} antialiased`}>
        <NextTopLoader color="linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)" />
        <Navbar />
        {children}
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
