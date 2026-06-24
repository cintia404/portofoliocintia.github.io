import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RibbonBow } from './RibbonBow';

interface InteractiveElement {
  id: string;
  x: number;
  y: number;
  type: 'pearl' | 'sparkle' | 'bow';
  size: number;
  rotation: number;
}

export const BackgroundElements: React.FC = () => {
  const [interactiveItems, setInteractiveItems] = useState<InteractiveElement[]>([]);
  const [bgLoaded, setBgLoaded] = useState(false);

  // Background image generated path
  const bgPath = '/src/assets/images/silk_pearls_bg_1782255652300.jpg';

  useEffect(() => {
    const img = new Image();
    img.src = bgPath;
    img.onload = () => setBgLoaded(true);
    img.onerror = () => setBgLoaded(false); // fall back to silk CSS gradient
  }, [bgPath]);

  // Handle clicking on background to add a custom pearl or sparkle
  const handleBgClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Only spawn if click is on the background container itself
    if (e.target !== e.currentTarget) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    // Cycle through types randomly
    const types: ('pearl' | 'sparkle' | 'bow')[] = ['pearl', 'sparkle', 'pearl', 'sparkle', 'bow'];
    const randomType = types[Math.floor(Math.random() * types.length)];
    const size = randomType === 'pearl' 
      ? Math.floor(Math.random() * 12) + 10 
      : randomType === 'bow' 
        ? Math.floor(Math.random() * 25) + 35
        : Math.floor(Math.random() * 15) + 15;

    const newItem: InteractiveElement = {
      id: `item-${Date.now()}-${Math.random()}`,
      x,
      y,
      type: randomType,
      size,
      rotation: Math.floor(Math.random() * 60) - 30, // -30 to +30 deg
    };

    setInteractiveItems((prev) => [...prev.slice(-15), newItem]); // limit to last 15 interactive items to maintain performance
  };

  // Fixed visual accents in margins (like the user image)
  const marginBows = [
    { id: 'mb-1', x: 5, y: 8, size: 85, rotation: -12, delay: 0 },
    { id: 'mb-2', x: 92, y: 10, size: 90, rotation: 15, delay: 1.5 },
    { id: 'mb-3', x: 4, y: 35, size: 70, rotation: -25, delay: 2.2 },
    { id: 'mb-4', x: 94, y: 32, size: 80, rotation: 8, delay: 0.7 },
    { id: 'mb-5', x: 6, y: 62, size: 75, rotation: 18, delay: 3.1 },
    { id: 'mb-6', x: 91, y: 64, size: 78, rotation: -15, delay: 1.9 },
    { id: 'mb-7', x: 3, y: 88, size: 82, rotation: -8, delay: 0.5 },
    { id: 'mb-8', x: 93, y: 86, size: 85, rotation: 12, delay: 2.5 },
  ];

  const marginPearls = [
    { id: 'mp-1', x: 12, y: 15, size: 14, delay: 0 },
    { id: 'mp-2', x: 84, y: 12, size: 16, delay: 1 },
    { id: 'mp-3', x: 22, y: 22, size: 10, delay: 2 },
    { id: 'mp-4', x: 76, y: 18, size: 18, delay: 0.5 },
    { id: 'mp-5', x: 8, y: 48, size: 12, delay: 1.5 },
    { id: 'mp-6', x: 92, y: 50, size: 10, delay: 2.5 },
    { id: 'mp-7', x: 15, y: 76, size: 15, delay: 3 },
    { id: 'mp-8', x: 88, y: 78, size: 12, delay: 0.8 },
    { id: 'mp-9', x: 50, y: 92, size: 16, delay: 2.2 },
  ];

  return (
    <div
      id="coquette-background-container"
      onClick={handleBgClick}
      className="fixed inset-0 w-full h-full -z-50 select-none overflow-hidden cursor-cell transition-all duration-1000"
      style={{
        backgroundImage: bgLoaded ? `url(${bgPath})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#faf6f6',
      }}
    >
      {/* Fallback & Layered Gradient to give rich Satin/Silk finish and glow */}
      {!bgLoaded && (
        <div 
          id="silk-css-fallback"
          className="absolute inset-0 w-full h-full"
          style={{
            background: 'radial-gradient(circle at 50% 30%, #fffcfc 0%, #fff1f3 35%, #fae6e9 70%, #ebd3d7 100%)',
          }}
        />
      )}

      {/* Iridescent shimmer overlay for Coquette theme */}
      <div 
        id="iridescent-overlay"
        className="absolute inset-0 w-full h-full pointer-events-none mix-blend-color-burn opacity-15"
        style={{
          background: 'linear-gradient(135deg, #ffd3e0 0%, #e8dbff 50%, #d4f5ff 100%)',
        }}
      />

      {/* Static / Floating Pearls from original UI design */}
      {marginPearls.map((pearl) => (
        <motion.div
          key={pearl.id}
          id={pearl.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: `${pearl.x}%`,
            top: `${pearl.y}%`,
            width: pearl.size,
            height: pearl.size,
            background: 'radial-gradient(circle at 35% 35%, #ffffff 0%, #fff0f3 25%, #fcd5dc 65%, #c8b2ec 100%)',
            boxShadow: 'inset -2px -2px 6px rgba(180, 140, 180, 0.4), 0 4px 10px rgba(220, 180, 190, 0.35)',
          }}
          animate={{
            y: [0, -4, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 6 + pearl.size % 4,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: pearl.delay,
          }}
        />
      ))}

      {/* Side Margins Floating Ribbon Bows (matching layout of original image) */}
      {marginBows.map((bow) => (
        <motion.div
          key={bow.id}
          id={bow.id}
          className="absolute pointer-events-none hidden md:block"
          style={{
            left: `${bow.x}%`,
            top: `${bow.y}%`,
          }}
          animate={{
            y: [0, -8, 0],
            rotate: [bow.rotation, bow.rotation + 3, bow.rotation - 3, bow.rotation],
          }}
          transition={{
            duration: 7 + (bow.size % 3),
            repeat: Infinity,
            ease: 'easeInOut',
            delay: bow.delay,
          }}
        >
          <RibbonBow size={bow.size} />
        </motion.div>
      ))}

      {/* Scattered twinkling sparkles */}
      {[...Array(6)].map((_, i) => {
        const xPos = [25, 75, 18, 82, 45, 62][i];
        const yPos = [20, 15, 75, 80, 48, 88][i];
        const sparkSize = [14, 18, 12, 16, 15, 12][i];
        return (
          <motion.svg
            key={`sparkle-fixed-${i}`}
            id={`sparkle-fixed-${i}`}
            width={sparkSize}
            height={sparkSize}
            viewBox="0 0 24 24"
            fill="none"
            className="absolute text-pink-300 pointer-events-none opacity-40 filter drop-shadow-[0_0_4px_rgba(255,192,203,0.8)]"
            style={{ left: `${xPos}%`, top: `${yPos}%` }}
            animate={{
              scale: [0.3, 1, 0.3],
              opacity: [0.1, 0.7, 0.1],
              rotate: [0, 90, 180],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.7,
            }}
          >
            <path
              d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z"
              fill="currentColor"
            />
          </motion.svg>
        );
      })}

      {/* User Interactive Elements (Spawns on Click!) */}
      <AnimatePresence>
        {interactiveItems.map((item) => (
          <motion.div
            key={item.id}
            id={item.id}
            className="absolute pointer-events-auto"
            style={{
              left: `${item.x}%`,
              top: `${item.y}%`,
              transform: 'translate(-50%, -50%)',
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0, y: 30 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          >
            {item.type === 'pearl' ? (
              <div
                className="rounded-full shadow-md"
                style={{
                  width: item.size * 1.5,
                  height: item.size * 1.5,
                  background: 'radial-gradient(circle at 35% 35%, #ffffff 0%, #fff3f5 30%, #fbc2cc 70%, #d8b4f8 100%)',
                  boxShadow: 'inset -2px -2px 6px rgba(180, 130, 180, 0.3), 0 6px 12px rgba(220, 150, 170, 0.4)',
                }}
              />
            ) : item.type === 'bow' ? (
              <div style={{ transform: `rotate(${item.rotation}deg)` }}>
                <RibbonBow size={item.size} glow={true} />
              </div>
            ) : (
              <motion.svg
                width={item.size * 1.6}
                height={item.size * 1.6}
                viewBox="0 0 24 24"
                fill="none"
                className="text-pink-400 filter drop-shadow-[0_0_6px_rgba(255,105,180,0.8)]"
                animate={{
                  scale: [1, 1.2, 0.9, 1],
                  rotate: [0, 180],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <path
                  d="M12 0L15.5 8.5L24 12L15.5 15.5L12 24L8.5 15.5L0 12L8.5 8.5L12 0Z"
                  fill="currentColor"
                />
              </motion.svg>
            )}
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Floating Tutorial Tip on Click */}
      <div 
        id="bg-interaction-guide"
        className="absolute bottom-4 left-4 font-mono text-[10px] text-pink-400/80 bg-white/40 backdrop-blur-md border border-pink-200/40 rounded-full px-3 py-1 pointer-events-none shadow-sm hidden sm:block"
      >
        ✨ Click anywhere on the fabric background to place a pearl, bow, or sparkle!
      </div>
    </div>
  );
};
