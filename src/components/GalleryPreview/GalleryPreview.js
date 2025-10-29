"use client"; // This component must be a client component

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import styles from './GalleryPreview.module.css';

/**
 * A responsive slider section to showcase invitation designs.
 *
 * @param {Object} props
 * @param {Object[]} props.invitations - An array of invitation objects.
 */
const GalleryPreview = () => {
  const images = [
    {
      imageUrl: '/assets/Preview/Preview 1.jpg',
      name: 'Wedding Photography',
      description: 'Capturing your special moments with elegance',
      linkUrl: '/gallery#wedding'
    },
    {
      imageUrl: '/assets/Preview/Preview 2.jpg',
      name: 'Portrait Sessions',
      description: 'Professional portraits that tell your story',
      linkUrl: '/gallery#portrait'
    },
    {
      imageUrl: '/assets/Preview/Preview 3.jpg',
      name: 'Event Coverage',
      description: 'Comprehensive event photography services',
      linkUrl: '/gallery#event'
    },
    {
      imageUrl: '/assets/Preview/Preview 4.jpg',
      name: 'Commercial Photography',
      description: 'Professional commercial and product photography',
      linkUrl: '/gallery#commercial'
    }
  ];

  return (
    <section className={styles.sliderContainer}>
      <h2 className={styles.sectionTitle}>Our Gallery</h2>
      
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
        effect="coverflow"
        centeredSlides={true}
        slidesPerView="auto"
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation
        pagination={{ clickable: true }}
        className={styles.swiperInstance}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className={styles.swiperSlide}>
            <Link href={image.linkUrl} className={styles.imageLink}>
              <div className={styles.imageWrapper}>
                <Image
                  src={image.imageUrl}
                  alt={image.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={index < 2}
                  quality={85}
                  style={{ 
                    objectFit: 'cover',
                    objectPosition: 'center'
                  }}
                />
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default GalleryPreview;