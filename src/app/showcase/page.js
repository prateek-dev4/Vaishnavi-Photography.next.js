import dynamic from "next/dynamic";
import Header from "@/components/Header/Header";
const InvitationGrid = dynamic(() => import('@/components/InvitationGrid/InvitationGrid'));
const VideoSlideshow = dynamic(() => import('@/components/VideoSlideshow/VideoSlideshow'));
const ImageSlider = dynamic(() => import('@/components/ImageSlider/ImageSlider'));
const ContactSection = dynamic(() => import('@/components/ContactSection/ContactSection'));
const Footer = dynamic(() => import('@/components/Footer/Footer'));

export const metadata = {
    title: "Showcase - Vaishnavi Photography",
    description: "Explore our exquisite collection of wedding invitations, crafted to perfection for your special day."
}
export default function Showcase() {
    const mySlideshowVideos = [
        '/videos/aerial-shot-1.mp4',
        '/videos/product-shot-1.mp4',
        '/videos/lifestyle-action-1.mp4',
        '/',
    ];
    const myInvitationstop = [
        {
            imageUrl: '/sample.jpg',
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
        }
    ];
    const myInvitationsbottom = [
        {
            imageUrl: '/sample.jpg',
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
        {
            imageUrl: '/images/invitations/wedding-card.jpg',
            name: 'Royal Wedding',
            description: 'Rich reds, golds, and intricate patterns. A traditional and elegant theme for the main event.',
            linkUrl: '/invitations/wedding',
        }
    ];
    const imageSlides = [
        {
            src: '/sample.jpg',
            alt: 'First slide',
            // caption: 'Welcome to Our Website'
        },
        {
            src: '/sample.jpg',
            alt: 'Second slide',
            caption: 'Amazing Features'
        },
        {
            src: '/sample.jpg',
            alt: 'Second slide',
            caption: 'Amazing Features'
        },
        {
            src: '/sample.jpg',
            alt: 'Second slide',
            caption: 'Amazing Features'
        },
        {
            src: '/sample.jpg',
            alt: 'Second slide',
            caption: 'Amazing Features'
        },
        {
            src: '/sample.jpg',
            alt: 'Second slide',
            caption: 'Amazing Features'
        }
    ];
      const videoSlides = [
    {
      src: '/assets/Teaser/Hero.mp4',
      alt: 'Product demo video',
      caption: 'See our product in action',
      poster: '/images/video-poster1.jpg' // Optional thumbnail
    },
    {
      src: '/assets/Teaser/Hero.mp4',
      alt: 'Customer testimonial',
      caption: 'Hear from our customers'
    }
  ];
    return (
        <div>
            <Header />
            <VideoSlideshow videos={mySlideshowVideos} />
            <InvitationGrid invitations={myInvitationstop} cardsPerRow={3} />
            <ImageSlider
                images={imageSlides}
                video={false}
                autoPlay={true}
                interval={4000}
            />
            <ImageSlider
                videos={videoSlides}
                video={true}
                autoPlay={true}
                interval={10000}
            />
            <InvitationGrid invitations={myInvitationsbottom} cardsPerRow={4} />
            <ContactSection appoint={false} />
            <Footer/>
        </div>
    );
}