import React from "react";
import styles from "../styles/brandsGrid.module.css";

interface BrandsGridProps {
  variant?: "8x4" | "5x4";
  label?: string;
}

const brands = [
  // 32 brand logo objects for 8x4 grid
  { src: "/images/homePageTable/Alpro_Logo_Slider.webp", alt: "Alpro logo" },
  { src: "/images/homePageTable/bunq.webp", alt: "Bunq logo" },
  { src: "/images/homePageTable/Energia.webp", alt: "Energia logo" },
  { src: "/images/homePageTable/Factor.webp", alt: "Factor logo" },
  { src: "/images/homePageTable/GrantThornton.webp", alt: "Grant Thornton logo" },
  { src: "/images/homePageTable/Green_Isle_Foods.webp", alt: "Green Isle Foods logo" },
  { src: "/images/homePageTable/INDI_Supplements.webp", alt: "INDI Supplements logo" },
  { src: "/images/homePageTable/LIERAC.webp", alt: "LIERAC logo" },
  { src: "/images/homePageTable/Irish_Citylink.webp", alt: "Irish Citylink logo" },
  { src: "/images/homePageTable/JTM_logo.webp", alt: "JTM logo" },
  { src: "/images/homePageTable/FutureProofPro.webp", alt: "FutureProofPro logo" },
  { src: "/images/homePageTable/Kelloggs_Logo_Slider.webp", alt: "Kellogg's logo" },
  { src: "/images/homePageTable/Lovable.webp", alt: "Lovable logo" },
  { src: "/images/homePageTable/Optimum_Nutrition_Logo.png", alt: "Optimum Nutrition logo" },
  { src: "/images/homePageTable/National-Dairy-Council.webp", alt: "National Dairy Council logo" },
  { src: "/images/homePageTable/Pure_Pharmacy.webp", alt: "Pure Pharmacy logo" },
  { src: "/images/homePageTable/Popeyes_Supplements.webp", alt: "Popeyes Supplements logo" },
  { src: "/images/homePageTable/PricewaterhouseCoopers_Logo.webp", alt: "PricewaterhouseCoopers logo" },
  { src: "/images/homePageTable/ptsb-logo-1.webp", alt: "PTSB logo" },
  { src: "/images/homePageTable/puma.webp", alt: "Puma logo" },
  { src: "/images/homePageTable/Pringles-Logo.png", alt: "Pringles logo" },
  { src: "/images/homePageTable/whoop_logo.png", alt: "Whoop logo" },
  { src: "/images/homePageTable/Shokz.webp", alt: "Shokz logo" },
  { src: "/images/homePageTable/Hard_Rock_Cafe.webp", alt: "Hard Rock Cafe logo" },
  { src: "/images/homePageTable/shuzgroup.webp", alt: "Shuz Group logo" },
  { src: "/images/homePageTable/skechers.webp", alt: "Skechers logo" },
  { src: "/images/homePageTable/Specsaver.webp", alt: "Specsavers logo" },
  { src: "/images/homePageTable/Sports-Direct_Logo_Slider.webp", alt: "Sports Direct logo" },
  { src: "/images/homePageTable/SuperValu.webp", alt: "SuperValu logo" },
  { src: "/images/homePageTable/Tula.webp", alt: "Tula logo" },
  { src: "/images/homePageTable/VHI_Logo_Slider.webp", alt: "VHI logo" },
  { src: "/images/whiteSportEndorseLogo.webp", alt: "sport endorse logo", isButton: true }
];

export default function BrandsGrid({ variant = "8x4", label }: BrandsGridProps) {
  const columns = variant === "8x4" ? 8 : 5;
  const rows = 4;
  const gridBrands = brands.slice(0, columns * rows);

  return (
    <div className={styles.brandsGridWrapper}>
      {label && <p className={styles.label}>{label}</p>}
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