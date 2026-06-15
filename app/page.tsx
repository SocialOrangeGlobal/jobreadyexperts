import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import PainPoints from "./components/PainPoints";
import HowItWorks from "./components/HowItWorks";
import Occupations from "./components/Occupations";
import WhyUs from "./components/WhyUs";
import PhotoGallery from "./components/PhotoGallery";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import EnquiryForm from "./components/EnquiryForm";
import BottomCTA from "./components/BottomCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Topbar />
      <Navbar />
      <Hero />
      <Stats />
      <PainPoints />
      <HowItWorks />
      <Occupations />
      <WhyUs />
      <PhotoGallery />
      <Testimonials />
      <FAQ />
      <EnquiryForm />
      <BottomCTA />
      <Footer />
    </>
  );
}
