import Container from "../Components/Container"
import Hero from "../Components/Hero"
import Navbar from "../Components/Navbar"

const Home = () => {
  return (
    <div>
      <Container className="flex flex-col gap-6">
        <Navbar />
        <Hero />
      </Container>
    </div>
  )
}

export default Home