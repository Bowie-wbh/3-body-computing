import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';

export function SatelliteAnimation({ onComplete }: { onComplete: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Earth properties - centered
    const earth = {
      x: canvas.width / 2,
      y: canvas.height / 2,
      radius: 100,
    };

    // Three orbital layers with satellites
    const orbitLayers = [
      {
        radius: 180,
        satellites: [{ angle: 0, speed: 0.008 }],
        color: { r: 255, g: 215, b: 0 }, // Gold
      },
      {
        radius: 240,
        satellites: [{ angle: Math.PI * 0.6, speed: 0.012 }],
        color: { r: 0, g: 255, b: 255 }, // Cyan
      },
      {
        radius: 300,
        satellites: [{ angle: Math.PI * 1.2, speed: 0.006 }],
        color: { r: 255, g: 215, b: 0 }, // Gold
      },
    ];

    let animationFrameId: number;

    // Draw 3D digital earth with dot matrix outline
    const drawDigitalEarth = () => {
      // Draw latitude lines (horizontal circles)
      for (let lat = -1; lat <= 1; lat += 0.5) {
        const y = earth.y + lat * earth.radius * 0.8;
        const radiusAtLat = Math.cos(lat * Math.PI / 2) * earth.radius;
        
        ctx.strokeStyle = `rgba(0, 200, 255, ${0.3 + Math.abs(lat) * 0.1})`;
        ctx.lineWidth = 1;
        ctx.setLineDash([3, 6]);
        ctx.beginPath();
        ctx.ellipse(earth.x, y, radiusAtLat, radiusAtLat * 0.3, 0, 0, Math.PI * 2);
        ctx.stroke();
        ctx.setLineDash([]);
      }

      // Draw longitude lines (vertical arcs)
      for (let lng = 0; lng < 8; lng++) {
        const angle = (lng * Math.PI) / 4;
        
        ctx.strokeStyle = `rgba(0, 200, 255, 0.3)`;
        ctx.lineWidth = 1;
        ctx.setLineDash([3, 6]);
        ctx.beginPath();
        
        for (let i = 0; i <= 50; i++) {
          const theta = (i / 50) * Math.PI;
          const r = Math.sin(theta) * earth.radius;
          const x = earth.x + Math.cos(angle) * r;
          const y = earth.y + (Math.cos(theta) - 1) * earth.radius;
          
          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
        ctx.setLineDash([]);
      }

      // Draw dot matrix on earth surface
      const dots = 200;
      for (let i = 0; i < dots; i++) {
        const lat = Math.acos(2 * Math.random() - 1) - Math.PI / 2;
        const lng = Math.random() * Math.PI * 2;
        
        const r = earth.radius;
        const x = earth.x + Math.cos(lat) * Math.cos(lng) * r;
        const z = Math.cos(lat) * Math.sin(lng) * r;
        const y = earth.y + Math.sin(lat) * r;
        
        // Only draw front-facing dots (simple z-buffer)
        if (z > -r * 0.3) {
          const brightness = (z + r) / (r * 2);
          ctx.fillStyle = `rgba(0, 255, 255, ${brightness * 0.4})`;
          ctx.beginPath();
          ctx.arc(x, y, 1.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Central glow
      const gradient = ctx.createRadialGradient(
        earth.x,
        earth.y,
        earth.radius * 0.3,
        earth.x,
        earth.y,
        earth.radius * 1.2
      );
      gradient.addColorStop(0, 'rgba(0, 200, 255, 0.1)');
      gradient.addColorStop(1, 'rgba(0, 200, 255, 0)');
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(earth.x, earth.y, earth.radius * 1.2, 0, Math.PI * 2);
      ctx.fill();
    };

    // Draw orbital rings
    const drawOrbit = (radius: number, color: { r: number; g: number; b: number }) => {
      ctx.strokeStyle = `rgba(${color.r}, ${color.g}, ${color.b}, 0.5)`;
      ctx.lineWidth = 1.5;
      ctx.setLineDash([8, 12]);
      ctx.beginPath();
      ctx.arc(earth.x, earth.y, radius, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);
    };

    // Draw satellite icon
    const drawSatellite = (x: number, y: number, color: { r: number; g: number; b: number }) => {
      // Satellite glow
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, 15);
      gradient.addColorStop(0, `rgba(${color.r}, ${color.g}, ${color.b}, 0.8)`);
      gradient.addColorStop(1, `rgba(${color.r}, ${color.g}, ${color.b}, 0)`);
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(x, y, 15, 0, Math.PI * 2);
      ctx.fill();

      // Satellite body (diamond shape)
      ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, 1)`;
      ctx.beginPath();
      ctx.moveTo(x, y - 6);
      ctx.lineTo(x + 4, y);
      ctx.lineTo(x, y + 6);
      ctx.lineTo(x - 4, y);
      ctx.closePath();
      ctx.fill();

      // Solar panels
      ctx.strokeStyle = `rgba(${color.r}, ${color.g}, ${color.b}, 0.8)`;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(x - 10, y - 3);
      ctx.lineTo(x - 10, y + 3);
      ctx.moveTo(x + 10, y - 3);
      ctx.lineTo(x + 10, y + 3);
      ctx.stroke();

      // Connection line to Earth
      ctx.strokeStyle = `rgba(${color.r}, ${color.g}, ${color.b}, 0.2)`;
      ctx.lineWidth = 1;
      ctx.setLineDash([2, 4]);
      ctx.beginPath();
      ctx.moveTo(earth.x, earth.y);
      ctx.lineTo(x, y);
      ctx.stroke();
      ctx.setLineDash([]);
    };

    const animate = () => {
      // Clear with deep space blue background
      ctx.fillStyle = '#050A14';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw digital earth
      drawDigitalEarth();

      // Draw orbits and satellites
      orbitLayers.forEach((layer) => {
        drawOrbit(layer.radius, layer.color);

        layer.satellites.forEach((sat) => {
          const x = earth.x + Math.cos(sat.angle) * layer.radius;
          const y = earth.y + Math.sin(sat.angle) * layer.radius;
          drawSatellite(x, y, layer.color);

          // Update satellite angle
          sat.angle += sat.speed;
        });
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-[#050A14]">
      <canvas ref={canvasRef} className="w-full h-full" />
      
      {/* Skip button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        onClick={onComplete}
        className="fixed bottom-10 left-1/2 -translate-x-1/2 px-8 py-3 rounded-full bg-white/10 backdrop-blur-xl border border-cyan-400/30 text-cyan-300 hover:bg-white/20 hover:border-cyan-400/50 transition-all z-10 font-medium"
      >
        Skip
      </motion.button>
    </div>
  );
}