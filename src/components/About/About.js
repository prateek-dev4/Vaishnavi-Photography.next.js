// components/About.js
import React from 'react';
import styles from './About.module.css';

const About = () => {
    const photographyStyles = [
        { name: 'Portrait', icon: '👤' },
        { name: 'Landscape', icon: '🏞️' },
        { name: 'Wedding', icon: '💒' },
        { name: 'Fashion', icon: '👗' },
        { name: 'Documentary', icon: '📝' },
        { name: 'Creative', icon: '🎨' }
    ];

    const stats = [
        { number: '500+', label: 'Photoshoots' },
        { number: '5+', label: 'Years Experience' },
        { number: '50+', label: 'Happy Clients' },
        { number: '10K+', label: 'Photos Captured' }
    ];

    return (
        <>
            {/* Triangle SVG at the top */}

            
            <section className={styles.about} id="about">
                {/* Background Elements */}
                <div className={styles.backgroundElements}>
                    <div className={styles.lensFlare}></div>
                    <div className={styles.apertureShape}></div>
                    <div className={styles.filmStrip}></div>
                </div>

                <div className={styles.container}>
                    <div className={styles.content}>
                        {/* Header */}
                        <div className={styles.header}>
                            <h2 className={styles.title}>
                                <span className={styles.titleMain}>Capturing Life&apos;s</span>
                                <span className={styles.titleGradient}>Beautiful Moments</span>
                            </h2>
                            <div className={styles.cameraIcon}>📷</div>
                        </div>

                        {/* Main Content Grid */}
                        <div className={styles.grid}>
                            {/* Text Content */}
                            <div className={styles.textContent}>
                                <div className={styles.introSection}>
                                    <h3 className={styles.greeting}>
                                        Hi, I&apos;m <span className={styles.nameHighlight}>Vaishnavi</span>
                                    </h3>
                                    <p className={styles.tagline}>
                                        A passionate photographer dedicated to freezing time and
                                        preserving your most precious memories.
                                    </p>
                                </div>

                                <div className={styles.story}>
                                    <p className={styles.storyText}>
                                        With an eye for detail and a heart for storytelling, I specialize
                                        in creating timeless photographs that speak emotions. Every click
                                        is a narrative waiting to be told, every frame a piece of art.
                                    </p>

                                    <p className={styles.storyText}>
                                        My journey with photography began 5 years ago, and since then,
                                        I&apos;ve been on a mission to capture the raw, authentic beauty
                                        in every moment—from intimate weddings to breathtaking landscapes.
                                    </p>
                                </div>

                                {/* Photography Styles */}
                                <div className={styles.stylesSection}>
                                    <h4 className={styles.stylesTitle}>My Photography Styles</h4>
                                    <div className={styles.stylesGrid}>
                                        {photographyStyles.map((style, index) => (
                                            <div key={style.name} className={styles.styleCard}>
                                                <span className={styles.styleIcon}>{style.icon}</span>
                                                <span className={styles.styleName}>{style.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Visual Section */}
                            <div className={styles.visual}>
                                <div className={styles.profileCard}>
                                    <div className={styles.cardFrame}>
                                        <div className={styles.profileImage}>
                                            <div className={styles.imagePlaceholder}>
                                                <div className={styles.cameraLens}></div>
                                                <div className={styles.shutterEffect}></div>
                                            </div>
                                        </div>

                                        <div className={styles.cardStats}>
                                            {stats.map((stat, index) => (
                                                <div key={stat.label} className={styles.statItem}>
                                                    <div className={styles.statNumber}>{stat.number}</div>
                                                    <div className={styles.statLabel}>{stat.label}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Philosophy Section */}
                        <div className={styles.philosophy}>
                            <div className={styles.quote}>
                                <div className={styles.quoteIcon}>❝</div>
                                <p className={styles.quoteText}>
                                    Photography is the art of making memories tangible,
                                    turning moments into everlasting treasures.
                                </p>
                                <div className={styles.quoteAuthor}>— Vaishnavi</div>
                            </div>
                        </div>

                        {/* CTA Section */}
                        <div className={styles.ctaSection}>
                            <button className={styles.ctaButton}>
                                <span className={styles.buttonText}>View My Portfolio</span>
                                <div className={styles.buttonIcon}>→</div>
                                <div className={styles.buttonGlow}></div>
                            </button>

                            <button className={styles.secondaryButton}>
                                <span className={styles.buttonText}>Book a Session</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Triangle SVG at the bottom */}
            <svg
                width="100%"
                height="100"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                className={styles.triangleSvgBottom}
                style={{ color: 'var(--primary-bg)' }}
            >
                <polygon points="0,0 50,100 100,0" fill="currentColor"/>
            </svg>
        </>
    );
};

export default About;