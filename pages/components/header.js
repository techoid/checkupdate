import Link from 'next/link';
import Script from "next/script";

function header() {
    return <>
        <link rel="stylesheets" href="../assets/css/menu.css" />
        <Script src="../assets/js/menu.js"/>
        <div className="desktop">
            <header className="header-first-div mobile-responsize-continer">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="header-div">
                                <div className="header-padding-left">
                                    <ul className="header-ul">
                                        <li className="header-li header-li-padding-right">
                                        <Link className="header-a faq-us-nav-menu" href={'/'}><a>Home</a></Link>
                                        </li>
                                        <li className="header-li header-li-padding-right">
                                            <Link className="header-a faq-us-nav-menu" href={'/page/aboutuspages'}><a>About Us</a></Link>
                                        </li>
                                        <li className="header-li header-li-padding-right">
                                            <div className="dropdown">
                                                <Link href="/" className="header-a dropbtn"><a style={{color: '#000000',textDecoration: 'none'}}>Our Plans <i className="fa-solid fa-angle-down"></i></a></Link>
                                                <div className="dropdown-content">
                                                    <Link className="a-first faq-us-nav-menu" href={'/page/seopages'}><a>SEO Page-1</a></Link>
                                                    <Link className="a-middle faq-us-nav-menu" href={'/page/seopages'}><a>SEO Page-2</a></Link>
                                                    <Link className="a-last faq-us-nav-menu" href={'/page/seopages'}><a>SEO Page-3</a></Link>
                                                    <Link className="a-last faq-us-nav-menu" href={'/page/contactuspages'}><a>Contact Us</a></Link>
                                                    <Link className="a-last faq-us-nav-menu" href={'/page/ourpartners'}><a>Our Partners</a></Link>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="header-li header-li-padding-right">
                                            <Link className="header-a faq-us-nav-menu" href={'/page/contactuspages'}><a>Neet Assistance?</a></Link>
                                        </li>
                                    </ul>
                                    
                                </div>
                                <div className="header-logo">
                                    <img className="header-img" src="/assets/images/img_vmealslogoori.png" alt="No-Image"/>
                                </div>
                                <div className="header-padding-right">
                                    <ul className="header-ul">
                                        <li className="header-li header-li-padding-right">
                                            <Link className="header-a faq-us-nav-menu" href={'/page/blogpages'}><a>Blog</a></Link>
                                        </li>
                                        <li className="header-li header-li-padding-right-second">
                                            <Link className="header-a faq-us-nav-menu" href={'/page/seopages'}><a>Arabic</a></Link>
                                            <span> / </span>
                                            <Link className="header-a faq-us-nav-menu" href={'/page/seopages'}><a>English</a></Link>
                                        </li>
                                        <li className="header-li">
                                            <Link href="/" className="btn btn-primary header-btn-components header-btn-components-color"><Link href={'/page/contactuspages'}><a className="btn btn-primary header-btn-components header-btn-components-color" style={{color: '#ffffff'}}>Get Started</a></Link></Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
        <div className="mobile">
            <header className="header-first-div mobile-responsize-continer">
                <div className="container-fluid mobile-responsize-continer">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 mobile-responsize-padding">
                            <nav id='cssmenu' className="mobile-responsize-continer">
                                <div className="logo"><Link href={'/page/seopages'}><a><img className="image-heading-view" src="/assets/images/img_vmealslogoori.png" alt="No-Image" /></a></Link></div>
                                <div id="head-mobile" className="mobile-responsize-head-mobile"></div>
                                <div className="button"></div>
                                <ul className="mobile-responsize-display-none">
                                    <li class='active mobile-responsize-active mobile-responsize-atag'><Link className="heading-font-family mobile-responsize-atag" href='/'><a>Home</a></Link></li>
                                    <li><Link className="heading-font-family" href='#'><a>About Us</a></Link></li>
                                    <li><Link className="heading-font-family" href='#'><a>Our Plans</a></Link>
                                        <ul>
                                            <li><Link className="heading-font-family" href='/page/seopages'><a>SEO Page-1</a></Link></li>
                                            <li><Link className="heading-font-family" href='/page/seopages'><a>SEO Page-2</a></Link></li>
                                            <li><Link className="heading-font-family" href='/page/seopages'><a>SEO Page-3</a></Link></li>
                                            <li><Link className="heading-font-family" href='/page/contactuspages'><a>Contact Us</a></Link></li>
                                            <li><Link className="heading-font-family" href='/page/ourpartners'><a>Our Partners1</a></Link></li>
                                        </ul>
                                    </li>
                                    <li><Link href='#'><a>Neet Assistance?</a></Link></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </div>
      </>
  };
  
  export default header;