import { ImageResponse } from "next/og";
import { person } from "@/config/person";

export const alt = `${person.firstName} ${person.lastName} — ${person.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#1D1C1C",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          padding: "80px",
          fontFamily: "serif",
        }}
      >
        {/* Top: Name */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 96,
              fontWeight: 500,
              color: "#F5E7D3",
              lineHeight: 0.9,
              textTransform: "uppercase",
              letterSpacing: "-2px",
            }}
          >
            {person.firstName}
          </div>
          <div
            style={{
              fontSize: 96,
              fontWeight: 500,
              color: "#F5E7D3",
              lineHeight: 0.9,
              textTransform: "uppercase",
              letterSpacing: "-2px",
            }}
          >
            {person.lastName}
          </div>
        </div>

        {/* Bottom: Role + Bio */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 28,
              color: "#323816",
              letterSpacing: "4px",
              textTransform: "uppercase",
            }}
          >
            {person.tagline} {person.subTagline}
          </div>
          <div
            style={{
              fontSize: 20,
              color: "rgba(245, 231, 211, 0.6)",
              maxWidth: 700,
              lineHeight: 1.5,
            }}
          >
            {person.heroBio}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
