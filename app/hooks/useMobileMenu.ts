import { useState, useEffect } from "react";

export function useMobileMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return [menuOpen, setMenuOpen] as const;
}
