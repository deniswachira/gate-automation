import Container from "../Components/Container"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import BusinessProcessFlow from "../Components/Services/BusinessProcessFlow"
import ServicesHero from "../Components/Services/ServicesHero"

const Services = () => {
  return (
    <Container className="flex flex-col gap-2 bg-gray-50">
      <Navbar />
      <ServicesHero />
      <BusinessProcessFlow />
      <Footer />
    </Container>
  )
}

export default Services