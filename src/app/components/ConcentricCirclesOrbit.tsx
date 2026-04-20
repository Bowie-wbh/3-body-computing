import React from 'react';
import { motion } from 'motion/react';
import { useApp } from '../contexts/AppContext';

interface ConcentricCirclesOrbitProps {
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'center';
  size?: 'sm' | 'md' | 'lg';
}

export function ConcentricCirclesOrbit({ 
  position = 'top-right', 
  size = 'md' 
}: ConcentricCirclesOrbitProps) {
  const { theme } = useApp();

  // Size configurations
  const sizeConfig = {
    sm: { radius: [80, 120, 160], dotSize: 6, containerSize: 350 },
    md: { radius: [120, 180, 240], dotSize: 8, containerSize: 500 },
    lg: { radius: [160, 240, 320], dotSize: 10, containerSize: 650 },
  };

  const config = sizeConfig[size];

  // Position configurations
  const positionStyles = {
    'top-right': 'top-0 right-0 translate-x-1/4 -translate-y-1/4',
    'top-left': 'top-0 left-0 -translate-x-1/4 -translate-y-1/4',
    'bottom-right': 'bottom-0 right-0 translate-x-1/4 translate-y-1/4',
    'bottom-left': 'bottom-0 left-0 -translate-x-1/4 translate-y-1/4',
    'center': 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
  };

  // Three circles with different properties
  const circles = [
    { 
      radius: config.radius[0], 
      duration: 15, 
      dotCount: 2,
      color: theme === 'dark' ? 'rgba(96, 165, 250, 0.3)' : 'rgba(59, 130, 246, 0.4)',
      glowColor: theme === 'dark' ? 'rgb(96, 165, 250)' : 'rgb(59, 130, 246)',
    },
    { 
      radius: config.radius[1], 
      duration: 20, 
      dotCount: 3,
      color: theme === 'dark' ? 'rgba(103, 232, 249, 0.3)' : 'rgba(34, 211, 238, 0.4)',
      glowColor: theme === 'dark' ? 'rgb(103, 232, 249)' : 'rgb(34, 211, 238)',
    },
    { 
      radius: config.radius[2], 
      duration: 25, 
      dotCount: 3,
      color: theme === 'dark' ? 'rgba(52, 211, 153, 0.3)' : 'rgba(16, 185, 129, 0.4)',
      glowColor: theme === 'dark' ? 'rgb(52, 211, 153)' : 'rgb(16, 185, 129)',
    },
  ];

  // Generate random offsets for each circle, memoized to prevent re-rendering issues
  const randomOffsets = React.useMemo(() => {
    return circles.map(() => Math.random() * 360);
  }, []);

  return (
    <div 
      className={`absolute ${positionStyles[position]} pointer-events-none`}
      style={{ width: config.containerSize, height: config.containerSize }}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <svg 
          className="absolute inset-0" 
          viewBox={`0 0 ${config.containerSize} ${config.containerSize}`}
          style={{ overflow: 'visible' }}
        >
          <defs>
            {/* Glow filter for circles */}
            <filter id="circle-glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>

            {/* Glow filter for dots */}
            <filter id="dot-glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Draw the three concentric circles */}
          {circles.map((circle, index) => (
            <g key={`circle-${index}`}>
              {/* Circle outline */}
              <circle
                cx={config.containerSize / 2}
                cy={config.containerSize / 2}
                r={circle.radius}
                fill="none"
                stroke={circle.color}
                strokeWidth="1.5"
                filter="url(#circle-glow)"
                opacity="0.6"
              />
            </g>
          ))}
        </svg>

        {/* Rotating light dots on each circle */}
        {circles.map((circle, circleIndex) => (
          <div key={`dots-${circleIndex}`}>
            {Array.from({ length: circle.dotCount }).map((_, dotIndex) => {
              // Random initial angle for each dot instead of evenly distributed
              const randomOffset = randomOffsets[circleIndex];
              const angle = (360 / circle.dotCount) * dotIndex + randomOffset;
              const delay = dotIndex * (circle.duration / circle.dotCount);
              
              return (
                <motion.div
                  key={`dot-${circleIndex}-${dotIndex}`}
                  className="absolute"
                  style={{
                    left: '50%',
                    top: '50%',
                    width: 0,
                    height: 0,
                  }}
                  initial={{
                    rotate: angle,
                  }}
                  animate={{
                    rotate: angle + 360,
                  }}
                  transition={{
                    duration: circle.duration,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: delay,
                  }}
                >
                  <div
                    className="absolute rounded-full"
                    style={{
                      width: config.dotSize * 1.5,
                      height: config.dotSize * 1.5,
                      left: circle.radius,
                      top: 0,
                      transform: 'translate(-50%, -50%)',
                      background: circle.glowColor,
                      boxShadow: `
                        0 0 ${config.dotSize * 3}px ${circle.glowColor},
                        0 0 ${config.dotSize * 6}px ${circle.glowColor},
                        0 0 ${config.dotSize * 10}px ${circle.glowColor}
                      `,
                    }}
                  >
                    {/* Pulsing animation for dots */}
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: circle.glowColor,
                      }}
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [1, 0.3, 1],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: dotIndex * 0.2,
                      }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}