import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './ProductBanner.module.css';

/**
 * A horizontally-scrolling banner of product cards.
 *
 * @param {Object} props
 * @param {string} props.title - The main title for the banner section.
 * @param {Object[]} props.products - An array of product objects to display.
 * @param {string} props.products[].category - The small text category (e.g., "Camera Drones").
 * @param {string} props.products[].name - The main product name.
 * @param {string} props.products[].tagline - A short description.
 * @param {string} props.products[].imageUrl - The URL for the product image.
 * @param {string} props.products[].learnMoreLink - The destination URL for the link.
 */
const ProductBanner = ({ title, products }) => {
  if (!products || products.length === 0) {
    return null; // Don't render anything if there are no products
  }

  return (
    <section className={styles.bannerContainer}>
      <h2 className={styles.bannerTitle}>{title}</h2>
      <div className={styles.scrollContainer}>
        {products.map((product, index) => (
          <div key={index} className={styles.productCard}>
            <div className={styles.productImageWrapper}>
              <Image
                src={product.imageUrl}
                alt={product.name}
                fill
                style={{ objectFit: 'contain' }} // 'contain' fits the whole image
              />
            </div>
            <div className={styles.productInfo}>
              <p className={styles.productCategory}>{product.category}</p>
              <h3 className={styles.productName}>{product.name}</h3>
              <p className={styles.productTagline}>{product.tagline}</p>
              <Link href={product.learnMoreLink} className={styles.learnMoreLink}>
                Learn More <span>&gt;</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductBanner;