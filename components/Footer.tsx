"use client";
import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import translations from "../utils/translations";
import "../styles/footer.css";
import AppStores from "./AppStores";

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language].footer;
  const [email, setEmail] = useState("");
  const [isChecked, setIsChecked] = useState(true);

  const getNavLink = (path: string) => {
    // Ensure path starts with /
    const cleanPath = path.startsWith('/') ? path : '/' + path;
    
    if (language === 'en') {
      return cleanPath;
    }
    return `/${language}${cleanPath}`;
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    
    if (!email) {
      alert(t.alerts.emailRequired);
      return;
    }

    if (!isChecked) {
      alert(t.alerts.termsRequired);
      return;
    }

    const subject = t.newsletter.subject;
    const body = `${t.newsletter.bodyIntro}\n\n${t.newsletter.bodyEmail} ${email}\n\n${t.newsletter.bodyRequest}\n\n${t.newsletter.bodyClosing}`;

    const mailtoLink = `mailto:hello@sportendorse.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink);
    
    // Clear the form after sending
    setEmail("");
  };

  return (
    <footer className={`modern-footer ${language === 'es' ? 'footer-spanish' : ''}`}>
      <div className="maxWidth">
        <img src="/images/sport endorse logo white.png" alt="Sport Endorse Logo" style={{ height: '6rem', marginBottom: '0' }} />
        <div className="footer-top">
          <div className="newsletter">
            <h2>{t.newsletterTitle}</h2>
            <p>{t.newsletterDescription}</p>
            <form onSubmit={handleSubmit} style={{ paddingBottom: "5px" }}>
              <input
                style={{ maxWidth: "250px" }}
                type="email"
                placeholder={t.emailPlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">{t.subscribeButton}</button>
            </form>
            <label className="terms" style={{ display: "flex", alignItems: "flex-start", gap: "8px", flexWrap: "nowrap", width: "100%" }}>
              <input 
                type="checkbox" 
                checked={isChecked} 
                onChange={(e) => setIsChecked(e.target.checked)}
                style={{ flex: "0 0 auto", marginTop: "2px" }}
              />
              <span style={{ flex: "1 1 0", minWidth: 0 }}>
                {t.termsText} {" "}
                <a target="_blank" href={getNavLink("/privacy-policy")}>{t.privacyPolicy}</a> {" "}
                and <a target="_blank" href={getNavLink("/terms-and-conditions")}>{t.termsConditions}</a>
              </span>
            </label>

            <div className="all-social-logos">
              <span><a target="_blank" href="https://www.facebook.com/SportEndorseLtd/"><img src="/images/facebookLogo.jpg" alt="facebook logo" className="social-logo"></img></a></span>
              <span><a target="_blank" href="https://www.instagram.com/sport_endorse/"><img src="/images/instagramLogo.webp" alt="instagram logo" className="social-logo"></img></a></span>
              <span><a target="_blank" href="https://www.linkedin.com/company/sportendorse/"><img src="/images/tiktokLogo.webp" alt="tiktok logo" className="social-logo"></img></a></span>
              <span><a target="_blank" href="https://www.tiktok.com/@sportendorse"><img src="/images/linkedinLogo.webp" alt="linkedin logo" className="social-logo"></img></a></span>
              <span><a target="_blank" href="https://open.spotify.com/show/2c2mWOkxmUpeGyFI2dZgC5"><img src="/images/spotify.png" alt="spotify logo" className="social-logo"></img></a></span>
              <span><a target="_blank" href="https://www.youtube.com/channel/UCwHt-_eNBHav6TSihoirZIA"><img src="/images/youtube icon.png" alt="youtube logo" className="social-logo"></img></a></span>
            </div>
            
          </div>


          <div className="footer-links">
            <div>
              <h5><span className="footer-number">01]</span><Link target="_blank" href="https://platform.sportendorse.com/signup/brand" >{t.links.signUpBrand}<img src="/images/yellowArrow.svg" alt="yellow arrow svg" /></Link></h5>
              <h5><span className="footer-number">02]</span><Link target="_blank" href="https://calendly.com/d/dzw-nc4-57b/sport-endorse-demo?month=2025-07">{t.links.bookDemo}<img src="/images/yellowArrow.svg" alt="yellow arrow svg" /></Link></h5>
              <h5><span className="footer-number">03]</span><Link href={getNavLink("/podcasts")}>{t.links.podcasts}<img src="/images/yellowArrow.svg" alt="yellow arrow svg" /></Link></h5>
              <h5><span className="footer-number">04]</span><Link href={getNavLink("/about-us#careers")}>{t.links.careers}<img src="/images/yellowArrow.svg" alt="yellow arrow svg" /></Link></h5>
              <h5><span className="footer-number">05]</span><Link href={getNavLink("/about-us")}>{t.links.aboutUs}<img src="/images/yellowArrow.svg" alt="yellow arrow svg" /></Link></h5>
            </div>
            <div>
              <h5><span className="footer-number">06]</span><Link target="_blank" href="https://platform.sportendorse.com/signup/talent">{t.links.signUpTalent}<img src="/images/yellowArrow.svg" alt="yellow arrow svg" /></Link></h5>
              <h5><span className="footer-number">07]</span><Link href={getNavLink("/success-stories")}>{t.links.successStories}<img src="/images/yellowArrow.svg" alt="yellow arrow svg" /></Link></h5>
              <h5><span className="footer-number">08]</span><Link href={getNavLink("/faqs")}>{t.links.faqs}<img src="/images/yellowArrow.svg" alt="yellow arrow svg" /></Link></h5>
              <h5><span className="footer-number">09]</span><Link href={getNavLink("/blog")}>{t.links.blog}<img src="/images/yellowArrow.svg" alt="yellow arrow svg" /></Link></h5>              
              <h5><span className="footer-number">10]</span><Link href={getNavLink("/contact-us")}>{t.links.contactUs}<img src="/images/yellowArrow.svg" alt="yellow arrow svg" /></Link></h5>
            </div>

            <span className="footer-app-store-logos">
              <AppStores />
            </span>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <p>{t.copyright}</p><br />
            <a target="_blank" href={getNavLink("/privacy-policy")} style={{display:"inline", textDecoration:"underline"}}>{t.privacyCentre}</a><br />
            <a target="_blank" href={getNavLink("/terms-and-conditions")} style={{display:"inline", textDecoration:"underline"}}>{t.termsConditions}</a>
          </div>

          <div className="footer-bottom-right">
            <div className="logoContainer">
              <p>{t.supportedBy}</p>
              <div className="logo"><img src="/images/image-129.png" alt="Support Logos" /></div>
              <div className="logo"><img src="/images/image-128.png" alt="Support Logos" /></div>
              <div className="logo"><img src="/images/image-127.png" alt="Support Logos" /></div>
              <div className="logo" style={{width:"90px"}}><img src="/images/image-126.png" alt="Support Logos" /></div>
            </div>
          </div>

        </div>
        
      </div>
    </footer>
  );
}