import { Col, Container, Row } from 'react-bootstrap';
import { service_items } from './items';

function FooterService() {
  // map for items to given the items
  const serviceList = service_items.map((item, index) => {
    let { Icon, title, description } = item;
    return (
      <Col key={index}>
        <div className="service__item">
          <Icon className="icon" />
          <div>
            <h5 className="h6 m-0 c-gray text-capitalize">{title}</h5>
            <span>{description}</span>
          </div>
        </div>
      </Col>
    );
  });

  return (
    <div className="footer__service main-padding">
      <Container fluid>
        <Row xs={1} sm={2} md={3} lg={6} className="r-gap-30">
          {serviceList}
        </Row>
      </Container>
    </div>
  );
}

export default FooterService;
