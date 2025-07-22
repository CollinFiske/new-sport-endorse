"use client";
import Link from "next/link";
import "../styles/mainLogo.css";

export default function MainLogo() {

  return (
    <div>
        <Link href="/">
            <img src="/images/sportEndorseLogo.png" alt="sport endorse logo"></img>
            <h3>SPORT ENDORSE</h3>
        </Link>
    </div>
  );
}