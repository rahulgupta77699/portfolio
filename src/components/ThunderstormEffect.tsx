import React, { useEffect, useState } from 'react';

const ThunderstormEffect = () => {
  const [lightning, setLightning] = useState(false);
  const [clickPosition, setClickPosition] = useState<{ x: number; y: number } | null>(null);

  const triggerLightning = (x?: number, y?: number) => {
    if (x !== undefined && y !== undefined) {
      setClickPosition({ x, y });
    }
    
    setLightning(true);
    setTimeout(() => {
      setLightning(false);
      setClickPosition(null);
    }, 200);
    
    // Sometimes double flash
    if (Math.random() > 0.7) {
      setTimeout(() => {
        setLightning(true);
        setTimeout(() => setLightning(false), 150);
      }, 400);
    }
  };

  useEffect(() => {
    // Random lightning flashes
    const scheduleLightning = () => {
      const delay = Math.random() * 5000 + 3000;
      setTimeout(() => {
        triggerLightning();
        scheduleLightning();
      }, delay);
    };

    scheduleLightning();

    // Click handler for manual thunder
    const handleClick = (e: MouseEvent) => {
      triggerLightning(e.clientX, e.clientY);
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <>
      {/* Lightning Flash Overlay */}
      <div
        className={`fixed inset-0 pointer-events-none z-50 transition-opacity duration-200 ${
          lightning ? 'opacity-40' : 'opacity-0'
        }`}
        style={{
          background: clickPosition
            ? `radial-gradient(circle at ${clickPosition.x}px ${clickPosition.y}px, rgba(255,255,255,0.9) 0%, rgba(200,220,255,0.6) 20%, rgba(100,150,255,0.3) 40%, transparent 70%)`
            : 'radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(200,220,255,0.4) 50%, transparent 100%)',
        }}
      />

      {/* Lightning Bolt (at click position or random) */}
      {lightning && clickPosition && (
        <svg
          className="fixed pointer-events-none z-50"
          width="150"
          height="300"
          viewBox="0 0 150 300"
          style={{
            left: `${clickPosition.x}px`,
            top: `${clickPosition.y}px`,
            transform: 'translate(-50%, -50%)',
            filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.8))',
            opacity: 0.9,
          }}
        >
          <path
            d="M75 0 L60 100 L85 100 L50 250 L90 130 L65 130 Z"
            fill="rgba(255,255,255,0.95)"
            stroke="rgba(200,220,255,0.7)"
            strokeWidth="2"
          />
        </svg>
      )}
      {lightning && !clickPosition && Math.random() > 0.5 && (
        <svg
          className="fixed top-0 left-1/2 transform -translate-x-1/2 pointer-events-none z-50"
          width="200"
          height="400"
          viewBox="0 0 200 400"
          style={{
            filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.8))',
            opacity: 0.8,
          }}
        >
          <path
            d="M100 0 L80 150 L110 150 L70 400 L120 200 L90 200 Z"
            fill="rgba(255,255,255,0.9)"
            stroke="rgba(200,220,255,0.6)"
            strokeWidth="2"
          />
        </svg>
      )}
    </>
  );
};

export default ThunderstormEffect;
