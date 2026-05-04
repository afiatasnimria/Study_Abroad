import { NAV_LINKS } from '../data';

function Nav({ scrolled }) {
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.85)",
      backdropFilter: "blur(20px)",
      borderBottom: scrolled ? "1px solid rgba(0,0,0,0.08)" : "1px solid rgba(255,255,255,0.2)",
      transition: "all 0.3s ease",
      padding: "0 max(24px, calc((100vw - 1200px)/2))",
      boxShadow: scrolled ? "0 4px 20px rgba(0,0,0,0.08)" : "0 2px 16px rgba(0,0,0,0.04)",
    }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 34, height: 34, background: "linear-gradient(135deg, #1e40af, #1d4ed8)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontSize: 16 }}>🎓</span>
            </div>
            <span style={{ fontWeight: 700, fontSize: 17, letterSpacing: "-0.3px", color: "#1f2937" }}>
              Scholarship<span style={{ color: "#1e40af" }}>Hunt</span>
            </span>
        </div>

        <div className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: 32 }}>
          {NAV_LINKS.map(l => <a key={l} href={`#${l.toLowerCase()}`} className="nav-link">{l}</a>)}
        </div>

        <div className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <button className="pill-btn outline-btn" style={{ fontSize: 13 }}>Sign In</button>
          <button className="pill-btn primary-btn" style={{ fontSize: 13 }}>Get Started →</button>
        </div>

        <button style={{ display: "none", background: "none", border: "none", fontSize: 22, cursor: "pointer" }} className="menu-toggle">☰</button>
      </div>
    </nav>
  );
}

export default Nav;