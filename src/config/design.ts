// ============================================================
// DESIGN SYSTEM CONFIG — Tweak colors, fonts, and animations
// ============================================================

export const design = {
  // ── Color Palette ─────────────────────────────────────────
  colors: {
    light: {
      bg: "#F5E7D3",
      text: "#AC4800",
      text80: "rgba(172, 72, 0, 0.8)",
      text60: "rgba(172, 72, 0, 0.6)",
      text20: "rgba(172, 72, 0, 0.2)",
    },
    dark: {
      bg: "#1D1C1C",
      text: "#F5E7D3",
      text80: "rgba(245, 231, 211, 0.8)",
      text60: "rgba(245, 231, 211, 0.6)",
      text20: "rgba(245, 231, 211, 0.2)",
    },
    accent: "#323816",
  },

  // ── Animation Easings ─────────────────────────────────────
  easings: {
    primary: [0.83, 0, 0.17, 1] as const,
    secondary: [0.65, 0, 0.35, 1] as const,
    smooth: [0.25, 1, 0.5, 1] as const,
  },

  // ── Lenis Scroll Config ───────────────────────────────────
  lenis: {
    lerp: 0.1,
    duration: 1.5,
  },
};
