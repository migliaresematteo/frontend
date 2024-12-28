import React from 'react';
import { Container } from 'react-bootstrap';

const Hero = () => {
  return (
    <div className="bg-primary text-white py-5 mb-5">
      <Container>
        <div className="text-center">
          <h1 className="display-4 fw-bold">Welcome to Harmony Music School</h1>
          <p className="lead">
            Discover the joy of music through expert instruction and passionate teaching
          </p>
          <button className="btn btn-light btn-lg">
            Start Your Musical Journey
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
