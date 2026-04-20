import React, { useEffect, useRef } from 'react';

interface StarfieldProps {
  count?: number;
  speed?: number;
  mouseEffect?: boolean;
}

interface Star {
  x: number;
  y: number;
  originalX: number;
  originalY: number;
  size: number;
  opacity: number;
  twinkleSpeed: number;
  twinklePhase: number;
  color: { r: number; g: number; b: number };
  vx: number;
  vy: number;
}

export function Starfield({ count = 300, speed = 0.5, mouseEffect = true }: StarfieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const starsRef = useRef<Star[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      if (starsRef.current.length === 0) {
        initStars();
      }
    };

    const initStars = () => {
      starsRef.current = [];
      for (let i = 0; i < count; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * 1.5 + 0.3; // Reduced from 2.5+0.5 to 1.5+0.3
        
        // Create different colored stars (white, blue, cyan)
        let color;
        const colorRand = Math.random();
        if (colorRand < 0.7) {
          // Most stars are white
          color = { r: 255, g: 255, b: 255 };
        } else if (colorRand < 0.9) {
          // Some stars are blue
          color = { r: 150, g: 200, b: 255 };
        } else {
          // Few stars are cyan
          color = { r: 100, g: 220, b: 255 };
        }

        starsRef.current.push({
          x,
          y,
          originalX: x,
          originalY: y,
          size,
          opacity: Math.random() * 0.5 + 0.5,
          twinkleSpeed: Math.random() * 0.03 + 0.01, // Increased speed for more noticeable twinkling
          twinklePhase: Math.random() * Math.PI * 2,
          color,
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.2,
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const animate = () => {
      // Clear canvas with a slight trail effect
      ctx.fillStyle = 'rgba(0, 5, 20, 0.15)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const stars = starsRef.current;

      stars.forEach((star) => {
        // Update twinkle phase
        star.twinklePhase += star.twinkleSpeed;
        
        // Calculate twinkle opacity (sine wave for smooth pulsing)
        const twinkleOpacity = (Math.sin(star.twinklePhase) + 1) / 2;
        const currentOpacity = star.opacity * (0.3 + twinkleOpacity * 0.7);

        // Mouse interaction effect
        if (mouseEffect) {
          const dx = mouseRef.current.x - star.originalX;
          const dy = mouseRef.current.y - star.originalY;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = 150;

          if (distance < maxDistance) {
            // Calculate displacement based on distance
            const force = (1 - distance / maxDistance) * 20;
            const angle = Math.atan2(dy, dx);
            
            // Move star away from mouse
            star.x = star.originalX - Math.cos(angle) * force;
            star.y = star.originalY - Math.sin(angle) * force;
          } else {
            // Smoothly return to original position
            star.x += (star.originalX - star.x) * 0.05;
            star.y += (star.originalY - star.y) * 0.05;
          }
        } else {
          // Gentle drift animation
          star.x += star.vx * speed;
          star.y += star.vy * speed;

          // Wrap around edges
          if (star.x < 0) star.x = canvas.width;
          if (star.x > canvas.width) star.x = 0;
          if (star.y < 0) star.y = canvas.height;
          if (star.y > canvas.height) star.y = 0;
          
          // Update original position for wrapping
          star.originalX = star.x;
          star.originalY = star.y;
        }

        // Draw star with glow effect
        const gradient = ctx.createRadialGradient(
          star.x, star.y, 0,
          star.x, star.y, star.size * 3
        );
        gradient.addColorStop(0, `rgba(${star.color.r}, ${star.color.g}, ${star.color.b}, ${currentOpacity})`);
        gradient.addColorStop(0.5, `rgba(${star.color.r}, ${star.color.g}, ${star.color.b}, ${currentOpacity * 0.3})`);
        gradient.addColorStop(1, `rgba(${star.color.r}, ${star.color.g}, ${star.color.b}, 0)`);

        // Draw the star
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size * 2, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Draw bright center
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${star.color.r}, ${star.color.g}, ${star.color.b}, ${currentOpacity})`;
        ctx.fill();

        // Add extra glow for larger stars
        if (star.size > 1.5) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size * 4, 0, Math.PI * 2);
          const extraGlow = ctx.createRadialGradient(
            star.x, star.y, 0,
            star.x, star.y, star.size * 4
          );
          extraGlow.addColorStop(0, `rgba(${star.color.r}, ${star.color.g}, ${star.color.b}, ${currentOpacity * 0.1})`);
          extraGlow.addColorStop(1, `rgba(${star.color.r}, ${star.color.g}, ${star.color.b}, 0)`);
          ctx.fillStyle = extraGlow;
          ctx.fill();
        }
      });

      // Add some shooting stars occasionally
      if (Math.random() < 0.001) {
        drawShootingStar(ctx, canvas.width, canvas.height);
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    const drawShootingStar = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
      const startX = Math.random() * width;
      const startY = Math.random() * height * 0.5;
      const length = Math.random() * 80 + 40;
      const angle = Math.random() * Math.PI / 4 + Math.PI / 4; // 45-90 degrees
      
      const endX = startX + Math.cos(angle) * length;
      const endY = startY + Math.sin(angle) * length;

      const gradient = ctx.createLinearGradient(startX, startY, endX, endY);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 0)');
      gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.8)');
      gradient.addColorStop(1, 'rgba(200, 230, 255, 0)');

      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.lineTo(endX, endY);
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 2;
      ctx.stroke();
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    if (mouseEffect) {
      window.addEventListener('mousemove', handleMouseMove);
    }
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (mouseEffect) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, [count, speed, mouseEffect]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}