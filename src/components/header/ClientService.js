import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { AiOutlineMail, AiOutlinePhone, AiOutlineRollback } from 'react-icons/ai';
import { BsBag, BsQuestionCircle } from 'react-icons/bs';
import { TbMoneybag } from 'react-icons/tb';
import { TfiClose } from 'react-icons/tfi';
import { SlPaypal } from 'react-icons/sl';
import { Link } from 'react-router-dom';
import { BiTimeFive } from 'react-icons/bi';

function ClientService() {
  const [open, setOpen] = useState(false);
  const ToggleClientService = (e) => setOpen(prev => !prev);

  return (
    <li data-title-down="خدمه الزباين">
      <a onClick={ToggleClientService}>
        <BsQuestionCircle className="icon" />
      </a>
      <Modal show={open} onHide={ToggleClientService} className="navbar-modal navbar-client-service" animation={true}>
        <Modal.Header>
          <Modal.Title>
            <TfiClose onClick={ToggleClientService} className="icon" />
            <h5 className="mb-0">خدمه الزباين</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-container">
            <p className="mb-3 c-gray">
              لديك سؤال؟ قد تجد إجابتة في{' '}
              <Link to="/faq" className="link italic weight-600">
                الأسئلة الشائعة
              </Link>{' '}
              الخاصة بنا ويمكنك أيضًا الاتصال بنا
            </p>
            <section>
              <div className="sec-title mb-3 weight-600">
                <span>خدمه العملاء</span>
              </div>
              <ul className="list-unstyled c-gray d-flex flex-column r-gap-10">
                <li>
                  <AiOutlinePhone className="icon ml-3 c-black" />
                  اتصل بنا: 800-123-4567
                </li>
                <li className="d-flex ">
                  <BiTimeFive className="icon ml-3 c-black" />
                  <p className="m-0">
                    الأثنين الي الجمعه 9:00 صباحا - 6:00 مساءا
                    <br />
                    السبت 9:00 صباحا - 4:00 مساءا
                    <br />
                    الأحد: 9 مساءا - 2:00 مساءا
                    <br />
                  </p>
                </li>
                <li>
                  <AiOutlineMail className="icon ml-3 c-black" />
                  <a className="link" href="mailto:mail@mail.com">
                    ارسل رساله الان
                  </a>
                </li>
              </ul>
            </section>
            <div className="my-4 spliter light-2"></div>
            <section>
              <div className="sec-title mb-3 weight-600">
                <span>الشحن</span>
              </div>
              <ul className="list-unstyled c-gray d-flex flex-column r-gap-10">
                <li className="d-flex ">
                  <BsBag className="icon ml-3 c-black" />
                  <p className="m-0">توصيل مجاني لجميع الطلبات التي تبلغ قيمتها 200 جنيها أو أكثر من العناصر المؤهلة عبر أي فئة منتج مؤهلة.</p>
                </li>
              </ul>
            </section>
            <div className="my-4 spliter light-2"></div>
            <section>
              <div className="sec-title mb-3 weight-600">
                <span>المدفوعات</span>
              </div>
              <ul className="list-unstyled c-gray d-flex flex-column r-gap-10">
                <li className="d-flex ">
                  <TbMoneybag className="icon ml-3 c-black" />
                  <p className="m-0">بطاقة الائتمان: Visa و MasterCard و Maestro و American Express. سيتم خصم المبلغ الإجمالي من بطاقتك عند شحن الطلب.</p>
                </li>
                <li className="d-flex ">
                  <SlPaypal className="icon ml-3 c-black" />
                  <p className="m-0">بايبال: تسوق بسهولة عبر الإنترنت دون الحاجة إلى إدخال تفاصيل بطاقتك الائتمانية على موقع الويب.</p>
                </li>
              </ul>
            </section>
            <div className="my-4 spliter light-2"></div>
            <section>
              <div className="sec-title mb-3 weight-600">
                <span>سياسه العائدات</span>
              </div>
              <ul className="list-unstyled c-gray d-flex flex-column r-gap-10">
                <li className="d-flex ">
                  <AiOutlineRollback className="icon ml-3 c-black" />
                  <p className="m-0">يمكنك إرجاع أي عنصر تم شراؤه من متجرنا في غضون 20 يومًا من تاريخ التسليم.</p>
                </li>
              </ul>
            </section>
          </div>
        </Modal.Body>
      </Modal>
    </li>
  );
}

export default ClientService;
