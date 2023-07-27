import FooterService from "./FooterService"
import FooterReference from "./FooterReference"
import FooterCopyRight from "./FooterCopyRight"

function Footer() {

  return (
    <footer className="content">
      <FooterService />
      <div className="spliter light"></div>
      <FooterReference />
      <div className="spliter light"></div>
      <FooterCopyRight />
    </footer>
  );
}

export default Footer;
