import { CheckCircle2, Award, Truck, MapPin, Clock } from 'lucide-react';
import './About.css';

export default function About() {
  const stats = [
    {
      id: 1,
      icon: <Award size={28} />,
      value: '10+',
      label: 'Years Experience',
    },
    {
      id: 2,
      icon: <Truck size={28} />,
      value: '50+',
      label: 'Trucks in Fleet',
    },
    {
      id: 3,
      icon: <MapPin size={28} />,
      value: '48',
      label: 'States Covered',
    },
    {
      id: 4,
      icon: <Clock size={28} />,
      value: '99%',
      label: 'On-Time Delivery',
    },
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <span className="section-subtitle">Who We Are</span>
            <h2 className="section-title">Moving America Forward</h2>
            <p className="about-text-lead">
              RoadLine Trucking provides safe, reliable, and efficient transportation services throughout the United States.
            </p>
            <p className="about-text">
              Headquartered in Chicago, Illinois, our mission is to deliver exceptional logistics performance through modern equipment, cutting-edge telemetry, and dedicated professional drivers who prioritize cargo safety and timely arrival.
            </p>

            <ul className="about-features-list">
              <li>
                <CheckCircle2 className="feature-icon" size={20} />
                <span>FMCSA licensed, bonded, and fully insured carrier</span>
              </li>
              <li>
                <CheckCircle2 className="feature-icon" size={20} />
                <span>State-of-the-art telematics and temperature monitoring</span>
              </li>
              <li>
                <CheckCircle2 className="feature-icon" size={20} />
                <span>Experienced, safety-certified professional drivers</span>
              </li>
              <li>
                <CheckCircle2 className="feature-icon" size={20} />
                <span>Seamless nationwide logistics support around the clock</span>
              </li>
            </ul>
          </div>

          <div className="about-stats-card">
            <h3 className="stats-header-title">RoadLine By The Numbers</h3>
            <div className="stats-grid">
              {stats.map((stat) => (
                <div key={stat.id} className="stat-item">
                  <div className="stat-icon">{stat.icon}</div>
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
