// import Companies from "../Components/Companies"
import Container from "../Components/Container"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import PricingHero from "../Components/Pricing/PricingHero"
import PricingModels from "../Components/Pricing/PricingModels"

const Pricing = () => {
  return (
      <Container className="flex flex-col gap-6 bg-gray-50">
        <Navbar />
        <PricingHero />
        <PricingModels/>
        <Footer />
      </Container>    
  )
}

export default Pricing

