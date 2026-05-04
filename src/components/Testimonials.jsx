import { TESTIMONIALS } from '../data';
import { FadeIn } from './shared';

function Testimonials() {
  return (
    <section id="alumni" style={{ padding: "100px max(24px, calc((100vw - 1200px)/2))", background: "#FAFAF8" }}>
      <FadeIn>
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <div style={{ display: "inline-block", fontSize: 12, fontWeight: 600, letterSpacing: "1.5px", textTransform: "uppercase", color: "#dc2626", marginBottom: 16, padding: "4px 14px", background: "#fef2f2", borderRadius: 100 }}>Student Stories</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 44, fontWeight: 700, color: "#111", letterSpacing: "-0.8px" }}>
            Real students, real results
          </h2>
        </div>
      </FadeIn>

      <div className="testi-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
        {TESTIMONIALS.map((t, i) => (
          <FadeIn key={i} delay={i * 80}>
            <div className="testi-card">
              <div style={{ fontSize: 28, color: "#E5E7EB", fontFamily: "serif", lineHeight: 1, marginBottom: 16 }}>"</div>
              <p style={{ fontSize: 15, lineHeight: 1.75, color: "#374151", marginBottom: 24 }}>{t.text}</p>
              <div style={{ display: "flex", alignItems: "center", gap: 12, borderTop: "1px solid #F3F4F6", paddingTop: 18 }}>
                <div style={{ width: 40, height: 40, borderRadius: "50%", background: t.bg, color: t.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, flexShrink: 0 }}>{t.initials}</div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "#111" }}>{t.name}</div>
                  <div style={{ fontSize: 12, color: "#9CA3AF" }}>{t.country}</div>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;