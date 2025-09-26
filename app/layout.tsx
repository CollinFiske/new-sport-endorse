import "../styles/base.css";
import "../styles/header.css";
import "../styles/footer.css";
import { LanguageProvider } from "../context/LanguageContext";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";


export const metadata: Metadata = {
  //metadataBase: new URL("put the home url here later"),
  title: "Sport Endorse: Connecting Elite Athletes & Brand Ambassadors for Sports Sponsorship",
  description: "Sport Endorse is your platform for sports marketing, linking brands with elite athletes and sports influencers for sponsorship management and authentic partnerships.",
  openGraph:{ // og:title and so on
    title: "Sport Endorse: Connecting Elite Athletes & Brand Ambassadors for Sports Sponsorship",
    description: "Sport Endorse is your platform for sports marketing, linking brands with elite athletes and sports influencers for sponsorship management and authentic partnerships.",
    type:"website",
    locale:"en_US",
    //url:"" to be added later
    siteName:"Sport Endorse"
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
  
  return (
    <html lang="en"> 
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="SportEndorse, Talent, Brands, Subscription, Agencies, Success Stories"></meta>
        <meta name="author" content="SportEndorse"></meta>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        <link rel="icon" type="image/ico" href="favicon.ico" />

        {/*<!-- Start of HubSpot Embed Code -->*/}
        <script
          type="text/javascript"
          id="hs-script-loader"
          async
          defer
          src="//js.hs-scripts.com/4025606.js"
        />
        {/*<!-- End of HubSpot Embed Code -->*/}
      </head>

      {gtmId && <GoogleTagManager gtmId={gtmId} />}
      <body>

        <noscript>
          <div style={{margin:"70px 20px"}}>
            <h1>JavaScript Required</h1>
            <p>Sport Endorse requires JavaScript to function properly. Please enable JavaScript in your browser settings and refresh the page.</p>
            <p><strong>To enable JavaScript:</strong></p>
            <ul>
              <li>Chrome/Edge: Settings → Privacy and Security → Site Settings → JavaScript</li>
              <li>Firefox: about:config → javascript.enabled → true</li>
              <li>Safari: Preferences → Security → Enable JavaScript</li>
            </ul>
          </div>
        </noscript>

        <LanguageProvider>
          <Header />
          <main style={{ padding: "80px 20px 0 20px" /* for space for header and on sides */}}>{children}</main>
          <Footer /> 
        </LanguageProvider>
        
        <Analytics />
        <SpeedInsights />
      </body>

    </html>
  );
}

/*

      <head>
        <meta charSet="UTF-8"></meta>
        <meta name="description" content="SportEndorse"></meta>
        <meta name="keywords" content="SportEndorse, Talent, Brands"></meta>
        <meta name="author" content="SportEndorse"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </head>
*/
