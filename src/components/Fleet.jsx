import { Truck, Navigation, Wrench, UserCheck } from 'lucide-react';
import './Fleet.css';

export default function Fleet() {
  const fleetItems = [
    {
      id: 'modern-trucks',
      icon: <Truck size={32} />,
      title: 'Modern Trucks',
      subtitle: 'Late-Model Fleet',
      description:
        'Late-model Class 8 tractors equipped with advanced fuel efficiency, quiet sleeper cabs, and low-emission power plants.',
    },
    {
      id: 'gps-tracking',
      icon: <Navigation size={32} />,
      title: 'GPS Tracking',
      subtitle: 'Real-Time Visibility',
      description:
        'Continuous satellite positioning and temperature logging to ensure cargo safety and precise ETA forecasts.',
    },
    {
      id: 'regular-maintenance',
      icon: <Wrench size={32} />,
      title: 'Regular Maintenance',
      subtitle: 'Rigorous Inspections',
      description:
        'Strict preventative maintenance protocols performed continuously to eliminate breakdowns and ensure 99% uptime.',
    },
    {
      id: 'professional-drivers',
      icon: <UserCheck size={32} />,
      title: 'Professional Drivers',
      subtitle: 'Safety First',
      description:
        'Vetted, CDL-certified drivers with thousands of accident-free miles and rigorous hazardous materials training.',
    },
  ];

  return (
    <section id="fleet" className="fleet-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Equipment & Personnel</span>
          <h2 className="section-title">Our Modern Fleet</h2>
          <p className="section-description">
            We invest in top-tier equipment and rigorous driver standards to guarantee reliability on every mile of the journey.
          </p>
        </div>

        <div className="fleet-grid">
          {fleetItems.map((item) => (
            <div key={item.id} className="fleet-card">
              <div className="fleet-card-header">
                <div className="fleet-icon">{item.icon}</div>
                <span className="fleet-card-tag">{item.subtitle}</span>
              </div>
              <h3 className="fleet-card-title">{item.title}</h3>
              <p className="fleet-card-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
