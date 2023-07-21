import { Col, Container, Row } from 'react-bootstrap';
import { service_items } from './items';

function FooterService() {
  /**
   * map for items to given the service items
   */
  const serviceList = service_items.map((item, index) => {
    let { Icon, title, description } = item;
    return (
      <Col key={index}>
        <div className="service__item">
          <Icon className="icon" />
          <div>
            <h5 className="h6 m-0 text-capitalize">{title}</h5>
            <span className="font--size--small">{description}</span>
          </div>
        </div>
      </Col>
    );
  });

  return (
    <div className="content main-padding">
      <Container fluid>
        <div className="footer__service">
          <Row xs={1} sm={2} md={3} lg={6} className="r-gap-30">
            {serviceList}
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default FooterService;
