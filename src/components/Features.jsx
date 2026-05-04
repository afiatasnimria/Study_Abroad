import { FEATURES } from '../data';
import { FadeIn } from './shared';

function Features() {
  return (
    <section id="features" style={{ padding: "100px max(24px, calc((100vw - 1200px)/2))", background: "#FAFAF8" }}>
      <FadeIn>
        <div style={{ textAlign: "center", marginBottom: 60 }}>
            <div style={{ display: "inline-block", fontSize: 12, fontWeight: 600, letterSpacing: "1.5px", textTransform: "uppercase", color: "#1e40af", marginBottom: 16, padding: "4px 14px", background: "#f1f5f9", borderRadius: 100 }}>Platform Features</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 44, fontWeight: 700, letterSpacing: "-0.8px", color: "#111", lineHeight: 1.2 }}>
            Everything you need to<br />
            <span className="gradient-text">study abroad safely</span>
          </h2>
        </div>
      </FadeIn>

      <div className="features-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
        {FEATURES.map((f, i) => (
          <FadeIn key={i} delay={i * 80}>
            <div className="feature-card">
              <div style={{ width: 48, height: 48, borderRadius: 14, background: f.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, marginBottom: 18 }}>
                {f.icon}
              </div>
              <h3 style={{ fontSize: 17, fontWeight: 600, color: "#111", marginBottom: 10 }}>{f.title}</h3>
              <p style={{ fontSize: 14, color: "#6B7280", lineHeight: 1.7 }}>{f.desc}</p>
              <div style={{ marginTop: 16, display: "flex", alignItems: "center", gap: 4, fontSize: 13, fontWeight: 600, color: f.accent, cursor: "pointer" }}>
                Learn more <span style={{ fontSize: 16 }}>→</span>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

export default Features;