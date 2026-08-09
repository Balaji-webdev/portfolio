import React from "react";
import { Volume2, VolumeX } from "lucide-react";
import { useSound } from "../../hooks/useSound";
import { Magnetic } from "./Magnetic";

export const SoundToggle: React.FC = () => {
  const { isMuted, toggleSound } = useSound();

  return (
    <Magnetic strength={0.3}>
      <button
        onClick={toggleSound}
        className="fixed bottom-6 right-6 z-50 p-3 rounded-full border border-white/10 bg-surface/80 text-slate-300 backdrop-blur-xl shadow-xl transition-all duration-300 hover:border-violet-500/40 hover:text-white hover:scale-110 active:scale-95 group"
        aria-label={isMuted ? "Unmute audio feedback" : "Mute audio feedback"}
        title={isMuted ? "Enable Sound Effects" : "Mute Sound Effects"}
      >
        {isMuted ? (
          <VolumeX className="w-5 h-5 text-slate-500 group-hover:text-violet-400 transition-colors" />
        ) : (
          <Volume2 className="w-5 h-5 text-cyan-400 animate-pulse" />
        )}
      </button>
    </Magnetic>
  );
};
