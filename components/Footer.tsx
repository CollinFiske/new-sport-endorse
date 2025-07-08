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
            <form style={{paddingBottom: "20px"}}>
              <input style={{maxWidth: "250px"}} type="email" placeholder="Email address*" />
              <button type="submit">SUBSCRIBE</button>
            </form>
            <label className="terms">
              <input type="checkbox" defaultChecked />
              I agree to Sport Endorse's <a href="#">Privacy policy</a> and <a href="#">Terms and Conditions.</a>
            </label>
            <div className="all-social-logos">
              <span><a target="_blank" href="https://www.facebook.com/SportEndorseLtd/"><img src="/images/facebookLogo.webp" alt="facebook logo" className="social-logo"></img></a></span>
              <span><a target="_blank" href="https://www.instagram.com/sport_endorse/"><img src="/images/instagramLogo.webp" alt="instagram logo" className="social-logo"></img></a></span>
              <span><a target="_blank" href="https://www.linkedin.com/company/sportendorse/"><img src="/images/tiktokLogo.webp" alt="tiktok logo" className="social-logo"></img></a></span>
              <span><a target="_blank" href="https://www.tiktok.com/@sportendorse"><img src="/images/linkedinLogo.webp" alt="linkedin logo" className="social-logo"></img></a></span>
            </div>
            <p>✆ +353 1 546 1103</p>
            <p>✉ hello@sportendorse.com</p>
          </div>

          <div className="footer-links">
            <div>
              <p>01] <Link href="/talent">Athletes<img src="/images/yellowArrow.svg" alt="yellow arrow svg"/></Link></p>
              <p>02] <Link href="/brands">Brands<img src="/images/yellowArrow.svg" alt="yellow arrow svg"/></Link></p>
              <p>03] <Link href="/agency">Agencies<img src="/images/yellowArrow.svg" alt="yellow arrow svg"/></Link></p>
              <p>04] <a href="#">Subscription<img src="/images/yellowArrow.svg" alt="yellow arrow svg"></img></a></p>
            </div>
            <div>
              <p>05] <a href="#">Blog<img src="/images/yellowArrow.svg" alt="yellow arrow svg"></img></a></p>
              <p>06] <a href="#">Guides<img src="/images/yellowArrow.svg" alt="yellow arrow svg"></img></a></p>
              <p>07] <a href="#">Podcast<img src="/images/yellowArrow.svg" alt="yellow arrow svg"></img></a></p>
              <p>08] <a href="#">About Us<img src="/images/yellowArrow.svg" alt="yellow arrow svg"></img></a></p>
            </div>
            <AppStores />
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <p>©Copyright 2025 Sport Endorse. All Rights Reserved</p>
            <div className="footer-meta">
              <a href="#">Privacy Centre</a>
              <a href="#">Terms and Conditions</a>
            </div>
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