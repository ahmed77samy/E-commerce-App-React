import { Col, Modal, Row } from 'react-bootstrap';
import { LiaShippingFastSolid } from 'react-icons/lia';
import { BsClock, BsPlay } from 'react-icons/bs';
import ReactPlayer from 'react-player/lazy';
import { useState } from 'react';
import { TfiClose } from 'react-icons/tfi';

const features = {
  content:
    'لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف',
  items: [
    'هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم',
    'ولكن الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر',
    'بينما تعمل جميع مولّدات نصوص لوريم إيبسوم على الإنترنت',
    'إن كنت تريد أن تستخدم نص لوريم إيبسوم ما، عليك أن تتحقق أولاً أن ليس هناك أي كلمات',
  ],
};
const Specifications = {
  الماده: 'خلافاَ للإعتقاد السائد فإن لوريم إيبسوم ليس نصاَ عشوائياً',
  'الاستخدام المفضل': 'خلافاَ للإعتقاد السائد فإن لوريم إيبسوم ليس نصاَ عشوائياً، بل إن له جذور في الأدب اللاتيني الكلاسيكي منذ العام 45 قبل الميلاد، مما يجعله أكثر من 2000 عام في القدم',
  الضمان: 'عامين من الضمان',
  الصانع: 'هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم',
};

function ProductDescription() {
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);
  const [player, setPlayer] = useState({
    url: 'https://www.youtube.com/watch?v=xE7vQoN-rXY',
    muted: false,
    playing: true,
    loop: true,
    controls: true,
    width: '100%',
  });

  // map for items to given the items
  const featList = features.items.map((item, index) => {
    return (
      <li key={index}>
        <span className="ml-2">{item}</span>
      </li>
    );
  });
  // map for items to given the items
  const specList = Object.keys(Specifications).map((item, index) => {
    return (
      <div key={index}>
        <label>{item}:&nbsp;&nbsp; </label>
        <p className="m-0">{Specifications[item]}</p>
      </div>
    );
  });

  return (
    <div className="description">
      <Row className="r-gap-40">
        <Col xs={12}>
          <p className="m-0">
            هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم
            لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام "هنا يوجد محتوى نصي، هنا يوجد محتوى نصي" فتجعلها تبدو (أي الأحرف) وكأنها نص مقروء. العديد من برامح النشر المكتبي وبرامح تحرير
            صفحات الويب تستخدم لوريم إيبسوم بشكل إفتراضي كنموذج عن النص، وإذا قمت بإدخال "lorem ipsum" في أي محرك بحث ستظهر العديد من المواقع الحديثة العهد في نتائج البحث. على مدى السنين ظهرت نسخ
            جديدة ومختلفة من نص لوريم إيبسوم، أحياناً عن طريق الصدفة، وأحياناً عن عمد كإدخال بعض العبارات الفكاهية إليها.
          </p>
        </Col>

        <Col xs={12} lg={6}>
          <div className="features">
            <div className="tab__header">
              <h5>المميزات</h5>
            </div>
            <p>{features.content}</p>
            <ul className="pr-4 c-gray">{featList}</ul>
          </div>
          <div className="spliter light-2 my-4"></div>
          <div className="specifications">
            <div className="tab__header">
              <h5>التحديدات</h5>
            </div>
            <div className="spec">{specList}</div>
          </div>
        </Col>

        <Col xs={12} lg={6}>
          <div className="tab__header">
            <h5>الفديو التعريفي</h5>
          </div>

          <div className="play-video mb-4">
            <BsPlay className="icon" onClick={toggleModal} />
            <img src="https://placehold.co/650x425/F4F4F4/png" alt="product-video" />
          </div>

          <div className="video-icon">
            <div>
              <BsClock className="icon" />
              <div>
                <h6 className="text-capitalize">خدمه 24 ساعة</h6>
                <span>خدمة بلا شك طوال اليوم</span>
              </div>
            </div>
            <div>
              <LiaShippingFastSolid className="icon" />
              <div>
                <h6 className="text-capitalize">شحن مجاني</h6>
                <span>على الطلبات التي تزيد عن 200 جنيها</span>
              </div>
            </div>
          </div>

          <Modal show={modal} onHide={toggleModal} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header>
              <Modal.Title id="contained-modal-title-vcenter">
                <h4 className="m-0">متاجر shella</h4>
                <TfiClose onClick={toggleModal} className="icon" />
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <ReactPlayer className="bg-light-2" {...player} />
            </Modal.Body>
          </Modal>
        </Col>
      </Row>
    </div>
  );
}

export default ProductDescription;
