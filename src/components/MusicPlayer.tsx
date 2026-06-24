import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Pause, SkipForward, Volume2, VolumeX, Music, Heart, Sparkles } from 'lucide-react';
import { musicTracksList } from '../data';

export const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);
  const [liked, setLiked] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const track = musicTracksList[currentTrackIndex];

  // Initialize Audio
  useEffect(() => {
    audioRef.current = new Audio(track.url);
    audioRef.current.volume = isMuted ? 0 : volume;

    // Listeners
    const onTimeUpdate = () => {
      if (audioRef.current) setCurrentTime(audioRef.current.currentTime);
    };

    const onLoadedMetadata = () => {
      if (audioRef.current) setDuration(audioRef.current.duration);
    };

    const onEnded = () => {
      handleNextTrack();
    };

    audioRef.current.addEventListener('timeupdate', onTimeUpdate);
    audioRef.current.addEventListener('loadedmetadata', onLoadedMetadata);
    audioRef.current.addEventListener('ended', onEnded);

    // If it was already playing before track change, resume playing
    if (isPlaying) {
      audioRef.current.play().catch(() => setIsPlaying(false));
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.removeEventListener('timeupdate', onTimeUpdate);
        audioRef.current.removeEventListener('loadedmetadata', onLoadedMetadata);
        audioRef.current.removeEventListener('ended', onEnded);
      }
    };
  }, [currentTrackIndex]);

  // Handle Play / Pause
  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch((err) => {
          console.warn("Audio playback blocked by browser autocomplete permissions.", err);
          // Set to playing state anyway to let user click again or indicate intent
          setIsPlaying(true);
        });
    }
  };

  // Handle Next Track
  const handleNextTrack = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % musicTracksList.length);
    setCurrentTime(0);
  };

  // Handle Seek Slider
  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = val;
      setCurrentTime(val);
    }
  };

  // Handle Volume Change
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    setIsMuted(val === 0);
    if (audioRef.current) {
      audioRef.current.volume = val;
      audioRef.current.muted = val === 0;
    }
  };

  // Handle Mute
  const toggleMute = () => {
    const nextMute = !isMuted;
    setIsMuted(nextMute);
    if (audioRef.current) {
      audioRef.current.muted = nextMute;
      audioRef.current.volume = nextMute ? 0 : volume;
    }
  };

  // Format Time representation
  const formatTime = (timeSecs: number) => {
    if (isNaN(timeSecs)) return '0:00';
    const mins = Math.floor(timeSecs / 60);
    const secs = Math.floor(timeSecs % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <motion.div
      id="aesthetic-music-widget"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
      className="fixed bottom-4 right-4 z-40 max-w-sm hidden lg:block rounded-2xl p-4 overflow-hidden border border-white/60 shadow-lg"
      style={{
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 240, 243, 0.4) 100%)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        boxShadow: '0 12px 32px rgba(255, 182, 193, 0.2), inset 0 2px 4px rgba(255, 255, 255, 0.5)',
      }}
    >
      <div className="flex items-center gap-4">
        {/* Spinning Pearl Vinyl Disc Layout */}
        <div className="relative">
          <motion.div
            id="spinning-music-vinyl"
            className="w-16 h-16 rounded-full flex items-center justify-center border-4 border-pink-150 relative shadow-md overflow-hidden shrink-0"
            style={{
              background: 'radial-gradient(circle, #331522 10%, #ff8da1 35%, #fff0f2 85%, #d81b60 100%)',
            }}
            animate={{
              rotate: isPlaying ? 360 : 0,
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'linear',
              repeatType: 'loop',
            }}
          >
            {/* Spinning Groove Lines */}
            <div className="absolute inset-2 border border-pink-900/10 rounded-full" />
            <div className="absolute inset-4 border border-pink-900/20 rounded-full" />

            {/* Center Pearl Button */}
            <div
              className="w-4 h-4 rounded-full border border-pink-200"
              style={{
                background: 'radial-gradient(circle at 35% 35%, #ffffff 0%, #fff0f3 30%, #fbd5dd 100%)',
              }}
            />
          </motion.div>

          {/* Tiny blinking note */}
          {isPlaying && (
            <motion.div
              className="absolute -top-1 -right-1 text-pink-500 pointer-events-none"
              animate={{ y: [-4, -12, -4], opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Music className="w-4.5 h-4.5" />
            </motion.div>
          )}
        </div>

        {/* Track Metadata Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-1">
            <span className="font-mono text-[9px] uppercase tracking-widest text-pink-500 font-bold flex items-center gap-1">
              <Sparkles className="w-3 h-3 animate-spin" />
              Now Tuning
            </span>
            <button
              id="music-like-btn"
              onClick={() => setLiked(!liked)}
              className="text-pink-400 hover:text-pink-600 cursor-pointer transition-colors"
            >
              <Heart className={`w-4 h-4 ${liked ? 'fill-pink-400 text-pink-500' : ''}`} />
            </button>
          </div>

          <h4 className="font-serif text-sm font-bold text-pink-950 truncate mt-0.5">
            {track.title}
          </h4>
          <p className="font-sans text-xs text-pink-800/60 truncate">
            {track.artist}
          </p>
        </div>
      </div>

      {/* Progress timeline slider with pearl track */}
      <div className="mt-3.5 space-y-1">
        <div className="flex items-center justify-between text-[9px] font-mono text-pink-800/50">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration || 180)}</span>
        </div>

        <input
          type="range"
          min="0"
          max={duration || 180}
          value={currentTime}
          onChange={handleSeek}
          className="w-full accent-pink-400 h-1 bg-pink-100 rounded-lg cursor-pointer appearance-none transition-all hover:h-1.5"
          style={{
            background: `linear-gradient(to right, #ff8da1 0%, #ff8da1 ${(currentTime / (duration || 180)) * 100}%, #f4d5db ${(currentTime / (duration || 180)) * 100}%, #f4d5db 100%)`,
          }}
          aria-label="Track Progress Seek"
        />
      </div>

      {/* Control Buttons row */}
      <div className="flex items-center justify-between mt-3 pt-2 border-t border-pink-200/20">
        <div className="flex items-center gap-1.5">
          {/* Mute button */}
          <button
            id="music-mute-btn"
            onClick={toggleMute}
            className="p-1 text-pink-900/60 hover:text-pink-950 transition-colors cursor-pointer"
            title={isMuted ? 'Unmute volume' : 'Mute volume'}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
          
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={isMuted ? 0 : volume}
            onChange={handleVolumeChange}
            className="w-12 h-1 accent-pink-400 bg-pink-100/60 rounded-full cursor-pointer appearance-none"
            aria-label="Volume Slider"
          />
        </div>

        {/* Media Trigger Circle Center buttons */}
        <div className="flex items-center gap-3">
          <motion.button
            id="music-play-pause-btn"
            onClick={togglePlay}
            className="w-8 h-8 rounded-full flex items-center justify-center border border-pink-200 cursor-pointer shadow-sm text-white"
            style={{
              background: 'linear-gradient(135deg, #ff8da1 0%, #f48fb1 100%)',
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            title={isPlaying ? 'Pause music' : 'Play music'}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5 fill-white" /> : <Play className="w-3.5 h-3.5 fill-white ml-0.5" />}
          </motion.button>

          <button
            id="music-skip-next-btn"
            onClick={handleNextTrack}
            className="p-1.5 text-pink-900/60 hover:text-pink-950 transition-colors cursor-pointer"
            title="Next Track"
          >
            <SkipForward className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};
