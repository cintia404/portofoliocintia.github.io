import React, { useState, useEffect } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
}

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Secara berkala memunculkan partikel jejak bintang saat mouse digerakkan
      if (Math.random() < 0.15) {
        const newParticle: Particle = {
          id: Date.now() + Math.random(),
          x: e.clientX,
          y: e.clientY,
        };
        setParticles((prev) => [...prev.slice(-20), newParticle]);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <>
      {/* Inti Kursor Berbentuk Hati Utama */}
      <div
        id="heart-pointer"
        className="fixed pointer-events-none z-[10000] transition-transform duration-75 ease-out -translate-x-1/2 -translate-y-1/2 hidden md:block"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#911e37" style={{ filter: 'drop-shadow(0 2px 4px rgba(244,143,177,0.5))' }}>
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </div>

      {/* Partikel Jejak Sparkle Bintang Berwarna Pink Gelap */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="fixed pointer-events-none z-9999 w-4 h-4 bg-[#911e37] -translate-x-1/2 -translate-y-1/2"
          style={{
            left: `${p.x}px`,
            top: `${p.y}px`,
            clipPath: 'polygon(50% 0%, 63% 37%, 100% 50%, 63% 63%, 50% 100%, 37% 63%, 0% 50%, 37% 37%)',
            animation: 'particleFade 0.8s ease-out forwards',
          }}
        />
      ))}

      {/* Masukkan Aturan Animasi Pudar Secara Global */}
      <style>{`
        @keyframes particleFade {
          0% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
          100% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
        }
      `}</style>
    </>
  );
};