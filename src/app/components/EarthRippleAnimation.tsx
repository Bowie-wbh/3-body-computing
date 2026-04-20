import React from 'react';
import { motion } from 'motion/react';
import { useApp } from '../contexts/AppContext';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function EarthRippleAnimation() {
  const { theme } = useApp();

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
      {/* Ripple circles - positioned absolutely from center */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 800">
        <defs>
          <filter id="ripple-glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* First ripple circle */}
        <motion.circle
          cx="400"
          cy="400"
          r="0"
          fill="none"
          stroke={theme === 'dark' ? 'rgb(96, 165, 250)' : 'rgb(59, 130, 246)'}
          strokeWidth={theme === 'dark' ? '1.5' : '1.2'}
          filter="url(#ripple-glow)"
          initial={{ r: 0, opacity: 0 }}
          animate={{ 
            r: [0, 150, 300],
            opacity: [0, 0.8, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeOut',
            delay: 0
          }}
        />

        {/* Second ripple circle */}
        <motion.circle
          cx="400"
          cy="400"
          r="0"
          fill="none"
          stroke={theme === 'dark' ? 'rgb(103, 232, 249)' : 'rgb(34, 211, 238)'}
          strokeWidth={theme === 'dark' ? '1.5' : '1.2'}
          filter="url(#ripple-glow)"
          initial={{ r: 0, opacity: 0 }}
          animate={{ 
            r: [0, 150, 300],
            opacity: [0, 0.8, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeOut',
            delay: 1.67
          }}
        />

        {/* Third ripple circle */}
        <motion.circle
          cx="400"
          cy="400"
          r="0"
          fill="none"
          stroke={theme === 'dark' ? 'rgb(52, 211, 153)' : 'rgb(16, 185, 129)'}
          strokeWidth={theme === 'dark' ? '1.5' : '1.2'}
          filter="url(#ripple-glow)"
          initial={{ r: 0, opacity: 0 }}
          animate={{ 
            r: [0, 150, 300],
            opacity: [0, 0.8, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeOut',
            delay: 3.33
          }}
        />
      </svg>
    </div>
  );
}