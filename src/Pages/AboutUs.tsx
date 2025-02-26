import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Container from "../Components/Container";
import AboutHero from "../Components/AboutUs/AboutHero";
import WhatWeDo from "../Components/AboutUs/WhatWeDo";
import WhyBusinessChooseUs from "../Components/AboutUs/WhyBusinnesChooseUS";
import OurVision from "../Components/AboutUs/OurVision";
import Mission from "../Components/AboutUs/Mission";



export default function AboutUs() {
  return (
    <Container className="flex flex-col gap-6">
        <Navbar />
        <AboutHero />
        <WhatWeDo />
        <WhyBusinessChooseUs />
        <OurVision />
        <Mission />
        <Footer />
      </Container>  
  );
}
