import { Headphones, Radio, Shield, Award, CheckCircle } from 'lucide-react';
import './WhyChooseUs.css';

export default function WhyChooseUs() {
  const reasons = [
    {
      id: 'dispatch',
      icon: <Headphones size={28} />,
      title: '24/7 Dispatch',
      description: 'Round-the-clock dispatch operations ensuring constant communication and quick issue resolution.',
    },
    {
      id: 'tracking',
      icon: <Radio size={28} />,
      title: 'Real-Time Tracking',
      description: 'Instant GPS tracking updates so you always know where your freight is in real time.',
    },
    {
      id: 'drivers',
      icon: <Award size={28} />,
      title: 'Experienced Drivers',
      description: 'Vetted, highly qualified commercial drivers focused on route safety and punctuality.',
    },
    {
      id: 'safety',
      icon: <Shield size={28} />,
      title: 'Safety First',
      description: 'Comprehensive safety standards, regular vehicle inspections, and strict regulatory compliance.',
    },
    {
      id: 'delivery',
      icon: <CheckCircle size={28} />,
      title: 'Reliable Delivery',
      description: 'Proven track record of 99% on-time delivery across nationwide distribution routes.',
    },
  ];

  return (
    <section className="why-us-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">The RoadLine Advantage</span>
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-description">
            Industry partners choose RoadLine Trucking for our unwavering commitment to performance, safety, and transparency.
          </p>
        </div>

        <div className="why-us-grid">
          {reasons.map((reason) => (
            <div key={reason.id} className="why-us-card">
              <div className="why-us-icon">{reason.icon}</div>
              <h3 className="why-us-card-title">{reason.title}</h3>
              <p className="why-us-card-description">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
