"use client";

import { useState } from "react";
import blogsData from "@/app/constants/blogs.json";
import { CursorGlow } from "@/app/components/CursorGlow";
import { Navigation } from "@/app/components/Navigation";
import { Blog } from "@/app/components/Blog";
import { Footer } from "@/app/components/Footer";
import { useMouseTracking } from "@/app/hooks/useMouseTracking";
import { useMobileMenu } from "@/app/hooks/useMobileMenu";

export default function BlogPage() {
  const mousePos = useMouseTracking();
  const [menuOpen, setMenuOpen] = useMobileMenu();

  return (
    <div className="page-root">
      <CursorGlow x={mousePos.x} y={mousePos.y} />
      <Navigation menuOpen={menuOpen} onMenuToggle={setMenuOpen} />
      <Blog />
      <Footer />
    </div>
  );
}
