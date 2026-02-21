import { useCallback, useEffect, useRef, useState } from 'react';

export function useIconSound() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isSoundEnabled, setIsSoundEnabled] = useState<boolean>(() => {
    const stored = localStorage.getItem('iconSoundEnabled');
    return stored !== null ? stored === 'true' : true;
  });

  useEffect(() => {
    // Create audio element
    audioRef.current = new Audio('/assets/sounds/icon-click.mp3');
    audioRef.current.volume = 0.3;
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    localStorage.setItem('iconSoundEnabled', String(isSoundEnabled));
  }, [isSoundEnabled]);

  const playSound = useCallback(() => {
    if (isSoundEnabled && audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {
        // Silently fail if audio can't play (e.g., user hasn't interacted with page yet)
      });
    }
  }, [isSoundEnabled]);

  const toggleSound = useCallback(() => {
    setIsSoundEnabled(prev => !prev);
  }, []);

  return {
    playSound,
    isSoundEnabled,
    toggleSound,
  };
}
