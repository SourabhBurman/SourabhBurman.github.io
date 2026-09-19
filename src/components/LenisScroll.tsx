"use client";
import React from "react";
import { ReactLenis } from "@studio-freight/react-lenis";
import { design } from "@/config/design";

function LenisScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: design.lenis.lerp, duration: design.lenis.duration }}>
      {children}
    </ReactLenis>
  );
}

export default LenisScroll;
