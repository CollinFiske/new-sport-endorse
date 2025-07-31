import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Page() {
  const [imageSize, setImageSize] = useState({ width: 168, height: 50 });

  useEffect(() => {
    const updateImageSize = () => {
      if (window.innerWidth <= 400) {
        setImageSize({ width: 120, height: 36 }); // Maintaining aspect ratio
      } else {
        setImageSize({ width: 168, height: 50 });
      }
    };

    // Set initial size
    updateImageSize();

    // Add event listener for window resize
    window.addEventListener('resize', updateImageSize);

    // Cleanup event listener
    return () => window.removeEventListener('resize', updateImageSize);
  }, []);

  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
        <a target="_blank" href="https://apps.apple.com/gb/app/sport-endorse/id1524881578">
          <Image src="/images/appleStore.png" alt="App Store" width={imageSize.width} height={imageSize.height} />
        </a>
        <a target="_blank" href="https://play.google.com/store/apps/details?id=com.sportendorse.app&pli=1">
          <Image src="/images/googlePlay.png" alt="Google Play" width={imageSize.width} height={imageSize.height} />
        </a>
    </div>
  )

}