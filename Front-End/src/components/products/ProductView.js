import { Col, Row } from 'react-bootstrap';
import RateStars from '../RateStars';
import ProductStock from './ProductStock';
import { FaBehance, FaFacebookF, FaTwitter } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import ProductForm from "./ProductForm"
import {Link} from "react-router-dom"

function ProductView({ data, id }) {
  return (
    <div className="product__item product-view">
      <Row className="r-gap-40 align-items-center">
        <Col xs={12} lg={6}>
          <img src={data.photo} className="img-fluid" />
        </Col>
        <Col xs={12} lg={6}>
          <div className="product__item-content">
            <div>
              <span>الكود: {id}</span>
              <h2 className="h4 m-0 mt-1 text-uppercase">{data.title}</h2>
            </div>
            <div className="d-flex flex-wrap align-items-center gap-10">
              <span className="item-price w-100">
                {data.price.sale && <span className="sale"> {data.price.sale}.00 جـ </span>}
                <span className="money">{data.price.money}.00 جـ </span>
              </span>
              <ProductStock stock={true} />
              <RateStars className="mr-3" stars={4} />
            </div>
            <p className='m-0'>{data.description}</p>
            <ProductForm data={data} />
            <img src="/img/payment.png" alt="sponser" className="my-3 img-fluid" />
            <ul className="social-media dark">
              <li><Link href="/" data-title-top="تويتر"><FaTwitter className="icon"/></Link></li>
              <li><Link href="/" data-title-top="انستجرام"><BsInstagram className="icon"/></Link></li>
              <li><Link href="/" data-title-top="فيسبوك"><FaFacebookF className="icon"/></Link></li>
              <li><Link href="/" data-title-top="بيهانس"><FaBehance className="icon"/></Link></li>
            </ul>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default ProductView;
