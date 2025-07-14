"use client";
import Link from "next/link";
import "../styles/footer.css";
import MainLogo from "./MainLogo";
import AppStores from "./AppStores";

export default function Footer() {
  return (
    <footer className="modern-footer">
      <div className="maxWidth">
        <MainLogo/>
        <div className="footer-top">
          <div className="newsletter">
            <h2>Keep up with us</h2>
            <p>Get news, photos, events, and business updates</p>
            <form style={{ paddingBottom: "5px" }}>
              <input
                style={{ maxWidth: "250px" }}
                type="email"
                placeholder="Email address*"
              />
              <button type="submit">SUBSCRIBE</button>
            </form>
            <label className="terms" style={{ display: "flex", alignItems: "flex-start", gap: "8px", flexWrap: "nowrap", width: "100%" }}>
              <input type="checkbox" defaultChecked style={{ flex: "0 0 auto", marginTop: "2px" }}/>
              <span style={{ flex: "1 1 0", minWidth: 0 }}>
                By signing up, I agree to Sport Endorse's
                <a target="_blank" href="/privacy-policy">Privacy policy</a> and
                <a target="_blank" href="/terms-and-conditions">Terms and Conditions.</a>
              </span>
            </label>
            <div className="all-social-logos">
              <span><a target="_blank" href="https://www.facebook.com/SportEndorseLtd/"><img src="/images/facebookLogo.webp" alt="facebook logo" className="social-logo"></img></a></span>
              <span><a target="_blank" href="https://www.instagram.com/sport_endorse/"><img src="/images/instagramLogo.webp" alt="instagram logo" className="social-logo"></img></a></span>
              <span><a target="_blank" href="https://www.linkedin.com/company/sportendorse/"><img src="/images/tiktokLogo.webp" alt="tiktok logo" className="social-logo"></img></a></span>
              <span><a target="_blank" href="https://www.tiktok.com/@sportendorse"><img src="/images/linkedinLogo.webp" alt="linkedin logo" className="social-logo"></img></a></span>
            </div>
            <p>✆ +353 1 546 1103</p>
            <p>✉ hello@sportendorse.com</p>
            <p>🏠︎ 10 Fitzwilliam Street Upper, Dublin 2, D02 T024, Ireland</p>
          </div>

          <div className="footer-links">
            <style jsx>{`
              .footer-links h2 {
                display: flex;
                align-items: center;
                margin: 0 0 12px 0;
              }
              .footer-links h2 span.footer-number {
                font-size: 12px;
                margin-right: 8px;
                color: #ccc;
              }
            `}</style>
            <div>
              <h2><span className="footer-number">01]</span><Link href="/talent">Athletes<img src="/images/yellowArrow.svg" alt="yellow arrow svg" /></Link></h2>
              <h2><span className="footer-number">02]</span><Link href="/brands">Brands<img src="/images/yellowArrow.svg" alt="yellow arrow svg" /></Link></h2>
              <h2><span className="footer-number">03]</span><Link href="/agency">Agencies<img src="/images/yellowArrow.svg" alt="yellow arrow svg" /></Link></h2>
              <h2><span className="footer-number">04]</span><Link href="/subscription">Subscription<img src="/images/yellowArrow.svg" alt="yellow arrow svg" /></Link></h2>
            </div>
            <div>
              <h2><span className="footer-number">05]</span><a href="#">Blog<img src="/images/yellowArrow.svg" alt="yellow arrow svg" /></a></h2>
              <h2><span className="footer-number">06]</span><a href="#">Guides<img src="/images/yellowArrow.svg" alt="yellow arrow svg" /></a></h2>
              <h2><span className="footer-number">07]</span><a href="#">Podcast<img src="/images/yellowArrow.svg" alt="yellow arrow svg" /></a></h2>
              <h2><span className="footer-number">08]</span><a href="#">About Us<img src="/images/yellowArrow.svg" alt="yellow arrow svg" /></a></h2>
            </div>
            <span style={{marginLeft:"auto"}}>
              <AppStores />
            </span>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <p>©Copyright 2025 Sport Endorse. All Rights Reserved</p>
              <a target="_blank" href="/privacy-policy" style={{display:"inline"}}>Privacy Centre</a><br/>
              <a target="_blank" href="/terms-and-conditions">Terms and Conditions</a>
          </div>
          <div className="footer-bottom-right">
            <div className="logoContainer">
              <p>We have been supported by:</p>
              <div className="logo"><img src="/images/image-129.png" alt="Support Logos" /></div>
              <div className="logo"><img src="/images/image-128.png" alt="Support Logos" /></div>
              <div className="logo"><img src="/images/image-127.png" alt="Support Logos" /></div>
              <div className="logo"><img src="/images/image-126.png" alt="Support Logos" /></div>
            </div>
          </div>

        </div>
        
      </div>
    </footer>
  );
}