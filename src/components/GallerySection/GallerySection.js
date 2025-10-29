'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Lightbox from '@/components/Lightbox/Lightbox';
import styles from './GallerySection.module.css';

const GallerySection = ({ title, images, id }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  // Create masonry columns
  const columns = 4;
  const columnContents = Array.from({ length: columns }, () => []);
  
  images.forEach((image, index) => {
    columnContents[index % columns].push({
      src: image.src,
      width: image.width,
      height: image.height,
      index: index
    });
  });

  return (
    <section id={id} className={styles.section}>
      <motion.h2 
        className={styles.sectionTitle}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
      
      <div className={styles.masonryGrid}>
        {columnContents.map((column, columnIndex) => (
          <div key={columnIndex} className={styles.masonryColumn}>
            {column.map(({ src, width, height, index }) => (
              <motion.div 
                key={index} 
                className={styles.imageCard}
                onClick={() => openLightbox(index)}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Image
                  src={src}
                  alt={`${title} image ${index + 1}`}
                  width={width}
                  height={height}
                  className={styles.image}
                  loading={index < 6 ? "eager" : "lazy"}
                  quality={85}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEwLzUsLS0vLTQ3NzY2NzU0LC8wOEg5Pz02PUFHRkVGTVNXWVtcW0X/2wBDAR"
                  priority={index < 2} // Prioritize loading first two images
                />
                <div className={styles.imageOverlay}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M2 12s4-8 10-8 10 8 10 8-4 8-10 8-10-8-10-8z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>
        ))}
      </div>

      <Lightbox
        images={images}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
      />
    </section>
  );
};

export default GallerySection;