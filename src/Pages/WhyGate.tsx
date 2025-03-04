import Container from "../Components/Container"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import WhyGateFlow from "../Components/WhyGate/WhyGateFlow"
import WhyGateHero from "../Components/WhyGate/WhyGateHero"

const WhyGate = () => {
  return (
    <Container className="flex flex-col gap-2 bg-gray-50">
      <Navbar />
      <WhyGateHero />
      <WhyGateFlow />
      <Footer />
    </Container>
  )
}

export default WhyGate