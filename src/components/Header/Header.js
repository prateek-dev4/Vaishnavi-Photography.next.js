'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();

  // Handle mounting
  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  // Handle scroll - changed threshold to 50px
  useEffect(() => {
    if (!isMounted) return;

    // Set initial scroll state
    setIsScrolled(window.scrollY > 25);

    // Throttled scroll handler
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 25);
          ticking = false;
        });
        ticking = true;
      }
    };

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Cleanup
    return () => {
      if (isMounted) {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, [isMounted]);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '/#services' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <>
      {/* Fixed Navbar - Hidden initially, appears on scroll */}
      <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
        <div className={styles.navbarContainer}>
          {/* Logo */}
          <Link href="/" className={styles.logo}>
            <div className={styles.logoWrapper}>
            <img src="/logo.svg" alt="Logo" width={125} height={50} />
            </div>
          </Link>

          {/* Desktop Navigation - Only shows on desktop */}
          <nav className={styles.nav}>
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`${styles.navLink} ${
                  pathname === item.href ? styles.active : ''
                }`}
              >
                <span className={styles.navText}>{item.name}</span>
                <div className={styles.navHoverEffect}></div>
              </Link>
            ))}
          </nav>

          {/* CTA Button - Only shows on desktop */}
          <div className={styles.ctaSection}>
            <button className={styles.ctaButton}>
              <span className={styles.ctaText}>Let's Talk</span>
              <div className={styles.ctaGlow}></div>
            </button>
          </div>

          {/* Mobile Menu Button - Only shows on mobile */}
          <button
            className={`${styles.mobileMenuButton} ${
              isMobileMenuOpen ? styles.menuOpen : ''
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={styles.menuBar}></span>
            <span className={styles.menuBar}></span>
            <span className={styles.menuBar}></span>
          </button>
        </div>

        {/* Mobile Navigation Overlay - Only shows on mobile when menu is open */}
        <div className={`${styles.mobileNav} ${isMobileMenuOpen ? styles.mobileNavOpen : ''}`}>
          <div className={styles.mobileNavContent}>
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className={`${styles.mobileNavLink} ${
                  pathname === item.href ? styles.mobileActive : ''
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <button className={styles.mobileCtaButton}>
              Get Started
            </button>
          </div>
        </div>

        {/* Glassmorphism Background Layer */}
        <div className={styles.glassLayer}></div>
      </header>

      {/* Spacer - Only needed when navbar is visible */}
      <div className={`${styles.headerSpacer} ${isScrolled ? styles.spacerVisible : ''}`}></div>
    </>
  );
};

export default Header;