import { STATS } from '../data';

function Stats() {
  return (
    <section style={{ background: "#1e3a8a", padding: "52px max(24px, calc((100vw - 1200px)/2))" }}>
      <div className="stats-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 1, background: "rgba(255,255,255,0.08)" }}>
        {STATS.map((s, i) => (
          <div key={i} style={{ background: "#1e3a8a", padding: "32px 24px", textAlign: "center" }}>
            <div style={{ fontSize: 38, fontWeight: 700, color: "#fff", letterSpacing: "-1px", fontFamily: "'Playfair Display', serif" }}>{s.value}</div>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", marginTop: 6, fontWeight: 400 }}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;