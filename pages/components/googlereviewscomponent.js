import Link from 'next/link';
import React from "react";
var $ = require("jquery");
if (typeof window !== "undefined") {
   window.$ = window.jQuery = require("jquery");
}
import dynamic from "next/dynamic";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const OwlCarousel = dynamic(import("react-owl-carousel"), {
ssr: false,
});

const Resposnive = {
    0:{
        items:1,
        margin: 5,
    },
    600:{
        items:1,
        margin: 10,
    },
    768:{
        items:2,
        margin: 10,
    },
    820:{
        items:2,
        margin: 10,
    },
    992:{
        items:4,
        margin: 20,
    },
    1200:{
        items:4,
        margin: 20,
    },
}

function googlereviewscomponent() {
    return <>
        <div className="row home-google-reviews-api-border-row">
            <div className="home-background-color home-google-reviews-api-border-width">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <h1 className="home-review-star-heading"><span className="home-review-star-one">G</span><span className="home-review-star-two">o</span><span className="home-review-star-three">o</span><span className="home-review-star-four">g</span><span className="home-review-star-five">l</span><span className="home-review-star-six">e</span><span className="home-review-star-heading-small">Rating</span></h1>
                        <div>
                            <span className="home-review-star-number">4.9</span>
                            <i className="fa-solid fa-star home-review-star-color"></i>
                            <i className="fa-solid fa-star home-review-star-color"></i>
                            <i className="fa-solid fa-star home-review-star-color"></i>
                            <i className="fa-solid fa-star home-review-star-color"></i>
                            <i className="fa-regular fa-star home-review-star-border"></i>
                            <span className="home-review-star-reviews">170 Reviews</span>
                        </div>
                        
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 home-review-row">
                        <Link href={'/page/seopages'}><a className="btn btn-primary home-btn-components home-btn-components-color">Write a Review</a></Link>
                    </div>
                </div>
            </div>
            <div className="home-background-color-two home-google-reviews-api-border-width">
                <div className="row">
                    <OwlCarousel className='owl-theme' loop={true} nav={false} dots={true} autoplay={true} autoplayTimeout={5000} autoplaySpeed={5000} autoplayHoverPause={false}
                    responsive={Resposnive}>
                        <div className="item">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 home-google-resize-reviews">
                                <div className="home-google-reviews-api-border-postion">
                                    <div>
                                        <i className="fa-solid fa-star home-review-star-color"></i>
                                        <i className="fa-solid fa-star home-review-star-color"></i>
                                        <i className="fa-solid fa-star home-review-star-color"></i>
                                        <i className="fa-solid fa-star home-review-star-color"></i>
                                        <i className="fa-solid fa-star home-review-star-color"></i>
                                    </div>
                                    <p className="home-section-two-heading-two">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <p className="home-section-two-heading-four"><Link href={'/page/seopages'}><a className="home-section-two-atag">Read More</a></Link></p>
                                    <div className="home-google-reviews-api-div">
                                        <div className="home-google-reviews-api-div-width">
                                            <img className="home-google-reviews-api-width" src="/assets/images/google.png" alt="No-Image"/>
                                        </div>
                                        <div>
                                            <h1 className="home-google-reviews-api-heading">Posted On</h1>
                                            <p className="home-google-reviews-api-heading-width">Google</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="home-google-reviews-api-div home-google-reviews-api-border-padding">
                                    <div className="home-google-reviews-api-div-width">
                                        <img className="home-google-reviews-api-width home-google-reviews-api-border-image " src="/assets/images/person.png" alt="No-Image"/>
                                    </div>
                                    <div>
                                        <h1 className="home-google-reviews-api-heading">Posted On</h1>
                                        <p className="home-google-reviews-api-heading-width">Google</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 home-google-resize-reviews">
                                <div className="home-google-reviews-api-border-postion">
                                    <div>
                                        <i className="fa-solid fa-star home-review-star-color"></i>
                                        <i className="fa-solid fa-star home-review-star-color"></i>
                                        <i className="fa-solid fa-star home-review-star-color"></i>
                                        <i className="fa-solid fa-star home-review-star-color"></i>
                                        <i className="fa-solid fa-star home-review-star-color"></i>
                                    </div>
                                    <p className="home-section-two-heading-two">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <p className="home-section-two-heading-four"><Link href={'/page/seopages'}><a className="home-section-two-atag">Read More</a></Link></p>
                                    <div className="home-google-reviews-api-div">
                                        <div className="home-google-reviews-api-div-width">
                                            <img className="home-google-reviews-api-width" src="/assets/images/google.png" alt="No-Image"/>
                                        </div>
                                        <div>
                                            <h1 className="home-google-reviews-api-heading">Posted On</h1>
                                            <p className="home-google-reviews-api-heading-width">Google</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="home-google-reviews-api-div home-google-reviews-api-border-padding">
                                    <div className="home-google-reviews-api-div-width">
                                        <img className="home-google-reviews-api-width home-google-reviews-api-border-image " src="/assets/images/person.png" alt="No-Image"/>
                                    </div>
                                    <div>
                                        <h1 className="home-google-reviews-api-heading">Posted On</h1>
                                        <p className="home-google-reviews-api-heading-width">Google</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 home-google-resize-reviews">
                                <div className="home-google-reviews-api-border-postion">
                                    <div>
                                        <i className="fa-solid fa-star home-review-star-color"></i>
                                        <i className="fa-solid fa-star home-review-star-color"></i>
                                        <i className="fa-solid fa-star home-review-star-color"></i>
                                        <i className="fa-solid fa-star home-review-star-color"></i>
                                        <i className="fa-solid fa-star home-review-star-color"></i>
                                    </div>
                                    <p className="home-section-two-heading-two">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <p className="home-section-two-heading-four"><Link href={'/page/seopages'}><a className="home-section-two-atag">Read More</a></Link></p>
                                    <div className="home-google-reviews-api-div">
                                        <div className="home-google-reviews-api-div-width">
                                            <img className="home-google-reviews-api-width" src="/assets/images/google.png" alt="No-Image"/>
                                        </div>
                                        <div>
                                            <h1 className="home-google-reviews-api-heading">Posted On</h1>
                                            <p className="home-google-reviews-api-heading-width">Google</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="home-google-reviews-api-div home-google-reviews-api-border-padding">
                                    <div className="home-google-reviews-api-div-width">
                                        <img className="home-google-reviews-api-width home-google-reviews-api-border-image " src="/assets/images/person.png" alt="No-Image"/>
                                    </div>
                                    <div>
                                        <h1 className="home-google-reviews-api-heading">Posted On</h1>
                                        <p className="home-google-reviews-api-heading-width">Google</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 home-google-resize-reviews">
                                <div className="home-google-reviews-api-border-postion">
                                    <div>
                                        <i className="fa-solid fa-star home-review-star-color"></i>
                                        <i className="fa-solid fa-star home-review-star-color"></i>
                                        <i className="fa-solid fa-star home-review-star-color"></i>
                                        <i className="fa-solid fa-star home-review-star-color"></i>
                                        <i className="fa-solid fa-star home-review-star-color"></i>
                                    </div>
                                    <p className="home-section-two-heading-two">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <p className="home-section-two-heading-four"><Link href={'/page/seopages'}><a className="home-section-two-atag">Read More</a></Link></p>
                                    <div className="home-google-reviews-api-div">
                                        <div className="home-google-reviews-api-div-width">
                                            <img className="home-google-reviews-api-width" src="/assets/images/google.png" alt="No-Image"/>
                                        </div>
                                        <div>
                                            <h1 className="home-google-reviews-api-heading">Posted On</h1>
                                            <p className="home-google-reviews-api-heading-width">Google</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="home-google-reviews-api-div home-google-reviews-api-border-padding">
                                    <div className="home-google-reviews-api-div-width">
                                        <img className="home-google-reviews-api-width home-google-reviews-api-border-image " src="/assets/images/person.png" alt="No-Image"/>
                                    </div>
                                    <div>
                                        <h1 className="home-google-reviews-api-heading">Posted On</h1>
                                        <p className="home-google-reviews-api-heading-width">Google</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 home-google-resize-reviews">
                                <div className="home-google-reviews-api-border-postion">
                                    <div>
                                        <i className="fa-solid fa-star home-review-star-color"></i>
                                        <i className="fa-solid fa-star home-review-star-color"></i>
                                        <i className="fa-solid fa-star home-review-star-color"></i>
                                        <i className="fa-solid fa-star home-review-star-color"></i>
                                        <i className="fa-solid fa-star home-review-star-color"></i>
                                    </div>
                                    <p className="home-section-two-heading-two">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <p className="home-section-two-heading-four"><Link href={'/page/seopages'}><a className="home-section-two-atag">Read More</a></Link></p>
                                    <div className="home-google-reviews-api-div">
                                        <div className="home-google-reviews-api-div-width">
                                            <img className="home-google-reviews-api-width" src="/assets/images/google.png" alt="No-Image"/>
                                        </div>
                                        <div>
                                            <h1 className="home-google-reviews-api-heading">Posted On</h1>
                                            <p className="home-google-reviews-api-heading-width">Google</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="home-google-reviews-api-div home-google-reviews-api-border-padding">
                                    <div className="home-google-reviews-api-div-width">
                                        <img className="home-google-reviews-api-width home-google-reviews-api-border-image " src="/assets/images/person.png" alt="No-Image"/>
                                    </div>
                                    <div>
                                        <h1 className="home-google-reviews-api-heading">Posted On</h1>
                                        <p className="home-google-reviews-api-heading-width">Google</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 home-google-resize-reviews">
                                <div className="home-google-reviews-api-border-postion">
                                    <div>
                                        <i className="fa-solid fa-star home-review-star-color"></i>
                                        <i className="fa-solid fa-star home-review-star-color"></i>
                                        <i className="fa-solid fa-star home-review-star-color"></i>
                                        <i className="fa-solid fa-star home-review-star-color"></i>
                                        <i className="fa-solid fa-star home-review-star-color"></i>
                                    </div>
                                    <p className="home-section-two-heading-two">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <p className="home-section-two-heading-four"><Link href={'/page/seopages'}><a className="home-section-two-atag">Read More</a></Link></p>
                                    <div className="home-google-reviews-api-div">
                                        <div className="home-google-reviews-api-div-width">
                                            <img className="home-google-reviews-api-width" src="/assets/images/google.png" alt="No-Image"/>
                                        </div>
                                        <div>
                                            <h1 className="home-google-reviews-api-heading">Posted On</h1>
                                            <p className="home-google-reviews-api-heading-width">Google</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="home-google-reviews-api-div home-google-reviews-api-border-padding">
                                    <div className="home-google-reviews-api-div-width">
                                        <img className="home-google-reviews-api-width home-google-reviews-api-border-image" src="/assets/images/person.png" alt="No-Image"/>
                                    </div>
                                    <div>
                                        <h1 className="home-google-reviews-api-heading">Posted On</h1>
                                        <p className="home-google-reviews-api-heading-width">Google</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 home-google-resize-reviews">
                                <div className="home-google-reviews-api-border-postion">
                                    <div>
                                        <i className="fa-solid fa-star home-review-star-color"></i>
                                        <i className="fa-solid fa-star home-review-star-color"></i>
                                        <i className="fa-solid fa-star home-review-star-color"></i>
                                        <i className="fa-solid fa-star home-review-star-color"></i>
                                        <i className="fa-solid fa-star home-review-star-color"></i>
                                    </div>
                                    <p className="home-section-two-heading-two">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <p className="home-section-two-heading-four"><Link href={'/page/seopages'}><a className="home-section-two-atag">Read More</a></Link></p>
                                    <div className="home-google-reviews-api-div">
                                        <div className="home-google-reviews-api-div-width">
                                            <img className="home-google-reviews-api-width" src="/assets/images/google.png" alt="No-Image"/>
                                        </div>
                                        <div>
                                            <h1 className="home-google-reviews-api-heading">Posted On</h1>
                                            <p className="home-google-reviews-api-heading-width">Google</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="home-google-reviews-api-div home-google-reviews-api-border-padding">
                                    <div className="home-google-reviews-api-div-width">
                                        <img className="home-google-reviews-api-width home-google-reviews-api-border-image " src="/assets/images/person.png" alt="No-Image"/>
                                    </div>
                                    <div>
                                        <h1 className="home-google-reviews-api-heading">Posted On</h1>
                                        <p className="home-google-reviews-api-heading-width">Google</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 home-google-resize-reviews">
                                <div className="home-google-reviews-api-border-postion">
                                    <div>
                                        <i className="fa-solid fa-star home-review-star-color"></i>
                                        <i className="fa-solid fa-star home-review-star-color"></i>
                                        <i className="fa-solid fa-star home-review-star-color"></i>
                                        <i className="fa-solid fa-star home-review-star-color"></i>
                                        <i className="fa-solid fa-star home-review-star-color"></i>
                                    </div>
                                    <p className="home-section-two-heading-two">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <p className="home-section-two-heading-four"><Link href={'/page/seopages'}><a className="home-section-two-atag">Read More</a></Link></p>
                                    <div className="home-google-reviews-api-div">
                                        <div className="home-google-reviews-api-div-width">
                                            <img className="home-google-reviews-api-width" src="/assets/images/google.png" alt="No-Image"/>
                                        </div>
                                        <div>
                                            <h1 className="home-google-reviews-api-heading">Posted On</h1>
                                            <p className="home-google-reviews-api-heading-width">Google</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="home-google-reviews-api-div home-google-reviews-api-border-padding">
                                    <div className="home-google-reviews-api-div-width">
                                        <img className="home-google-reviews-api-width home-google-reviews-api-border-image " src="/assets/images/person.png" alt="No-Image"/>
                                    </div>
                                    <div>
                                        <h1 className="home-google-reviews-api-heading">Posted On</h1>
                                        <p className="home-google-reviews-api-heading-width">Google</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel> 
                </div>
            </div>
        </div>
      </>
};
  
  export default googlereviewscomponent;