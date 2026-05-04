import { TRACKER_STAGES } from '../data';
import { FadeIn } from './shared';

function ApplicationTracker() {
  return (
    <section id="track" style={{ padding: "100px max(24px, calc((100vw - 1200px)/2))", background: "#fff" }}>
      <FadeIn>
        <div style={{ textAlign: "center", marginBottom: 60 }}>
            <div style={{ display: "inline-block", fontSize: 12, fontWeight: 600, letterSpacing: "1.5px", textTransform: "uppercase", color: "#0e7490", marginBottom: 16, padding: "4px 14px", background: "#f0fdfa", borderRadius: 100 }}>Application Tracker</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 44, fontWeight: 700, color: "#111", letterSpacing: "-0.8px", lineHeight: 1.2 }}>
            Never miss a step in<br />your journey
          </h2>
        </div>
      </FadeIn>

      <FadeIn delay={80}>
        <div style={{ background: "#FAFAF8", borderRadius: 20, padding: 40, border: "1px solid #E8E8E2", maxWidth: 860, margin: "0 auto" }}>
          {/* Progress bar */}
          <div style={{ display: "flex", alignItems: "center", gap: 0, marginBottom: 40, position: "relative" }}>
            <div style={{ position: "absolute", left: 16, right: 16, top: 16, height: 2, background: "#E5E7EB", zIndex: 0 }} />
            <div style={{ position: "absolute", left: 16, top: 16, height: 2, width: "55%", background: "linear-gradient(90deg, #1B3A6B, #7B3FA0)", zIndex: 1, transition: "width 0.8s" }} />
            {TRACKER_STAGES.map((s, i) => (
              <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 10, position: "relative", zIndex: 2 }}>
                <div className="stage-dot" style={{ background: s.active ? s.color : "#E5E7EB", color: s.active ? "#fff" : "#9CA3AF", fontSize: 14 }}>
                  {s.active ? "✓" : i + 1}
                </div>
                <div style={{ fontSize: 12, fontWeight: 500, color: s.active ? s.color : "#9CA3AF", textAlign: "center" }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Current stage detail */}
          <div style={{ background: "#fff", borderRadius: 16, padding: 28, border: "1.5px solid #7B3FA0", borderLeft: "4px solid #7B3FA0" }}>
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 16 }}>
              <div>
                <div style={{ fontSize: 12, color: "#7B3FA0", fontWeight: 600, marginBottom: 6, textTransform: "uppercase", letterSpacing: "1px" }}>Current Stage</div>
                <div style={{ fontSize: 20, fontWeight: 700, color: "#111" }}>Interview Stage</div>
              </div>
              <span style={{ fontSize: 11, padding: "4px 12px", borderRadius: 100, background: "#F3EAF9", color: "#7B3FA0", fontWeight: 600 }}>Action Required</span>
            </div>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <div style={{ flex: 1, minWidth: 160, background: "#F8F8F6", borderRadius: 12, padding: "14px 16px" }}>
                <div style={{ fontSize: 11, color: "#9CA3AF", marginBottom: 4 }}>Scholarship</div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#111" }}>DAAD 2025</div>
              </div>
              <div style={{ flex: 1, minWidth: 160, background: "#F8F8F6", borderRadius: 12, padding: "14px 16px" }}>
                <div style={{ fontSize: 11, color: "#9CA3AF", marginBottom: 4 }}>Interview Date</div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#C05621" }}>Oct 28, 2025</div>
              </div>
              <div style={{ flex: 1, minWidth: 160, background: "#F8F8F6", borderRadius: 12, padding: "14px 16px" }}>
                <div style={{ fontSize: 11, color: "#9CA3AF", marginBottom: 4 }}>Preparation</div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#0D7A5F" }}>3 resources ready</div>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

export default ApplicationTracker;