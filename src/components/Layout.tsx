import type { ReactNode } from "react";
import AnimatedBackground from "./AnimatedBackground";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-hidden text-white">
      <AnimatedBackground />
      <Navbar />

      <main className="page-enter relative z-10">
        {children}
      </main>

      <Footer />
    </div>
  );
}