import { Col, Container, Form, Row } from 'react-bootstrap';
import { BiMessage } from 'react-icons/bi';

function ContactContent() {
  return (
    <div className="content main-padding">
      <div className="contact-content">
        <Container>
          <Row className='r-gap-20'>
            <Col xs={12} lg={4}>
              <h3 className="mb-5">هنا للمساعدة</h3>
              <div className="mb-4 c-gray">
                <p className="m-0">لديك سؤال؟ قد تجد إجابة في الأسئلة الشائعة الخاصة بنا. ولكن يمكنك أيضًا الاتصال بنا:</p>
              </div>
              <div className="mb-4">
                <p className="m-0 weight-600">اتصل بنا: 800-123-4567 747 المنتزه, الاسكندرية, مصر</p>
              </div>
              <div className="c-gray">
                <p className="m-0">ساعات العمل:</p>
                <p className="m-0">الأثنين الي الجمعه 9:00 صباحا - 6:00 مساءا</p>
                <p className="m-0">السبت 9:00 صباحا - 4:00 مساءا</p>
                <p className="m-0">الأحد: 9 مساءا - 2:00 مساءا</p>
              </div>
            </Col>
            <Col xs={12} lg={8}>
              <h3 className="mb-5">اترك لنا رساله</h3>
              <p className="c-gray">يسعدنا الرد على أي أسئلة لديك أو تزويدك بتقدير. فقط أرسل لنا رسالة في النموذج أدناه مع أي أسئلة قد تكون لديك.</p>
              <Form>
                <Form.Group controlId="exampleForm.ControlInput1" className="mb-3">
                  <Form.Label>البريد الالكتروني *</Form.Label>
                  <Form.Control type="email" placeholder="من فضلك ادخل بريدك الالكتروني" />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlInput1" className="mb-3">
                  <Form.Label>الأسم *</Form.Label>
                  <Form.Control type="email" placeholder="من فضلك ادخل أسمك" />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>الموضوع *</Form.Label>
                  <Form.Control as="textarea" rows={7} placeholder="من فضلك اترك رسالتك" />
                </Form.Group>

                <button type='submit' className="btn__classic-icon mt-5">
                  <span>ارسل الأن</span>
                  <BiMessage className="icon" />
                </button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default ContactContent;
