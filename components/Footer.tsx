"use client";
import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import "../styles/footer.css";
import MainLogo from "./MainLogo";
import AppStores from "./AppStores";

export default function Footer() {
  const { language } = useLanguage();
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
      alert("Please enter an email address");
      return;
    }

    if (!isChecked) {
      alert("Please agree to the Privacy Policy and Terms and Conditions");
      return;
    }

    const subject = "Newsletter Subscription Request";
    const body = `Hello,\n\nI would like to subscribe to the Sport Endorse newsletter.\n\nEmail: ${email}\n\nPlease add me to your mailing list for news, photos, events, and business updates.\n\nThank you!`;

    const mailtoLink = `mailto:hello@sportendorse.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink);
    
    // Clear the form after sending
    setEmail("");
  };

  return (
    <footer className="modern-footer">
      <div className="maxWidth">
        <MainLogo/>
        <div className="footer-top">
          <div className="newsletter">
            <h2>Subscribe to our newsletter!</h2>
            <p>Get news, photos, events, and business updates</p>
            <form onSubmit={handleSubmit} style={{ paddingBottom: "5px" }}>
              <input
                style={{ maxWidth: "250px" }}
                type="email"
                placeholder="Email address*"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">SUBSCRIBE</button>
            </form>
            <label className="terms" style={{ display: "flex", alignItems: "flex-start", gap: "8px", flexWrap: "nowrap", width: "100%" }}>
              <input 
                type="checkbox" 
                checked={isChecked} 
                onChange={(e) => setIsChecked(e.target.checked)}
                style={{ flex: "0 0 auto", marginTop: "2px" }}
              />
              <span style={{ flex: "1 1 0", minWidth: 0 }}>
                By signing up, I agree to Sport Endorse&apos;s
                <a target="_blank" href={getNavLink("/privacy-policy")}>Privacy policy</a> and
                <a target="_blank" href={getNavLink("/terms-and-conditions")}>Terms and Conditions.</a>
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
            <div className="contact-info">
              <br/>
              <h2>Contact Us!</h2>
              <p>✆ +353 1 546 1103</p>
              <p>✉ hello@sportendorse.com</p>
            </div>
          </div>


          <div className="footer-links">
            <div>
              <h5><span className="footer-number">01]</span><Link href={getNavLink("/brands")}>Sign up as Brand<img src="/images/yellowArrow.svg" alt="yellow arrow svg" /></Link></h5>
              <h5><span className="footer-number">02]</span><Link href={getNavLink("/testing")}>Book A Demo<img src="/images/yellowArrow.svg" alt="yellow arrow svg" /></Link></h5>
              <h5><span className="footer-number">03]</span><Link href={getNavLink("/subscription")}>Subscriptions<img src="/images/yellowArrow.svg" alt="yellow arrow svg" /></Link></h5>
              <h5><span className="footer-number">04]</span><Link href={getNavLink("/podcasts")}>Podcasts<img src="/images/yellowArrow.svg" alt="yellow arrow svg" /></Link></h5>
              <h5><span className="footer-number">05]</span><Link href={getNavLink("/about-us#careers")}>Careers<img src="/images/yellowArrow.svg" alt="yellow arrow svg" /></Link></h5>
            </div>
            <div>
              <h5><span className="footer-number">06]</span><Link href={getNavLink("/talent")}>Sign up as Talent<img src="/images/yellowArrow.svg" alt="yellow arrow svg" /></Link></h5>
              <h5><span className="footer-number">07]</span><Link href={getNavLink("/success-stories")}>Success Stories<img src="/images/yellowArrow.svg" alt="yellow arrow svg" /></Link></h5>
              <h5><span className="footer-number">08]</span><Link href={getNavLink("/faqs")}>FAQs<img src="/images/yellowArrow.svg" alt="yellow arrow svg" /></Link></h5>
              <h5><span className="footer-number">09]</span><Link href={getNavLink("/blog")}>Blog<img src="/images/yellowArrow.svg" alt="yellow arrow svg" /></Link></h5>              
              <h5><span className="footer-number">10]</span><Link href={getNavLink("/about-us")}>About Us<img src="/images/yellowArrow.svg" alt="yellow arrow svg" /></Link></h5>
              <h5><span className="footer-number">11]</span><Link href={getNavLink("/contact-us")}>Contact Us<img src="/images/yellowArrow.svg" alt="yellow arrow svg" /></Link></h5>
            </div>

            <span className="footer-app-store-logos">
              <AppStores />
            </span>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <p>©Copyright 2025 Sport Endorse. All Rights Reserved</p><br />
            <a target="_blank" href={getNavLink("/privacy-policy")} style={{display:"inline", textDecoration:"underline"}}>Privacy Centre</a><br />
            <a target="_blank" href={getNavLink("/terms-and-conditions")} style={{display:"inline", textDecoration:"underline"}}>Terms and Conditions</a>
          </div>

          <div className="footer-bottom-right">
            <div className="logoContainer">
              <p>We have been supported by:</p>
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