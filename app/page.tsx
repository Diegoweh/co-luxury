import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import BookingBar from './components/BookingBar'
import AboutSection from './components/AboutSection'
import ExperiencesSection from './components/ExperiencesSection'
import RoomsSection from './components/RoomsSection'
import AtmosphereSection from './components/AtmosphereSection'
import GalleryStrip from './components/GalleryStrip'
import TestimonialsSection from './components/TestimonialsSection'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <BookingBar />
      <AboutSection />
      <ExperiencesSection />
      <RoomsSection />
      <AtmosphereSection />
      <GalleryStrip />
      <TestimonialsSection />
      <FinalCTA />
      <Footer />
    </>
  )
}
