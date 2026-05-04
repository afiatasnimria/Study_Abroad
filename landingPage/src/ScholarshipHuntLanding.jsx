import { useState, useEffect } from "react";
import './ScholarshipHuntLanding.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Features from './components/Features';
import ApplicationTracker from './components/ApplicationTracker';
import AgencyVerification from './components/AgencyVerification';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function ScholarshipHuntLanding() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{ fontFamily: "'DM Sans', 'Segoe UI', sans-serif", background: "#FAFAF8", color: "#1A1A1A", overflowX: "hidden" }}>
      <Nav scrolled={scrolled} />
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