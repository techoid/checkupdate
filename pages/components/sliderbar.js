import Link from 'next/link';

function sliderbar() {
    return <>
        <div className="row home-components-margin-left-check-row-col home-components-margin-left-check-row-col-flex-direction martop25 newaddwidth">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 home-components-padding-check-row-col home-components-padding-check-row-col-display-flex">
                <div className="home-components-check-row-col-margin-left">
                    <h1 className="home-heading-silder">HEALTHY BODY | HEALTHY MIND</h1>
                    <p  className="home-paragrahic-silder">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <Link href={'/page/seopages'}><a className="btn btn-primary home-btn-components home-btn-components-color">View Plans</a></Link><Link href={'/page/seopages'}><a className="btn btn-primary home-btn-components home-btn-components-color-two">Learn More</a></Link>
                </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 home-components-padding-check-row-col">
                <div className="home-components-background-image-three">
                    {/* <div className="home-components-background-image-two">
                        <div className="home-components-background-image-three">
                        </div>
                    </div> */}
                </div>
                {/* <div  className="home-components-background-image-three" >
                <img src="/assets/images/homebg.png" alt="" />
                </div> */}
            </div>
        </div>
        <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 home-components-image-resposize-size">
                <img src="/assets/images/img_checkmark.svg" alt="No-Image" />
            </div>
        </div>
    </>
};

export default sliderbar;