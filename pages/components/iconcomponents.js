import Link from 'next/link';

function iconcomponents() {
    return <>
        <div className="row section-row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 section-row-col">
                <center>
                    <div className="icons">
                    <Link href={'/page/seopages'}><a className="icon-container-padding-rigth"><i className="usamaicons fa-brands fa-facebook-f icon-container-image"></i></a></Link>
                    <Link href={'/page/seopages'}><a className="icon-container-padding-rigth"><i className="usamaicons fa-brands fa-instagram icon-container-image"></i></a></Link>
                    <Link href={'/page/seopages'}><a><i className="usamaicons fa-brands fa-whatsapp icon-container-image"></i></a></Link>
                    </div>
                </center>
            </div>
        </div>
      </>
  };
  
  export default iconcomponents;