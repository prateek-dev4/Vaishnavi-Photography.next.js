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

const myInvitations = [
  {
    imageUrl: '/images/invitations/haldi-card.jpg', // You must provide these images
    name: 'Haldi Ceremony',
    description: 'Vibrant yellows and floral marigolds. A bright and joyful theme for your Haldi event.',
    linkUrl: '/invitations/haldi',
  },
  {
    imageUrl: '/images/invitations/sangeet-card.jpg',
    name: 'Sangeet Night',
    description: 'Deep blues and sparkling stars. A glamorous and energetic design for a night of dance.',
    linkUrl: '/invitations/sangeet',
  },
  {
    imageUrl: '/images/invitations/wedding-card.jpg',
    name: 'Royal Wedding',
    description: 'Rich reds, golds, and intricate patterns. A traditional and elegant theme for the main event.',
    linkUrl: '/invitations/wedding',
  },
];

const myImages = [
  {
    imageUrl: '/images/invitations/haldi-card.jpg',
    name: 'Haldi Ceremony',
    description: 'Vibrant yellows and floral marigolds. A bright and joyful theme.',
    linkUrl: '/invitations/haldi',
  },
  {
    imageUrl: '/images/invitations/sangeet-card.jpg',
    name: 'Sangeet Night',
    description: 'Deep blues and sparkling stars. A glamorous design for a night of dance.',
    linkUrl: '/invitations/sangeet',
  },
  {
    imageUrl: '/images/invitations/wedding-card.jpg',
    name: 'Royal Wedding',
    description: 'Rich reds, golds, and intricate patterns. A traditional and elegant theme.',
    linkUrl: '/invitations/wedding',
  },
  {
    imageUrl: '/images/invitations/reception-card.jpg',
    name: 'Modern Reception',
    description: 'Clean pastels and minimalist fonts for a chic and modern reception.',
    linkUrl: '/invitations/reception',
  },
];
export default function Home() {
  return (
    <div>
      <Header />
      <VideoSlideshow videos={mySlideshowVideos} />
      <InvitationGrid invitations={myInvitations} />
      <Hero />
      <div className="gallery-main-container">
        <GalleryPreview images={myImages} />
      </div>
      <WhyChooseUs />
      <OurShoots />
      <VideoTeaser />
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
