import React from 'react';
import './TestPage.css';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';

export default function TestPage() {
  return (
    <div className="test-page">
      <HeroSection />
      <AboutSection />

      {/* 
        ============================================
        Add more redesigned sections below here.
        Everything in this _test-redesign folder is
        isolated from your live site code.
        ============================================
      */}
    </div>
  );
}
