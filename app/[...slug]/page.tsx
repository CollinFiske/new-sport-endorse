"use client";
import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function CatchAllPage() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Detect language from URL and redirect to appropriate root
    const pathSegments = pathname.split('/').filter(segment => segment);
    const firstSegment = pathSegments[0];
    
    let redirectPath = '/'; // Default to English root
    
    if (firstSegment === 'es') {
      redirectPath = '/es';
    } else if (firstSegment === 'de') {
      redirectPath = '/de';
    }
    
    // Redirect any invalid/non-existent routes to the appropriate language root
    router.replace(redirectPath);
  }, [router, pathname]);

  return (
    <></>
  );
}