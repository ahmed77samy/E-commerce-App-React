import { Container } from 'react-bootstrap';

function AboutContent() {
  return (
    <div className="content main-padding">
      <div className="about-content">
        <Container>
          <h3 className="text-uppercase text-center mb-5">ماذا عن متجرنا</h3>
          <div>
            <img src="/img/about.jpg" alt="about-us" />
            <p className="my-5">
              تساعد صفحة "من نحن" الرائعة في بناء الثقة بينك وبين عملائك. كلما زاد المحتوى الذي تقدمه عنك وعن عملك <br /> زاد ثقة الناس عند الشراء من متجرك.
            </p>
            <img src="/img/about.png" alt="about-us" width={200} />
          </div>
        </Container>
      </div>
    </div>
  );
}

export default AboutContent;
