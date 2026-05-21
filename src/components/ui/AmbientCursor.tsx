'use client';

import React, { useEffect, useRef } from 'react';

const AmbientCursor: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, vx: 0, vy: 0 });
  const trailRef = useRef<{ x: number; y: number; a: number }[]>([]);
  const rafRef = useRef<number>(0);
  const timeRef = useRef(0);
  const smoothRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const handleMouse = (e: MouseEvent) => {
      const dx = e.clientX - mouseRef.current.x;
      const dy = e.clientY - mouseRef.current.y;
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.vx = dx;
      mouseRef.current.vy = dy;
    };

    window.addEventListener('mousemove', handleMouse);
    window.addEventListener('mouseleave', () => {
      mouseRef.current = { x: -1000, y: -1000, vx: 0, vy: 0 };
    });

    const animate = () => {
      timeRef.current++;
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      // Smooth interpolation
      smoothRef.current.x += (mx - smoothRef.current.x) * 0.08;
      smoothRef.current.y += (my - smoothRef.current.y) * 0.08;
      const sx = smoothRef.current.x;
      const sy = smoothRef.current.y;

      if (mx > 0 && my > 0) {
        // === TRACK TRAIL ===
        trailRef.current.unshift({ x: sx, y: sy, a: 1 });
        if (trailRef.current.length > 45) trailRef.current.pop();

        // Draw trail
        for (let i = 0; i < trailRef.current.length; i++) {
          const p = trailRef.current[i];
          const progress = 1 - i / trailRef.current.length;
          const alpha = Math.pow(progress, 1.5) * 0.35;
          const size = Math.pow(progress, 0.8) * 5;

          ctx.beginPath();
          ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0, 229, 168, ${alpha})`;
          ctx.fill();
        }

        // === PRIMARY GLOW CORE ===
        const grad1 = ctx.createRadialGradient(sx, sy, 0, sx, sy, 120);
        grad1.addColorStop(0, 'rgba(0, 229, 168, 0.12)');
        grad1.addColorStop(0.2, 'rgba(0, 229, 168, 0.07)');
        grad1.addColorStop(1, 'rgba(0, 229, 168, 0)');
        ctx.fillStyle = grad1;
        ctx.fillRect(0, 0, w, h);

        // === MID GLOW ===
        const grad2 = ctx.createRadialGradient(sx, sy, 0, sx, sy, 280);
        grad2.addColorStop(0, 'rgba(0, 229, 168, 0.04)');
        grad2.addColorStop(0.3, 'rgba(0, 229, 168, 0.02)');
        grad2.addColorStop(1, 'rgba(0, 229, 168, 0)');
        ctx.fillStyle = grad2;
        ctx.fillRect(0, 0, w, h);

        // === WIDE AMBIENT PULSE ===
        const pulseSize = 350 + Math.sin(timeRef.current * 0.03) * 60;
        const grad3 = ctx.createRadialGradient(sx, sy, 0, sx, sy, pulseSize);
        grad3.addColorStop(0, 'rgba(0, 229, 168, 0.025)');
        grad3.addColorStop(0.5, 'rgba(0, 229, 168, 0.01)');
        grad3.addColorStop(1, 'rgba(0, 229, 168, 0)');
        ctx.fillStyle = grad3;
        ctx.fillRect(0, 0, w, h);

        // === DIRECTIONAL BEAM ===
        const speed = Math.sqrt(
          mouseRef.current.vx ** 2 + mouseRef.current.vy ** 2
        );
        if (speed > 2) {
          const angle = Math.atan2(mouseRef.current.vy, mouseRef.current.vx);
          const beamLen = Math.min(speed * 3, 120);

          ctx.save();
          ctx.translate(sx, sy);
          ctx.rotate(angle);

          const beamGrad = ctx.createLinearGradient(0, 0, beamLen, 0);
          beamGrad.addColorStop(0, 'rgba(0, 229, 168, 0.15)');
          beamGrad.addColorStop(0.3, 'rgba(0, 229, 168, 0.06)');
          beamGrad.addColorStop(1, 'rgba(0, 229, 168, 0)');

          ctx.fillStyle = beamGrad;
          ctx.beginPath();
          ctx.ellipse(0, 0, beamLen, 4, 0, 0, Math.PI * 2);
          ctx.fill();

          ctx.restore();
        }

        // === SPARKLE FLICKER ===
        if (timeRef.current % 3 === 0) {
          for (let i = 0; i < 2; i++) {
            const angle = Math.random() * Math.PI * 2;
            const dist = 20 + Math.random() * 60;
            const sx2 = sx + Math.cos(angle) * dist;
            const sy2 = sy + Math.sin(angle) * dist;
            const sz = 0.5 + Math.random() * 1.5;
            ctx.beginPath();
            ctx.arc(sx2, sy2, sz, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(0, 229, 168, ${0.1 + Math.random() * 0.2})`;
            ctx.fill();
          }
        }

        // === RING PULSE ===
        const ringPhase = (timeRef.current * 0.02) % 1;
        const ringRadius = 20 + ringPhase * 40;
        ctx.beginPath();
        ctx.arc(sx, sy, ringRadius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(0, 229, 168, ${(1 - ringPhase) * 0.08})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouse);
      window.removeEventListener('mouseleave', () => {});
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[60] pointer-events-none"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default AmbientCursor;