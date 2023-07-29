import { Col, Container, Row } from "react-bootstrap"

function Banner() {
  return (
    <div className="content main-padding">
      <Container>
        <Row xs={1} lg={2} className="r-gap-30">
          <Col>
            <div className="banner">
              <img src="/img/bk/banner-1.jpg" alt="banner" />
              <div className="banner-content d-flex align-items-center justify-content-center flex-column r-gap-10 text-center m-3">
                <span className="text-uppercase">وصل حديثا</span>
                <h2 className="m-0 text-uppercase">المس لونك المفضل</h2>
                <p className="m-0">الأنماط الأساسية تنبض بالحياة بألوان زاهية.</p>
                <button className="btn__classic mt-3">أكتشف الان</button>
              </div>
            </div>
          </Col>
          <Col>
            <div className="banner">
              <img src="/img/bk/banner-2.jpg" alt="banner" />
              <div className="banner-content d-flex align-items-center justify-content-center flex-column r-gap-10 text-center m-3">
                <span className="text-uppercase">أكتشفهم جميعا</span>
                <h2 className="m-0 text-uppercase">جاكيت بيسبول لهذا الموسم</h2>
                <button className="btn__classic mt-3">أكتشف الان</button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Banner