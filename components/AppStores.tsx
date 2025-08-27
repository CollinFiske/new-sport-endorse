import Image from 'next/image';
import '../styles/appStores.css';

export default function AppStores() {
  return (
    <div className="app-stores">
      <a target="_blank" href="https://apps.apple.com/gb/app/sport-endorse/id1524881578">
        <div style={{ position: "relative" }} className="app-store-image">
          <Image
            src="/images/appleStore.png"
            alt="App Store"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      </a>
      <a target="_blank" href="https://play.google.com/store/apps/details?id=com.sportendorse.app&pli=1">
        <div style={{ position: "relative" }} className="app-store-image">
          <Image
            src="/images/googlePlay.png"
            alt="Google Play"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      </a>
    </div>
  )
}