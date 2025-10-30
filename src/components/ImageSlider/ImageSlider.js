"use client";

// components/ImageSlider.js
import { useState, useEffect, useRef } from 'react';
import styles from './ImageSlider.module.css';

const ImageSlider = ({ 
  images = [], 
  videos = [],
  video = false, 
  autoPlay = true, 
  interval = 5000 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRefs = useRef([]);

  const mediaItems = video ? videos : images;
  const isVideo = video;

  const nextSlide = () => {
    // Pause current video if it's playing
    if (isVideo && videoRefs.current[currentIndex]) {
      videoRefs.current[currentIndex].pause();
    }
    
    setCurrentIndex((prevIndex) => 
      prevIndex === mediaItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    // Pause current video if it's playing
    if (isVideo && videoRefs.current[currentIndex]) {
      videoRefs.current[currentIndex].pause();
    }
    
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? mediaItems.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    // Pause current video if it's playing
    if (isVideo && videoRefs.current[currentIndex]) {
      videoRefs.current[currentIndex].pause();
    }
    
    setCurrentIndex(index);
  };

  // Handle video play state when slide changes
  useEffect(() => {
    if (isVideo && videoRefs.current[currentIndex] && autoPlay) {
      const playPromise = videoRefs.current[currentIndex].play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log("Video autoplay failed:", error);
        });
      }
    }
  }, [currentIndex, isVideo, autoPlay]);

  // Auto slide change for both images and videos
  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(nextSlide, interval);
    return () => clearInterval(timer);
  }, [currentIndex, autoPlay, interval]);

  if (!mediaItems || mediaItems.length === 0) {
    return (
      <div className={styles.slider}>
        <div className={styles.noMedia}>
          No {isVideo ? 'videos' : 'images'} to display
        </div>
      </div>
    );
  }

  return (
    <div className={styles.slider}>
      <div 
        className={styles.slidesContainer}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {mediaItems.map((item, index) => (
          <div 
            key={index} 
            className={styles.slide}
          >
            {isVideo ? (
              <video
                ref={el => videoRefs.current[index] = el}
                src={item.src}
                className={styles.media}
                muted
                loop
                playsInline
                poster={item.poster}
                aria-label={item.alt || `Video ${index + 1}`}
              />
            ) : (
              <img 
                src={item.src} 
                alt={item.alt || `Slide ${index + 1}`}
                className={styles.media}
              />
            )}
            {item.caption && (
              <div className={styles.caption}>
                {item.caption}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button 
        className={`${styles.arrow} ${styles.prevArrow}`}
        onClick={prevSlide}
        aria-label={`Previous ${isVideo ? 'video' : 'image'}`}
      >
        &#8249;
      </button>
      <button 
        className={`${styles.arrow} ${styles.nextArrow}`}
        onClick={nextSlide}
        aria-label={`Next ${isVideo ? 'video' : 'image'}`}
      >
        &#8250;
      </button>

      {/* Dots Indicator */}
      <div className={styles.dotsContainer}>
        {mediaItems.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${
              index === currentIndex ? styles.activeDot : ''
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to ${isVideo ? 'video' : 'slide'} ${index + 1}`}
          />
        ))}
      </div>

      {/* Media Type Indicator */}
      <div className={styles.mediaTypeIndicator}>
        {isVideo ? 'Video' : 'Image'} {currentIndex + 1} of {mediaItems.length}
      </div>
    </div>
  );
};

export default ImageSlider;