import { Truck, PackageCheck, Zap, ShieldAlert } from 'lucide-react';
import './Services.css';

export default function Services() {
  const servicesList = [
    {
      id: 'ftl',
      icon: <Truck size={36} />,
      title: 'Full Truckload (FTL)',
      description:
        'Dedicated dry-van and flatbed capacity for high-volume freight across all 48 states with direct point-to-point transit.',
    },
    {
      id: 'ltl',
      icon: <PackageCheck size={36} />,
      title: 'Less Than Truckload (LTL)',
      description:
        'Cost-effective freight solutions for smaller shipments, offering consolidated routes, real-time tracking, and optimal care.',
    },
    {
      id: 'expedited',
      icon: <Zap size={36} />,
      title: 'Expedited Freight',
      description:
        'Time-critical delivery services with team drivers for uninterrupted transit, ensuring your urgent shipments arrive on schedule.',
    },
    {
      id: 'dedicated',
      icon: <ShieldAlert size={36} />,
      title: 'Dedicated Transportation',
      description:
        'Tailored fleet management and customized equipment allocations designed to meet your company’s ongoing logistical demands.',
    },
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Comprehensive Fleet Capabilities</span>
          <h2 className="section-title">Our Transportation Services</h2>
          <p className="section-description">
            We deliver customizable logistics solutions engineered to maintain safety, predictability, and efficiency in your supply chain.
          </p>
        </div>

        <div className="services-grid">
          {servicesList.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon-wrapper">{service.icon}</div>
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
