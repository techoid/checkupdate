import Link from 'next/link';

function footertop() {
    return <>
        <footer className="footer-top-bottom">
            <div className="container-fluid">
                <div className="row footericon-row-column" >
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <ul className="footer-footericon-ul">
                            <li className="footericon-margin-left">
                                <Link className="footericon-container-padding-rigth" href={'/page/seopages'}><a ><i className="fa-brands fa-whatsapp footericon-container-image"></i></a></Link>
                            </li>
                            <li>
                                <Link href={'/page/seopages'}><a className="footericon-container-padding-rigth ulmartop"><i className="fa-solid fa-angle-up footericon-container-image ulmartop"></i></a></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
      </>
  };
  
  export default footertop;