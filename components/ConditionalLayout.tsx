"use client";
import { usePathname } from 'next/navigation';
import Header from './Header';
import Footer from './Footer';

export default function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  // Routes where we don't want Header and Footer
  const hideHeaderFooterRoutes = ['/privacy-center'];
  
  const shouldHideHeaderFooter = hideHeaderFooterRoutes.some(route => 
    pathname.startsWith(route)
  );

  if (shouldHideHeaderFooter) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      <main style={{ padding: "70px 20px 0 20px" }}>{children}</main>
      <Footer />
    </>
  );
}