import { useState, useCallback } from "react";
import { soundFx } from "../lib/sound";

export function useSound() {
  const [isMuted, setIsMuted] = useState(soundFx.getMuted());

  const toggleSound = useCallback(() => {
    const muted = soundFx.toggleMute();
    setIsMuted(muted);
    if (!muted) {
      soundFx.playSuccess();
    }
  }, []);

  const playHover = useCallback(() => {
    soundFx.playHover();
  }, []);

  const playClick = useCallback(() => {
    soundFx.playClick();
  }, []);

  const playSuccess = useCallback(() => {
    soundFx.playSuccess();
  }, []);

  return {
    isMuted,
    toggleSound,
    playHover,
    playClick,
    playSuccess,
  };
}
