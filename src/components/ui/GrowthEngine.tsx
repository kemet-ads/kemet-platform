'use client';

import React, { useEffect, useRef } from 'react';

interface Lead {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  state: 'incoming' | 'qualified' | 'converted';
  phase: number;
  speed: number;
  id: number;
}

const GrowthEngine: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const leadsRef = useRef<Lead[]>([]);
  const rafRef = useRef<number>(0);
  const frameRef = useRef(0);
  const statsRef = useRef({ qualified: 0, converted: 0, revenue: 0 });

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
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouse);
    window.addEventListener('mouseleave', () => {
      mouseRef.current = { x: -1000, y: -1000 };
    });

    const initLeads = () => {
      const leads: Lead[] = [];
      for (let i = 0; i < 60; i++) {
        leads.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: -(0.2 + Math.random() * 0.4),
          size: 1.5 + Math.random() * 2.5,
          state: 'incoming',
          phase: Math.random() * Math.PI * 2,
          speed: 0.2 + Math.random() * 0.4,
          id: i,
        });
      }
      leadsRef.current = leads;
    };
    initLeads();

    const animate = () => {
      frameRef.current++;
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const isActive = mx > 0 && my > 0;

      // Draw conversion funnel zones (subtle)
      const funnelWidth = 280;
      const funnelTop = 100;
      const funnelBottom = h - 100;
      const funnelGrad = ctx.createLinearGradient(0, funnelTop, 0, funnelBottom);
      funnelGrad.addColorStop(0, 'rgba(0, 229, 168, 0.015)');
      funnelGrad.addColorStop(0.5, 'rgba(0, 229, 168, 0.008)');
      funnelGrad.addColorStop(1, 'rgba(0, 229, 168, 0.015)');

      ctx.fillStyle = funnelGrad;
      ctx.beginPath();
      ctx.moveTo(w / 2 - funnelWidth / 2, funnelTop);
      ctx.lineTo(w / 2 + funnelWidth / 2, funnelTop);
      ctx.lineTo(w / 2 + funnelWidth * 0.6, funnelBottom);
      ctx.lineTo(w / 2 - funnelWidth * 0.6, funnelBottom);
      ctx.closePath();
      ctx.fill();

      // Funnel border lines
      ctx.strokeStyle = 'rgba(0, 229, 168, 0.04)';
      ctx.lineWidth = 0.5;
      ctx.beginPath();
      ctx.moveTo(w / 2 - funnelWidth / 2, funnelTop);
      ctx.lineTo(w / 2 - funnelWidth * 0.6, funnelBottom);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(w / 2 + funnelWidth / 2, funnelTop);
      ctx.lineTo(w / 2 + funnelWidth * 0.6, funnelBottom);
      ctx.stroke();

      // Process leads
      const leads = leadsRef.current;
      const mouseInfluence = 150;
      const conversionZone = 80;

      // Spawn new leads periodically
      if (frameRef.current % 20 === 0 && leads.length < 80) {
        const edge = Math.random() > 0.5 ? 0 : w;
        leads.push({
          x: edge + (Math.random() - 0.5) * 100,
          y: h + 20 + Math.random() * 40,
          vx: (Math.random() - 0.5) * 0.3,
          vy: -(0.2 + Math.random() * 0.3),
          size: 1.5 + Math.random() * 2.5,
          state: 'incoming',
          phase: Math.random() * Math.PI * 2,
          speed: 0.2 + Math.random() * 0.3,
          id: leads.length + Math.random() * 1000,
        });
      }

      for (let i = leads.length - 1; i >= 0; i--) {
        const lead = leads[i];
        lead.phase += 0.02;

        // Mouse attraction / qualification
        if (isActive) {
          const dx = mx - lead.x;
          const dy = my - lead.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouseInfluence) {
            const force = (1 - dist / mouseInfluence) * 0.03;

            // Pull toward mouse
            lead.vx += (dx / dist) * force * 0.5;
            lead.vy += (dy / dist) * force * 0.5;

            // Qualification zone — near mouse, leads get "qualified"
            if (dist < conversionZone && lead.state === 'incoming') {
              lead.state = 'qualified';
              lead.size = 3;
              statsRef.current.qualified++;
            }

            // If qualified lead reaches mouse center → "converted"
            if (dist < 20 && lead.state === 'qualified') {
              lead.state = 'converted';
              lead.size = 5;
              statsRef.current.converted++;
              statsRef.current.revenue += Math.floor(500 + Math.random() * 4500);
            }
          }
        }

        // Natural upward drift
        lead.vy += (Math.sin(lead.phase) * 0.005 - lead.speed * 0.01);
        lead.vx += Math.cos(lead.phase * 0.7) * 0.003;

        // Damping
        lead.vx *= 0.99;
        lead.vy *= 0.99;

        // Clamp velocity
        const speed = Math.sqrt(lead.vx ** 2 + lead.vy ** 2);
        if (speed > 2) {
          lead.vx = (lead.vx / speed) * 2;
          lead.vy = (lead.vy / speed) * 2;
        }

        lead.x += lead.vx;
        lead.y += lead.vy;

        // Draw lead
        const isNearMouse =
          isActive &&
          Math.sqrt((mx - lead.x) ** 2 + (my - lead.y) ** 2) < mouseInfluence;

        let color: string;
        let glowColor: string;

        switch (lead.state) {
          case 'incoming':
            color = isNearMouse
              ? `rgba(0, 229, 168, ${0.15 + Math.sin(lead.phase) * 0.1 + 0.1})`
              : `rgba(180, 180, 180, ${0.08 + Math.sin(lead.phase) * 0.05})`;
            glowColor = 'rgba(0, 229, 168, 0.02)';
            break;
          case 'qualified':
            color = `rgba(0, 229, 168, ${0.4 + Math.sin(lead.phase * 2) * 0.2})`;
            glowColor = 'rgba(0, 229, 168, 0.08)';
            break;
          case 'converted':
            const pulse = Math.sin(lead.phase * 3) * 0.3 + 0.7;
            color = `rgba(0, 229, 168, ${pulse * 0.8})`;
            glowColor = `rgba(0, 229, 168, ${pulse * 0.15})`;
            break;
        }

        // Glow
        ctx.beginPath();
        ctx.arc(lead.x, lead.y, lead.size * 4, 0, Math.PI * 2);
        ctx.fillStyle = glowColor;
        ctx.fill();

        // Core
        ctx.beginPath();
        ctx.arc(lead.x, lead.y, lead.size, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();

        // Qualified leads get a ring
        if (lead.state === 'qualified') {
          ctx.beginPath();
          ctx.arc(lead.x, lead.y, lead.size * 2, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(0, 229, 168, ${0.1 + Math.sin(lead.phase) * 0.05})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }

        // Converted leads get a burst
        if (lead.state === 'converted') {
          const burst = Math.sin(lead.phase * 4) * 0.5 + 0.5;
          ctx.beginPath();
          ctx.arc(lead.x, lead.y, lead.size * (2 + burst * 3), 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(0, 229, 168, ${burst * 0.08})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();

          // Revenue label
          ctx.fillStyle = `rgba(0, 229, 168, ${burst * 0.3})`;
          ctx.font = '7px system-ui';
          ctx.textAlign = 'center';
          ctx.fillText('+$' + Math.floor(500 + Math.random() * 4500), lead.x, lead.y - lead.size * 4);
        }

        // Remove off-screen leads
        if (lead.y < -50 || lead.x < -100 || lead.x > w + 100) {
          leads.splice(i, 1);
        }
      }

      // === HUD / Stats ===
      if (isActive) {
        const stats = statsRef.current;

        // Qualification zone indicator
        ctx.beginPath();
        ctx.arc(mx, my, conversionZone, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(0, 229, 168, 0.06)';
        ctx.lineWidth = 0.5;
        ctx.stroke();

        // Influence zone
        ctx.beginPath();
        ctx.arc(mx, my, mouseInfluence, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(0, 229, 168, 0.03)';
        ctx.lineWidth = 0.5;
        ctx.setLineDash([4, 8]);
        ctx.stroke();
        ctx.setLineDash([]);

        // Stats panel
        ctx.fillStyle = 'rgba(0, 229, 168, 0.15)';
        ctx.font = '9px system-ui';
        ctx.textAlign = 'left';
        ctx.fillText('✦ Leads: ' + leads.length, 16, 30);
        ctx.fillText('● Qualified: ' + stats.qualified, 16, 42);
        ctx.fillText('◆ Converted: ' + stats.converted, 16, 54);
        ctx.fillText('💰 Revenue: $' + stats.revenue.toLocaleString(), 16, 66);
      } else {
        // Idle state indicator
        ctx.fillStyle = 'rgba(180, 180, 180, 0.08)';
        ctx.font = '10px system-ui';
        ctx.textAlign = 'center';
        ctx.fillText('move your cursor to activate growth engine', w / 2, h - 40);
      }

      // Title
      ctx.fillStyle = 'rgba(0, 229, 168, 0.06)';
      ctx.font = '8px system-ui';
      ctx.textAlign = 'center';
      ctx.fillText('GROWTH ENGINE · LIVE', w / 2, 16);

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
      className="fixed inset-0 z-[55] pointer-events-none"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default GrowthEngine;