import Reviews from './Reviews.js';
import Sponsers from './Sponsers.js';
import { Container } from 'react-bootstrap';

function Clients() {
  return (
    <section className="content main-padding">
      <div className="clients">
        <Container>
          <Reviews />
          <div className="main-padding-top" />
          <div className="spliter" />
          <div className="main-padding-bottom" />
          <Sponsers />
        </Container>
      </div>
    </section>
  );
}

export default Clients;
