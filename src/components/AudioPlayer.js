import React, { useState, useEffect, useRef } from 'react';

const AudioPlayer = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.3); // Default volume 30%
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = volume;
      audio.loop = true;
      audio.muted = false;
      
      // Auto play dengan delay untuk menghindari browser blocking
      const playAudio = () => {
        audio.play().catch(e => {
          console.log('Autoplay prevented, user interaction required:', e);
        });
      };
      
      // Coba auto play setelah 1 detik
      setTimeout(playAudio, 1000);
      
      // Jika gagal, coba lagi setelah user interaction
      const handleUserInteraction = () => {
        audio.play().catch(e => {
          console.log('Still blocked:', e);
        });
        document.removeEventListener('click', handleUserInteraction);
        document.removeEventListener('touchstart', handleUserInteraction);
      };
      
      document.addEventListener('click', handleUserInteraction);
      document.addEventListener('touchstart', handleUserInteraction);
      
      return () => {
        document.removeEventListener('click', handleUserInteraction);
        document.removeEventListener('touchstart', handleUserInteraction);
      };
    }
  }, [volume]);

  const toggleMute = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    const audio = audioRef.current;
    if (audio) {
      audio.volume = newVolume;
    }
  };

  return (
    <div className="audio-player">
      <audio
        ref={audioRef}
        src="/asset/DJ TABOLA BALE X CALON MANTU IDAMAN SLOW VIRAL TIKTOK FULL SONG MAMAN FVNDY 2025 (1).mp3"
        preload="auto"
        autoPlay
        loop
      />
      
      <div className="audio-controls">
        <button 
          className="audio-btn mute-btn" 
          onClick={toggleMute}
          title={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted ? '🔇' : '🔊'}
        </button>
        
        <div className="volume-control">
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={handleVolumeChange}
            className="volume-slider"
            title="Volume"
          />
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
