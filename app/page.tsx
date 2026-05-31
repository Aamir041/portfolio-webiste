"use client";

import { useState } from "react";
import { CursorGlow } from "@/app/components/CursorGlow";
import { Navigation } from "@/app/components/Navigation";
import { Hero } from "@/app/components/Hero";
import { Experience } from "@/app/components/Experience";
import { Work } from "@/app/components/Work";
import { Skills } from "@/app/components/Skills";
import { About } from "@/app/components/About";
import { Contact } from "@/app/components/Contact";
import { Footer } from "@/app/components/Footer";
import { useMouseTracking } from "@/app/hooks/useMouseTracking";
import { useMobileMenu } from "@/app/hooks/useMobileMenu";

export default function Portfolio() {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const mousePos = useMouseTracking();
  const [menuOpen, setMenuOpen] = useMobileMenu();

  return (
    <div className="page-root">
      <CursorGlow x={mousePos.x} y={mousePos.y} />
      <Navigation menuOpen={menuOpen} onMenuToggle={setMenuOpen} />
      <Hero />
      <Experience />
      <Work activeProject={activeProject} onProjectHover={setActiveProject} />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}