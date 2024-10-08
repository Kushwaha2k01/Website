import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section className="services" id="services">
      <h2>Our Services</h2>
      <div className="service-list">
        <div className="service-item">
          <h3>Game Development</h3>
          <p>We build custom games for all platforms.</p>
        </div>
        <div className="service-item">
          <h3>Game Testing</h3>
          <p>Our testing services ensure your game is bug-free.</p>
        </div>
        <div className="service-item">
          <h3>Esports Solutions</h3>
          <p>We provide complete esports management services.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
