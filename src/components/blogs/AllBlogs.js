import { Col, Container, Row } from 'react-bootstrap';
import { blog_items } from './items';
import BlogItem from './BlogItem';
import AsideBlog from './AsideBlog';

function AllBlogs() {
  const blogList = blog_items.map((item, index) => {
    return <BlogItem key={index} data={item} grid={true} />;
  });

  return (
    <div className="content main-padding">
      <div className="blogs-content">
        <Container>
          <h3 className="text-uppercase text-center mb-5">ماذا عن متجرنا</h3>
          <Row className="r-gap-50">
            <Col xs={12} lg={9} className="order-lg-2">
              <div className="blogs__content d-flex flex-column r-gap-30">{blogList}</div>
            </Col>
            <Col xs={12} lg={9} className="mr-auto order-lg-3">
              <button className="btn__classic mx-auto">تحميل المزيد</button>
            </Col>
            <Col xs={12} lg={3} className="order-lg-1">
              <AsideBlog />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default AllBlogs;
