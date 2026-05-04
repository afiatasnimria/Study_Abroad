import { useState } from 'react';

function Hero() {
  const [searchFocused, setSearchFocused] = useState(false);
  const [query, setQuery] = useState("");

  return (
    <section style={{
      minHeight: "100vh",
      background: "linear-gradient(160deg, #0f172a 0%, #1e3a8a 45%, #1e293b 100%)",
      display: "flex", flexDirection: "column", justifyContent: "center",
      padding: "100px max(24px, calc((100vw - 1200px)/2)) 80px",
      position: "relative", overflow: "hidden",
    }}>
      {/* Subtle grid overlay */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />
      {/* Glow orb */}
      <div style={{ position: "absolute", top: "20%", right: "10%", width: 500, height: 500, background: "radial-gradient(circle, rgba(30,64,175,0.35) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "10%", left: "5%", width: 300, height: 300, background: "radial-gradient(circle, rgba(8,145,178,0.25) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />

      <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center", position: "relative", zIndex: 1 }}>
        {/* Left */}
        <div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 100, padding: "6px 14px", marginBottom: 28, backdropFilter: "blur(8px)" }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#4ADE80", flexShrink: 0, boxShadow: "0 0 0 2px rgba(74,222,128,0.3)" }} />
            <span style={{ fontSize: 12, color: "rgba(255,255,255,0.85)", fontWeight: 500 }}>Trusted by 50,000+ students globally</span>
          </div>

          <h1 className="hero-title" style={{ fontSize: 58, fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, lineHeight: 1.1, color: "#fff", marginBottom: 24, letterSpacing: "-1px" }}>
            Find Scholarships<br />
              <em style={{ fontStyle: "italic", color: "#3b82f6" }}>Without the Scams</em>
            </h1>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: "rgba(255,255,255,0.72)", marginBottom: 36, maxWidth: 480, fontWeight: 300 }}>
            A centralized platform connecting students with verified scholarships, trusted universities, and vetted agencies — zero fraud, full guidance.
          </p>

          {/* Search bar */}
          <div
            className={`search-box ${searchFocused ? "focused" : ""}`}
            style={{ marginBottom: 24, background: "rgba(255,255,255,0.97)" }}
            onClick={() => setSearchFocused(true)}
          >
            <span style={{ fontSize: 18 }}>🔍</span>
            <input
              placeholder="Search scholarships, universities, countries..."
              value={query}
              onChange={e => setQuery(e.target.value)}
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
              style={{ flex: 1, border: "none", background: "transparent", fontSize: 15, color: "#1A1A1A" }}
            />
            <button className="pill-btn primary-btn" style={{ padding: "8px 18px", fontSize: 13 }}>Search</button>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 32 }}>
            {["🇺🇸 USA", "🇬🇧 UK", "🇩🇪 Germany", "🇨🇦 Canada"].map(c => (
              <span key={c} onClick={() => setQuery(c.slice(3))} style={{ fontSize: 12, padding: "5px 12px", borderRadius: 100, background: "rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.85)", cursor: "pointer", border: "1px solid rgba(255,255,255,0.15)", transition: "all 0.18s" }}
                onMouseEnter={e => e.target.style.background = "rgba(255,255,255,0.22)"}
                onMouseLeave={e => e.target.style.background = "rgba(255,255,255,0.12)"}
              >{c}</span>
            ))}
          </div>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <button className="pill-btn primary-btn" style={{ padding: "12px 28px", fontSize: 15 }}>Explore Scholarships →</button>
            <button className="pill-btn ghost-btn" style={{ padding: "12px 24px", fontSize: 15 }}>How it Works</button>
          </div>
        </div>

        {/* Right: floating UI mockup */}
        <div style={{ position: "relative", height: 460, display: "flex", alignItems: "center", justifyContent: "center" }}>
          {/* Main card */}
          <div style={{ background: "#fff", borderRadius: 20, padding: "20px 24px", width: 320, boxShadow: "0 24px 64px rgba(0,0,0,0.35)", position: "relative", zIndex: 2 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
              <span style={{ fontSize: 14, fontWeight: 600, color: "#1A1A1A" }}>DAAD Scholarship 2025</span>
              <span style={{ fontSize: 11, padding: "3px 10px", borderRadius: 100, background: "#E5F5F0", color: "#0D7A5F", fontWeight: 600 }}>Verified ✓</span>
            </div>
            <div style={{ fontSize: 12, color: "#6B7280", marginBottom: 12, display: "flex", gap: 12 }}>
              <span>🇩🇪 Germany</span>
              <span>• Master's</span>
              <span>• Fully Funded</span>
            </div>
            <div style={{ background: "#F8F8F6", borderRadius: 10, padding: "12px 14px", marginBottom: 16 }}>
              <div style={{ fontSize: 11, color: "#9CA3AF", marginBottom: 4 }}>Deadline</div>
              <div style={{ fontSize: 15, fontWeight: 600, color: "#C05621" }}>November 15, 2025</div>
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <button style={{ flex: 1, padding: "10px", borderRadius: 10, background: "#1B3A6B", color: "#fff", border: "none", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>Apply Now</button>
              <button style={{ padding: "10px 14px", borderRadius: 10, background: "#F3F4F6", color: "#374151", border: "none", fontSize: 13, cursor: "pointer" }}>Save</button>
            </div>
          </div>

          {/* Floating badges */}
          <div className="float-a floating-badge" style={{ top: 40, left: -20, zIndex: 3 }}>
            <span style={{ fontSize: 16 }}>🛡️</span>
            <span style={{ color: "#0D7A5F", fontWeight: 600 }}>Scam-Free Platform</span>
          </div>
          <div className="float-b floating-badge" style={{ bottom: 80, right: -30, zIndex: 3 }}>
            <span style={{ fontSize: 16 }}>🎯</span>
            <span style={{ color: "#7B3FA0" }}>AI-Matched for You</span>
          </div>
          <div className="float-a floating-badge" style={{ bottom: 20, left: 10, zIndex: 3, animationDelay: "1s" }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#4ADE80" }} />
            <span style={{ color: "#374151" }}>3 new matches today</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;