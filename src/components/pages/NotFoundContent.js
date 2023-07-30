import { Container } from 'react-bootstrap';
import { AiOutlineHome } from 'react-icons/ai';
import { BiMessage } from 'react-icons/bi';
import { Link } from 'react-router-dom';

function NotFoundContent() {
  return (
    <div className="content main-padding">
      <div className="not-found-content">
        <Container>
          <div className="pages-container">
            <div className="d-flex flex-column r-gap-30">
              <h2 className="h1 m-0">
                خطا 404
                <br />
                غير موجود
              </h2>
              <div>
                <p className="m-0">ربما أخطأت في كتابة عنوان URL.</p>
                <p className="m-0">أو تم حذف الصفحة.</p>
                <p className="m-0">في الواقع ، لا يوجد شيء يمكن رؤيته هنا ...</p>
                <p className="m-0">انقر على الروابط أدناه للقيام بشيء ما ، شكرًا!</p>
              </div>
              <div className='d-flex flex-wrap gap-20'>
                <Link className="btn__classic-icon">
                  <span>الصفحة الرئيسية</span>
                  <AiOutlineHome className="icon" />
                </Link>
                <Link className="btn__classic-icon">
                  <span>ارسال رساله</span>
                  <BiMessage className="icon" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default NotFoundContent;
