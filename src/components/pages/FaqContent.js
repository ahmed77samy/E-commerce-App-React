import { useRef, useState } from 'react';
import { Container } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';

function FaqContent() {
  const [showF, setShowF] = useState(true);
  const [showS, setShowS] = useState(true);
  const [showTH, setShowTH] = useState(true);
  const answerF = useRef(null);
  const answerS = useRef(null);
  const answerTH = useRef(null);

  return (
    <div className="content main-padding">
      <div className="faq-content">
        <Container>
          <h3 className="text-uppercase text-center mb-5">خدمه العملاء</h3>
          <div className="pages-container">
            <p className="mb-5 c-gray">هذا القسم يناقش اغلب الاسئله الشائعه لدي الزوار لمساعدتك في ايجاد الاجوبه</p>
            <section>
              <div className="ask mb-3 d-flex align-items-center justify-content-between" onClick={() => setShowF(prev => !prev)}>
                <h6 className="m-0">ما هي مواعيد الشحن والتكاليف؟</h6>
                <span className={!showF ? 'open' : ''}>+</span>
              </div>
              <CSSTransition in={showF} nodeRef={answerF} timeout={200} classNames="slideup" unmountOnExit>
                <ul className="mr-4 answer" ref={answerF}>
                  <li>شحن بري مجاني خلال 1 إلى 7 أيام عمل</li>
                  <li>تتوفر المجموعة داخل المتجر في غضون 1 إلى 7 أيام عمل</li>
                  <li>تتوفر أيضًا خيارات التسليم في اليوم التالي والتوصيل السريع</li>
                  <li>يتم تسليم المشتريات في صندوق برتقالي مربوط بشريط Bolduc ، باستثناء بعض العناصر</li>
                  <li>راجع الأسئلة الشائعة الخاصة بالتسليم للحصول على تفاصيل حول طرق الشحن والتكاليف ومواعيد التسليم</li>
                </ul>
              </CSSTransition>
            </section>
            <div className="my-4 spliter light-2"></div>
            <section>
              <div className="ask mb-3 d-flex align-items-center justify-content-between" onClick={() => setShowS(prev => !prev)}>
                <h6 className="m-0">ما هي طرق الدفع التي يمكنني استخدامها؟</h6>
                <span className={!showS ? 'open' : ''}>+</span>
              </div>
              <CSSTransition in={showS} nodeRef={answerS} timeout={200} classNames="slideup" unmountOnExit>
                <ul className="mr-4 answer" ref={answerS}>
                  <li>بطاقة الائتمان: Visa و MasterCard و Discover و American Express و JCB و Visa Electron. سيتم خصم المبلغ الإجمالي من بطاقتك عند شحن الطلب.</li>
                  <li>تتميز Shella بخيار Fast Checkout ، مما يسمح لك بحفظ تفاصيل بطاقتك الائتمانية بأمان حتى لا تضطر إلى إعادة إدخالها لعمليات الشراء المستقبلية.</li>
                  <li>
                    PayPal: تسوق بسهولة عبر الإنترنت دون الحاجة إلى إدخال تفاصيل بطاقتك الائتمانية على موقع الويب. سيتم تحميل حسابك بمجرد اكتمال الطلب. للتسجيل للحصول على حساب PayPal ، قم بزيارة
                    الموقع الإلكتروني{' '}
                    <a href="https://www.paypal.com/uk/home" className="link weight-600">
                      بايبال
                    </a>
                  </li>
                </ul>
              </CSSTransition>
            </section>
            <div className="my-4 spliter light-2"></div>
            <section>
              <div className="ask mb-3 d-flex align-items-center justify-content-between" onClick={() => setShowTH(prev => !prev)}>
                <h6 className="m-0">ما هي سياسة الاستبدال والإرجاع والاسترداد الخاصة بك؟</h6>
                <span className={!showTH ? 'open' : ''}>+</span>
              </div>
              <CSSTransition in={showTH} nodeRef={answerTH} timeout={200} classNames="slideup" unmountOnExit>
                <p className="mb-0 answer" ref={answerTH}>
                  العناصر التي يتم إرجاعها في غضون 14 يومًا من تاريخ الشحن الأصلي بنفس الحالة الجديدة ستكون مؤهلة لاسترداد الأموال بالكامل أو رصيد المتجر. سيتم رد المبالغ المستردة إلى طريقة الدفع
                  الأصلية المستخدمة للشراء. العميل مسؤول عن رسوم الشحن عند إجراء المرتجعات ورسوم الشحن / المناولة للشراء الأصلي غير قابلة للاسترداد.
                </p>
              </CSSTransition>
            </section>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default FaqContent;
