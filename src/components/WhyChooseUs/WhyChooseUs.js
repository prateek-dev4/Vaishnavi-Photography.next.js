"use client"
// components/WhyChooseUs/WhyChooseUs.js
import { useState, useEffect, useRef } from 'react';
import { 
  Camera, 
  Award, 
  Heart, 
  Clock,
  Users,
  Sparkles
} from 'lucide-react';
import { useInView } from 'motion/react';
import styles from './WhyChooseUs.module.css';

// Simple CountUp component (lightweight fallback)
function CountUp({ end = 0, duration = 1500, decimals = 0, shouldAnimate = false, className, style }) {
  const [value, setValue] = useState(0);
  const rafRef = useRef();

  useEffect(() => {
    if (!shouldAnimate) {
      setValue(0);
      return;
    }

    let start = null;
    const startVal = 0;
    const diff = end - startVal;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const current = startVal + diff * progress;
      setValue(Number(current.toFixed(decimals)));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      }
    };

    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [end, duration, decimals, shouldAnimate]);

  return (
    <div className={className || styles.simpleCounter} style={style}>
      {value}
    </div>
  );
}

const WhyChooseUs = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      setShouldAnimate(true);
    }
  }, [isInView]);

  const features = [
    {
      icon: <Camera size={32} />,
      title: "Professional Equipment",
      description: "We use state-of-the-art photography equipment to ensure the highest quality images with perfect lighting and composition."
    },
    {
      icon: <Award size={32} />,
      title: "Award-Winning Quality",
      description: "Our work has been recognized with multiple awards in portrait and wedding photography competitions."
    },
    {
      icon: <Heart size={32} />,
      title: "Passionate Artists",
      description: "We don't just take pictures - we create art. Our team is passionate about capturing your unique story."
    },
    {
      icon: <Clock size={32} />,
      title: "Quick Turnaround",
      description: "Receive your professionally edited photos within 2 weeks of your session, faster than industry standards."
    },
    {
      icon: <Users size={32} />,
      title: "Personalized Service",
      description: "We work closely with you to understand your vision and create photos that reflect your personality and style."
    },
    {
      icon: <Sparkles size={32} />,
      title: "Creative Editing",
      description: "Our post-processing enhances your photos while maintaining natural beauty, with attention to every detail."
    }
  ];

  // Auto-rotate features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <section className={styles.whyChooseUs} id="why-choose-us">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Why Choose Us</h2>
          <p className={styles.subtitle}>
            Discover what sets Vaishnavi Photography apart from the rest
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.featuresGrid}>
            {features.map((feature, index) => (
              <div
                key={index}
                className={`${styles.featureCard} ${
                  index === activeFeature ? styles.active : ''
                }`}
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div className={styles.iconWrapper}>
                  {feature.icon}
                </div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className={styles.visualSection}>
            <div className={styles.rotatingVisual}>
              <div className={styles.visualContent}>
                <div className={styles.circleBorder}>
                  <div className={styles.innerCircle}>
                    <div className={styles.iconHighlight}>
                      {features[activeFeature].icon}
                    </div>
                    <h4 className={styles.activeTitle}>
                      {features[activeFeature].title}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.statsContainer} ref={statsRef}>
          <div className={styles.statItem}>
            <CountUp end={500} duration={1600} decimals={0} shouldAnimate={shouldAnimate} style={{ fontSize: '42px', fontWeight: 700 }} />
            <p className={styles.statLabel}>Happy Clients</p>
          </div>
          <div className={styles.statItem}>
            <CountUp end={14} duration={1200} decimals={0} shouldAnimate={shouldAnimate} style={{ fontSize: '42px', fontWeight: 700 }} />
            <p className={styles.statLabel}>Years Experience</p>
          </div>
          <div className={styles.statItem}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
              <CountUp end={92} duration={1400} decimals={0} shouldAnimate={shouldAnimate} style={{ fontSize: '42px', fontWeight: 700 }} />
              <span className={styles.percent}>%</span>
            </div>
            <p className={styles.statLabel}>Satisfaction Rate</p>
          </div>
          <div className={styles.statItem}>
            <div className={styles.ratingCounter}>
              <CountUp end={9.1} duration={1400} decimals={1} shouldAnimate={shouldAnimate} style={{ fontSize: '32px', fontWeight: 700 }} />
            </div>
            <p className={styles.statLabel}>Average Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;