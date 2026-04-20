import React from 'react';
import { useApp } from '../contexts/AppContext';

interface LightBackgroundProps {
  variant?: 'default' | 'circles' | 'orbit';
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'center';
  size?: 'sm' | 'md' | 'lg';
}

export function LightBackground({ variant = 'default', position, size = 'md' }: LightBackgroundProps = {}) {
  const { theme } = useApp();

  // Only hide default variant in dark mode, but show orbit and circles
  if (theme === 'dark' && variant === 'default') return null;

  // Full page background
  if (variant === 'default' && !position) {
    return (
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {/* Base gradient background - very light blue-gray */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-slate-50 to-blue-50/60" />
        
        {/* Large soft circular gradients - very subtle */}
        <div className="absolute top-[-30%] left-[-20%] w-[80%] h-[80%] rounded-full bg-gradient-radial from-blue-200/15 via-blue-100/8 to-transparent blur-[120px]" />
        <div className="absolute top-[-10%] right-[-20%] w-[70%] h-[70%] rounded-full bg-gradient-radial from-sky-200/12 via-sky-100/6 to-transparent blur-[100px]" />
        <div className="absolute bottom-[-20%] left-[10%] w-[75%] h-[75%] rounded-full bg-gradient-radial from-cyan-200/15 via-cyan-100/8 to-transparent blur-[120px]" />
        <div className="absolute top-[30%] right-[5%] w-[60%] h-[60%] rounded-full bg-gradient-radial from-indigo-200/10 via-indigo-100/5 to-transparent blur-[100px]" />
        <div className="absolute bottom-[10%] right-[-10%] w-[65%] h-[65%] rounded-full bg-gradient-radial from-blue-300/12 via-blue-200/6 to-transparent blur-[110px]" />
        <div className="absolute top-[50%] left-[-10%] w-[55%] h-[55%] rounded-full bg-gradient-radial from-violet-200/8 via-violet-100/4 to-transparent blur-[100px]" />
        
        {/* Subtle overlay for smoothness */}
        <div className="absolute inset-0 bg-white/30" />
        
        {/* Very subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgb(148 163 184) 1px, transparent 1px),
              linear-gradient(to bottom, rgb(148 163 184) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
        
        {/* Subtle noise for texture */}
        <div 
          className="absolute inset-0 opacity-[0.02] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
            backgroundSize: '150px 150px'
          }}
        />
      </div>
    );
  }

  // Positioned decorative elements
  const sizeClasses = {
    sm: 'w-[300px] h-[300px]',
    md: 'w-[500px] h-[500px]',
    lg: 'w-[700px] h-[700px]',
  };

  const positionClasses = {
    'top-right': 'top-[-10%] right-[-10%]',
    'top-left': 'top-[-10%] left-[-10%]',
    'bottom-right': 'bottom-[-10%] right-[-10%]',
    'bottom-left': 'bottom-[-10%] left-[-10%]',
    'center': 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
  };

  if (variant === 'circles') {
    return (
      null
    );
  }

  if (variant === 'orbit') {
    return (
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${sizeClasses[size]} pointer-events-none`}>
        <svg viewBox="0 0 200 200" className="w-1/2 h-1/2 opacity-[0.25] dark:opacity-80">
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          {/* 蓝色大椭圆 - 左下倾斜 */}
          <ellipse cx="100" cy="100" rx="70" ry="40" fill="none" stroke="rgb(59 130 246)" strokeWidth="0.5" className="dark:!stroke-[rgb(96,165,250)] dark:!stroke-[1.5]" style={{ filter: theme === 'dark' ? 'url(#glow)' : 'none' }} transform="rotate(-30 100 100)" />
          
          {/* 绿色椭圆 - 右下倾斜 */}
          <ellipse cx="100" cy="100" rx="65" ry="45" fill="none" stroke="rgb(16 185 129)" strokeWidth="0.5" className="dark:!stroke-[rgb(52,211,153)] dark:!stroke-[1.5]" style={{ filter: theme === 'dark' ? 'url(#glow)' : 'none' }} transform="rotate(40 100 100)" />
          
          {/* 粉色/红色椭圆 - 上方倾斜 */}
          <ellipse cx="100" cy="100" rx="50" ry="30" fill="none" stroke="rgb(244 114 182)" strokeWidth="0.5" className="dark:!stroke-[rgb(249,168,212)] dark:!stroke-[1.5]" style={{ filter: theme === 'dark' ? 'url(#glow)' : 'none' }} transform="rotate(-50 100 100)" />
          
          {/* 青色椭圆 - 中心交叉 */}
          <ellipse cx="100" cy="100" rx="45" ry="35" fill="none" stroke="rgb(34 211 238)" strokeWidth="0.5" className="dark:!stroke-[rgb(103,232,249)] dark:!stroke-[1.5]" style={{ filter: theme === 'dark' ? 'url(#glow)' : 'none' }} transform="rotate(10 100 100)" />
          
          {/* 小椭圆 - 右上 */}
          <ellipse cx="100" cy="100" rx="35" ry="20" fill="none" stroke="rgb(167 139 250)" strokeWidth="0.5" className="dark:!stroke-[rgb(196,181,253)] dark:!stroke-[1.5]" style={{ filter: theme === 'dark' ? 'url(#glow)' : 'none' }} transform="rotate(70 100 100)" />
        </svg>
      </div>
    );
  }

  return null;
}