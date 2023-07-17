import { Container } from "react-bootstrap"
import Header from "../components/header/Header"

function Home () {
  return (
    <div className="page-wrapper">
      <Header style={{ marginBottom: '50px'}} />
      <Container>
        <h1>App from Home</h1>
      </Container>
    </div>
  )
}

export default Home