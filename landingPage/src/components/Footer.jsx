function Footer() {
  return (
    <footer style={{ background: "linear-gradient(160deg, #0C1E3E 0%, #1B3A6B 100%)", padding: "60px max(24px, calc((100vw - 1200px)/2)) 40px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 40, marginBottom: 48 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
            <div style={{ width: 32, height: 32, background: "linear-gradient(135deg, #1e3a8a, #1e40af)", borderRadius: 9, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontSize: 14 }}>🎓</span>
            </div>
            <span style={{ fontWeight: 700, fontSize: 16, color: "#fff" }}>ScholarshipHunt</span>
          </div>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", lineHeight: 1.7, maxWidth: 260 }}>
            A trusted ecosystem for students to safely find scholarships and study abroad opportunities without scams.
          </p>
        </div>
        {[
          { title: "Platform", links: ["Scholarships", "Universities", "Agencies", "Track Apps"] },
          { title: "Students", links: ["Register", "Alumni Network", "Resources", "Blog"] },
          { title: "Company", links: ["About", "Mission", "Privacy", "Contact"] },
        ].map(col => (
          <div key={col.title}>
            <div style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.5)", marginBottom: 16, textTransform: "uppercase", letterSpacing: "1px" }}>{col.title}</div>
            {col.links.map(l => (
              <div key={l} style={{ fontSize: 13, color: "rgba(255,255,255,0.35)", marginBottom: 10, cursor: "pointer", transition: "color 0.18s" }}
                onMouseEnter={e => e.target.style.color = "rgba(255,255,255,0.75)"}
                onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.35)"}
              >{l}</div>
            ))}
          </div>
        ))}
      </div>
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 28, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
        <div style={{ fontSize: 12, color: "rgba(255,255,255,0.25)" }}>© 2025 ScholarshipHunt. Built with ReactJS, TanStack, TypeScript & ❤️</div>
        <div style={{ display: "flex", gap: 20 }}>
          {["Twitter", "LinkedIn", "GitHub"].map(s => (
            <span key={s} style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", cursor: "pointer" }}>{s}</span>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;