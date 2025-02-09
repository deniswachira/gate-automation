import Companies from "../Components/Companies"
import Container from "../Components/Container"
import DirectMailBenefits from "../Components/DirectMailBenefits"
import DirectMailPlatform from "../Components/DirectMailPlatform"
import Footer from "../Components/Footer"
import Hero from "../Components/Hero"
import Navbar from "../Components/Navbar"

const Home = () => {
  return (
      <Container className="flex flex-col gap-6">
        <Navbar />
        <Hero />
        <Companies  />
        <DirectMailBenefits />
        <DirectMailPlatform />
        <Footer />
      </Container>    
  )
}

export default Home

