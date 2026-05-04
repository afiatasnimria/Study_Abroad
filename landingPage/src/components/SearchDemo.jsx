import { useState, useRef, useCallback, useEffect } from "react";

const scholarships = [
  {
    id: 1,
    flag: "🇬🇧",
    title: "Chevening Scholarship 2025",
    country: "United Kingdom",
    level: "Master's",
    deadline: "Nov 5, 2025",
    daysLeft: null,
    funded: true,
    verified: false,
  },
  {
    id: 2,
    flag: "🇩🇪",
    title: "DAAD Scholarship 2025",
    country: "Germany",
    level: "Master's",
    deadline: "November 15, 2025",
    daysLeft: "201 days remaining",
    funded: true,
    verified: true,
  },
  {
    id: 3,
    flag: "🇺🇸",
    title: "Fulbright Program 2025",
    country: "United States",
    level: "PhD",
    deadline: "Oct 12, 2025",
    daysLeft: null,
    funded: true,
    verified: false,
  },
  {
    id: 4,
    flag: "🇦🇺",
    title: "Australia Awards 2025",
    country: "Australia",
    level: "Master's",
    deadline: "Apr 30, 2026",
    daysLeft: null,
    funded: true,
    verified: false,
  },
  {
    id: 5,
    flag: "🇯🇵",
    title: "MEXT Scholarship 2025",
    country: "Japan",
    level: "PhD",
    deadline: "May 20, 2025",
    daysLeft: null,
    funded: true,
    verified: false,
  },
];

function CheckIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
      <path d="M2 6l3 3 5-5" stroke="#0d9488" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BookmarkIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
      <path d="M3 2h10a1 1 0 011 1v11l-6-3-6 3V3a1 1 0 011-1z" stroke="#374151" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronLeft() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
      <path d="M10 3L5 8l5 5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
      <path d="M6 3l5 5-5 5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ScholarshipCard({ scholarship, isFeatured, onClick }) {
  const { flag, title, country, level, deadline, daysLeft, funded, verified } = scholarship;

  return (
    <div
      onClick={onClick}
      style={{
        flexShrink: 0,
        width: isFeatured ? 290 : 260,
        background: "#fff",
        borderRadius: 18,
        padding: "22px 22px 18px",
        boxShadow: isFeatured
          ? "0 8px 40px rgba(0,0,0,0.28), 0 0 0 2px rgba(99,102,241,0.35)"
          : "0 4px 24px rgba(0,0,0,0.18)",
        transform: isFeatured ? "translateY(-6px) scale(1.01)" : "scale(0.96)",
        opacity: isFeatured ? 1 : 0.72,
        transition: "all 0.3s cubic-bezier(0.25,0.46,0.45,0.94)",
        cursor: isFeatured ? "default" : "pointer",
        position: "relative",
        zIndex: isFeatured ? 2 : 1,
        fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
      }}
    >
      <span style={{ fontSize: 20, marginBottom: 8, display: "block" }}>{flag}</span>

      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 6, gap: 8 }}>
        <div style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 15.5, fontWeight: 500, color: "#111827", lineHeight: 1.3 }}>
          {title}
        </div>
        {verified && (
          <div style={{
            display: "flex", alignItems: "center", gap: 4,
            fontSize: 11, fontWeight: 500, color: "#0d9488",
            background: "#f0fdf9", border: "1px solid #99f6e4",
            borderRadius: 100, padding: "3px 9px",
            flexShrink: 0, marginTop: 2, whiteSpace: "nowrap",
          }}>
            <CheckIcon /> Verified
          </div>
        )}
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "#6b7280", marginBottom: 14, flexWrap: "wrap" }}>
        <span>{country}</span>
        <span style={{ width: 3, height: 3, borderRadius: "50%", background: "#d1d5db", flexShrink: 0 }} />
        <span>{level}</span>
        {funded && (
          <>
            <span style={{ width: 3, height: 3, borderRadius: "50%", background: "#d1d5db", flexShrink: 0 }} />
            <span style={{
              fontSize: 10.5, fontWeight: 500, color: "#7c3aed",
              background: "#f5f3ff", border: "1px solid #ddd6fe",
              borderRadius: 100, padding: "2px 8px",
            }}>
              Fully Funded
            </span>
          </>
        )}
      </div>

      <div style={{
        background: "#f9fafb", border: "1px solid #f3f4f6",
        borderRadius: 10, padding: "11px 14px", marginBottom: 14,
      }}>
        <div style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.07em", color: "#9ca3af", fontWeight: 500, marginBottom: 3 }}>
          {isFeatured ? "Application Deadline" : "Deadline"}
        </div>
        <div style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 17, fontWeight: 400, color: "#dc6f30" }}>
          {deadline}
        </div>
        {daysLeft && (
          <div style={{ fontSize: 10.5, color: "#9ca3af", marginTop: 2 }}>{daysLeft}</div>
        )}
      </div>

      <div style={{ display: "flex", gap: 8 }}>
        <button
          onClick={(e) => e.stopPropagation()}
          style={{
            flex: 1, background: "#0C1F3F", color: "#fff",
            border: "none", borderRadius: 10, padding: "10px 0",
            fontSize: 13, fontWeight: 500, cursor: "pointer",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          Apply Now
        </button>
        <button
          onClick={(e) => e.stopPropagation()}
          style={{
            background: "#f9fafb", color: "#374151",
            border: "1px solid #e5e7eb", borderRadius: 10,
            padding: "10px 14px", fontSize: 13, cursor: "pointer",
            fontFamily: "'DM Sans', sans-serif",
            display: "flex", alignItems: "center", gap: 5,
          }}
        >
          <BookmarkIcon /> Save
        </button>
      </div>
    </div>
  );
}

