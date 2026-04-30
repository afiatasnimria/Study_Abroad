import { FadeIn } from './shared';

function CTA() {
  return (
    <section style={{ padding: "100px max(24px, calc((100vw - 1200px)/2))", background: "linear-gradient(160deg, #c3aad6 0%, #0a0689 100%)", textAlign: "center", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "20%", left: "15%", width: 400, height: 400, background: "radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "10%", right: "10%", width: 300, height: 300, background: "radial-gradient(circle, rgba(168,85,247,0.18) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />

      <FadeIn>
        <div style={{ position: "relative", zIndex: 1 }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 52, fontWeight: 700, color: "#fff", letterSpacing: "-1px", lineHeight: 1.15, marginBottom: 20 }}>
            Your scholarship<br />
            <em style={{ color: "#3b82f6", fontStyle: "italic" }}>is waiting for you</em>
          </h2>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.55)", marginBottom: 40, maxWidth: 480, margin: "0 auto 40px" }}>
            Join 50,000+ students who found verified opportunities through Scholarship Hunt — no scams, no fake agencies.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <button className="pill-btn" style={{ padding: "14px 32px", fontSize: 16, background: "#fff", color: "#111", fontWeight: 700, borderRadius: 100 }}>
              Start for Free →
            </button>
            <button className="pill-btn ghost-btn" style={{ padding: "14px 28px", fontSize: 16 }}>
              Watch Demo
            </button>
          </div>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.35)", marginTop: 20 }}>
            Free forever · No credit card required · 12,000+ verified scholarships
          </p>
        </div>
      </FadeIn>
    </section>
  );
}

export default CTA;