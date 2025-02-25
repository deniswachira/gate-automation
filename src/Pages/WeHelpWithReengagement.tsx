import Container from "../Components/Container"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import WeHelpWithCRMReengagemantSection from "../Components/WeHelpWithTab/WeHelpWithCRMReengagemantSection"
import WeHelpWithHero from "../Components/WeHelpWithTab/WeHelpWithHero"

const WeHelpWithReengagement = () => {
  return (
    <Container className="flex flex-col gap-6">
      <Navbar />
      <WeHelpWithHero />
      <WeHelpWithCRMReengagemantSection />
      <Footer />
    </Container>
  )
}

export default WeHelpWithReengagement