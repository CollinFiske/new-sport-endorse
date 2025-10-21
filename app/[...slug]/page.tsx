"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function CatchAllPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect any invalid/non-existent routes to the home page
    router.replace('/home');
  }, [router]);

  return (
    <></>
  );
}