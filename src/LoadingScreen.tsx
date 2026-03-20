import { useState, useEffect } from 'react';
import MetallicPaint from './MetallicPaint';
import './LoadingScreen.css';

const fungiLogo = "/mcp/6b97ddf3c76f07f6db8e047255c8e50459b888ef.svg";

export default function LoadingScreen({ onFinished }: { onFinished: () => void }) {
  const [progress, setProgress] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Simulated loading progress for the "vibe" and to ensure assets are primed
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Slightly randomized increments
        const next = prev + Math.random() * 15;
        return next > 100 ? 100 : next;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => {
        setHidden(true);
        // Delay the actual unmounting/callback to let the fade finish
        setTimeout(onFinished, 800);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [progress, onFinished]);

  return (
    <div className={`loading-screen ${hidden ? 'hidden' : ''}`}>
      <div className="loading-logo-container">
        <MetallicPaint
          imageSrc={fungiLogo}
          seed={42}
          scale={4}
          patternSharpness={0.3}
          noiseScale={0.5}
          speed={0.8} // Slightly faster for the loading screen
          liquid={1.2}
          mouseAnimation={true}
          brightness={2}
          contrast={0.5}
          refraction={0.015}
          blur={0.01}
          chromaticSpread={2}
          fresnel={2}
          angle={-9}
          waveAmplitude={1.5}
          distortion={0.6}
          contour={0.25}
          lightColor="#C0FE04"
          darkColor="#000000"
          tintColor="#C0FE04"
        />
      </div>
      
      <div className="loading-bar-wrapper">
        <div className="loading-percentage">{Math.round(progress)}%</div>
        <div className="loading-bar-progress" style={{ width: `${progress}%` }}></div>
      </div>
      
      <div className="loading-text">Finalizing Systems...</div>
    </div>
  );
}
