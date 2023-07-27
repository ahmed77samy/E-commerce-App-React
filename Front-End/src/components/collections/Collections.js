import { Col, Container, Row } from 'react-bootstrap';
import { collection_items } from "./items"
import CollectionItem from "./CollectionItem"

function Collections() {
  // map for items to given the items
  const collectionList = collection_items.map((item, index) => {
    return (
      <Col key={index}>
        <CollectionItem data={item} />
      </Col>
    )
  })

  return (
    <div className="content main-padding">
      <div className="collections">
        <Container>
          <Row xs={1} sm={2} lg={3} className="r-gap-30">
            {collectionList}
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Collections;
