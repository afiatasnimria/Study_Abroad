import { useEffect, useState } from "react";
import "./ScholarshipHuntLanding.css";
import AgencyVerification from "./components/AgencyVerification";
import ApplicationTracker from "./components/ApplicationTracker";
import CTA from "./components/CTA";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";

export default function ScholarshipHuntLanding({ onNavigate }) {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 60);
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<div
			style={{
				fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
				background: "#FAFAF8",
				color: "#1A1A1A",
				overflowX: "hidden",
			}}
		>
			<Nav scrolled={scrolled} onNavigate={onNavigate} />
			<Hero />
			<Stats />
			<Features />
			<ApplicationTracker />
			<AgencyVerification />
			<Testimonials />
			<CTA />
			<Footer />
		</div>
	);
}
