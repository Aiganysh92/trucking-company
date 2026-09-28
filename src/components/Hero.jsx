import { ArrowRight, ShieldCheck, Clock, MapPin } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span> Premier Logistics & Freight Partner
          </div>
          <h1 className="hero-title">
            Reliable Freight. <br />
            <span className="text-highlight">Delivered On Time.</span>
          </h1>
          <p className="hero-subtitle">
            Professional trucking and logistics solutions across the United States.
            Safe, efficient, and technology-driven transportation for all your supply chain needs.
          </p>

          <div className="hero-buttons">
            <button
              onClick={() => scrollToSection('quote')}
              className="btn btn-hero-primary"
            >
              Get a Quote <ArrowRight size={18} />
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="btn btn-hero-secondary"
            >
              Our Services
            </button>
          </div>

          <div className="hero-highlights">
            <div className="highlight-item">
              <ShieldCheck className="highlight-icon" size={20} />
              <span>Fully Insured & FMCSA Licensed</span>
            </div>
            <div className="highlight-item">
              <Clock className="highlight-icon" size={20} />
              <span>24/7 Live Tracking</span>
            </div>
            <div className="highlight-item">
              <MapPin className="highlight-icon" size={20} />
              <span>48 Continental States</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
