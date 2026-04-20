import React from 'react';
import { motion } from 'motion/react';
import { useApp } from '../contexts/AppContext';

interface OrbitDecorationProps {
  variant?: 'orbit' | 'circles' | 'grid';
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center';
  size?: 'sm' | 'md' | 'lg';
}

export function OrbitDecoration({ 
  variant = 'orbit', 
  position = 'top-right',
  size = 'md' 
}: OrbitDecorationProps) {
  const { theme } = useApp();

  const sizeMap = {
    sm: 300,
    md: 500,
    lg: 700,
  };

  const actualSize = sizeMap[size];

  const positionClasses = {
    'top-left': 'top-0 left-0 -translate-x-1/2 -translate-y-1/2',
    'top-right': 'top-0 right-0 translate-x-1/2 -translate-y-1/2',
    'bottom-left': 'bottom-0 left-0 -translate-x-1/2 translate-y-1/2',
    'bottom-right': 'bottom-0 right-0 translate-x-1/2 translate-y-1/2',
    'center': 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
  };

  const strokeColor = theme === 'dark' 
    ? 'rgba(59, 130, 246, 0.15)' 
    : 'rgba(59, 130, 246, 0.12)';
  
  const accentColor = theme === 'dark'
    ? 'rgba(34, 211, 238, 0.4)'
    : 'rgba(6, 182, 212, 0.3)';

  if (variant === 'orbit') {
    return (
      <div className={`absolute ${positionClasses[position]} pointer-events-none overflow-hidden`}>
        <svg width={actualSize} height={actualSize} viewBox="0 0 500 500">
          {/* Outer orbit */}
          <motion.ellipse
            cx="250"
            cy="250"
            rx="220"
            ry="220"
            fill="none"
            stroke={theme === 'dark' ? 'rgba(59, 130, 246, 0.35)' : strokeColor}
            strokeWidth={theme === 'dark' ? '2' : '1.5'}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 250 250"
              to="360 250 250"
              dur="60s"
              repeatCount="indefinite"
            />
          </motion.ellipse>
          
          {/* Middle orbit */}
          <motion.ellipse
            cx="250"
            cy="250"
            rx="160"
            ry="160"
            fill="none"
            stroke={theme === 'dark' ? 'rgba(34, 211, 238, 0.3)' : strokeColor}
            strokeWidth={theme === 'dark' ? '2' : '1.5'}
            transform="rotate(45 250 250)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 0.2, ease: "easeOut" }}
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="45 250 250"
              to="405 250 250"
              dur="45s"
              repeatCount="indefinite"
            />
          </motion.ellipse>
          
          {/* Inner orbit */}
          <motion.ellipse
            cx="250"
            cy="250"
            rx="100"
            ry="100"
            fill="none"
            stroke={theme === 'dark' ? 'rgba(52, 211, 153, 0.25)' : strokeColor}
            strokeWidth={theme === 'dark' ? '2' : '1.5'}
            transform="rotate(-30 250 250)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 0.4, ease: "easeOut" }}
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="-30 250 250"
              to="330 250 250"
              dur="50s"
              repeatCount="indefinite"
            />
          </motion.ellipse>
          
          {/* Satellite dots */}
          <motion.circle
            cx="250"
            cy="30"
            r="6"
            fill={theme === 'dark' ? 'rgba(34, 211, 238, 0.7)' : accentColor}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 2 }}
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 250 250"
              to="360 250 250"
              dur="20s"
              repeatCount="indefinite"
            />
          </motion.circle>
          
          <motion.circle
            cx="90"
            cy="250"
            r="5"
            fill={theme === 'dark' ? 'rgba(52, 211, 153, 0.6)' : accentColor}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 2.2 }}
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 250 250"
              to="360 250 250"
              dur="15s"
              repeatCount="indefinite"
            />
          </motion.circle>
          
          <motion.circle
            cx="250"
            cy="470"
            r="4"
            fill={theme === 'dark' ? 'rgba(59, 130, 246, 0.65)' : accentColor}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 2.4 }}
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 250 250"
              to="360 250 250"
              dur="25s"
              repeatCount="indefinite"
            />
          </motion.circle>
        </svg>
      </div>
    );
  }

  if (variant === 'circles') {
    return (
      <div className={`absolute ${positionClasses[position]} pointer-events-none overflow-hidden`}>
        <svg width={actualSize} height={actualSize} viewBox="0 0 500 500">
          {/* Large circle */}
          <motion.circle
            cx="150"
            cy="150"
            r="180"
            fill="none"
            stroke={strokeColor}
            strokeWidth="2"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          
          {/* Medium circle */}
          <motion.circle
            cx="350"
            cy="250"
            r="140"
            fill="none"
            stroke={strokeColor}
            strokeWidth="2"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
          />
          
          {/* Small circle */}
          <motion.circle
            cx="200"
            cy="350"
            r="90"
            fill="none"
            stroke={strokeColor}
            strokeWidth="2"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
          />
          
          {/* Glow circles */}
          <motion.circle
            cx="150"
            cy="150"
            r="8"
            fill={accentColor}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.circle
            cx="350"
            cy="250"
            r="6"
            fill={accentColor}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 3, delay: 1, repeat: Infinity }}
          />
        </svg>
      </div>
    );
  }

  // Grid variant
  return (
    <div className={`absolute ${positionClasses[position]} pointer-events-none overflow-hidden opacity-30`}>
      <svg width={actualSize} height={actualSize} viewBox="0 0 500 500">
        <defs>
          <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
            <path
              d="M 50 0 L 0 0 0 50"
              fill="none"
              stroke={strokeColor}
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="500" height="500" fill="url(#grid)" />
        
        {/* Accent lines */}
        <motion.line
          x1="0"
          y1="250"
          x2="500"
          y2="250"
          stroke={accentColor}
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        <motion.line
          x1="250"
          y1="0"
          x2="250"
          y2="500"
          stroke={accentColor}
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
        />
      </svg>
    </div>
  );
}