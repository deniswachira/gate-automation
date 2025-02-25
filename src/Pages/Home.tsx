// import Companies from "../Components/Companies"
import Container from "../Components/Container"
import Footer from "../Components/Footer"
import Hero from "../Components/Home/Hero"
import Navbar from "../Components/Navbar"
import WhyAutomate from "../Components/Home/WhyAutomate"
import FeaturesAndSolutions from "../Components/Home/FeaturesAndSolutions"
import HowItWork from "../Components/Home/HowItWork"
import Benefits from "../Components/Home/Benefits"
import Testimonials from "../Components/Home/Testimonials"

const Home = () => {
  return (
      <Container className="flex flex-col gap-6">
        <Navbar />
        <Hero />
        <WhyAutomate />
        <HowItWork />
        <FeaturesAndSolutions />
        <Benefits />
        <Testimonials />
        <Footer />
      </Container>    
  )
}

export default Home

