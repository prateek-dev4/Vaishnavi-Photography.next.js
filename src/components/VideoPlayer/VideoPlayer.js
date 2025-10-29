// components/VideoPlayer.js
"use client";

import React, { useRef, useEffect } from 'react';
import styles from './VideoPlayer.module.css';

const VideoPlayer = ({
  videoUrl,
  poster,
  autoPlay = true,
  muted = true,
  controls = false,
  loop = true,
  rotate = 0,
  height = "100px",
  color,
  top = false,
  bottom = false,
  className = ''
}) => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Auto play the video when component mounts if autoPlay is true
    if (autoPlay && videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log('Autoplay failed:', error);
      });
    }
  }, [autoPlay]);

  const svgStyle = {
    transform: `rotate(${rotate}deg)`,
    color: color || 'var(--primary-bg)',
    height
  };

  return (
    <div className={`${styles.videoContainer} ${className}`}>
      {top && (
        <svg
          height={height}
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className={styles.triangleSvgTop}
          style={svgStyle}
        >
          <polygon points="0,0 50,100 100,0" fill="currentColor" />
        </svg>
      )}
      
      <video
        ref={videoRef}
        className={styles.videoElement}
        src={videoUrl}
        poster={poster}
        autoPlay={autoPlay}
        muted={muted}
        controls={controls}
        loop={loop}
        playsInline
        preload="auto"
      />
      
      {bottom && (
        <svg
          height={height}
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className={styles.triangleSvgBottom}
          style={svgStyle}
        >
          <polygon points="0,0 50,100 100,0" fill="currentColor" />
        </svg>
      )}
    </div>
  );
};

export default VideoPlayer;