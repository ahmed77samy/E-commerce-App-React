import { Container } from 'react-bootstrap';

function PrivacyPolicyContent() {
  return (
    <div className="content main-padding">
      <div className="privacy-content">
        <Container>
          <h3 className="text-uppercase text-center mb-5">سياسه الخصوصيه</h3>

          <div className="pages-container">
            <p className="mb-5 c-gray">
              إذا كنت بحاجة إلى معلومات أو مساعدة ، يرجى الاتصال بنا عن طريق{' '}
              <a href="mailto:mail@mail.com" className="link weight-600">
                البريد الالكتروني
              </a>{' '}
              و عبر الهاتف وسنسعد بمساعدتك.
            </p>
            <section>
              <div className="sec-title mb-3">
                <span>مرحبًا بك في سياسة الخصوصية الخاصة بمتجرنا</span>
              </div>
              <ul className="mr-4 c-gray">
                <li>شحن بري مجاني خلال 1 إلى 7 أيام عمل</li>
                <li>تتوفر المجموعة داخل المتجر في غضون 1 إلى 7 أيام عمل</li>
                <li>تتوفر أيضًا خيارات التسليم في اليوم التالي والتوصيل السريع</li>
                <li>يتم تسليم المشتريات في صندوق برتقالي مربوط بشريط Bolduc ، باستثناء بعض العناصر</li>
                <li>راجع الأسئلة الشائعة الخاصة بالتسليم للحصول على تفاصيل حول طرق الشحن والتكاليف ومواعيد التسليم</li>
              </ul>
            </section>
            <div className="my-4 spliter light-2"></div>
            <section>
              <div className="sec-title mb-3">
                <span>نوع المعلومات الشخصية التي نجمعها</span>
              </div>
              <ul className="mr-4 c-gray">
                <li>بطاقة الائتمان: Visa و MasterCard و Discover و American Express و JCB و Visa Electron. سيتم خصم المبلغ الإجمالي من بطاقتك عند شحن الطلب.</li>
                <li>تتميز Shella بخيار Fast Checkout ، مما يسمح لك بحفظ تفاصيل بطاقتك الائتمانية بأمان حتى لا تضطر إلى إعادة إدخالها لعمليات الشراء المستقبلية.</li>
                <li>
                  PayPal: تسوق بسهولة عبر الإنترنت دون الحاجة إلى إدخال تفاصيل بطاقتك الائتمانية على موقع الويب. سيتم تحميل حسابك بمجرد اكتمال الطلب. للتسجيل للحصول على حساب PayPal ، قم بزيارة الموقع
                  الإلكتروني{' '}
                  <a href="https://www.paypal.com/uk/home" className="link weight-600">
                    بايبال
                  </a>
                </li>
              </ul>
            </section>
            <div className="my-4 spliter light-2"></div>
            <section>
              <div className="sec-title mb-3">
                <span>كيف نجمع المعلومات الشخصية</span>
              </div>
              <p className="c-gray m-0">
                العناصر التي يتم إرجاعها في غضون 14 يومًا من تاريخ الشحن الأصلي بنفس الحالة الجديدة ستكون مؤهلة لاسترداد الأموال بالكامل أو رصيد المتجر. سيتم رد المبالغ المستردة إلى طريقة الدفع
                الأصلية المستخدمة للشراء. العميل مسؤول عن رسوم الشحن عند إجراء المرتجعات ورسوم الشحن / المناولة للشراء الأصلي غير قابلة للاسترداد.
              </p>
            </section>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default PrivacyPolicyContent;
