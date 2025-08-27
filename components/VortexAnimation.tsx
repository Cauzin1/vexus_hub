import React from 'react';

const Particle: React.FC<{ style: React.CSSProperties }> = ({ style }) => (
  <div
    className="absolute rounded-full bg-gradient-to-br from-[#6E3AFF] to-[#00FFC1]"
    style={style}
  />
);

export const VortexAnimation: React.FC = React.memo(() => {
  const particles = React.useMemo(() => {
    const particleCount = 50;
    return Array.from({ length: particleCount }).map((_, i) => {
      const angle = (i / particleCount) * 2 * Math.PI;
      const radius = 50 + Math.random() * 40; // vmin units
      const size = 1 + Math.random() * 2; // px
      const duration = 8 + Math.random() * 8; // seconds
      const delay = Math.random() * -duration;

      const style = {
        width: `${size}px`,
        height: `${size}px`,
        left: '50%',
        top: '50%',
        animation: `vortex ${duration}s linear ${delay}s infinite`,
        // Custom properties used by the keyframe animation in index.html
        '--angle-start': `${angle}rad`,
        '--angle-end': `${angle + 2 * Math.PI}rad`,
        '--radius-start': `${radius * 1.5}vmin`,
        '--radius-end': `${radius * 0.1}vmin`,
        '--opacity-start': '0',
        '--opacity-end': '1',
      } as React.CSSProperties;
      
      return { style, id: i };
    });
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden bg-black/30" aria-hidden="true">
      <div className="relative w-full h-full">
        {particles.map((p) => (
          <Particle key={p.id} style={p.style} />
        ))}
      </div>
    </div>
  );
});