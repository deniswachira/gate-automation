import Container from "../Components/Container"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import CampaignComparison from "../Components/WeHelpWithTab/CampaignComparison"
import FunnelMarketingSection from "../Components/WeHelpWithTab/FunnelMarketingSection"
import WeHelpWithHero from "../Components/WeHelpWithTab/WeHelpWithHero"
import WeHelpWithProspectingSection from "../Components/WeHelpWithTab/WeHelpWithProspectingSection"

const WeHelpWithProspecting = () => {
  return (
    <Container className="flex flex-col gap-6">
      <Navbar />
      <WeHelpWithHero />
      <WeHelpWithProspectingSection />
      <CampaignComparison/>
      <FunnelMarketingSection/>
      <Footer />
    </Container>
  )
}

export default WeHelpWithProspecting