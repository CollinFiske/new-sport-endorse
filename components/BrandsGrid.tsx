"use client"
import React from "react";
import styles from "../styles/brandsGrid.module.css";

interface BrandsGridProps {
  variant?: "8x4" | "5x4";
  label?: string;
}

const brands = [
  // Brands from target list with available logos
  { src: "/images/homePageTable/Alpro_Logo_Slider.webp", alt: "Alpro logo" },
  { src: "/images/homePageTable/GrantThornton.webp", alt: "Grant Thornton logo" },
  { src: "/images/homePageTable/Kelloggs_Logo_Slider.webp", alt: "Kellogg's logo" },
  { src: "/images/homePageTable/Lovable.webp", alt: "Lovable logo" },
  { src: "/images/homePageTable/Optimum_Nutrition_Logo.png", alt: "Optimum Nutrition logo" },
  { src: "/images/homePageTable/PricewaterhouseCoopers_Logo.webp", alt: "PWC logo" },
  { src: "/images/homePageTable/puma.webp", alt: "Puma logo" },
  { src: "/images/homePageTable/Pringles-Logo.png", alt: "Pringles logo" },
  { src: "/images/homePageTable/whoop_logo.png", alt: "Whoop logo" },
  { src: "/images/homePageTable/shokz.png", alt: "Shokz logo" },
  { src: "/images/homePageTable/Hard_Rock_Cafe.webp", alt: "Hard Rock Cafe logo" },
  { src: "/images/homePageTable/skechers.webp", alt: "Skechers logo" },
  { src: "/images/homePageTable/Specsaver.webp", alt: "Specsavers logo" },
  { src: "/images/homePageTable/Sports-Direct_Logo_Slider.webp", alt: "Sports Direct logo" },
  { src: "/images/homePageTable/affidea.jpg", alt: "Affidea logo" },
  { src: "/images/homePageTable/red_bull.png", alt: "Red Bull logo" },
  { src: "/images/homePageTable/revive_active.png", alt: "Revive Active logo" },
  { src: "/images/homePageTable/mini.jpg", alt: "Mini logo" },
  { src: "/images/homePageTable/skins.jpg", alt: "Skins logo" },
  { src: "/images/homePageTable/solestar.gif", alt: "Solestar logo" },
  { src: "/images/homePageTable/uniphar.png", alt: "AYA/Uniphar logo" },
  { src: "/images/homePageTable/movember.png", alt: "Movember logo" },
  { src: "/images/homePageTable/isdin.png", alt: "ISDIN logo" },
  { src: "/images/homePageTable/Glanbia.jpg", alt: "Avonmore/Tirlán/Glanbia logo" },
  { src: "/images/homePageTable/uriage.png", alt: "Uriage logo" },
  { src: "/images/homePageTable/sons-hair-loss-uk.png", alt: "Sons logo" },
  { src: "/images/homePageTable/sunvit-d3.webp", alt: "SunVit-D3 logo" },
  { src: "/images/homePageTable/dalata.png", alt: "Dalata Hotel Group logo" },
  { src: "/images/homePageTable/active-iron.png", alt: "Active Iron logo" },
  { src: "/images/homePageTable/BBC-news.svg", alt: "BBC logo" },
  
  
  { src: "/images/whiteSportEndorseLogo.webp", alt: "sport endorse logo", isButton: true }
];

export default function BrandsGrid({ variant = "8x4", label }: BrandsGridProps) {
  const columns = variant === "8x4" ? 8 : 5;
  const rows = 4;
  const gridBrands = brands.slice(0, columns * rows);

  return (
    <div className={styles.brandsGridWrapper}>
      {label && <h2 className={styles.label}>{label}</h2>}
      <table className={styles.brandsTable}>
        <tbody>
          {[...Array(rows)].map((_, rowIdx) => (
            <tr key={rowIdx}>
              {gridBrands.slice(rowIdx * columns, (rowIdx + 1) * columns).map((brand, colIdx) => (
                <td key={colIdx}>
                  {brand.isButton ? (
                    <button
                      className={styles.ctaButton}
                      onClick={() => { window.location.href = 'https://platform.sportendorse.com/signup/brand'; }}
                    >
                      <img src={brand.src} alt={brand.alt} />
                    </button>
                  ) : (
                    <img src={brand.src} alt={brand.alt} />
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
} 