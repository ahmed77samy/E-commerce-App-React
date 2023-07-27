import { Tabs } from 'react-bootstrap';
import { Col, Row, Tab } from 'react-bootstrap';

import SizeGuideDresses from './SizeGuideDresses';
import SizeGuideTops from './SizeGuideTops';
import SizeGuideBottoms from './SizeGuideBottoms';
import SizeGuideDenim from './SizeGuideDenim';
import SizeGuideSwimWear from './SizeGuideSwimWear';
import SizeGuideShoes from './SizeGuideShoes';

function SizeGuide() {
  return (
    <div className="size-guide">
      <Row className="r-gap-40">
        <Col xs={12}>
          <div className="tab__header">
            <h5>دليل المقاسات و الاحجام</h5>
            <span>استخدم هذه المخططات للتحويل بين تنسيقات الحجم القياسي.</span>
          </div>
          <p>
            يرجى العلم أن معظم ملابسنا هي مقاسات الصغار ، والتي تكون أصغر من المقاسات العادية للنساء في الولايات المتحدة / أوروبا. الرجوع إلى مخطط القياسات لكل منتج على حدة تحديد أفضل حجم لك. يمكن
            العثور على مخطط حجم المنتج المحدد والمعلومات في وصف المنتج أو في معرض صور المنتج.
          </p>
          <p>
            يبذل فريقنا قصارى جهده لتضمين تفاصيل دقيقة عن الحجم وقياس كل عنصر في أوصاف المنتج. إذا كانت لديك أسئلة بخصوص التحجيم أو أي معلومات أخرى في ملف عنصر محدد ، يرجى مراسلتنا عبر البريد
            الإلكتروني على hello@stately.com للحصول على تفاصيل محددة.
          </p>
        </Col>
        <Col xs={12}>
          <div className="tab__header">
            <h5>اوجد المقاس المناسب</h5>
            <span>يمكنك بسهولة العثور على المقاس المناسب</span>
          </div>
          <p>عند مقارنة قياساتك بالقياسات المدرجة في الموقع ، تأكد من التحقق مما إذا كان القماش قابل للتمدد أم لا. إذا كان الأمر كذلك ، فيمكن أن يمتد شبرًا واحدًا أو أكثر.</p>
          <ul className="text--typo m-0 list-unstyled">
            <li className='c-gray'>
              <span className="text-capitalize text--black">الصدر&nbsp;:&nbsp;&nbsp;</span>
              لفي شريط القياس بشكل غير محكم حول أقصى جزء من صدرك لضمان ملاءمة مريحة.
            </li>
            <li className='c-gray'>
              <span className="text-capitalize text--black">الوسط&nbsp;:&nbsp;&nbsp;</span>
              قم بقياس أضيق جزء من خصرك الطبيعي ، مع إبقاء شريط القياس فضفاضًا بدرجة كافية ليناسب بشكل مريح.
            </li>
            <li className='c-gray'>
              <span className="text-capitalize text--black">الفخاذ&nbsp;:&nbsp;&nbsp;</span>
              لف شريط القياس حول أوسع جزء من الوركين ، مع وضع الشريط بشكل مريح على جسمك.
            </li>
            <li className='c-gray'>
              <span className="text-capitalize text--black">الطول&nbsp;:&nbsp;&nbsp;</span>
              بالنسبة للقمصان والفساتين ، قم بالقياس من أعلى كتفك إلى الحافة. للفساتين بدون حمالات ، قم بالقياس من أعلى جزء من خط العنق إلى الحافة. بالنسبة للسراويل والتنانير ، قم بالقياس من أعلى
              الخصر إلى الحاشية.
            </li>
            <li className='c-gray'>
              <span className="text-capitalize text--black">الاكمام&nbsp;:&nbsp;&nbsp;</span>
              مع تمديد ذراعك ، قم بالقياس من قاعدة رقبتك إلى نهاية حافة الكم لتحديد مكان سقوط الأكمام عليك.
            </li>
          </ul>
        </Col>
        <Col xs={12}>
          <Tabs defaultActiveKey="dresses" id="size-guid-example">
            <Tab eventKey="dresses" title="الفساتين">
              <SizeGuideDresses />
            </Tab>
            <Tab eventKey="tops" title="الاعلي">
              <SizeGuideTops />
            </Tab>
            <Tab eventKey="bottoms" title="الاسفل">
              <SizeGuideBottoms />
            </Tab>
            <Tab eventKey="denim" title="القطن">
              <SizeGuideDenim />
            </Tab>
            <Tab eventKey="swimwear" title="ملابس سباحه">
              <SizeGuideSwimWear />
            </Tab>
            <Tab eventKey="shoes" title="الشوز">
              <SizeGuideShoes />
            </Tab>
          </Tabs>
        </Col>
        <Col xs={12}>
          <h6 className="text-uppercase mb-3">تنبيه:</h6>
          <p className="mb-5">
            يوفر هذا الدليل معلومات عامة عن الحجم فقط ، ويمكن أن يختلف الملاءمة حسب الأسلوب والعلامة التجارية. للحصول على معلومات تحجيم أكثر تحديدًا حول المنتج ، يرجى الرجوع إلى المنتج وصف.
          </p>
          <h6 className="text-uppercase mb-3">ملحوظه:</h6>
          <ul className="c-gray mr-4 note">
            <li>ترتدي جميع الموديلات الفخمة مقاسات صغيرة في القمصان والفساتين ، ومقاس 1 أو 3 أو 5 من الجينز حسب نوع الجسم.</li>
            <li>تتميز معظم الفساتين والجينز الفخمة ببعض التمدد ، يرجى الرجوع إلى وصف المنتج للحصول على تفاصيل النسيج.</li>
            <li>معظم القيعان الفخمة لها طول من الداخل 31-34 بوصة حسب القطع والأسلوب. قد يختلف الحجم حسب القطع والأسلوب.</li>
          </ul>
        </Col>
      </Row>
    </div>
  );
}

export default SizeGuide;
