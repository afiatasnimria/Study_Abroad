import { useCallback, useEffect, useRef, useState } from "react";

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
		badge: "Scam-Free Platform",
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
		badge: "AI-Matched for You",
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
		badge: "Scam-Free Platform",
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
		badge: "AI-Matched for You",
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
		badge: "Scam-Free Platform",
	},
];

function CheckIcon() {
	return (
		<svg width="11" height="11" viewBox="0 0 12 12" fill="none">
			<path
				d="M2 6l3 3 5-5"
				stroke="#0d9488"
				strokeWidth="1.8"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

function BookmarkIcon() {
	return (
		<svg width="13" height="13" viewBox="0 0 16 16" fill="none">
			<path
				d="M3 2h10a1 1 0 011 1v11l-6-3-6 3V3a1 1 0 011-1z"
				stroke="#374151"
				strokeWidth="1.4"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

function ChevronLeft() {
	return (
		<svg width="14" height="14" viewBox="0 0 16 16" fill="none">
			<path
				d="M10 3L5 8l5 5"
				stroke="#fff"
				strokeWidth="1.8"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

function ChevronRight() {
	return (
		<svg width="14" height="14" viewBox="0 0 16 16" fill="none">
			<path
				d="M6 3l5 5-5 5"
				stroke="#fff"
				strokeWidth="1.8"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

function ModernScholarshipCard({ scholarship, isActive, index, totalCards }) {
	const { flag, title, country, level, deadline, daysLeft, funded, verified } =
		scholarship;

	return (
		<div
			style={{
				position: "absolute",
				width: "100%",
				height: "100%",
				top: 0,
				left: 0,
				opacity: isActive ? 1 : 0,
				transform: isActive
					? "scale(1) translateX(0)"
					: index > totalCards / 2
						? "scale(0.85) translateX(100px)"
						: "scale(0.85) translateX(-100px)",
				transition: "all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)",
				pointerEvents: isActive ? "auto" : "none",
				background: "#fff",
				borderRadius: 20,
				padding: "28px",
				boxShadow: isActive
					? "0 20px 60px rgba(0,0,0,0.3), 0 0 0 2px rgba(99,102,241,0.35)"
					: "0 10px 40px rgba(0,0,0,0.15)",
				fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
			}}
		>
			<div style={{ marginBottom: 16 }}>
				<span style={{ fontSize: 28 }}>{flag}</span>
			</div>

			<div
				style={{
					display: "flex",
					alignItems: "flex-start",
					justifyContent: "space-between",
					marginBottom: 12,
					gap: 8,
				}}
			>
				<div
					style={{
						fontFamily: "'Fraunces', Georgia, serif",
						fontSize: 18,
						fontWeight: 500,
						color: "#111827",
						lineHeight: 1.3,
						flex: 1,
					}}
				>
					{title}
				</div>
				{verified && (
					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: 4,
							fontSize: 11,
							fontWeight: 500,
							color: "#0d9488",
							background: "#f0fdf9",
							border: "1px solid #99f6e4",
							borderRadius: 100,
							padding: "4px 10px",
							flexShrink: 0,
							whiteSpace: "nowrap",
						}}
					>
						<CheckIcon /> Verified
					</div>
				)}
			</div>

			<div
				style={{
					display: "flex",
					alignItems: "center",
					gap: 8,
					fontSize: 13,
					color: "#6b7280",
					marginBottom: 18,
					flexWrap: "wrap",
				}}
			>
				<span style={{ fontWeight: 500 }}>{country}</span>
				<span
					style={{
						width: 4,
						height: 4,
						borderRadius: "50%",
						background: "#d1d5db",
					}}
				/>
				<span>{level}</span>
				{funded && (
					<>
						<span
							style={{
								width: 4,
								height: 4,
								borderRadius: "50%",
								background: "#d1d5db",
							}}
						/>
						<span
							style={{
								fontSize: 11,
								fontWeight: 600,
								color: "#7c3aed",
								background: "#f5f3ff",
								border: "1px solid #ddd6fe",
								borderRadius: 100,
								padding: "3px 10px",
							}}
						>
							Fully Funded
						</span>
					</>
				)}
			</div>

			<div
				style={{
					background: "#f9fafb",
					border: "1px solid #f3f4f6",
					borderRadius: 12,
					padding: "14px 16px",
					marginBottom: 20,
				}}
			>
				<div
					style={{
						fontSize: 10,
						textTransform: "uppercase",
						letterSpacing: "0.08em",
						color: "#9ca3af",
						fontWeight: 600,
						marginBottom: 4,
					}}
				>
					Application Deadline
				</div>
				<div
					style={{
						fontFamily: "'Fraunces', Georgia, serif",
						fontSize: 19,
						fontWeight: 500,
						color: "#dc6f30",
					}}
				>
					{deadline}
				</div>
				{daysLeft && (
					<div style={{ fontSize: 11, color: "#9ca3af", marginTop: 3 }}>
						{daysLeft}
					</div>
				)}
			</div>

			<div style={{ display: "flex", gap: 10 }}>
				<button
					style={{
						flex: 1,
						background: "#0C1F3F",
						color: "#fff",
						border: "none",
						borderRadius: 12,
						padding: "12px 0",
						fontSize: 14,
						fontWeight: 600,
						cursor: "pointer",
						fontFamily: "'DM Sans', sans-serif",
						transition: "all 0.3s ease",
					}}
					onMouseEnter={(e) => (e.target.style.transform = "translateY(-2px)")}
					onMouseLeave={(e) => (e.target.style.transform = "translateY(0)")}
				>
					Apply Now
				</button>
				<button
					style={{
						background: "#f9fafb",
						color: "#374151",
						border: "1px solid #e5e7eb",
						borderRadius: 12,
						padding: "12px 16px",
						fontSize: 14,
						cursor: "pointer",
						fontFamily: "'DM Sans', sans-serif",
						display: "flex",
						alignItems: "center",
						gap: 6,
						transition: "all 0.3s ease",
					}}
					onMouseEnter={(e) => (e.target.style.background = "#f3f4f6")}
					onMouseLeave={(e) => (e.target.style.background = "#f9fafb")}
				>
					<BookmarkIcon /> Save
				</button>
			</div>
		</div>
	);
}

export default function SearchDemo() {
	const [current, setCurrent] = useState(0);
	const [isHovering, setIsHovering] = useState(false);
	const timerRef = useRef(null);

	const goTo = useCallback((idx) => {
		const clamped = idx % scholarships.length;
		setCurrent(clamped >= 0 ? clamped : scholarships.length + clamped);
	}, []);

	useEffect(() => {
		if (isHovering) {
			if (timerRef.current) clearInterval(timerRef.current);
			return;
		}

		timerRef.current = setInterval(() => {
			setCurrent((prev) => (prev + 1) % scholarships.length);
		}, 5000);

		return () => {
			if (timerRef.current) clearInterval(timerRef.current);
		};
	}, [isHovering]);

	return (
		<section
			style={{
				padding: "100px max(24px, calc((100vw - 1200px)/2))",
				background: "#0C1F3F",
			}}
		>
			<style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:wght@300;400;500&family=DM+Sans:wght@300;400;500;600&display=swap');
        @keyframes pulse {
          0%,100% { box-shadow: 0 0 0 3px rgba(16,185,129,0.25); }
          50%      { box-shadow: 0 0 0 6px rgba(16,185,129,0.1); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
      `}</style>

			<div
				style={{
					background: "#0C1F3F",
					borderRadius: 24,
					padding: "48px 0 56px",
					position: "relative",
					overflow: "hidden",
					fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
				}}
			>
				{/* Background effects */}
				<div
					style={{
						position: "absolute",
						inset: 0,
						pointerEvents: "none",
						backgroundImage:
							"linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
						backgroundSize: "40px 40px",
					}}
				/>

				<div
					style={{
						position: "absolute",
						width: 500,
						height: 500,
						borderRadius: "50%",
						background:
							"radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)",
						top: -150,
						right: -100,
						pointerEvents: "none",
						animation: "float 6s ease-in-out infinite",
					}}
				/>
				<div
					style={{
						position: "absolute",
						width: 300,
						height: 300,
						borderRadius: "50%",
						background:
							"radial-gradient(circle, rgba(16,185,129,0.1) 0%, transparent 70%)",
						bottom: -50,
						left: 50,
						pointerEvents: "none",
					}}
				/>

				{/* Header with badges */}
				<div
					style={{
						position: "relative",
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						padding: "0 40px",
						marginBottom: 36,
						gap: 20,
						flexWrap: "wrap",
					}}
				>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: 8,
							background: "rgba(255,255,255,0.08)",
							border: "1px solid rgba(255,255,255,0.15)",
							borderRadius: 100,
							padding: "7px 16px",
							fontSize: 13,
							color: "rgba(255,255,255,0.85)",
							fontWeight: 500,
						}}
					>
						<div
							style={{
								width: 8,
								height: 8,
								borderRadius: "50%",
								background: "#10b981",
								animation: "pulse 2s ease-in-out infinite",
								flexShrink: 0,
							}}
						/>
						Scam-Free Platform
					</div>

					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: 8,
							background: "rgba(255,255,255,0.06)",
							border: "1px solid rgba(255,255,255,0.1)",
							borderRadius: 100,
							padding: "7px 16px",
							fontSize: 12,
							color: "rgba(255,255,255,0.6)",
							fontWeight: 500,
						}}
					>
						<div
							style={{
								width: 10,
								height: 10,
								borderRadius: "50%",
								background: "linear-gradient(135deg,#6366f1,#ec4899)",
								flexShrink: 0,
							}}
						/>
						AI-Matched for You
					</div>
				</div>

				{/* Main Carousel Container */}
				<div
					style={{
						position: "relative",
						padding: "0 40px",
						marginBottom: 32,
						height: 480,
					}}
					onMouseEnter={() => setIsHovering(true)}
					onMouseLeave={() => setIsHovering(false)}
				>
					{/* Card Container */}
					<div
						style={{
							position: "relative",
							width: "100%",
							height: "100%",
							perspective: "1000px",
						}}
					>
						{scholarships.map((scholarship, idx) => (
							<ModernScholarshipCard
								key={scholarship.id}
								scholarship={scholarship}
								isActive={idx === current}
								index={idx}
								totalCards={scholarships.length}
							/>
						))}
					</div>

					{/* Navigation Buttons */}
					{[
						{ dir: "left", action: () => goTo(current - 1) },
						{ dir: "right", action: () => goTo(current + 1) },
					].map(({ dir, action }) => (
						<button
							key={dir}
							onClick={action}
							style={{
								position: "absolute",
								top: "50%",
								transform: "translateY(-50%)",
								[dir]: -60,
								zIndex: 20,
								width: 44,
								height: 44,
								borderRadius: "50%",
								background: "rgba(255,255,255,0.15)",
								border: "1px solid rgba(255,255,255,0.25)",
								color: "#fff",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								cursor: "pointer",
								backdropFilter: "blur(8px)",
								transition: "all 0.3s ease",
							}}
							onMouseEnter={(e) => {
								e.target.style.background = "rgba(255,255,255,0.25)";
								e.target.style.transform = "translateY(-50%) scale(1.1)";
							}}
							onMouseLeave={(e) => {
								e.target.style.background = "rgba(255,255,255,0.15)";
								e.target.style.transform = "translateY(-50%) scale(1)";
							}}
						>
							{dir === "left" ? <ChevronLeft /> : <ChevronRight />}
						</button>
					))}
				</div>

				{/* Indicator Dots */}
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						gap: 8,
						marginBottom: 28,
					}}
				>
					{scholarships.map((_, i) => (
						<button
							key={i}
							onClick={() => goTo(i)}
							style={{
								height: 8,
								width: i === current ? 28 : 8,
								borderRadius: i === current ? 4 : "50%",
								background:
									i === current
										? "linear-gradient(90deg, #fff 0%, rgba(255,255,255,0.8) 100%)"
										: "rgba(255,255,255,0.2)",
								border: "1px solid rgba(255,255,255,0.1)",
								transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
								cursor: "pointer",
							}}
							onMouseEnter={(e) => {
								if (i !== current)
									e.target.style.background = "rgba(255,255,255,0.3)";
							}}
							onMouseLeave={(e) => {
								if (i !== current)
									e.target.style.background = "rgba(255,255,255,0.2)";
							}}
						/>
					))}
				</div>

				{/* Stats */}
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						gap: 16,
						flexWrap: "wrap",
						padding: "0 40px",
					}}
				>
					{[
						{ val: "4,800+", label: "verified scholarships", dot: true },
						{ val: "3", label: "new matches today", dot: true },
						{ val: "0", label: "scam listings", dot: false },
					].map(({ val, label, dot }) => (
						<div
							key={label}
							style={{
								display: "flex",
								alignItems: "center",
								gap: 8,
								background: "rgba(255,255,255,0.06)",
								border: "1px solid rgba(255,255,255,0.1)",
								borderRadius: 100,
								padding: "8px 16px",
								fontSize: 12,
								color: "rgba(255,255,255,0.6)",
								fontWeight: 500,
							}}
						>
							{dot && (
								<div
									style={{
										width: 6,
										height: 6,
										borderRadius: "50%",
										background: "#10b981",
										animation: "pulse 2s ease-in-out infinite",
									}}
								/>
							)}
							<span
								style={{
									fontSize: 13,
									fontWeight: 600,
									color: "rgba(255,255,255,0.88)",
								}}
							>
								{val}
							</span>
							{label}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
