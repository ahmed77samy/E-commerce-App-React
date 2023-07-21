import { Col, Container, Row } from "react-bootstrap"

function Banner() {
  return (
    <div className="content main-padding">
      <Container>
        <Row xs={1} lg={2} className="r-gap-30">
          <Col>
            <div className="banner">
              <img src="https://placehold.co/700x500/F4F4F4/png?text=1" />
              <div className="banner-content d-flex align-items-center justify-content-center flex-column r-gap-10 text-center m-3">
                <span className="text-uppercase">new arrival</span>
                <h2 className="m-0 text-uppercase">touch of color</h2>
                <p className="m-0">Essential styles come alive in bright colors.</p>
                <button className="btn__classic mt-3">discover more</button>
              </div>
            </div>
          </Col>
          <Col>
            <div className="banner">
              <img src="https://placehold.co/700x500/F4F4F4/png?text=2" />
              <div className="banner-content d-flex align-items-center justify-content-center flex-column r-gap-10 text-center m-3">
                <span className="text-uppercase">discover them all</span>
                <h2 className="m-0 text-uppercase">this season"s bamber jacket</h2>
                <button className="btn__classic mt-3">discover more</button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Banner