// import Companies from "../Components/Companies"
import Container from "../Components/Container"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import SolutionHero1 from "../Components/Solutions/SolutionHero1"
import SolutionHero2 from "../Components/Solutions/SolutionHero2"
import SolutionHero3 from "../Components/Solutions/SolutionHero3"
import SolutionHero4 from "../Components/Solutions/SolutionHero4"
import SolutionHero5 from "../Components/Solutions/SolutionHero5"

const Solutions = () => {
  return (
      <Container className="flex flex-col gap-6">
        <Navbar />
        <SolutionHero1 />
        <SolutionHero2 />
        <SolutionHero3 />        
        <SolutionHero4 />        
        <SolutionHero5 />        
        <Footer />
      </Container>    
  )
}

export default Solutions

