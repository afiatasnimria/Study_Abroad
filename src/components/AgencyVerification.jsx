import { FadeIn } from './shared';

function AgencyVerification() {
  return (
    <section id="agencies" style={{ padding: "100px max(24px, calc((100vw - 1200px)/2))", background: "linear-gradient(160deg, #0C1E3E 0%, #1B3A6B 100%)", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center", position: "relative" }} className="hero-grid">
        {/* Agency check UI */}
        <FadeIn>
          <div style={{ background: "rgba(255,255,255,0.06)", backdropFilter: "blur(16px)", borderRadius: 20, padding: 32, border: "1px solid rgba(255,255,255,0.12)" }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: "rgba(255,255,255,0.6)", marginBottom: 20, textTransform: "uppercase", letterSpacing: "1px" }}>Agency Verification</div>

            <div style={{ display: "flex", gap: 12, marginBottom: 20 }}>
              <input placeholder="Enter agency name or registration number..." style={{ flex: 1, padding: "12px 16px", borderRadius: 12, border: "1.5px solid rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.08)", color: "#fff", fontSize: 14, fontFamily: "inherit" }} />
              <button className="pill-btn primary-btn" style={{ padding: "12px 18px", whiteSpace: "nowrap", background: "#4ADE80", color: "#111", fontWeight: 700 }}>Verify</button>
            </div>

            {/* Result */}
            <div style={{ background: "rgba(13,122,95,0.15)", borderRadius: 14, padding: 20, border: "1px solid rgba(13,122,95,0.3)", marginBottom: 16 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#E5F5F0", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>✅</div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: "#4ADE80" }}>Agency Verified</div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.6)" }}>EduPath Consultancy · Reg: BD-2019-0042</div>
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                {[["Licensed Since", "2019"], ["Students Served", "2,340+"], ["Complaint Rate", "0.2%"], ["Rating", "4.8 / 5"]].map(([k, v]) => (
                  <div key={k} style={{ background: "rgba(255,255,255,0.06)", borderRadius: 10, padding: "10px 12px" }}>
                    <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", marginBottom: 3 }}>{k}</div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: "#fff" }}>{v}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: "rgba(192,86,33,0.15)", borderRadius: 14, padding: 16, border: "1px solid rgba(192,86,33,0.3)", display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ fontSize: 20 }}>⚠️</span>
              <div>
                <div style={{ fontSize: 13, fontWeight: 600, color: "#F97316" }}>GlobalVisa Pro — NOT VERIFIED</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)" }}>3 fraud reports filed. Avoid this agency.</div>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <div style={{ display: "inline-block", fontSize: 12, fontWeight: 600, letterSpacing: "1.5px", textTransform: "uppercase", color: "#0e7490", marginBottom: 16, padding: "4px 14px", background: "#f0fdfa", borderRadius: 100 }}>Agency Verification</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 40, fontWeight: 700, color: "#fff", lineHeight: 1.2, marginBottom: 20 }}>
            Never get scammed by<br />
            <em style={{ color: "#7BBDE4", fontStyle: "italic" }}>fake consultancies</em>
          </h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.65)", lineHeight: 1.7, marginBottom: 28 }}>
            Before paying any consultation fee, verify the agency's credentials in seconds. Our registry flags fraudulent agencies and highlights trusted ones.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {["Government-registered agencies only", "Real-time fraud alerts", "Community-reported scam database", "Official rating and complaint history"].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <span style={{ color: "#4ADE80", fontSize: 16 }}>✦</span>
                <span style={{ fontSize: 14, color: "rgba(255,255,255,0.8)" }}>{item}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export default AgencyVerification;