"use client"

import React, { useState, useEffect, useRef } from 'react';
import styles from './VideoSlideshow.module.css'; // We'll create this new CSS file

/**
 * A cinematic video slideshow component.
 *
 * @param {Object} props
 * @param {string[]} props.videos - An array of video URLs to display.
 * @param {boolean} [props.autoPlay=true] - Whether to automatically cycle slides.
 * @param {number} [props.autoPlayInterval=7000] - Time in ms between auto-play transitions.
 * @param {boolean} [props.muted=true] - Videos MUST be muted for browser autoplay.
 */
const VideoSlideshow = ({ videos, autoPlay = true, autoPlayInterval = 7000, muted = true }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRefs = useRef([]); // Ref to store all video elements

  // --- Navigation Functions ---

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? videos.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === videos.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  // --- Slideshow Auto-play Effect ---

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setTimeout(() => {
      goToNext();
    }, autoPlayInterval);

    // Clear the timer when the component unmounts or currentIndex changes
    return () => clearTimeout(timer);
  }, [currentIndex, autoPlay, autoPlayInterval, videos.length, goToNext]);

  // --- Video Play/Pause Logic ---

  useEffect(() => {
    // Loop through all video elements
    videoRefs.current.forEach((videoEl, index) => {
      if (!videoEl) return;

      if (index === currentIndex) {
        // Play the current video
        videoEl.play().catch(error => {
          // Log autoplay errors (often due to browser policies)
          console.error("Video play failed:", error);
        });
      } else {
        // Pause all other videos and reset them
        videoEl.pause();
        videoEl.currentTime = 0;
      }
    });
  }, [currentIndex, videos]); // Re-run this effect when the active slide changes

  if (!videos || videos.length === 0) {
    return <div>No videos to display.</div>;
  }

  return (
    <div className={styles.slideshowContainer}>
      
      {/* --- Slides --- */}
      <div className={styles.slidesWrapper}>
        {videos.map((videoUrl, index) => (
          <div
            className={`${styles.slide} ${index === currentIndex ? styles.slideActive : ''}`}
            key={index}
          >
            <video
              // Add to our ref array
              ref={(el) => (videoRefs.current[index] = el)}
              className={styles.videoElement}
              src={videoUrl}
              muted={muted} // Muted is critical for autoplay
              loop
              playsInline // Important for iOS
              controls={false} // Hide default controls
            />
          </div>
        ))}
      </div>

      {/* --- Left/Right Arrows (Same as before) --- */}
      <button className={`${styles.arrow} ${styles.arrowLeft}`} onClick={goToPrevious}>
        &#10094;
      </button>
      <button className={`${styles.arrow} ${styles.arrowRight}`} onClick={goToNext}>
        &#10095;
      </button>

      {/* --- Dot Indicators (Same as before) --- */}
      <div className={styles.dotsContainer}>
        {videos.map((_, slideIndex) => (
          <div
            key={slideIndex}
            className={`${styles.dot} ${currentIndex === slideIndex ? styles.dotActive : ''}`}
            onClick={() => goToSlide(slideIndex)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default VideoSlideshow;