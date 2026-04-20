import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { SatelliteAnimation } from '../components/SatelliteAnimation';
import { Navbar } from '../components/Navbar';

export default function IntroPage() {
  const navigate = useNavigate();
  const [showAnimation, setShowAnimation] = useState(true);

  // Auto scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleComplete = () => {
    setShowAnimation(false);
    navigate('/constellation');
  };

  if (!showAnimation) {
    return null;
  }

  return (
    <>
      <Navbar />
      <SatelliteAnimation onComplete={handleComplete} />
    </>
  );
}