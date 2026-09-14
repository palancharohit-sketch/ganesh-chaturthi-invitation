// Sound utility supporting synthetic temple bell chimes and background devotional music ("Jai Ganesha")

type SoundStateListener = () => void;

class SoundManager {
  private audioCtx: AudioContext | null = null;
  private bgAudio: HTMLAudioElement | null = null;
  private isMuted: boolean = false;
  private isPlayingState: boolean = false;
  private hasInteracted: boolean = false;
  private volumeLevel: number = 0.65;
  private listeners: Set<SoundStateListener> = new Set();

  public subscribe(listener: SoundStateListener): () => void {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  private notify() {
    this.listeners.forEach((fn) => fn());
  }

  private getAudioContext(): AudioContext | null {
    if (typeof window === "undefined") return null;
    if (!this.audioCtx) {
      const AudioCtxClass =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext;
      if (AudioCtxClass) {
        this.audioCtx = new AudioCtxClass();
      }
    }
    if (this.audioCtx && this.audioCtx.state === "suspended") {
      this.audioCtx.resume().catch(() => {});
    }
    return this.audioCtx;
  }

  // Resonant temple brass bell chime
  public playTempleBell() {
    if (this.isMuted) return;
    try {
      const ctx = this.getAudioContext();
      if (!ctx) return;

      const now = ctx.currentTime;
      const freqs = [587.33, 880, 1174.66, 1760, 2349.32]; // D5, A5, D6, A6, D7
      const gains = [0.35, 0.25, 0.18, 0.1, 0.05];

      freqs.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = idx === 0 ? "sine" : "triangle";
        osc.frequency.setValueAtTime(freq, now);

        gain.gain.setValueAtTime(0.001, now);
        gain.gain.exponentialRampToValueAtTime(gains[idx] || 0.1, now + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.8 + idx * 0.2);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + 3.2);
      });
    } catch {
      // AudioContext unavailable
    }
  }

  // Initiates "Jai Ganesha" music
  public startTempleAmbience(audioPath: string = "/audio/jai-ganesha.mp3") {
    this.hasInteracted = true;
    try {
      if (!this.bgAudio) {
        this.bgAudio = new Audio(audioPath);
        this.bgAudio.loop = true;
        this.bgAudio.volume = this.volumeLevel;

        this.bgAudio.addEventListener("play", () => {
          this.isPlayingState = true;
          this.notify();
        });
        this.bgAudio.addEventListener("pause", () => {
          this.isPlayingState = false;
          this.notify();
        });
      }

      if (!this.isMuted) {
        this.bgAudio.play().then(() => {
          this.isPlayingState = true;
          this.notify();
        }).catch(() => {
          // Play prevented
        });
      }
    } catch {
      // audio error
    }
  }

  public togglePlay(): boolean {
    if (!this.bgAudio) {
      this.startTempleAmbience();
      return true;
    }
    if (this.isPlayingState) {
      this.bgAudio.pause();
      this.isPlayingState = false;
    } else {
      this.bgAudio.play().catch(() => {});
      this.isPlayingState = true;
    }
    this.notify();
    return this.isPlayingState;
  }

  public toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    if (this.bgAudio) {
      this.bgAudio.muted = this.isMuted;
      if (this.isMuted) {
        this.bgAudio.pause();
        this.isPlayingState = false;
      } else if (this.hasInteracted) {
        this.bgAudio.play().catch(() => {});
        this.isPlayingState = true;
      }
    }
    this.notify();
    return this.isMuted;
  }

  public setVolume(vol: number) {
    this.volumeLevel = Math.max(0, Math.min(1, vol));
    if (this.bgAudio) {
      this.bgAudio.volume = this.volumeLevel;
    }
    if (this.volumeLevel === 0) {
      this.isMuted = true;
    } else if (this.isMuted) {
      this.isMuted = false;
    }
    this.notify();
  }

  public getVolume(): number {
    return this.volumeLevel;
  }

  public getMuted(): boolean {
    return this.isMuted;
  }

  public isPlaying(): boolean {
    return this.isPlayingState;
  }
}

export const soundManager = new SoundManager();
