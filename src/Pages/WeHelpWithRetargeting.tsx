import Container from "../Components/Container"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import WeHelpWithHero from "../Components/WeHelpWithTab/WeHelpWithHero"
import WeHelpWithRetargetingSection from "../Components/WeHelpWithTab/WeHelpWithRetargetingSection"

const WeHelpWithRetargeting = () => {
  return (
    <Container className="flex flex-col gap-6">
      <Navbar />
      <WeHelpWithHero />
      <WeHelpWithRetargetingSection />
      <Footer />
    </Container>
  )
}

export default WeHelpWithRetargeting