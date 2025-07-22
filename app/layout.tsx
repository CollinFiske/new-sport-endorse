import "../styles/base.css";
import "../styles/header.css";
import "../styles/footer.css";
import { LanguageProvider } from "../context/LanguageContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ChatbotWrapper from "@/components/ChatbotWrapper";

import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from "@vercel/speed-insights/next"


export const metadata = {
  title: "Sport Endorse",
  description: "Connecting athletes and brands globally.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8"></meta>
        <meta name="description" content="SportEndorse"></meta>
        <meta name="keywords" content="SportEndorse, Talent, Brands"></meta>
        <meta name="author" content="SportEndorse"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </head>
      <body>
        <ChatbotWrapper>
          <LanguageProvider>
            <Header />
            <main style={{ padding: "80px 20px 0 20px" /* for space for header and on sides */}}>{children}</main>
            <Footer /> 
          </LanguageProvider>
        </ChatbotWrapper>
        
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
