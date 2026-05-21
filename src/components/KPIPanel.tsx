'use client';

import React, { useEffect, useState } from 'react';

interface KPIMetric {
  label: string;
  value: number;
  suffix?: string;
  isAnimating?: boolean;
}

const KPIPanel: React.FC = () => {
  const [metrics, setMetrics] = useState<KPIMetric[]>([
    { label: 'Real-Time Signals', value: 0, suffix: 'M+' },
    { label: 'Active Infrastructure', value: 0, suffix: '%' },
    { label: 'Processing Capacity', value: 0, suffix: 'B/s' },
  ]);

  useEffect(() => {
    // Animate metrics on mount
    const targets = [2.4, 99.8, 847];
    const durations = [2000, 1800, 2200];
    
    targets.forEach((target, index) => {
      const startTime = Date.now();
      const duration = durations[index];
      
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth deceleration
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const value = target * easeOut;
        
        setMetrics(prev => {
          const newMetrics = [...prev];
          newMetrics[index] = {
            ...newMetrics[index],
            value: parseFloat(value.toFixed(1)),
            isAnimating: progress < 1,
          };
          return newMetrics;
        });
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      animate();
    });
  }, []);

  const statusIndicators = [
    { label: 'LIVE SYSTEMS ACTIVE', status: 'active' },
    { label: 'GCC Acquisition Network Online', status: 'active' },
    { label: 'Real-Time Performance Infrastructure', status: 'active' },
  ];

  return (
    <div className="group relative">
      {/* Animated background glow */}
      <div className="absolute -inset-1 bg-gradient-to-br from-amber-400/20 to-orange-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 dark:from-amber-500/10 dark:to-orange-500/5" />
      
      {/* Main panel */}
      <div className="relative backdrop-blur-md bg-white/60 dark:bg-white/5 rounded-2xl border border-white/40 dark:border-white/10 p-8 overflow-hidden">
        
        {/* Shimmer effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent dark:via-white/2 animate-shimmer pointer-events-none rounded-2xl" />
        
        {/* Animated corner accent */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-amber-300/10 to-transparent dark:from-amber-400/5 rounded-full blur-3xl" />

        <div className="relative z-10">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-lg shadow-emerald-400/50" />
              <span className="text-xs font-semibold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase">
                Operational Dashboard
              </span>
            </div>
            <h3 className="text-lg font-semibold tracking-tight text-black dark:text-white">
              Live Infrastructure Metrics
            </h3>
          </div>

          {/* KPI Grid */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            {metrics.map((metric, index) => (
              <div key={index} className="group/metric">
                <div className="relative backdrop-blur-sm bg-white/40 dark:bg-white/5 rounded-xl border border-white/20 dark:border-white/5 p-4 hover:bg-white/60 dark:hover:bg-white/10 transition-all duration-300">
                  {/* Metric glow on hover */}
                  <div className="absolute -inset-1 bg-gradient-to-br from-amber-300/20 to-transparent rounded-xl opacity-0 group-hover/metric:opacity-50 blur transition-opacity" />
                  
                  <div className="relative">
                    <div className="mb-2">
                      <span className="text-2xl font-bold text-black dark:text-white tracking-tight">
                        {metric.value.toFixed(1)}{metric.suffix}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 font-medium">
                      {metric.label}
                    </p>
                    
                    {/* Tiny animated graph indicator */}
                    <div className="flex gap-0.5 mt-3">
                      {[0.6, 0.8, 0.5, 0.9, 0.7, 0.95].map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 h-6 bg-gradient-to-t from-amber-400/40 to-amber-300/60 dark:from-amber-500/20 dark:to-amber-400/40 rounded-sm"
                          style={{
                            height: `${h * 16}px`,
                            opacity: 0.4 + h * 0.6,
                            animation: `micro-pulse ${1.5 + i * 0.2}s ease-in-out infinite`,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Status indicators */}
          <div className="space-y-2 pt-4 border-t border-white/10 dark:border-white/5">
            {statusIndicators.map((indicator, index) => (
              <div
                key={index}
                className="flex items-center gap-3 py-1.5 px-2 rounded-lg hover:bg-white/30 dark:hover:bg-white/5 transition-all duration-300 group/indicator cursor-default"
              >
                <div className="relative">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50" />
                  <div className="absolute inset-0 w-2 h-2 rounded-full bg-emerald-400 animate-ping opacity-75" />
                </div>
                <span className="text-xs font-medium text-zinc-700 dark:text-zinc-300 tracking-wide">
                  {indicator.label}
                </span>
              </div>
            ))}
          </div>

          {/* Floating indicator */}
          <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-400/20 dark:bg-emerald-500/10 border border-emerald-400/30 dark:border-emerald-500/20">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span className="text-xs font-medium text-emerald-700 dark:text-emerald-400">LIVE</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KPIPanel;