export default function SearchDemo() {
  const [current, setCurrent] = useState(1);
  const trackRef = useRef(null);
  const wrapRef = useRef(null);
  const cardRefs = useRef([]);
  const dragRef = useRef({ startX: 0, dragging: false, moved: false });

  const goTo = useCallback((idx) => {
    const clamped = Math.max(0, Math.min(scholarships.length - 1, idx));
    setCurrent(clamped);
  }, []);

  useEffect(() => {
    if (!trackRef.current || !wrapRef.current) return;
    const wrapW = wrapRef.current.offsetWidth;
    let offset = 32;
    for (let i = 0; i < current; i++) {
      const card = cardRefs.current[i];
      if (card) offset += card.offsetWidth + 16;
    }
    const activeCard = cardRefs.current[current];
    const activeW = activeCard ? activeCard.offsetWidth : 260;
    offset -= (wrapW - activeW) / 2;
    trackRef.current.style.transform = `translateX(${-offset}px)`;
  }, [current]);

  const onMouseDown = (e) => {
    dragRef.current = { startX: e.clientX, dragging: true, moved: false };
    if (wrapRef.current) wrapRef.current.style.cursor = "grabbing";
  };

  const onMouseMove = (e) => {
    if (!dragRef.current.dragging) return;
    if (Math.abs(e.clientX - dragRef.current.startX) > 4) dragRef.current.moved = true;
  };

  const onMouseUp = (e) => {
    if (!dragRef.current.dragging) return;
    dragRef.current.dragging = false;
    if (wrapRef.current) wrapRef.current.style.cursor = "grab";
    if (dragRef.current.moved) {
      const dx = e.clientX - dragRef.current.startX;
      if (dx < -40) goTo(current + 1);
      else if (dx > 40) goTo(current - 1);
    }
  };

  const onTouchStart = (e) => {
    dragRef.current = { startX: e.touches[0].clientX, dragging: true, moved: false };
  };

  const onTouchEnd = (e) => {
    if (!dragRef.current.moved) return;
    const dx = e.changedTouches[0].clientX - dragRef.current.startX;
    if (dx < -40) goTo(current + 1);
    else if (dx > 40) goTo(current - 1);
  };

  return (
    <section style={{ padding: "100px max(24px, calc((100vw - 1200px)/2))", background: "#0C1F3F" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:wght@300;400;500&family=DM+Sans:wght@300;400;500&display=swap');
        @keyframes pulse {
          0%,100% { box-shadow: 0 0 0 3px rgba(16,185,129,0.25); }
          50%      { box-shadow: 0 0 0 6px rgba(16,185,129,0.1); }
        }
      `}</style>

      <div style={{
        background: "#0C1F3F",
        borderRadius: 20,
        padding: "36px 0 40px",
        position: "relative",
        overflow: "hidden",
        fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
      }}>
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }} />

        <div style={{
          position: "absolute", width: 400, height: 400, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 70%)",
          top: -100, right: -60, pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", width: 260, height: 260, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 70%)",
          bottom: -40, left: 20, pointerEvents: "none",
        }} />

        <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 32px", marginBottom: 28 }}>
          <div style={{
            display: "flex", alignItems: "center", gap: 7,
            background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.14)",
            borderRadius: 100, padding: "6px 14px 6px 10px",
            fontSize: 13, color: "rgba(255,255,255,0.85)",
          }}>
            <div style={{
              width: 8, height: 8, borderRadius: "50%", background: "#10b981",
              animation: "pulse 2s ease-in-out infinite", flexShrink: 0,
            }} />
            Scam-Free Platform
          </div>

          <div style={{
            display: "flex", alignItems: "center", gap: 7,
            background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 100, padding: "6px 14px",
            fontSize: 12, color: "rgba(255,255,255,0.6)",
          }}>
            <div style={{ width: 14, height: 14, borderRadius: "50%", background: "linear-gradient(135deg,#6366f1,#ec4899)", flexShrink: 0 }} />
            AI-Matched for You
          </div>
        </div>

        <div
          ref={wrapRef}
          style={{ position: "relative", overflow: "hidden", padding: "12px 0 20px", cursor: "grab", userSelect: "none" }}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          onTouchStart={onTouchStart}
          onTouchMove={(e) => { if (Math.abs(e.touches[0].clientX - dragRef.current.startX) > 4) dragRef.current.moved = true; }}
          onTouchEnd={onTouchEnd}
        >
          {[{ dir: "left", action: () => goTo(current - 1) }, { dir: "right", action: () => goTo(current + 1) }].map(({ dir, action }) => (
            <button
              key={dir}
              onClick={(e) => { e.stopPropagation(); action(); }}
              style={{
                position: "absolute", top: "50%", transform: "translateY(-50%)",
                [dir]: 6, zIndex: 10,
                width: 32, height: 32, borderRadius: "50%",
                background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.18)",
                color: "#fff", display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer", backdropFilter: "blur(4px)",
              }}
            >
              {dir === "left" ? <ChevronLeft /> : <ChevronRight />}
            </button>
          ))}

          <div
            ref={trackRef}
            style={{
              display: "flex", gap: 16, padding: "0 32px",
              transition: "transform 0.42s cubic-bezier(0.25,0.46,0.45,0.94)",
              willChange: "transform",
            }}
          >
            {scholarships.map((s, i) => (
              <div key={s.id} ref={(el) => (cardRefs.current[i] = el)}>
                <ScholarshipCard
                  scholarship={s}
                  isFeatured={i === current}
                  onClick={() => { if (!dragRef.current.moved) goTo(i); }}
                />
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center", gap: 6, padding: "0 32px", marginTop: 4 }}>
          {scholarships.map((_, i) => (
            <div
              key={i}
              onClick={() => goTo(i)}
              style={{
                height: 6,
                width: i === current ? 18 : 6,
                borderRadius: i === current ? 3 : "50%",
                background: i === current ? "#fff" : "rgba(255,255,255,0.25)",
                transition: "all 0.2s ease",
                cursor: "pointer",
              }}
            />
          ))}
        </div>

        <div style={{ position: "relative", display: "flex", justifyContent: "center", marginTop: 18, gap: 10, flexWrap: "wrap", padding: "0 32px" }}>
          {[
            { val: "4,800+", label: "verified scholarships", dot: true },
            { val: "3", label: "new matches today", dot: true },
            { val: "0", label: "scam listings" },
          ].map(({ val, label, dot }) => (
            <div key={label} style={{
              display: "flex", alignItems: "center", gap: 6,
              background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 100, padding: "7px 14px",
              fontSize: 12, color: "rgba(255,255,255,0.6)",
            }}>
              {dot && <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#10b981", animation: "pulse 2s ease-in-out infinite" }} />}
              <span style={{ fontSize: 13, fontWeight: 500, color: "rgba(255,255,255,0.88)" }}>{val}</span>
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
