import dynamic from 'next/dynamic'

const Header = dynamic(() => import('../components/Header/Header'), { ssr: true })
const Hero = dynamic(() => import('../components/Hero/Hero'), { ssr: true })
const GalleryPreview = dynamic(() => import('../components/GalleryPreview/GalleryPreview'), {
  loading: () => <div className="loading-skeleton">Loading...</div>
})
const WhyChooseUs = dynamic(() => import('../components/WhyChooseUs/WhyChooseUs'), {
  loading: () => <div className="loading-skeleton">Loading...</div>
})
const OurShoots = dynamic(() => import('../components/OurShoots/OurShoots'), {
  loading: () => <div className="loading-skeleton">Loading...</div>
})
const VideoTeaser = dynamic(() => import('../components/VideoTeaser/VideoTeaser'), {
  loading: () => <div className="loading-skeleton">Loading...</div>
})
const YouTubeGallery = dynamic(() => import('../components/YoutubeGallery/YoutubeGallery'), {
  loading: () => <div className="loading-skeleton">Loading...</div>
})
// const OurJourney = dynamic(() => import('../components/OurJourney/OurJourney'), {
// loading: () => <div className="loading-skeleton">Loading...</div>
// })
const OurServices = dynamic(() => import('../components/OurServices/OurServices'), {
  loading: () => <div className="loading-skeleton">Loading...</div>
})
const BlackWhite = dynamic(() => import('../components/BlackWhite/BlackWhite'), {
  loading: () => <div className="loading-skeleton">Loading...</div>
})
const Testimonials = dynamic(() => import('../components/Testimonials/Testimonials'), {
  loading: () => <div className="loading-skeleton">Loading...</div>
})
const ContactSection = dynamic(() => import('../components/ContactSection/ContactSection'), {
  loading: () => <div className="loading-skeleton">Loading...</div>
})
const Footer = dynamic(() => import('../components/Footer/Footer'))
const About = dynamic(() => import('../components/About/About'))
const VideoSlideshow = dynamic(() => import('../components/VideoSlideshow/VideoSlideshow'))
const InvitationGrid = dynamic(() => import('../components/InvitationGrid/InvitationGrid'))

const mySlideshowVideos = [
  '/videos/aerial-shot-1.mp4',
  '/videos/product-shot-1.mp4',
  '/videos/lifestyle-action-1.mp4',
  '/videos/cityscape-1.mp4',
];

export default function Home() {
  return (
    <div>
      <Header />
      <Hero/>
      <div className="gallery-main-container">
        <GalleryPreview />
      </div>
      <WhyChooseUs />
      <OurShoots />
      {/* <VideoTeaser /> */}
      <VideoSlideshow videos={mySlideshowVideos} />
      <YouTubeGallery />
      <About />
      <OurServices />
      <BlackWhite imageUrl="/assets/BlackWhite/image.jpg" />
      <Testimonials />
      <ContactSection />
      <Footer />
    </div>
  );
}
